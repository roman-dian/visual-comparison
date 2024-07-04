async function fetchRepoContents() {
    const username = 'roman-dian';
    const repo = 'visual-comparison';
    const apiUrl = `https://api.github.com/repos/${username}/${repo}/contents/reports`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const reports = await response.json();
        const folderList = document.getElementById('folder-list');

        reports.forEach(report => {
            if (report.type === 'dir') {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                const link = document.createElement('a');
                link.className = 'link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover';
                link.href = `${report.path}/index.html`;
                link.textContent = report.name;
                listItem.appendChild(link);
                folderList.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchRepoContents);
