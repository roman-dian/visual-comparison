
const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let webView;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  mainWindow.loadFile('src/index.html');

  // Crear el BrowserView para cargar las URLs
  webView = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  });
  mainWindow.setBrowserView(webView);
  webView.setBounds({ x: 0, y: 100, width: 1280, height: 500 });
  webView.webContents.loadURL('https://roman-dian.github.io/visual-comparison/');

  ipcMain.on('navigate-to-url', (event, url) => {
    webView.webContents.loadURL(url);
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

 
