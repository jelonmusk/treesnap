// Import Node.js's 'fs' module for reading the file system (files and folders)
import * as fs from 'fs';

// Import Node.js's 'path' module for building platform-safe file paths
import * as path from 'path';

// Main function that generates a text-based visual tree of the folder structure
// Parameters:
// - dirPath: the full file system path to the root folder we want to scan
// - prefix: a string used to add indentation (for subfolders, default is empty)
export async function generateProjectTree(dirPath: string, prefix = ''): Promise<string> {
  // This string will hold the entire tree structure as we build it recursively
  let tree = '';

  // Read all files and folders inside the current directory
  // Synchronous because we want to maintain folder ordering
  const files = fs.readdirSync(dirPath);

  // Loop through each item (file/folder) in the current directory
  for (let i = 0; i < files.length; i++) {
    const fileName = files[i]; // Get the name of the file or folder
    const fullPath = path.join(dirPath, fileName); // Build the full path to this file/folder
    const isDir = fs.statSync(fullPath).isDirectory(); // Check if it's a folder or a file

    // Use '└──' for the last item and '├──' for others to build visual tree branches
    const connector = i === files.length - 1 ? '└── ' : '├── ';

    // Add the current file/folder line to the tree with appropriate prefix
    tree += `${prefix}${connector}${fileName}\n`;

    // If it's a directory, recursively process its contents
    if (isDir) {
      // If it's the last folder, we use spaces for indentation.
      // Otherwise, we use '│' to show that more branches follow.
      const extension = i === files.length - 1 ? '    ' : '│   ';

      // Recursively build the tree for the subdirectory and add it to current tree
      tree += await generateProjectTree(fullPath, prefix + extension);
    }
  }

  // Return the final tree structure string
  return tree;
}
