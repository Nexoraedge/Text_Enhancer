// Entry point for the background script
import { enhanceTextWithGemini } from '../utils/geminiApi';

// Listen for the keyboard shortcut
chrome.commands.onCommand.addListener((command) => {
  if (command === 'enhance-text') {
    // When the shortcut is pressed, send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'enhance-text' });
      }
    });
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'enhance-text-with-gemini') {
    // Get API key from storage
    chrome.storage.sync.get(['geminiApiKey'], async (result) => {
      try {
        const apiKey = result.geminiApiKey;
        
        if (!apiKey) {
          throw new Error('Gemini API key not found. Please set it in the extension popup.');
        }

        const enhancedText = await enhanceTextWithGemini(apiKey, request.text, request.context);
        sendResponse({ success: true, enhancedText });
      } catch (error) {
        console.error('Error enhancing text:', error);
        sendResponse({ success: false, error: error.message });
      }
    });
    
    return true; // Indicates we will send a response asynchronously
  }
});
