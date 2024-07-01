import { app, BrowserWindow, ipcMain } from "electron";
import * as path from "path";
import formatData from "./utils/formatData";
import formatToCsv from "./utils/formatToCsv";
import searchAyoub from "./adapters/searchAyoub";
import searchMojitech from "./adapters/searchMojitech";
import searchPcAndParts from "./adapters/searchPcAndParts";
import stringToNumber from "./utils/stringToNumber";
import { Worker } from "worker_threads";

let mainWindow;

const fetchData = async (shortDescription = "", SKU, taxxed, searchMode) => {
  const ayoubDataCell = await searchAyoub(shortDescription, SKU, searchMode);
  const mojitechDataCell = await searchMojitech(
    shortDescription,
    SKU,
    searchMode
  );
  const pcandpartsDataCell = await searchPcAndParts(
    shortDescription,
    SKU,
    searchMode
  );

  console.log(SKU, taxxed);
  return {
    SKU: SKU,
    shortDescription: shortDescription,
    prices: {
      ayoub: stringToNumber(ayoubDataCell?.sale_price || ayoubDataCell?.price),
      mojitech: stringToNumber(mojitechDataCell?.price),
      pcandparts: stringToNumber(pcandpartsDataCell?.price),
    },
    taxes: {
      pcandparts: taxxed,
      mojitechHas: (mojitechDataCell?.value || "")
        ?.toLowerCase()
        ?.includes("tax")
        ? false
        : true,
    },
  };
};

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "../", "preload", "preload.js"),
    },
  });

  mainWindow.loadURL("http://localhost:5173");
  // mainWindow.loadFile("./src/renderer/dist/index.html");
  mainWindow.on("closed", () => (mainWindow = null));

  ipcMain.on("format", (e, data) => {
    if (data) {
      const formattedData = formatData(data);
      e.reply("format", formattedData);
    }
  });

  let cancel = false;

  ipcMain.on("compare", async (e, pcandpartsData, options) => {
    console.log("COMPARE");
    if (pcandpartsData && !cancel) {
      const items = [];
      console.log(options);
      for (const pcandpartsCellIndex in pcandpartsData) {
        const { SKU, shortDescription, taxxed } =
          pcandpartsData.at(pcandpartsCellIndex);
        const info = await fetchData(shortDescription, SKU, taxxed);
        items.push(info);
        e.reply("progress", parseInt(pcandpartsCellIndex) + 1);
      }
      const csvFormatted = formatToCsv(
        items,
        options.tax + 1,
        options.lowerType
      );
      console.log(csvFormatted);
      e.reply("compare", csvFormatted);
    }
  });

  ipcMain.on("cancel", (e, v) => {
    console.log("CANCEL");
    if (v) {
      cancel = true;
    }
  });

  ipcMain.on("quick-search", async (e, info, searchMode) => {
    if (info) {
      const data = await fetchData(info, info, false, searchMode);
      e.reply("quick-search", data);
    }
  });

  ipcMain.on("start", (e, v) => {
    console.log("START");
    if (v) {
      cancel = false;
    }
  });

  ipcMain.on("end", () => {
    console.log(1);
    app.relaunch();
  });
}

// TODO: estimated time to finish
// data formatting, multi-threading, proxies
app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
