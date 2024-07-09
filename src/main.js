import { app, BrowserWindow, ipcMain } from 'electron';
import contextMenu from 'electron-context-menu';

import * as path from 'path';

 
contextMenu({
	showSaveImageAs: true
});


function createWindow() {
  const win = new BrowserWindow({
    width: 1480,
    height: 720,
    webPreferences: {
      preload: path.resolve('src/preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadURL('https://roman-dian.github.io/visual-comparison/');

  ipcMain.on('go-back', () => {
    if (win.webContents.canGoBack()) {
      win.webContents.goBack();
    }
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
