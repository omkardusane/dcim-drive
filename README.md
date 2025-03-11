# Electron Media Organizer

A powerful desktop application built with Electron for organizing and managing your media files intelligently.

## Features

- 📁 **Smart Folder Organization**: Automatically indexes and organizes media files into monthly subfolders
- 🖼️ **Media Explorer**: Browse through images and videos with an intuitive interface
- 📅 **Timeline View**: Explore media organized by months with detailed summaries
- 📊 **Monthly Statistics**: View file counts, storage usage, and media types for each month
- 🏷️ **Album Management**: Create and manage custom albums with timeline classification
- 🔍 **Advanced Filtering**: Filter media by type, date, and other attributes
- 🗑️ **Safe Deletion**: Move unwanted files to trash with recovery option
- 💾 **Persistent Albums**: Albums are saved as JSON files for easy backup and portability

## System Requirements

- Windows Operating System
- Node.js 16.0 or higher
- Electron 20.0 or higher

## Installation

1. Clone the repository:
```bash
git clone https://github.com/omkardusane/electron-media-organizer.git
```

2. Install dependencies:
```bash
npm install
npm run build:main
npm run build:renderer
```

3. Start the application:
```bash
npm start
```

## Usage

1. **Select Folder**: Choose a folder containing your media files
2. **Initial Indexing**: The app will scan and organize files into monthly subfolders
3. **Browse Media**: Use the timeline view to explore your media by month
4. **Create Albums**: Group related media into albums with custom names and dates
5. **Filter & Sort**: Use the filter panel to find specific media types or date ranges

## Project Structure

```
electron-media-organizer/
├── src/
│   ├── main/           # Main process code
│   ├── renderer/       # Renderer process code
│   └── shared/         # Shared utilities and types
├── docs/
│   └── gptguides/     # AI development guides
├── public/            # Static assets
└── albums/           # Generated album JSON files
```

## Development

- Built with Electron and React
- TypeScript for type safety
- Tailwind CSS for styling
- File system operations using Node.js native modules

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 