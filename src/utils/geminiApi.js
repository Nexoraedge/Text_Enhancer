// Utility functions for interacting with the Gemini API
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GEMINI_CONFIG, CONTEXT_TYPES } from '../index';

/**
 * Initialize the Gemini API client with the provided API key
 * @param {string} apiKey - The Gemini API key
 * @returns {Object} The Gemini model instance
 */
export function initGeminiApi(apiKey) {
  if (!apiKey) {
    throw new Error('Gemini API key is required');
  }
  
  const genAI = new GoogleGenerativeAI(apiKey);
  return genAI.getGenerativeModel({ 
    model: GEMINI_CONFIG.MODEL,
    generationConfig: {
      temperature: GEMINI_CONFIG.TEMPERATURE,
      maxOutputTokens: GEMINI_CONFIG.MAX_TOKENS,
    }
  });
}

/**
 * Generate enhanced text using the Gemini API
 * @param {string} apiKey - The Gemini API key
 * @param {string} text - The original text to enhance
 * @param {Object} context - Context information about the current page
 * @returns {Promise<string>} The enhanced text
 */
export async function enhanceTextWithGemini(apiKey, text, context) {
  try {
    const model = initGeminiApi(apiKey);
    const contextPrompt = getContextSpecificPrompt(context);
    
    const prompt = `${contextPrompt}
    
Original text: "${text}"

Rewritten text:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error in enhanceTextWithGemini:', error);
    throw error;
  }
}

/**
 * Determine the appropriate prompt based on the context
 * @param {Object} context - Context information about the current page
 * @returns {string} The context-specific prompt
 */
export function getContextSpecificPrompt(context) {
  const contextType = detectContextType(context);
  
  switch (contextType) {
    case CONTEXT_TYPES.EMAIL:
      return 'You are a professional email writer. Rewrite the following text to be clear, professional, and polite. Maintain the original intent but improve the language, tone, and structure.';
    
    case CONTEXT_TYPES.SOCIAL:
      return 'You are a social media expert. Rewrite the following text to be engaging, concise, and casual. Make it punchy and shareable while maintaining the original message.';
    
    case CONTEXT_TYPES.PROFESSIONAL:
      return 'You are a professional career coach. Rewrite the following text to be formal, achievement-oriented, and impactful. Use professional language and highlight value.';
    
    case CONTEXT_TYPES.CHAT_PERSONAL:
      return 'You are a romantic poet. Rewrite the following text to be heartfelt, warm, and emotionally engaging. Make it personal and authentic while maintaining the core message.';
    
    case CONTEXT_TYPES.CHAT_PROFESSIONAL:
      return 'You are a friendly professional. Rewrite the following text to be clear, friendly, and conversational while maintaining professionalism. Keep it natural but improve clarity and flow.';
    
    case CONTEXT_TYPES.ACADEMIC:
      return 'You are an academic writer. Rewrite the following text to be formal, precise, and well-structured. Use academic language and improve clarity while maintaining the original content.';
    
    case CONTEXT_TYPES.DEFAULT:
    default:
      return 'You are a professional writer. Rewrite the following text to improve clarity, grammar, and flow while maintaining the original intent. Make it more polished and effective.';
  }
}

/**
 * Detect the type of context based on the URL, title, and other page information
 * @param {Object} context - Context information about the current page
 * @returns {string} The detected context type
 */
export function detectContextType(context) {
  const url = context.url.toLowerCase();
  const title = context.title.toLowerCase();
  const conversationHint = context.conversationHint || '';
  
  // Email context
  if (
    url.includes('mail') || 
    url.includes('gmail') || 
    url.includes('outlook') || 
    title.includes('mail') ||
    url.includes('yahoo.com/mail') ||
    url.includes('protonmail') ||
    url.includes('compose')
  ) {
    return CONTEXT_TYPES.EMAIL;
  }
  
  // Social media context
  if (
    url.includes('twitter') || 
    url.includes('x.com') || 
    url.includes('facebook') || 
    url.includes('instagram') ||
    url.includes('tiktok') ||
    url.includes('reddit') ||
    url.includes('snapchat') ||
    url.includes('pinterest')
  ) {
    return CONTEXT_TYPES.SOCIAL;
  }
  
  // Professional context
  if (
    url.includes('linkedin') || 
    title.includes('resume') || 
    title.includes('cv') ||
    url.includes('indeed') ||
    url.includes('glassdoor') ||
    url.includes('workday') ||
    url.includes('jobvite') ||
    url.includes('lever.co')
  ) {
    return CONTEXT_TYPES.PROFESSIONAL;
  }
  
  // Academic context
  if (
    url.includes('scholar.google') ||
    url.includes('academia.edu') ||
    url.includes('researchgate') ||
    url.includes('jstor') ||
    url.includes('coursera') ||
    url.includes('canvas') ||
    url.includes('blackboard') ||
    url.includes('moodle')
  ) {
    return CONTEXT_TYPES.ACADEMIC;
  }
  
  // Chat or messaging context
  if (
    url.includes('chat') || 
    url.includes('messenger') || 
    url.includes('whatsapp') || 
    url.includes('telegram') ||
    url.includes('discord') ||
    url.includes('slack') ||
    url.includes('teams')
  ) {
    // Check if it's a personal or professional chat
    if (
      conversationHint === 'personal' ||
      title.includes('crush') ||
      url.includes('tinder') ||
      url.includes('bumble') ||
      url.includes('hinge') ||
      url.includes('dating')
    ) {
      return CONTEXT_TYPES.CHAT_PERSONAL;
    }
    
    return CONTEXT_TYPES.CHAT_PROFESSIONAL;
  }
  
  // Default context
  return CONTEXT_TYPES.DEFAULT;
}
