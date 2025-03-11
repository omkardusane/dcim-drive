import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import FolderSelector from './components/FolderSelector';
import MediaGrid from './components/MediaGrid';
import MonthView from './components/MonthView';
import AlbumManager from './components/AlbumManager';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [selectedFolder, setSelectedFolder] = useState(null);
    const [mediaFiles, setMediaFiles] = useState([]);
    const [currentView, setCurrentView] = useState('months');

    useEffect(() => {
        if (selectedFolder) {
            window.electron.invoke('scan-folder', selectedFolder)
                .then(files => setMediaFiles(files));
        }
    }, [selectedFolder]);

    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <FolderSelector onFolderSelect={setSelectedFolder} />
                {selectedFolder && (
                    <>
                        <MonthView
                            files={mediaFiles}
                            onMonthSelect={(month) => setCurrentView(month)}
                        />
                        <MediaGrid
                            files={mediaFiles}
                            currentView={currentView}
                        />
                        <AlbumManager
                            selectedFolder={selectedFolder}
                            files={mediaFiles}
                        />
                    </>
                )}
            </div>
        </ThemeProvider>
    );
}

export default App; 