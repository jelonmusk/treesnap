// Import VS Code's API namespace to interact with the editor, file system, commands, etc.
import * as vscode from 'vscode';

// Import a custom utility to generate the folder/file tree structure of a project
import { generateProjectTree } from './treeGenerator';

// Import a custom utility to copy a string (like the tree) to the system clipboard
import { copyToClipboard } from './clipboardUtils';

// Import a custom utility to export a string (like the tree) to a .txt or .md file
import { exportToFile } from './exporter';

// Import a custom utility to generate a tree structure from a GitHub URL
import { generateTreeFromGitHubUrl } from './githubReader';


// This function is called automatically when the extension is activated by VS Code
export function activate(context: vscode.ExtensionContext) {
  //debugger
  console.log("✅ TreeSnap extension activated!");

  // Register a custom command 'treesnap.generateTree' which the user can trigger via command palette
  const disposable = vscode.commands.registerCommand('treesnap.generateTree', async () => {
    
    // Get the folders currently open in the VS Code workspace (user project)
    const workspaceFolders = vscode.workspace.workspaceFolders;

    // If no folder is open, show an error and exit the command early
    if (!workspaceFolders) {
      vscode.window.showErrorMessage('No workspace is open. Please open one and try again.');
      return;
    }
    
    // Get the file system path (e.g., /Users/moy/dev/myproject) of the root folder
    const rootUri = workspaceFolders[0].uri;

    // Call our utility function to recursively generate the folder structure as a tree string
    const tree = await generateProjectTree(rootUri.fsPath);

    

    // Ask the user how they want to use the generated tree (copy or export)
    const action = await vscode.window.showQuickPick(
      ['Copy to Clipboard', 'Export as .txt', 'Export as .md'], // Options to show
      { placeHolder: 'Choose what to do with the folder structure' } // Prompt shown above the options
    );

    // If user chose to copy tree to clipboard
    if (action === 'Copy to Clipboard') {
      copyToClipboard(tree); // Call our clipboard utility
      vscode.window.showInformationMessage('Tree copied to clipboard!'); // Show confirmation
    }

    // If user chose to export it as a plain text file
    else if (action === 'Export as .txt') {
      exportToFile(tree, 'txt'); // Call exporter with "txt" format
    }

    // If user chose to export as a markdown file
    else if (action === 'Export as .md') {
      exportToFile(tree, 'md'); // Call exporter with "md" format
    }
  });

  // Register another command 'treesnap.generateTreeFromGitHubUrl' for generating tree from GitHub URL
  const generateFromGitHubCommand = vscode.commands.registerCommand('treesnap.generateFromGitHub', async () => {
  const url = await vscode.window.showInputBox({
    prompt: "Enter GitHub repository URL",
    placeHolder: "https://github.com/username/repo"
  });

  if (!url) {
    vscode.window.showWarningMessage("No URL provided.");
    return;
  }

  const tree = await generateTreeFromGitHubUrl(url);

  const action = await vscode.window.showQuickPick(
    ['Copy to Clipboard', 'Export as .txt', 'Export as .md'],
    { placeHolder: 'Choose what to do with the GitHub tree structure' }
  );

  if (action === 'Copy to Clipboard') {
    copyToClipboard(tree);
    vscode.window.showInformationMessage('GitHub Tree copied to clipboard!');
  } else if (action === 'Export as .txt') {
    exportToFile(tree, 'txt');
  } else if (action === 'Export as .md') {
    exportToFile(tree, 'md');
  }
});


  // Add this registered command to the extension's cleanup list (so VS Code can dispose it later)
  context.subscriptions.push(disposable);

  // Add the GitHub command to the extension's cleanup list
  context.subscriptions.push(generateFromGitHubCommand);

}

// This function is called when the extension is deactivated (e.g., when VS Code shuts down)
// You can use it for cleanup tasks — here, it does nothing
export function deactivate() {
  console.log('🛑 TreeSnap extension deactivated.');
}
