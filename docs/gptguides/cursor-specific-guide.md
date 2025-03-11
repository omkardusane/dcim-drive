# Cursor IDE Guide for Electron Media Organizer

This guide provides specific instructions for using Cursor IDE effectively while developing the Electron Media Organizer project.

## Project-Specific Cursor Commands

### 1. Component Generation
Use these prompts with Cursor's AI to generate components:

```
"Create a new React component for the monthly timeline view with TypeScript and Tailwind CSS"
"Generate a file preview component that handles both images and videos"
"Create an album management component with CRUD operations"
```

### 2. File Operations
Useful prompts for file system operations:

```
"Generate a utility function for safe file deletion with Windows Recycle Bin support"
"Create a function to extract EXIF metadata from image files"
"Implement a file indexing service with progress tracking"
```

### 3. Electron Integration
Helpful prompts for Electron-specific code:

```
"Create an IPC handler for folder selection dialog"
"Implement a main process service for file system operations"
"Generate window management code with proper TypeScript types"
```

## Recommended Cursor Settings

1. **TypeScript Integration**
   - Enable strict mode
   - Configure path aliases
   - Set up automatic imports

2. **Code Style**
   - Use Prettier integration
   - Enable ESLint
   - Configure auto-formatting on save

3. **Performance**
   - Enable file indexing
   - Configure search scope
   - Set up workspace exclude patterns

## Useful Keyboard Shortcuts

| Shortcut | Action | Usage in Project |
|----------|--------|------------------|
| `Cmd/Ctrl + Shift + P` | Command Palette | Quick file operations |
| `Cmd/Ctrl + P` | File Search | Navigate between components |
| `Cmd/Ctrl + Shift + F` | Global Search | Find usages across project |
| `F12` | Go to Definition | Navigate TypeScript types |

## Project-Specific Snippets

### 1. Component Template
```typescript
"comp": {
  "prefix": "comp",
  "body": [
    "import React from 'react';",
    "",
    "interface ${1:ComponentName}Props {",
    "  $2",
    "}",
    "",
    "export const ${1:ComponentName}: React.FC<${1:ComponentName}Props> = ({$3}) => {",
    "  return (",
    "    <div>",
    "      $0",
    "    </div>",
    "  );",
    "};"
  ]
}
```

### 2. File Operation Template
```typescript
"fileop": {
  "prefix": "fileop",
  "body": [
    "import { promises as fs } from 'fs';",
    "import path from 'path';",
    "",
    "export async function handle${1:Operation}(filePath: string): Promise<void> {",
    "  try {",
    "    $0",
    "  } catch (error) {",
    "    console.error(`Error in ${1:Operation}:`, error);",
    "    throw error;",
    "  }",
    "}"
  ]
}
```

## Best Practices with Cursor

1. **AI-Assisted Development**
   - Use clear, specific prompts
   - Review and understand generated code
   - Maintain consistent code style
   - Test generated code thoroughly

2. **Project Navigation**
   - Utilize workspace symbols
   - Use breadcrumbs for navigation
   - Leverage quick file switching
   - Master multi-cursor editing

3. **Code Review**
   - Use inline comments
   - Leverage git integration
   - Review diffs effectively
   - Use code folding for overview

## Debugging Tips

1. **Electron Main Process**
   - Use built-in Chrome DevTools
   - Enable source maps
   - Set up proper launch configurations

2. **Renderer Process**
   - Use React DevTools
   - Monitor component re-renders
   - Track state changes

3. **File Operations**
   - Log operations in development
   - Use try-catch blocks
   - Implement proper error handling

## Common Workflows

1. **Creating New Features**
   ```
   1. Use Cursor's AI to scaffold component
   2. Implement core logic
   3. Add styles with Tailwind
   4. Test functionality
   5. Review and refactor
   ```

2. **Debugging Issues**
   ```
   1. Use Cursor's search to locate relevant code
   2. Set breakpoints
   3. Use integrated terminal for logs
   4. Review stack traces
   5. Fix and verify
   ```

## Additional Resources

1. **Cursor Documentation**
   - Official docs: [cursor.sh/docs](https://cursor.sh/docs)
   - Keyboard shortcuts
   - AI capabilities
   - Extension system

2. **Project-Specific**
   - Component hierarchy
   - File structure
   - Naming conventions
   - Code style guide 