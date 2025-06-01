// Content script for the Gemini Text Enhancer extension
// This script handles DOM interaction and communicates with the background script

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'enhance-text') {
    enhanceCurrentInput();
  }
});

// Function to enhance the text in the currently focused input element
async function enhanceCurrentInput() {
  // Get the currently focused element
  const activeElement = document.activeElement;
  
  // Check if the active element is an input, textarea, or contenteditable element
  if (isEditableElement(activeElement)) {
    // Get the text from the active element
    const text = getTextFromElement(activeElement);
    
    if (!text || text.trim() === '') {
      showNotification('No text to enhance. Please enter some text first.');
      return;
    }
    
    // Save the selection range for later restoration if needed
    const selectionStart = activeElement.selectionStart;
    const selectionEnd = activeElement.selectionEnd;
    
    // Show loading indicator
    const loadingNotification = showNotification('Enhancing your text...', 'loading');
    
    try {
      // Get context information from the page
      const context = {
        url: window.location.href,
        title: document.title,
        // Additional context detection
        conversationHint: detectConversationContext(),
        pageKeywords: extractPageKeywords()
      };
      
      // Send the text to the background script for enhancement
      const response = await chrome.runtime.sendMessage({
        action: 'enhance-text-with-gemini',
        text: text,
        context: context
      });
      
      // Remove the loading notification
      if (loadingNotification && loadingNotification.parentNode) {
        loadingNotification.parentNode.removeChild(loadingNotification);
      }
      
      if (response && response.success) {
        // Replace the text in the active element
        setTextInElement(activeElement, response.enhancedText);
        showNotification('Text enhanced successfully!', 'success');
        
        // Try to restore cursor position proportionally
        if (typeof activeElement.setSelectionRange === 'function') {
          try {
            const ratio = response.enhancedText.length / text.length;
            const newPos = Math.min(Math.floor(selectionEnd * ratio), response.enhancedText.length);
            activeElement.setSelectionRange(newPos, newPos);
          } catch (e) {
            console.warn('Could not restore cursor position:', e);
          }
        }
      } else {
        const errorMsg = response && response.error ? response.error : 'Unknown error occurred';
        showNotification(`Error: ${errorMsg}`, 'error');
      }
    } catch (error) {
      console.error('Error in enhanceCurrentInput:', error);
      showNotification(`Error: ${error.message || 'Unknown error occurred'}`, 'error');
    }
  } else {
    showNotification('Please focus on a text input field first.', 'warning');
  }
}

// Helper function to check if an element is editable
function isEditableElement(element) {
  if (!element) return false;
  
  // Check for input and textarea elements
  if (element.tagName === 'INPUT') {
    const inputType = element.type.toLowerCase();
    return inputType === 'text' || inputType === 'search' || inputType === 'email' || 
           inputType === 'url' || inputType === 'tel' || inputType === 'number';
  }
  
  if (element.tagName === 'TEXTAREA') return true;
  
  // Check for contenteditable elements
  if (element.getAttribute('contenteditable') === 'true') return true;
  
  // Check for specific rich text editors
  if (element.classList.contains('ql-editor')) return true; // Quill editor
  if (element.classList.contains('ProseMirror')) return true; // ProseMirror
  if (element.classList.contains('CodeMirror')) return true; // CodeMirror
  
  return false;
}

// Helper function to get text from an element
function getTextFromElement(element) {
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    return element.value;
  } else if (element.getAttribute('contenteditable') === 'true' || 
             element.classList.contains('ql-editor') || 
             element.classList.contains('ProseMirror')) {
    return element.innerText;
  }
  return '';
}

// Helper function to set text in an element
function setTextInElement(element, text) {
  if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
    element.value = text;
    // Trigger input event to notify the page of the change
    element.dispatchEvent(new Event('input', { bubbles: true }));
  } else if (element.getAttribute('contenteditable') === 'true' || 
             element.classList.contains('ql-editor') || 
             element.classList.contains('ProseMirror')) {
    element.innerText = text;
    // Trigger input event to notify the page of the change
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }
}

// Helper function to show a notification
function showNotification(message, type = 'info') {
  // Remove any existing notification
  const existingNotification = document.getElementById('gemini-enhancer-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.id = 'gemini-enhancer-notification';
  notification.textContent = message;
  
  // Set styles based on notification type
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.padding = '10px 15px';
  notification.style.borderRadius = '4px';
  notification.style.zIndex = '9999999';
  notification.style.fontSize = '14px';
  notification.style.fontFamily = 'Arial, sans-serif';
  notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  notification.style.transition = 'opacity 0.3s ease-in-out';
  
  switch (type) {
    case 'success':
      notification.style.backgroundColor = '#4CAF50';
      notification.style.color = 'white';
      break;
    case 'error':
      notification.style.backgroundColor = '#F44336';
      notification.style.color = 'white';
      break;
    case 'warning':
      notification.style.backgroundColor = '#FF9800';
      notification.style.color = 'white';
      break;
    case 'loading':
      notification.style.backgroundColor = '#2196F3';
      notification.style.color = 'white';
      break;
    default:
      notification.style.backgroundColor = '#333';
      notification.style.color = 'white';
  }
  
  // Add to the page
  document.body.appendChild(notification);
  
  // Remove after 3 seconds (unless it's a loading notification)
  if (type !== 'loading') {
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
  
  return notification;
}

// Helper function to try to detect the context of a conversation
function detectConversationContext() {
  // This is a simple implementation that could be expanded
  const url = window.location.href.toLowerCase();
  const title = document.title.toLowerCase();
  
  // Check for dating or romantic contexts
  if (url.includes('tinder') || url.includes('bumble') || url.includes('hinge') || 
      url.includes('dating') || title.includes('dating') || 
      url.includes('match.com') || url.includes('okcupid')) {
    return 'personal';
  }
  
  // Check for professional contexts
  if (url.includes('linkedin') || url.includes('indeed') || 
      url.includes('glassdoor') || url.includes('workday') || 
      title.includes('resume') || title.includes('job')) {
    return 'professional';
  }
  
  // Check for academic contexts
  if (url.includes('scholar') || url.includes('academia') || 
      url.includes('research') || url.includes('coursera') || 
      url.includes('canvas') || url.includes('blackboard')) {
    return 'academic';
  }
  
  // Default to neutral
  return 'neutral';
}

// Helper function to extract keywords from the page to provide additional context
function extractPageKeywords() {
  // Try to extract keywords from meta tags
  const keywordsMeta = document.querySelector('meta[name="keywords"]');
  if (keywordsMeta && keywordsMeta.content) {
    return keywordsMeta.content;
  }
  
  // Try to extract from headings
  const headings = Array.from(document.querySelectorAll('h1, h2, h3'));
  if (headings.length > 0) {
    return headings.map(h => h.textContent).join(', ');
  }
  
  return '';
}
