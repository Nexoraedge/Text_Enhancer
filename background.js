// Background script for Text-Enhancer (AI-powered) extension

// Google Generative AI library will be loaded via script tag in manifest

// Default API key for Gemini
const DEFAULT_API_KEY = 'AIzaSyDa5zBDlmWtrVigdkcvjuhOcSB3TOYo-M8';

// Global variable to store the Gemini API instance
let genAI = null;

// Initialize the Gemini API with the provided API key
function initializeGeminiAPI(apiKey) {
  try {
    // Check if GoogleGenerativeAI is available globally
    if (typeof GoogleGenerativeAI === 'undefined') {
      console.error('GoogleGenerativeAI is not defined. Make sure the library is loaded.');
      return false;
    }
    genAI = new GoogleGenerativeAI(apiKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize Gemini API:', error);
    return false;
  }
}

// Generate context-aware prompt for text enhancement
function generatePrompt(text, contextType, customPrompt = null) {
  // If a custom prompt is provided, use it
  if (customPrompt) {
    return `${customPrompt}\n\nText to work with:\n"${text}"\n\nYour response (be direct and concise, avoid explanations or formatting):`;
  }
  
  const basePrompt = `Enhance the following text to make it more ${contextType === 'general' ? 'clear, professional, and engaging' : ''}.`;
  
  let contextPrompt = '';
  switch (contextType) {
    case 'email':
      contextPrompt = 'This is for an email. Make it professional, clear, and concise while maintaining a friendly tone.';
      break;
    case 'social':
      contextPrompt = 'This is for social media. Make it engaging, conversational, and attention-grabbing while keeping it authentic.';
      break;
    case 'professional':
      contextPrompt = 'This is for a professional context. Make it formal, well-structured, and precise while demonstrating expertise.';
      break;
    case 'academic':
      contextPrompt = 'This is for an academic context. Make it scholarly, well-reasoned, and properly structured with appropriate terminology.';
      break;
    case 'romantic':
      contextPrompt = 'This is for a romantic conversation. Make it warm, thoughtful, and emotionally engaging while keeping it authentic.';
      break;
    default:
      contextPrompt = 'Improve the clarity, grammar, and overall quality while maintaining the original meaning and intent.';
  }
  
  return `${basePrompt}\n\n${contextPrompt}\n\nOriginal text:\n"${text}"\n\nEnhanced text (maintain similar length, don't add unnecessary information, be direct and concise):`;
}

// Enhance text using the Gemini API
async function enhanceTextWithGemini(apiKey, text, contextType = 'general', customPrompt = null) {
  try {
    // Validate API key format
    if (!apiKey || apiKey.trim() === '') {
      throw new Error('API key is missing or empty. Please add your Gemini API key in the extension settings.');
    }
    
    if (!apiKey.match(/^[A-Za-z0-9_-]+$/)) {
      throw new Error('Invalid API key format. Please check your API key in the extension settings.');
    }

    // Initialize API if not already done
    if (!genAI) {
      const initialized = initializeGeminiAPI(apiKey);
      if (!initialized) {
        throw new Error('Failed to initialize Gemini API');
      }
    }
    
    // Check if the custom prompt includes emojis
    const includeEmojis = customPrompt && customPrompt.includes('emoji');
    
    // Generate model prompt based on context or custom prompt
    const prompt = generatePrompt(text, contextType, customPrompt);
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Set safety settings - adjust temperature for more creative responses when using emojis
    const generationConfig = {
      temperature: includeEmojis ? 0.8 : 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024
    };
    
    // Generate content with a timeout
    const result = await Promise.race([
      model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig
      }),
      new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), 15000)
      )
    ]);
    
    // Extract the enhanced text from the response
    let enhancedText = result.response.text();
    
    // Clean up the response format - preserve emojis if requested
    enhancedText = cleanResponseFormat(enhancedText, includeEmojis);
    
    return enhancedText;
  } catch (error) {
    console.error('Error in enhanceTextWithGemini:', error);
    throw error;
  }
}

