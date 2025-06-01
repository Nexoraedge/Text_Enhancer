// Content script for Gemini Text Enhancer extension

// Function to detect context type based on URL and page title
function detectContextType(url, pageTitle) {
  const urlLower = url.toLowerCase();
  const titleLower = pageTitle.toLowerCase();
  
  // Email context detection
  if (
    urlLower.includes('mail.google.com') || 
    urlLower.includes('outlook') || 
    urlLower.includes('yahoo.com/mail') || 
    urlLower.includes('mail') || 
    titleLower.includes('inbox') || 
    titleLower.includes('email') || 
    titleLower.includes('compose')
  ) {
    return 'email';
  }
  
  // Social media context detection
  if (
    urlLower.includes('twitter.com') || 
    urlLower.includes('facebook.com') || 
    urlLower.includes('instagram.com') || 
    urlLower.includes('linkedin.com/feed') || 
    urlLower.includes('reddit.com') || 
    titleLower.includes('feed') || 
    titleLower.includes('post') || 
    titleLower.includes('timeline')
  ) {
    return 'social';
  }
  
  // Professional context detection
  if (
    urlLower.includes('linkedin.com') && !urlLower.includes('linkedin.com/feed') || 
    urlLower.includes('docs.google.com') || 
    urlLower.includes('notion.so') || 
    urlLower.includes('slack.com') || 
    urlLower.includes('teams.microsoft.com') || 
    titleLower.includes('document') || 
    titleLower.includes('report') || 
    titleLower.includes('project') || 
    titleLower.includes('proposal')
  ) {
    return 'professional';
  }
  
  // Academic context detection
  if (
    urlLower.includes('scholar.google.com') || 
    urlLower.includes('.edu') || 
    urlLower.includes('academia.edu') || 
    urlLower.includes('researchgate.net') || 
    urlLower.includes('coursera.org') || 
    urlLower.includes('canvas') || 
    titleLower.includes('course') || 
    titleLower.includes('assignment') || 
    titleLower.includes('paper') || 
    titleLower.includes('research') || 
    titleLower.includes('study')
  ) {
    return 'academic';
  }
  
  // Romantic context detection
  if (
    urlLower.includes('tinder.com') || 
    urlLower.includes('bumble.com') || 
    urlLower.includes('hinge.co') || 
    urlLower.includes('okcupid.com') || 
    urlLower.includes('match.com') || 
    titleLower.includes('dating') || 
    titleLower.includes('chat') && (
      titleLower.includes('match') || 
      titleLower.includes('date') || 
      titleLower.includes('love')
    )
  ) {
    return 'romantic';
  }
  
  // Default to general context
  return 'general';
}

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

// Function to get the text from the currently focused element
function getTextFromFocusedElement() {
  const activeElement = document.activeElement;
  
  // Check if the active element is an input or textarea
  if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
    // Store the element for later reference
    focusedElement = activeElement;
    
    // Get text based on element type
    if (activeElement.isContentEditable) {
      return activeElement.innerText || '';
    } else {
      // If the input field is empty, try to get the placeholder text
      const text = activeElement.value || '';
      if (text.trim() === '' && activeElement.placeholder && activeElement.placeholder.trim() !== '') {
        return activeElement.placeholder;
      }
      return text;
    }
  }
  
  // Check for search inputs, prompt areas, etc. even if not focused
  const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');
  if (searchInputs.length > 0) {
    // Use the first matching element found
    focusedElement = searchInputs[0];
    // Get text or placeholder
    const text = focusedElement.value || '';
    if (text.trim() === '' && focusedElement.placeholder && focusedElement.placeholder.trim() !== '') {
      return focusedElement.placeholder;
    }
    return text;
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

// Function to copy text to clipboard
function copyToClipboard(text, showNotification = true) {
  navigator.clipboard.writeText(text).then(() => {
    if (showNotification) {
      showToast('Enhanced text copied to clipboard!', 'success');
    }
  }).catch(err => {
    console.error('Failed to copy text:', err);
    if (showNotification) {
      showToast('Failed to copy to clipboard', 'error');
    }
  });
}

// Function to enhance text
async function enhanceText() {
  // First try to get text from a focused element
  let focusedElement = getFocusedElement();
  let text;
  
  // If no element is focused, look for search inputs, prompt areas, etc.
  if (!isEditableElement(focusedElement)) {
    // Look for search inputs, prompt areas, etc.
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');
    
    if (searchInputs.length > 0) {
      // Use the first matching element found
      focusedElement = searchInputs[0];
    } else {
      showToast('No input field found. Enhanced text will be copied to clipboard.', 'info');
    }
  }
  
  // Get text from the element
  if (isEditableElement(focusedElement)) {
    text = getTextFromFocusedElement(focusedElement);
    
    // If the input field is empty, try to get the placeholder text
    if (!text || text.trim() === '') {
      if (focusedElement.placeholder && focusedElement.placeholder.trim() !== '') {
        text = focusedElement.placeholder;
        showToast('Using placeholder text: "' + text.substring(0, 20) + (text.length > 20 ? '...' : '') + '"');
      } else {
        showToast('No text to enhance', 'error');
        return;
      }
    }
  } else {
    showToast('No text found to enhance', 'error');
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
        // Try to replace text in the element
        if (isEditableElement(focusedElement)) {
          const success = setTextInFocusedElement(focusedElement, response.enhancedText);
          
          if (success) {
            showToast('Text enhanced and filled in!', 'success');
            // Also copy to clipboard as a backup
            copyToClipboard(response.enhancedText, false);
          } else {
            // If filling fails, copy to clipboard as fallback
            copyToClipboard(response.enhancedText, true);
          }
        } else {
          // No editable element, just copy to clipboard
          copyToClipboard(response.enhancedText, true);
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
