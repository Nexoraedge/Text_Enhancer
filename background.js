// Background script for Gemini Text Enhancer extension
import { GoogleGenerativeAI } from '@google/generative-ai';

// Store for the Gemini API instance
let genAI = null;

// Initialize the Gemini API with the provided API key
function initializeGeminiAPI(apiKey) {
  try {
    genAI = new GoogleGenerativeAI(apiKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize Gemini API:', error);
    return false;
  }
}

// Generate context-aware prompt for text enhancement
function generatePrompt(text, contextType) {
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
  
  return `${basePrompt}\n\n${contextPrompt}\n\nOriginal text:\n"${text}"\n\nEnhanced text (maintain similar length, don't add unnecessary information):`;
}

// Enhance text using the Gemini API
async function enhanceTextWithGemini(apiKey, text, contextType = 'general') {
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
    
    // Generate model prompt based on context
    const prompt = generatePrompt(text, contextType);
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Set safety settings
    const generationConfig = {
      temperature: 0.7,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 1024,
    };
    
    console.log('Sending request to Gemini API with prompt:', prompt);
    
    // Generate content with timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Request timed out after 30 seconds')), 30000);
    });
    
    const generatePromise = model.generateContent({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig,
    });
    
    // Race the promises
    const result = await Promise.race([generatePromise, timeoutPromise]);
    const response = await result.response;
    const enhancedText = response.text().trim();
    
    return enhancedText;
  } catch (error) {
    console.error('Error in enhanceTextWithGemini:', error);
    
    // Provide more helpful error messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error: Could not connect to Gemini API. Please check your internet connection and ensure your API key has proper permissions.');
    } else if (error.message.includes('invalid API key')) {
      throw new Error('Invalid API key: The API key provided is not valid. Please check your API key in the extension settings.');
    } else {
      throw error;
    }
  }
}

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
