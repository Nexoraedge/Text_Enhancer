# Text-Enhancer (AI-Powered) Chrome Extension

Style your text with AI – professional, social, academic or creative in one keystroke.

A Chrome extension built with React and Vite that enhances your text using the Gemini AI API.

## ✨ Features

- Quick-enhance: `Ctrl + Shift + U`  
- Custom prompt window: `Ctrl + Shift + Y`  
- Context generator: `Ctrl + Shift + H`  
- Context-aware tone selection (email, social, academic, etc.)  
- Optional emoji preservation  
- Clipboard backup of every enhanced text
- Context-aware text improvements based on the website you're using
- Customizable with your own Gemini API key
- Works across all websites

## 🚀 Quick Install  
*(No coding required – works on Windows, macOS, Linux)*

### One-Click ZIP (Recommended)
Grab the ready-to-use build from the latest release – no build tools needed.

<a href="https://raw.githubusercontent.com/Nexoraedge/Text_Enhancer/main/downloads/text-enhacer-latest.zip"><img src="https://github.com/Nexoraedge/Text_Enhancer/blob/main/public/icons/icon128.png" alt="Download latest ZIP" width="120" /></a>

1. Download **`text-enhacer-latest.zip`** above and extract it anywhere.
2. In Chrome/Edge go to `chrome://extensions/` (or `edge://extensions/`).
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the extracted `text-enhacer-latest` folder.
5. The “Text-Enhancer” icon will appear – you’re ready to go!

---

### From Source (Developer build)

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the extension:
   ```
   npm run build
   ```
4. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" in the top-right corner
   - Click "Load unpacked" and select the `dist` folder from this project

### Using the Extension
1. Focus any text box, textarea, or content-editable field.
2. Press `Ctrl + Shift + U` to enhance the selection instantly.
3. Need more control?  
   • `Ctrl + Shift + Y` – open the **Custom Prompt** window.  
   • `Ctrl + Shift + H` – open **Context Generator** for AI drafting.
4. All enhanced text is also copied to your clipboard as a backup.

> **Tutorial video / GIF coming soon…**

---

## ❓ Frequently Asked Questions

### Do I need to run a local server if I install from `dist.zip`?

*(ZIP name may appear as `text-enhancer-latest.zip` if you downloaded from the newest release – either works the same)*
**No.** The bundled background script calls our hosted API at `https://tone-genie.vercel.app/api/enhance` by default.  Everything works out-of-the-box; no servers or terminals required.

### Is a Google Gemini API key required?
No. The extension already communicates with our backend which holds a secure Gemini key.

• **Casual users** – just install and go.  
• **Developers / privacy-conscious users** – you can self-host the backend or point the extension to your own endpoint via the `NEXT_PUBLIC_API_BASE_URL` env variable and supply your Gemini key there.

---

1. Install the extension in Chrome
2. Click on the extension icon to open the popup
3. Enter your Gemini API key in the settings tab (optional)
4. Navigate to any webpage with text input fields
5. Focus on an input field and press `Ctrl+Shift+U` to enhance the text
6. The enhanced text will replace your original text and be copied to clipboard

## 🧠 How It Works

- **Placeholder Text**: If an input field is empty, the extension will use the placeholder text as input
- **Auto-detection**: Even if no field is focused, the extension will look for search inputs or prompt areas
- **Clipboard Backup**: Enhanced text is always copied to clipboard as a backup
- **Context Awareness**: Enhancement is tailored based on the website context (email, social, etc.)

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build the extension for production

## ⚙️ Technical Stack

- Built with React and Vite
- Uses Manifest V3 for Chrome extensions
- Integrates with Google's Generative AI API (Gemini)
- Context detection for different platforms

## 📁 Project Structure

```
├── public/               # Static assets and manifest
│   ├── icons/           # Extension icons
│   ├── manifest.json    # Extension manifest file
│   └── index.html       # Landing page
├── src/
│   ├── background/      # Background service worker
│   │   └── index.js     # Background script entry point
│   ├── content/         # Content scripts
│   │   └── index.js     # Content script entry point
│   ├── popup/           # Popup UI
│   │   ├── index.html   # Popup HTML entry
│   │   ├── main.jsx     # React entry point
│   │   ├── Popup.jsx    # Main popup component
│   │   └── index.css    # Popup styles
│   └── utils/           # Utility functions
│       └── geminiApi.js # Gemini API integration
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── build.js             # Custom build script
```

## 🏗️ Build & Distribute

1. **Content Script**: Runs on every webpage and listens for the keyboard shortcut (`Ctrl + Shift + U`)
2. **Background Script**: Handles communication between content script and Gemini API
3. **Popup UI**: Provides interface for API key management and testing
4. **Context Detection**: Analyzes the current webpage to determine the appropriate enhancement style

## Context Types

The extension detects different contexts to tailor the text enhancement:

- **Email**: For composing professional emails
- **Social Media**: For posts, tweets, and comments
- **Professional**: For LinkedIn, work platforms, and documentation
- **Academic**: For educational sites and research platforms
- **Romantic**: For messaging apps and dating sites
- **General**: Default enhancement for any other context

```
├── public/
│   ├── manifest.json       # Chrome extension manifest
│   └── icons/              # Extension icons
├── src/
│   ├── background/         # Background script
│   ├── content/            # Content script
│   └── popup/              # Popup UI (React)
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```