// Function to clean up and format Gemini responses
function cleanResponseFormat(text, preserveEmojis = false) {
  // Remove option headers like "Option 1:" or "Option 1 (Focus on instruction):"
  let cleaned = text.replace(/^(?:Option \d+|Option \d+ \([^)]+\)):?\s*/gm, '');
  
  // Remove bullet points and asterisks (but preserve emojis if requested)
  if (preserveEmojis) {
    // Only remove bullet points that aren't emojis
    cleaned = cleaned.replace(/^\s*[-*•]\s+/gm, '');
  } else {
    // Remove bullet points and strip out most emojis
    cleaned = cleaned.replace(/^\s*[-*•]\s+/gm, '');
    cleaned = cleaned.replace(/[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
  }
  
  // Remove markdown formatting
  cleaned = cleaned.replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, '$1');
  
  // Remove explanation sections
  cleaned = cleaned.replace(/\n+Why these are improvements:([\s\S]*$)/i, '');
  cleaned = cleaned.replace(/\n+Here's why:([\s\S]*$)/i, '');
  cleaned = cleaned.replace(/\n+Explanation:([\s\S]*$)/i, '');
  cleaned = cleaned.replace(/\n+Reasoning:([\s\S]*$)/i, '');
  cleaned = cleaned.replace(/\n+Changes made:([\s\S]*$)/i, '');
  
  // If there are multiple paragraphs, handle them appropriately
  const paragraphs = cleaned.split(/\n{2,}/).filter(p => p.trim().length > 0);
  if (paragraphs.length > 1) {
    // For emoji-rich content, we might want to keep multiple paragraphs
    if (preserveEmojis && paragraphs.length <= 3) {
      cleaned = paragraphs.join('\n\n');
    } else {
      // Choose the longest paragraph that's not too long
      const sortedParagraphs = [...paragraphs].sort((a, b) => b.length - a.length);
      cleaned = sortedParagraphs[0];
    }
  }
  
  // Final cleanup - remove any "Enhanced text:" prefixes
  cleaned = cleaned.replace(/^Enhanced text:\s*/i, '');
  
  // Remove extra spaces
  cleaned = cleaned.replace(/\s{2,}/g, ' ').trim();
  
  return cleaned;
}

// Listen for the keyboard shortcut
chrome.commands.onCommand.addListener((command) => {
  if (command === 'enhance-text') {
    // When the shortcut is pressed, send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs[0]) {
        try {
          // First check if we need to inject the content script
          await ensureContentScriptLoaded(tabs[0].id);
          // Then send the message
          chrome.tabs.sendMessage(tabs[0].id, { action: 'enhance-text' }, (response) => {
            if (chrome.runtime.lastError) {
              console.error('Error sending message:', chrome.runtime.lastError);
              // If there's an error, try to inject the content script and retry
              injectContentScript(tabs[0].id, { action: 'enhance-text' });
            }
          });
        } catch (error) {
          console.error('Error in enhance-text command:', error);
        }
      }
    });
  } else if (command === 'custom-prompt') {
    // When the custom prompt shortcut is pressed, send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs[0]) {
        try {
          // First check if we need to inject the content script
          await ensureContentScriptLoaded(tabs[0].id);
          // Then send the message
          chrome.tabs.sendMessage(tabs[0].id, { action: 'show-custom-prompt' }, (response) => {
            if (chrome.runtime.lastError) {
              console.error('Error sending message:', chrome.runtime.lastError);
              // If there's an error, try to inject the content script and retry
              injectContentScript(tabs[0].id, { action: 'show-custom-prompt' });
            }
          });
        } catch (error) {
          console.error('Error in custom-prompt command:', error);
        }
      }
    });
  }
});

// Function to ensure content script is loaded
async function ensureContentScriptLoaded(tabId) {
  try {
    // Try to send a ping message to check if content script is loaded
    await chrome.tabs.sendMessage(tabId, { action: 'ping' });
  } catch (error) {
    // If error, content script is not loaded, so inject it
    console.log('Content script not loaded, injecting...');
    await injectContentScript(tabId);
  }
}

// Function to inject the content script
async function injectContentScript(tabId, messageToSend = null) {
  try {
    await chrome.scripting.executeScript({
      target: { tabId },
      files: ['content.js']
    });
    console.log('Content script injected successfully');
    
    // If we have a message to send after injection, send it after a short delay
    if (messageToSend) {
      setTimeout(() => {
        chrome.tabs.sendMessage(tabId, messageToSend, (response) => {
          if (chrome.runtime.lastError) {
            console.error('Error sending message after injection:', chrome.runtime.lastError);
          }
        });
      }, 500); // Give the content script time to initialize
    }
  } catch (error) {
    console.error('Error injecting content script:', error);
  }
}

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'content_script_ready') {
    console.log('Content script ready in tab:', sender.tab ? sender.tab.id : 'unknown');
    sendResponse({ status: 'background_ready' });
    return true;
  } else if (message.action === 'ping') {
    // Respond to ping to confirm background script is loaded
    sendResponse({ status: 'background_ready' });
    return true;
  } else if (message.action === 'enhance-text-with-gemini') {
    chrome.storage.sync.get(['geminiApiKey'], async (result) => {
      try {
        // Use the provided API key or fall back to the default key
        const apiKey = result.geminiApiKey || DEFAULT_API_KEY;
        
        console.log('Using API key:', apiKey ? 'Key is set' : 'No key available');
        
        // Pass the custom prompt if provided
        const enhancedText = await enhanceTextWithGemini(apiKey, message.text, message.context, message.customPrompt);
        sendResponse({ success: true, enhancedText });
      } catch (error) {
        console.error('Error enhancing text:', error);
        sendResponse({ success: false, error: error.message });
      }
    });
    
    return true; // Required for async response
  }
});
