import * as vscode from 'vscode';

export function copyToClipboard(text: string) {
  vscode.env.clipboard.writeText(text);
}
