const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    const holaDiv = document.createElement('button');
    holaDiv.id = 'interactableS';
    holaDiv.innerText = 'Go Back';
    holaDiv.style.position = 'fixed';
    holaDiv.style.top = '10px';
    holaDiv.style.left = '10px';
    holaDiv.style.zIndex = '1000';
    holaDiv.style.backgroundColor = 'grey';
    holaDiv.style.color = 'black';
    holaDiv.style.padding = '10px';
    holaDiv.style.border = '1px solid black';
    document.body.appendChild(holaDiv);

    holaDiv.addEventListener('click', () => {
      //alert('Hola!');
      ipcRenderer.send('go-back');
    });
  });
  