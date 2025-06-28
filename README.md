# Text-Enhancer (AI-Powered) Chrome Extension

Style your text with AI – professional, social, academic or creative in one keystroke.

A Chrome extension built with React and Vite that enhances your text using the Gemini AI API.

## ✨ Features

- Quick-enhance: `Ctrl + Shift + G`  
- Custom prompt window: `Ctrl + Shift + O`  
- Context generator: `Ctrl + Shift + H`  
- Context-aware tone selection (email, social, academic, etc.)  
- Optional emoji preservation  
- Clipboard backup of every enhanced text
- Context-aware text improvements based on the website you're using
- Customizable with your own Gemini API key
- Works across all websites

## 🚀 Quick Install

### From GitHub (Developer build)

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

### From a ZIP

1. Install the extension in Chrome
2. Click on the extension icon to open the popup
3. Enter your Gemini API key in the settings tab
4. Navigate to any webpage with text input fields
5. Focus on an input field and press `Ctrl+Shift+G` to enhance the text
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

1. **Content Script**: Runs on every webpage and listens for the keyboard shortcut (Ctrl+G)
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
