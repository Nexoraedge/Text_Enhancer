// Main entry point for the extension
// This file is used to organize imports and exports

// Export components and utilities
export { default as Popup } from './popup/Popup';

// Export constants and configuration
export const EXTENSION_NAME = 'Gemini Text Enhancer';
export const EXTENSION_VERSION = '1.0.0';

// Configuration for context detection
export const CONTEXT_TYPES = {
  EMAIL: 'email',
  SOCIAL: 'social',
  PROFESSIONAL: 'professional',
  CHAT_PERSONAL: 'chat_personal',
  CHAT_PROFESSIONAL: 'chat_professional',
  ACADEMIC: 'academic',
  DEFAULT: 'default'
};

// Configuration for Gemini API
export const GEMINI_CONFIG = {
  MODEL: 'gemini-2.0-flash',
  MAX_TOKENS: 1024,
  TEMPERATURE: 0.7
};
