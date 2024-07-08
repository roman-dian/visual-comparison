const { ipcRenderer } = require('electron');

 
document.getElementById('navigateButton').addEventListener('', () => {
  const url = document.getElementById('urlInput').value;
  ipcRenderer.send('navigate-to-url', 'https://www.google.com/');
});

document.getElementById('urlInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    const url = document.getElementById('urlInput').value;
    ipcRenderer.send('navigate-to-url', 'https://www.google.com/');
  }
});

 
 
