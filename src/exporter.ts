// Import VS Code API to interact with editor UI (dialogs, workspace, notifications)
import * as vscode from 'vscode';

// Import Node.js path module for safely joining file paths
import * as path from 'path';

// Import Node.js fs module to perform file system operations like writing files
import * as fs from 'fs';

// Function to export given content to a file with either .txt or .md extension
// Parameters:
// - content: the string content to be saved into a file
// - extension: the file extension, either 'txt' or 'md' to determine file type
export async function exportToFile(content: string, extension: 'txt' | 'md') {
  // Show a Save File dialog to the user to choose where to save the file
  // Default file name is "project-structure" with the chosen extension
  // The default folder is the first workspace folder if available, otherwise empty string
  const uri = await vscode.window.showSaveDialog({
    defaultUri: vscode.Uri.file(
      path.join(
        vscode.workspace.workspaceFolders?.[0].uri.fsPath || '', // first workspace folder path or fallback
        `project-structure.${extension}` // default file name with chosen extension
      )
    ),
    // Filter so the user can only save files with the selected extension (.txt or .md)
    filters: {
      [extension.toUpperCase()]: [extension]
    }
  });

  // If the user selects a file location and confirms (uri is not undefined)
  if (uri) {
    // Write the content string to the selected file path synchronously
    fs.writeFileSync(uri.fsPath, content);

    // Show a notification message in VS Code confirming export success and file path
    vscode.window.showInformationMessage(`Exported as ${uri.fsPath}`);
  }
}
