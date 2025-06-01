// Background script for Gemini Text Enhancer extension

// Import Google Generative AI library
import { GoogleGenerativeAI } from '@google/generative-ai';

// Default API key for Gemini
const DEFAULT_API_KEY = 'AIzaSyDa5zBDlmWtrVigdkcvjuhOcSB3TOYo-M8';

// Global variable to store the Gemini API instance
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
    
    // Generate model prompt based on context or custom prompt
    const prompt = generatePrompt(text, contextType, customPrompt);
    
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    
    // Set safety settings
    const generationConfig = {
      temperature: 0.7,
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
    
    // Clean up the response format
    enhancedText = cleanResponseFormat(enhancedText);
    
    return enhancedText;
  } catch (error) {
    console.error('Error in enhanceTextWithGemini:', error);
    throw error;
  }
}

// Function to clean up and format Gemini responses
function cleanResponseFormat(text) {
  // Remove option headers like "Option 1:" or "Option 1 (Focus on instruction):"
  text = text.replace(/\*\*Option \d+.*?:\*\*/g, '');
  
  // Remove bullet points and asterisks
  text = text.replace(/\*\s+/g, '');
  text = text.replace(/\*/g, '');
  
  // Remove "Why these are improvements:" and everything after it
  const improvementsIndex = text.indexOf('Why these are improvements:');
  if (improvementsIndex !== -1) {
    text = text.substring(0, improvementsIndex);
  }
  
  // Remove any markdown formatting
  text = text.replace(/\*\*/g, '');
  
  // Remove extra line breaks and trim
  text = text.replace(/\n{3,}/g, '\n\n');
  text = text.trim();
  
  // If there are multiple paragraphs, just keep the first one as the best answer
  const paragraphs = text.split('\n\n');
  if (paragraphs.length > 1) {
    // Find the longest paragraph that's not a header
    let bestParagraph = paragraphs[0];
    for (const para of paragraphs) {
      if (para.length > bestParagraph.length && !para.includes(':')) {
        bestParagraph = para;
      }
    }
    text = bestParagraph;
  }
  
  return text;
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
  } else if (command === 'custom-prompt') {
    // When the custom prompt shortcut is pressed, send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'show-custom-prompt' });
      }
    });
  }
});

// Listen for messages from content scripts or popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'enhance-text-with-gemini') {
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
