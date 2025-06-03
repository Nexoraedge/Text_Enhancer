// Background script for Text-Enhancer (AI-powered) extension
// This file will be bundled with the Google Generative AI library

// Directly include the GoogleGenerativeAI class implementation
class GoogleGenerativeAI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta';
  }

  getGenerativeModel({ model }) {
    return new GenerativeModel(this.apiKey, model, this.baseUrl);
  }
}

class GenerativeModel {
  constructor(apiKey, model, baseUrl) {
    this.apiKey = apiKey;
    this.model = model;
    this.baseUrl = baseUrl;
  }

  async generateContent(options) {
    const { contents, generationConfig } = options;
    
    try {
      const url = `${this.baseUrl}/models/${this.model}:generateContent?key=${this.apiKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents,
          generationConfig
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`API error: ${errorData.error?.message || response.statusText}`);
      }
      
      const data = await response.json();
      
      // Format the response to match the expected structure
      return {
        response: data,
        text: () => {
          if (data.candidates && data.candidates.length > 0 && 
              data.candidates[0].content && data.candidates[0].content.parts && 
              data.candidates[0].content.parts.length > 0) {
            return data.candidates[0].content.parts[0].text;
          }
          return '';
        }
      };
    } catch (error) {
      console.error('Error generating content:', error);
      throw error;
    }
  }
}

// Default API key for Gemini
const DEFAULT_API_KEY = 'AIzaSyDa5zBDlmWtrVigdkcvjuhOcSB3TOYo-M8';

// Global variable to store the Gemini API instance
let genAI = null;

// Initialize the Gemini API with the provided API key
function initializeGeminiAPI(apiKey) {
  try {
    // Create a new instance of the GoogleGenerativeAI class with the provided API key
    const apiInstance = new GoogleGenerativeAI(apiKey);
    
    // Store the instance in the global variable for reference
    genAI = apiInstance;
    
    // Return the API instance (not a boolean)
    return apiInstance;
  } catch (error) {
    console.error('Failed to initialize Gemini API:', error);
    throw error; // Throw the error to be handled by the caller
  }
}

// Generate context-aware prompt for text enhancement
function generatePrompt(text, contextType, customPrompt = null) {
  // If a custom prompt is provided, use that instead
  if (customPrompt) {
    return customPrompt;
  }
  
  // Check if this is a context-based generation request
  if (contextType === 'context-based') {
    return `Based on the following context, generate appropriate text. Make it sound natural and human-written with varied sentence structures.`;
  }
  
  // Otherwise, generate a prompt based on the context type
  const basePrompt = `Enhance the following text to make it more ${contextType === 'general' ? 'professional and polished' : contextType}. Maintain the original meaning but improve clarity, tone, and impact.`;
  
  switch (contextType) {
    case 'email':
      return `${basePrompt} Format it as a professional email with appropriate greetings and sign-offs if applicable. Make it concise and action-oriented.`;
    case 'social':
      return `${basePrompt} Make it engaging, conversational, and suitable for social media. Use an upbeat tone and make it attention-grabbing.`;
    case 'professional':
      return `${basePrompt} Use business-appropriate language, focus on achievements and value. Make it formal but not stiff.`;
    case 'romantic':
      return `${basePrompt} Make it warm, personal, and emotionally engaging. Use natural, conversational language.`;
    case 'academic':
      return `${basePrompt} Use scholarly language, precise terminology, and a logical structure. Maintain an objective, analytical tone.`;
    default: // general
      return `${basePrompt} Improve grammar, vocabulary, and flow while maintaining the original voice and intent.`;
  }
}

// Enhance text using the Gemini API
async function enhanceTextWithGemini(apiKey, text, contextType = 'general', customPrompt = null, includeEmojis = false) {
  try {
    if (!apiKey) {
      throw new Error('API key is required');
    }

    // Initialize the API with the provided key
    const geminiAPI = initializeGeminiAPI(apiKey);
    
    if (!geminiAPI) {
      throw new Error('Failed to initialize Gemini API');
    }
    
    // Get the generative model
    const model = geminiAPI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Generate the prompt based on the context type
    const prompt = generatePrompt(text, contextType, customPrompt);
    
    console.log('Sending prompt to Gemini API');
    
    // Build the API request content based on context type
    let apiContent;
    
    if (contextType === 'context-based') {
      // For context-based generation, the text might be minimal or just a placeholder
      apiContent = `${prompt}\n\n${customPrompt}`;
    } else {
      // For regular text enhancement
      apiContent = `${prompt}\n\nText to enhance: ${text}`;
    }
    
    // Add emoji instruction if requested
    if (includeEmojis) {
      apiContent += '\n\nInclude appropriate emojis to add emotion and emphasis where suitable.';
    }
    
    // Call the Gemini API
    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: apiContent
            }
          ]
        }
      ],
      generationConfig: {
        temperature: contextType === 'context-based' ? 0.8 : 0.7, // Slightly higher temperature for more creative context-based generation
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      }
    });
    
    // Get the response text
    const responseText = result.text();
    
    // Clean up the response format
    const cleanedResponse = cleanResponseFormat(responseText, includeEmojis);
    
    console.log('Received response from Gemini API');
    return cleanedResponse;
  } catch (error) {
    console.error('Error in enhanceTextWithGemini:', error);
    throw error;
  }
}

// Function to clean up and format Gemini responses
function cleanResponseFormat(text, preserveEmojis = false) {
  if (!text) return '';
  
  let cleaned = text;
  
  // Remove quotes if the text is wrapped in them
  if ((cleaned.startsWith('"') && cleaned.endsWith('"')) || 
      (cleaned.startsWith("'") && cleaned.endsWith("'"))) {
    cleaned = cleaned.substring(1, cleaned.length - 1);
  }
  
  // Remove common prefixes that Gemini might add
  const prefixesToRemove = [
    /^(Enhanced text:|Enhanced version:|Here's the enhanced text:|Here is the enhanced text:)/i,
    /^(Here's a|Here is a|Here's the|Here is the|Here is your|Here's your)/i,
    /^(Generated text:|Generated content:|Response:|Output:)/i
  ];
  
  for (const prefix of prefixesToRemove) {
    cleaned = cleaned.replace(prefix, '').trim();
  }
  
  // For context-based generation, we want to keep the formatting but remove any AI explanations
  // Remove AI explanations like "I hope this helps!" at the end
  cleaned = cleaned.replace(/\n\n(I hope this helps!|Let me know if you need any changes!|Hope this works for you!|Feel free to modify as needed\.|Is there anything else you'd like me to help with\?|Let me know if you'd like any adjustments\.)$/i, '');
  
  // Remove markdown formatting if present (but preserve emojis if requested)
  if (!preserveEmojis) {
    // Remove all emojis
    cleaned = cleaned.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');
  }
  
  // Remove markdown formatting but preserve paragraph breaks for better readability
  cleaned = cleaned
    .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
    .replace(/\*(.*?)\*/g, '$1')     // Italic
    .replace(/__(.*?)__/g, '$1')     // Underline
    .replace(/~~(.*?)~~/g, '$1')     // Strikethrough
    .replace(/```(.*?)```/gs, '$1')  // Code blocks
    .replace(/`(.*?)`/g, '$1')       // Inline code
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1'); // Links
  
  // Remove any leading/trailing whitespace
  cleaned = cleaned.trim();
  
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
  } else if (command === 'context-enhancer') {
    // When the context enhancer shortcut is pressed, send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
      if (tabs[0]) {
        try {
          // First check if we need to inject the content script
          await ensureContentScriptLoaded(tabs[0].id);
          // Then send the message
          chrome.tabs.sendMessage(tabs[0].id, { action: 'show-context-enhancer' }, (response) => {
            if (chrome.runtime.lastError) {
              console.error('Error sending message:', chrome.runtime.lastError);
              // If there's an error, try to inject the content script and retry
              injectContentScript(tabs[0].id, { action: 'show-context-enhancer' });
            }
          });
        } catch (error) {
          console.error('Error in context-enhancer command:', error);
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
        console.log('Request context:', message.context, 'Include emojis:', message.includeEmojis);
        
        // Pass the custom prompt if provided and include emoji preference
        const enhancedText = await enhanceTextWithGemini(
          apiKey, 
          message.text, 
          message.context, 
          message.customPrompt, 
          message.includeEmojis
        );
        sendResponse({ success: true, enhancedText });
      } catch (error) {
        console.error('Error enhancing text:', error);
        sendResponse({ success: false, error: error.message });
      }
    });
    
    return true; // Required for async response
  }
});

// Log that the background script has loaded
console.log('Text-Enhancer (AI-powered) background script loaded');
