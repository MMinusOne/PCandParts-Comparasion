"use strict";
const electron = require("electron");
const path = require("path");
require("worker_threads");
function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const path__namespace = /* @__PURE__ */ _interopNamespaceDefault(path);
const formatKeys = (dataCell) => {
  const keys = {};
  Object.keys(dataCell).forEach((key) => {
    const value = dataCell[key];
    const formattedKey = key.toLowerCase().split(" ").filter((e) => e.length).join("-").toLowerCase();
    keys[formattedKey] = value;
  });
  return keys;
};
function formatData(jsonData) {
  return jsonData.map((cell) => {
    const formattedCell = formatKeys(cell);
    const category = formattedCell.cat1;
    const taxxed = formattedCell["tax-15"] === "taxable" ? true : false;
    const price = formattedCell.price;
    const shortDescription = formattedCell["short-description"];
    const SKU = formattedCell["model-#"];
    if (category && price) {
      return {
        category,
        taxxed,
        price,
        shortDescription,
        SKU
      };
    }
  }).filter((e) => e);
}
function formatToCsv(data, tax, lowerType) {
  return data.map((cell) => {
    const pcandpartsPrice = parseInt(cell.prices.pcandparts) * (cell.taxes.pcandpartsHas ? 1 : tax);
    const mojitechPrice = parseInt(cell.prices.mojitech);
    const ayoubPrice = parseInt(cell.prices.ayoub);
    const pcandpartsMojitechDiff = pcandpartsPrice - mojitechPrice * (cell.taxes.mojitechHas ? 1 : tax);
    const pcandpartsAyoubDiff = pcandpartsPrice - cell.prices.ayoub * tax;
    const condition = lowerType === 0 ? pcandpartsAyoubDiff > 0 || pcandpartsMojitechDiff > 0 : pcandpartsAyoubDiff < 0 || pcandpartsMojitechDiff < 0;
    if (condition) {
      const data2 = {
        SKU: cell.SKU,
        "Description": cell.shortDescription,
        "PC and Parts Price": pcandpartsPrice || "",
        "Mojitech Price": mojitechPrice || "",
        "Ayoub Computers Price": ayoubPrice * tax || "",
        "PCAndParts/Mojitech Price difference": pcandpartsMojitechDiff || "",
        "PCandParts/AyoubComputers Price difference": pcandpartsAyoubDiff || ""
      };
      return data2;
    }
  }).filter((e) => e);
}
require("jaro-winkler");
async function searchAyoub(shortDesc, SKU, searchMode) {
  const data = await fetch(
    "https://filter.freshclick.co.uk/Category_filter/ajax_search_products",
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        priority: "u=1, i",
        "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      referrer: "https://ayoubcomputers.com/",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `site=sp9oc95xrw&search_keyword=${searchMode === "sku" ? SKU : shortDesc.toLowerCase()}&customer_group=13&currency=&freshClickSearchCategory=0&channel_id=1`,
      method: "POST",
      mode: "cors",
      credentials: "omit"
    }
  ).then((r) => r.json());
  const firstProduct = data?.products?.length === 1 ? data.products.at(0) : data?.products.filter((e) => e?.value?.toLowerCase() === shortDesc.toLowerCase())?.at(-1);
  if (firstProduct) {
    if (firstProduct.is_price_hidden === 1) {
      firstProduct.price = void 0;
      firstProduct.sale_price = void 0;
    }
    return firstProduct;
  } else {
    return void 0;
  }
}
const { JSDOM: JSDOM$1 } = require("jsdom");
const jaro$1 = require("jaro-winkler");
async function searchMojitech(shortDesc, SKU, searchMode = "sku") {
  const data = await fetch(
    `https://mojitech.net/wp-admin/admin-ajax.php?action=flatsome_ajax_search_products&query=${searchMode === "sku" ? SKU : shortDesc}`,
    {
      headers: {
        accept: "text/plain, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        priority: "u=1, i",
        "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        cookie: "_ga=GA1.1.1885704519.1719211478; _fbp=fb.1.1719211487680.869729358574663001; yith_wcwl_session_dd4093da74b66010792f110a4047a79c=%7B%22session_id%22%3A%221a2e0ac656d5e4b0d5ec54dae57d8822%22%2C%22session_expiration%22%3A1721886860%2C%22session_expiring%22%3A1721883260%2C%22cookie_hash%22%3A%22df0b9f9c5a26fdd6fa8991875c842d11%22%7D; _gcl_au=1.1.959728045.1719211479.1162479033.1719317086.1719317086; sbjs_migrations=1418474375998%3D1; sbjs_current_add=fd%3D2024-06-26%2009%3A05%3A26%7C%7C%7Cep%3Dhttps%3A%2F%2Fmojitech.net%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_first_add=fd%3D2024-06-26%2009%3A05%3A26%7C%7C%7Cep%3Dhttps%3A%2F%2Fmojitech.net%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_current=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; sbjs_first=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; PHPSESSID=c0685c93c11c66dea1ca08c66814b18e; sbjs_udata=vst%3D2%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F126.0.0.0%20Safari%2F537.36; sbjs_session=pgs%3D1%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fmojitech.net%2F; _ga_NYSNB7L639=GS1.1.1719394876.13.1.1719394878.58.0.1304943209; TawkConnectionTime=0; twk_uuid_55852a6f3d6a6cf375cfde80=%7B%22uuid%22%3A%221.SwtYKuKXeCHGOSZ9r99WdXFG2iJmUlTSv4DDbe7VzXImFDms2eC7pEG0lhvh3g7BBq0dKyBcfV7NOLh5uBmQS0yykODvmg556nq9A0rRYxg7fxriym8jK%22%2C%22version%22%3A3%2C%22domain%22%3A%22mojitech.net%22%2C%22ts%22%3A1719394880878%7D",
        Referer: "https://mojitech.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      body: null,
      method: "GET"
    }
  ).then((r) => r.json());
  const suggestions = data?.products?.length === 1 ? data.products.at(0) : data?.suggestions?.sort((a, b) => {
    return jaro$1(a?.value, shortDesc) - jaro$1(b?.value, shortDesc);
  });
  console.log(suggestions);
  const firstSuggestion = suggestions ? suggestions.at(-1) : void 0;
  if (firstSuggestion) {
    const jsdom = new JSDOM$1(firstSuggestion.price);
    const doc = jsdom.window.document;
    const diggedPriceElement = (doc.querySelector("strong") ? void 0 : [...doc.querySelectorAll("bdi")].at(-1)) || void 0;
    diggedPriceElement?.removeChild(diggedPriceElement.querySelector("span"));
    const diggedPrice = diggedPriceElement?.innerHTML;
    firstSuggestion.price = diggedPrice;
  }
  return firstSuggestion;
}
const { JSDOM } = require("jsdom");
const jaro = require("jaro-winkler");
async function searchPcAndParts(shortDesc, SKU) {
  const data = await fetch(
    `https://pcandparts.com/wp-admin/admin-ajax.php?action=flatsome_ajax_search_products&query=${SKU}`,
    {
      headers: {
        accept: "text/plain, */*; q=0.01",
        "accept-language": "en-US,en;q=0.9",
        priority: "u=1, i",
        "sec-ch-ua": '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-requested-with": "XMLHttpRequest",
        cookie: "_ga=GA1.1.1885704519.1719211478; _fbp=fb.1.1719211487680.869729358574663001; yith_wcwl_session_dd4093da74b66010792f110a4047a79c=%7B%22session_id%22%3A%221a2e0ac656d5e4b0d5ec54dae57d8822%22%2C%22session_expiration%22%3A1721886860%2C%22session_expiring%22%3A1721883260%2C%22cookie_hash%22%3A%22df0b9f9c5a26fdd6fa8991875c842d11%22%7D; _gcl_au=1.1.959728045.1719211479.1162479033.1719317086.1719317086; sbjs_migrations=1418474375998%3D1; sbjs_current_add=fd%3D2024-06-26%2009%3A05%3A26%7C%7C%7Cep%3Dhttps%3A%2F%2Fmojitech.net%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_first_add=fd%3D2024-06-26%2009%3A05%3A26%7C%7C%7Cep%3Dhttps%3A%2F%2Fmojitech.net%2F%7C%7C%7Crf%3Dhttps%3A%2F%2Fwww.google.com%2F; sbjs_current=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; sbjs_first=typ%3Dorganic%7C%7C%7Csrc%3Dgoogle%7C%7C%7Cmdm%3Dorganic%7C%7C%7Ccmp%3D%28none%29%7C%7C%7Ccnt%3D%28none%29%7C%7C%7Ctrm%3D%28none%29%7C%7C%7Cid%3D%28none%29%7C%7C%7Cplt%3D%28none%29%7C%7C%7Cfmt%3D%28none%29%7C%7C%7Ctct%3D%28none%29; PHPSESSID=c0685c93c11c66dea1ca08c66814b18e; sbjs_udata=vst%3D2%7C%7C%7Cuip%3D%28none%29%7C%7C%7Cuag%3DMozilla%2F5.0%20%28Windows%20NT%2010.0%3B%20Win64%3B%20x64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F126.0.0.0%20Safari%2F537.36; sbjs_session=pgs%3D1%7C%7C%7Ccpg%3Dhttps%3A%2F%2Fmojitech.net%2F; _ga_NYSNB7L639=GS1.1.1719394876.13.1.1719394878.58.0.1304943209; TawkConnectionTime=0; twk_uuid_55852a6f3d6a6cf375cfde80=%7B%22uuid%22%3A%221.SwtYKuKXeCHGOSZ9r99WdXFG2iJmUlTSv4DDbe7VzXImFDms2eC7pEG0lhvh3g7BBq0dKyBcfV7NOLh5uBmQS0yykODvmg556nq9A0rRYxg7fxriym8jK%22%2C%22version%22%3A3%2C%22domain%22%3A%22mojitech.net%22%2C%22ts%22%3A1719394880878%7D",
        Referer: "https://mojitech.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      body: null,
      method: "GET"
    }
  ).then((r) => r.json());
  const suggestions = data?.suggestions?.sort((a, b) => {
    const diffA = jaro(a.value, shortDesc);
    const diffB = jaro(b.value, shortDesc);
    return diffA - diffB;
  });
  const firstSuggestion = suggestions ? suggestions.at(-1) : void 0;
  if (firstSuggestion) {
    const jsdom = new JSDOM(firstSuggestion.price);
    const doc = jsdom.window.document;
    const diggedPriceElement = (doc.querySelector("strong") ? void 0 : [...doc.querySelectorAll("bdi")].at(-1)) || void 0;
    diggedPriceElement?.removeChild(diggedPriceElement.querySelector("span"));
    const diggedPrice = diggedPriceElement?.innerHTML;
    firstSuggestion.price = diggedPrice;
  }
  return firstSuggestion;
}
function stringToNumber(str) {
  if (!str) return;
  const cleanedStr = str.toString().replace(/,/g, "").replace(/\s/g, "");
  const number = parseFloat(cleanedStr);
  if (isNaN(number)) {
    return null;
  } else {
    return number;
  }
}
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
    SKU
  );
  console.log(SKU, taxxed);
  return {
    SKU,
    shortDescription,
    prices: {
      ayoub: stringToNumber(ayoubDataCell?.sale_price || ayoubDataCell?.price),
      mojitech: stringToNumber(mojitechDataCell?.price),
      pcandparts: stringToNumber(pcandpartsDataCell?.price)
    },
    taxes: {
      pcandparts: taxxed,
      mojitechHas: (mojitechDataCell?.value || "")?.toLowerCase()?.includes("tax") ? false : true
    }
  };
};
function createWindow() {
  mainWindow = new electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      preload: path__namespace.join(__dirname, "../", "preload", "preload.js")
    }
  });
  mainWindow.loadURL("http://localhost:5173");
  mainWindow.on("closed", () => mainWindow = null);
  electron.ipcMain.on("format", (e, data) => {
    if (data) {
      const formattedData = formatData(data);
      e.reply("format", formattedData);
    }
  });
  let cancel = false;
  electron.ipcMain.on("compare", async (e, pcandpartsData, options) => {
    console.log("COMPARE");
    if (pcandpartsData && !cancel) {
      const items = [];
      console.log(options);
      for (const pcandpartsCellIndex in pcandpartsData) {
        const { SKU, shortDescription, taxxed } = pcandpartsData.at(pcandpartsCellIndex);
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
  electron.ipcMain.on("cancel", (e, v) => {
    console.log("CANCEL");
    if (v) {
      cancel = true;
    }
  });
  electron.ipcMain.on("quick-search", async (e, info, searchMode) => {
    if (info) {
      const data = await fetchData(info, info, false, searchMode);
      e.reply("quick-search", data);
    }
  });
  electron.ipcMain.on("start", (e, v) => {
    console.log("START");
    if (v) {
      cancel = false;
    }
  });
  electron.ipcMain.on("end", () => {
    console.log(1);
    electron.app.relaunch();
  });
}
electron.app.whenReady().then(() => {
  createWindow();
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
  }
});
electron.app.on("activate", () => {
  if (mainWindow == null) {
    createWindow();
  }
});
