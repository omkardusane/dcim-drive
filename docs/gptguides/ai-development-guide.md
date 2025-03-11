# AI Development Guide for Electron Media Organizer

This guide outlines how to effectively use AI tools (particularly Cursor and GPT) while developing the Electron Media Organizer application.

## Project Overview for AI Agents

The Electron Media Organizer is a desktop application that:
- Indexes and organizes media files (images and videos)
- Creates a monthly-based folder structure
- Provides media browsing capabilities
- Manages custom albums
- Handles file operations (move, delete)

## Key Areas for AI Assistance

### 1. File System Operations
- Media file indexing and organization
- File metadata extraction
- Directory structure management
- Album JSON file handling

### 2. UI/UX Development
- React component creation
- Tailwind CSS styling
- Responsive design implementation
- User interaction flows

### 3. Electron Integration
- IPC communication
- Window management
- Native OS integration
- File system access

### 4. Data Management
- Album data structures
- File metadata caching
- Search and filter implementations
- Timeline organization

## Best Practices for AI Development

1. **Code Generation**
   - Always include necessary imports
   - Follow TypeScript best practices
   - Include error handling
   - Add appropriate comments

2. **Component Creation**
   - Follow React functional component patterns
   - Include prop type definitions
   - Implement proper state management
   - Add event handlers

3. **File Operations**
   - Include error checking
   - Handle permissions properly
   - Implement progress tracking
   - Add recovery mechanisms

4. **Testing Considerations**
   - Unit test coverage
   - Integration test scenarios
   - Edge case handling
   - Error state testing

## Common Development Tasks

### Creating New Components
```typescript
// Example component structure
import React from 'react';
import { SomeProps } from '../types';

export const ComponentName: React.FC<SomeProps> = ({ prop1, prop2 }) => {
  // Component logic
  return (
    // JSX structure
  );
};
```

### Implementing File Operations
```typescript
// Example file operation pattern
import { promises as fs } from 'fs';
import path from 'path';

async function handleFileOperation() {
  try {
    // File operation logic
  } catch (error) {
    // Error handling
  }
}
```

### Album Management
```typescript
// Example album structure
interface Album {
  id: string;
  name: string;
  createdAt: Date;
  files: MediaFile[];
}
```

## Troubleshooting Guide

1. **File Access Issues**
   - Check file permissions
   - Verify path construction
   - Ensure proper error handling

2. **Performance Problems**
   - Review file indexing logic
   - Check memory usage
   - Optimize image loading

3. **UI Glitches**
   - Verify React component lifecycle
   - Check state management
   - Review CSS conflicts

## Development Workflow

1. **Feature Implementation**
   - Review requirements
   - Plan component structure
   - Implement core logic
   - Add UI elements
   - Test functionality

2. **Code Review**
   - Check type safety
   - Verify error handling
   - Review performance
   - Test edge cases

3. **Documentation**
   - Update component docs
   - Add usage examples
   - Document API changes
   - Update README 