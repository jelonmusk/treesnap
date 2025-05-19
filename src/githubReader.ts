// githubReader.ts

// Remove: import fetch from 'node-fetch';

interface GitHubItem {
  name: string;
  path: string;
  type: 'file' | 'dir';
}

async function fetchGitHubTree(
  owner: string,
  repo: string,
  dirPath = '',
  prefix = ''
): Promise<string> {
  let tree = '';

  // Dynamic import fetch here
  const fetch = (await import('node-fetch')).default;

  const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${dirPath}`;
 const response = await fetch(apiUrl);
const json = await response.json();

if (!Array.isArray(json)) {
  return 'Error: Invalid GitHub response or repository path.';
}

const items = json as GitHubItem[];


  if (!Array.isArray(items)) {
    return 'Error: Invalid GitHub response or repository path.';
  }

  items.sort((a, b) => {
    if (a.type === b.type) return a.name.localeCompare(b.name);
    return a.type === 'dir' ? -1 : 1;
  });

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const connector = i === items.length - 1 ? '└── ' : '├── ';
    tree += `${prefix}${connector}${item.name}\n`;

    if (item.type === 'dir') {
      const childPrefix = i === items.length - 1 ? '    ' : '│   ';
      tree += await fetchGitHubTree(owner, repo, item.path, prefix + childPrefix);
    }
  }

  return tree;
}

export async function generateTreeFromGitHubUrl(repoUrl: string): Promise<string> {
  try {
    const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (!match) {
      return 'Invalid GitHub URL format. Must be like https://github.com/owner/repo';
    }

    const [, owner, repo] = match;
    return await fetchGitHubTree(owner, repo);
  } catch (error) {
    return `Error fetching GitHub repo: ${(error as Error).message}`;
  }
}
