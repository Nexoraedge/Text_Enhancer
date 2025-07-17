import { enhanceTextWithGemini } from './src/utils/geminiApi.js';
import { buildEnhancementPrompt, addEmojiPrompt } from './src/utils/prompts.js';

// Background script for Text-Enhancer (AI-powered) extension
// -----------------------------------------------------------------------------
// Default prompt used for Quick Enhance (Ctrl+Shift+U)
const QUICK_ENHANCE_PROMPT =
  'Improve the grammar, clarity, and flow of the following text. ' +
  'Preserve the original tone and intent. Do not add or remove ideas, ' +
  'and keep the response concise and professional. Return only the revised text.';

// Website integration (landing/help, privacy, feedback)
const LANDING_URL = 'https://tone-genie.vercel.app/';
const PRIVACY_URL = 'https://tone-genie.vercel.app/privacy';
const FEEDBACK_URL = 'https://tone-genie.vercel.app/feedback';

// Open landing page on install/update and register feedback URL on uninstall
chrome.runtime.onInstalled.addListener((details) => {
  // Always try to set uninstall URL – safe to call multiple times
  chrome.runtime.setUninstallURL(FEEDBACK_URL, () => {
    if (chrome.runtime.lastError) {
      console.error('Failed to set uninstall URL:', chrome.runtime.lastError);
    }
  });

  try {
    // Only open landing/help page on fresh install or update (not on browser startup)
    if (details.reason === 'install') {
      chrome.tabs.create({ url: LANDING_URL });
    } else if (details.reason === 'update') {
      // Append query param so the page can show a friendly "updated" notice if desired
      chrome.tabs.create({ url: `${LANDING_URL}?updated=1` });
    }
  } catch (err) {
    console.error('Error opening landing page:', err);
  }
});

// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  const actions = {
    'quick-enhance': { action: 'enhance-text' },
    'custom-prompt': { action: 'show-custom-prompt' },
    'context-generator': { action: 'show-context-enhancer' },
    'open-main-popup': { action: 'open-main-popup' }
  };

  if (actions[command]) {
    if (command === 'open-main-popup') {
      // Directly open the browser action popup
      chrome.action.openPopup().catch(err => console.error('Failed to open action popup:', err));
      return;
    }
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs[0]) {
        try {
          await ensureContentScriptLoaded(tabs[0].id);
          chrome.tabs.sendMessage(tabs[0].id, actions[command], (response) => {
            if (chrome.runtime.lastError) {
              console.error('Error sending message:', chrome.runtime.lastError.message);
              injectContentScript(tabs[0].id, actions[command]);
            }
          });
        } catch (error) {
          console.error(`Error in ${command} command:`, error);
        }
      }
    });
  } else {
    console.warn('Unrecognized keyboard shortcut command:', command);
  }
});

// Function to ensure content script is loaded
async function ensureContentScriptLoaded(tabId) {
  try {
    await chrome.tabs.sendMessage(tabId, { action: 'ping' });
  } catch (error) {
    //console.log('Content script not loaded, injecting...');
    await injectContentScript(tabId);
  }
}

// Function to inject the content script
async function injectContentScript(tabId, messageToSend = null) {
  try {
    await chrome.scripting.executeScript({ target: { tabId }, files: ['content.js'] });
    if (messageToSend) {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabId, messageToSend, (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error sending message after injection:', chrome.runtime.lastError.message);
          }
        });
      }, 500);
    }
  } catch (error) {
    console.error('Error injecting content script:', error);
  }
}

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (
    message.action === 'enhance-text-with-gemini' ||
    message.action === 'enhanceTextFromPopup' ||
    message.action === 'enhance-text' ||
    message.action === 'custom-prompt' ||
    message.action === 'context-enhancer'
  ) {
    // Route all enhancement requests through the backend proxy
    (async () => {
      try {
        // API key no longer required; backend handles authentication.
        const apiKey = undefined;

        const context = {
          url: sender.tab ? sender.tab.url : '',
          title: sender.tab ? sender.tab.title : '',
        };

        // Construct prompt dynamically to keep tone and apply rules
        let prompt = buildEnhancementPrompt(message.text, {
          // existing options

          customPrompt: message.customPrompt,
          tone: message.tone,
          context: message.context,
          platform: message.platform,
          action: message.action,
        });
        if (message.includeEmojis) {
          prompt = addEmojiPrompt(prompt);
        }

        const enhancedText = await enhanceTextWithGemini(apiKey, message.text, {
          customPrompt: prompt,
          includeEmojis: false, // already embedded via prompt if requested
          contextType: message.context || 'general',
        });
        sendResponse({ success: true, enhancedText });
      } catch (error) {
        console.error('Error enhancing text:', error);
        sendResponse({ success: false, error: error.message });
      }
    })();
    return true; // Required for async response
  }
  // Keep other message listeners if any
});
  