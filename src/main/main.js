const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs-extra');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.handle('select-folder', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
        properties: ['openDirectory']
    });
    return result.filePaths[0];
});

ipcMain.handle('scan-folder', async (event, folderPath) => {
    const files = await fs.readdir(folderPath, { withFileTypes: true });
    const mediaFiles = [];

    for (const file of files) {
        if (file.isFile()) {
            const stats = await fs.stat(path.join(folderPath, file.name));
            const ext = path.extname(file.name).toLowerCase();

            if (['.jpg', '.jpeg', '.png', '.mp4'].includes(ext)) {
                mediaFiles.push({
                    name: file.name,
                    path: path.join(folderPath, file.name),
                    type: ext === '.mp4' ? 'video' : 'image',
                    size: stats.size,
                    date: stats.mtime
                });
            }
        }
    }

    return mediaFiles;
}); 