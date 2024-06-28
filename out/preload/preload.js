"use strict";
const { contextBridge, ipcRenderer } = require("electron/renderer");
contextBridge.exposeInMainWorld("electron", {
  formatData: (data) => {
    return new Promise((r) => {
      ipcRenderer.send("format", data);
      ipcRenderer.on("format", (e, formattedData) => {
        if (formattedData) {
          r(formattedData);
        }
      });
    });
  },
  compareData: (data, options) => {
    return new Promise((r) => {
      ipcRenderer.send("compare", data, options);
      ipcRenderer.on("compare", (e, data2) => {
        if (data2) {
          r(data2);
        }
      });
    });
  },
  onProgress: (action) => ipcRenderer.on("progress", action),
  cancel: () => ipcRenderer.send("cancel", true),
  start: () => ipcRenderer.send("start", true),
  end: () => ipcRenderer.send("end")
});
