# 🌳📸 [TreeSnap](https://marketplace.visualstudio.com/items?itemName=jelonmusk.treesnap&ssr=false#overview) – Instantly Snap Your Project Structure

[**TreeSnap**](https://marketplace.visualstudio.com/items?itemName=jelonmusk.treesnap&ssr=false#overview) is your no-brainer sidekick for visualizing and sharing your project’s folder structure in seconds — whether you're documenting, tweeting, or just trying to understand a messy repo.

## Why TreeSnap?

Sometimes you want to see your project’s structure without digging through your file explorer or writing complex commands.  
TreeSnap makes it super simple to:

- View a beautiful, indented tree of your project folders and files  
- Export your project tree as **plain text (.txt)** or **Markdown (.md)** — perfect for documentation, README files, or sharing with teammates  
- Copy the project tree straight to your clipboard with one click!

And if you want, you can even generate trees from **GitHub repo URLs** — no cloning required! 🎉



## Features

- Generate a project folder tree of your **current workspace**  
- Export tree as `.txt` or `.md` files  
- Copy tree directly to clipboard  
- Generate trees from **any public GitHub repository URL**  
- Lightweight, fast, and zero configuration
- Keyboard shortcuts for super-speedy use


## How to Use

### 📁 For Local Projects

1. Open your project folder in **VS Code**
2. Press `Ctrl+Shift+P` to open the Command Palette
*(Or use the shortcut: `Ctrl+Shift+J` to go straight to GitHub input prompt!)* 
3. Type `TreeSnap: Generate Project Tree` and hit Enter
4. Choose what you want to do:
   - 📋 Copy to clipboard  
   - 📄 Export as `.txt`  
   - 📝 Export as `.md`



### 🌐 For GitHub Repositories

1. Press `Ctrl+Shift+P` to open the Command Palette  
   *(Or use the shortcut: `Ctrl+Shift+F` to go straight to GitHub input prompt!)*  
2. Type and Select **TreeSnap: Generate Tree from GitHub Repo URL**
3. Enter the GitHub repo in this format:  github/username/repository-name
✅ Example: `https://github.com/jelonmusk/SQLQueryBuilder-OpenAI`
4. Hit **Enter**
5. Just like local projects, you’ll get the same options:  
- Copy tree to clipboard  
- Export as `.txt`  
- Export as `.md`

Here's what it looks like:

<details>
<summary><strong>project-root</strong></summary>

```txt
📁 src  
├── 📄 index.js  
├── 📁 components  
│   └── 📄 App.js  
└── 📁 utils  
    └── 📄 helpers.js  
````

</details>



## ⌨️ Keyboard Shortcuts

| Feature                      | Windows/Linux      | macOS             |
| ---------------------------- | ------------------ | ----------------- |
| Copy Local Folder Structure        | `Ctrl + Shift + J` | `Cmd + Shift + J` |
| Copy from GitHub Repository URL | `Ctrl + Shift + F` | `Cmd + Shift + F` |

Or simply open the **Command Palette** (`Ctrl + Shift + P` or `Cmd + Shift + P`) and search for `TreeSnap`.



## 📸 Screenshots
![TreeSnap Screenshot](/media/step%201.png)
---
![Tree Snap Screenshot](/media/step%202.png)
---
![Tree Snap Screenshot](/media/step%203.png)
---
![Tree Snap Screenshot](/media/step%204.png)
---
![Tree Snap Screenshot](/media/step%205.png)
---
![Tree Snap Screenshot](/media/step%206.png)



## 📦 Installation

You can install **TreeSnap** from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=jelonmusk.treesnap&ssr=false#overview), or search for it directly in the Extensions panel in VS Code.



## ❤️Enjoy TreeSnap? 
Please ⭐ the repo and share it with your dev friends!  



## Coming Soon (Ideas)

- Preview generated tree right inside VS Code before exporting  
- Customizable tree depth and style  
- Support for private GitHub repos (stay tuned!)  



## 💬 Feedback

Got a cool idea? Found a bug?
Drop a message [on GitHub](https://github.com/jelonmusk).


Made with ❤️ by Jelonmusk.

