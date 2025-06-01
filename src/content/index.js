// Entry point for the content script
import { detectContextType } from '../utils/geminiApi';

// Function to show a toast notification
function showToast(message, type = 'info') {
  // Create toast container if it doesn't exist
  let toastContainer = document.getElementById('gemini-enhancer-toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'gemini-enhancer-toast-container';
    toastContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
    `;
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement('div');
  toast.style.cssText = `
    background-color: ${type === 'error' ? '#f44336' : '#1a73e8'};
    color: white;
    padding: 12px 16px;
    border-radius: 4px;
    margin-top: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    max-width: 300px;
    opacity: 0;
    transition: opacity 0.3s;
  `;
  toast.textContent = message;
  toastContainer.appendChild(toast);

  // Fade in
  setTimeout(() => {
    toast.style.opacity = '1';
  }, 10);

  // Remove after 3 seconds
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 300);
  }, 3000);
}

// Function to get the currently focused element
function getFocusedElement() {
  return document.activeElement;
}

// Function to check if element is editable
function isEditableElement(element) {
  if (!element) return false;
  
  const tagName = element.tagName.toLowerCase();
  const contentEditable = element.getAttribute('contenteditable');
  
  return (
    tagName === 'input' && 
    ['text', 'search', 'email', 'url', 'tel', 'number', 'password'].includes(element.type)
  ) || 
    tagName === 'textarea' || 
    contentEditable === 'true';
}

// Function to get text from the focused element
function getTextFromFocusedElement(element) {
  if (!element || !isEditableElement(element)) {
    return null;
  }
  
  if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
    return element.value;
  } else if (element.getAttribute('contenteditable') === 'true') {
    return element.innerText;
  }
  
  return null;
}

// Function to set text in the focused element
function setTextInFocusedElement(element, text) {
  if (!element || !isEditableElement(element)) {
    return false;
  }
  
  // Save current selection/cursor position
  const selectionStart = element.selectionStart;
  const selectionEnd = element.selectionEnd;
  
  if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
    element.value = text;
    
    // Try to restore cursor position proportionally
    if (typeof selectionStart === 'number' && typeof selectionEnd === 'number') {
      const originalLength = selectionEnd - selectionStart;
      const newPosition = Math.min(selectionStart, text.length);
      
      try {
        element.setSelectionRange(newPosition, newPosition);
      } catch (e) {
        console.error('Failed to restore cursor position:', e);
      }
    }
    
    // Dispatch input event to trigger any listeners
    const inputEvent = new Event('input', { bubbles: true });
    element.dispatchEvent(inputEvent);
    
    return true;
  } else if (element.getAttribute('contenteditable') === 'true') {
    element.innerText = text;
    return true;
  }
  
  return false;
}

// Function to enhance text
async function enhanceText() {
  const focusedElement = getFocusedElement();
  
  if (!isEditableElement(focusedElement)) {
    showToast('Please focus on an input field or textarea first', 'error');
    return;
  }
  
  const text = getTextFromFocusedElement(focusedElement);
  
  if (!text || text.trim() === '') {
    showToast('No text to enhance', 'error');
    return;
  }
  
  showToast('Enhancing text with Gemini AI...');
  
  // Detect context based on the current page
  const url = window.location.href;
  const pageTitle = document.title;
  const contextType = detectContextType(url, pageTitle);
  
  // Send message to background script to enhance text
  chrome.runtime.sendMessage(
    {
      action: 'enhance-text-with-gemini',
      text,
      context: contextType
    },
    (response) => {
      if (response && response.success) {
        // Replace text in the focused element
        const success = setTextInFocusedElement(focusedElement, response.enhancedText);
        
        if (success) {
          showToast('Text enhanced successfully!');
        } else {
          showToast('Failed to replace text', 'error');
        }
      } else {
        showToast(
          response && response.error 
            ? `Error: ${response.error}` 
            : 'Failed to enhance text',
          'error'
        );
      }
    }
  );
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'enhance-text') {
    enhanceText();
  }
  return true;
});

// Log that the content script has loaded
console.log('Gemini Text Enhancer content script loaded');
