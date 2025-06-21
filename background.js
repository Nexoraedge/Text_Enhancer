// Background script for Text-Enhancer (AI-powered) extension

// Google Generative AI library will be loaded via script tag in manifest

// Global variable to store the Gemini API instance
let genAI = null;

// Initialize the Gemini API with the provided API key
function initializeGeminiAPI(apiKey) {
  try {
    if (typeof GoogleGenerativeAI === 'undefined') {
      console.error('GoogleGenerativeAI is not defined. Make sure the library is loaded.');
      return false;
    }
    genAI = new GoogleGenerativeAI(apiKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize Gemini API:', error);
    genAI = null; // Reset on failure
    return false;
  }
}

// Generate context-aware prompt for text enhancement
function generatePrompt(text, contextType, customPrompt = null) {
  if (customPrompt) {
    return `${customPrompt.trim()}

Text:
"${text.trim()}"

Only return the improved version. Do not explain, justify, or provide multiple options.`;
  }

  const contextInstructions = {
    email: 'Make this suitable for an email. Be clear, concise, and polite.',
    social: 'Optimize this for social media. Make it engaging, casual, and easy to read.',
    professional: 'Make this sound professional, polished, and confident.',
    academic: 'Refine this for academic tone. Use formal language and structure.',
    romantic: 'Make this sound warm, thoughtful, and emotionally expressive.',
    general: 'Enhance the clarity, grammar, and tone. Make it clean and professional.',
  };

  const fallbackInstruction = 'Improve clarity, tone, grammar, and flow.';

  const contextPrompt = contextInstructions[contextType] || fallbackInstruction;

  return `${contextPrompt}

Text:
"${text.trim()}"

Only return the final improved version. Do not include any introductions, explanations, options, or formatting. Maintain similar length and tone unless clearly needed.`;
}

// Enhance text using the Gemini API
async function enhanceTextWithGemini(text, { contextType = 'general', customPrompt = null, includeEmojis = false }) {
  try {
    const prompt = generatePrompt(text, contextType, customPrompt);
    const generationConfig = {
      temperature: includeEmojis ? 0.8 : 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024
    };
    try {
      // Use environment variable or fallback to localhost:3000
      const apiBaseUrl = typeof process !== 'undefined' && process.env && process.env.NEXT_PUBLIC_API_BASE_URL
        ? process.env.NEXT_PUBLIC_API_BASE_URL
        : (typeof window !== 'undefined' && window.NEXT_PUBLIC_API_BASE_URL)
          ? window.NEXT_PUBLIC_API_BASE_URL
          : 'http://localhost:3000';
      let response;
      try {
        response = await fetch(`${apiBaseUrl}/api/enhance`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, options: { prompt, generationConfig } })
        });
      } catch (fetchError) {
        throw new Error('Could not connect to backend server. Please make sure the server is running.');
      }
      if (!response.ok) {
        throw new Error(`Failed to enhance text: ${response.statusText}`);
      }
      const data = await response.json();
      if (data.success) {
        let enhancedText = data.enhancedText;
        enhancedText = cleanResponseFormat(enhancedText, includeEmojis);
        return enhancedText;
      } else {
        throw new Error(data.error || 'Enhancement failed');
      }
    } catch (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error in enhanceTextWithGemini:', error);
    throw error;
  }
}

// Function to clean up and format Gemini responses
// Function to clean up and format Gemini responses
function cleanResponseFormat(text, preserveEmojis = false) {
  let cleaned = text;

  // Remove introductory phrases and explanations
  cleaned = cleaned.replace(/^(Okay|Sure|Here|Alright|I've|I'll|I'd|I have|I will|I would|Let me|Here's|Here are|Certainly|Absolutely|Of course|Definitely)\b[^\n]*\n+/i, '');
  cleaned = cleaned.replace(/^\s*Enhanced Text:\s*/i, '');

  // Remove markdown formatting (bold, italics)
  cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');
  cleaned = cleaned.replace(/\*([^*]+)\*/g, '$1');

  // Remove bullet points and numbering
  cleaned = cleaned.replace(/^\s*[-*+]\s+/gm, '');
  cleaned = cleaned.replace(/^\s*\d+\.\s+/gm, '');

  // Remove surrounding quotes
  cleaned = cleaned.replace(/^["']|["']$/g, '');

  // If not preserving emojis, remove them
  if (!preserveEmojis) {
    cleaned = cleaned.replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F700}-\u{1F77F}]|[\u{1F780}-\u{1F7FF}]|[\u{1F800}-\u{1F8FF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA00}-\u{1FA6F}]|[\u{1FA70}-\u{1FAFF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '');
  }

  // Trim whitespace
  return cleaned.trim();
}

// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener((command) => {
  const actions = {
    'quick-enhance': { action: 'enhance-text' },
    'custom-prompt': { action: 'show-custom-prompt' },
    'context-generator': { action: 'show-context-enhancer' }
  };

  if (actions[command]) {
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
    console.log('Content script not loaded, injecting...');
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
        const enhancedText = await enhanceTextWithGemini(message.text, {
          contextType: message.contextType || message.context || 'general',
          customPrompt: message.customPrompt,
          includeEmojis: message.includeEmojis || false
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
