// script.js

async function fetchRepoContents() {
    const username = 'roman-dian';
    const repo = 'visual-comparison';
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const folderList = document.getElementById('folder-list');

        data.forEach(item => {
            if (item.type === 'dir') {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `${item.path}/index.html`;
                link.textContent = item.name;
                listItem.appendChild(link);
                folderList.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchRepoContents);
