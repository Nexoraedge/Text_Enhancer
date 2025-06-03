// Context enhancer feature for Text-Enhancer extension
// This script handles the context-based text enhancement with humanized output

// Function to create and show the context enhancer popup
function showContextEnhancerPopup() {
  // Create popup container
  const popup = document.createElement('div');
  popup.className = 'text-enhancer-context-popup';
  
  // Create header
  const header = document.createElement('div');
  header.className = 'text-enhancer-popup-header';
  
  const title = document.createElement('h2');
  title.textContent = 'Context-Based Enhancement';
  
  const closeButton = document.createElement('button');
  closeButton.className = 'text-enhancer-close-btn';
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => popup.remove());
  
  header.appendChild(title);
  header.appendChild(closeButton);
  
  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.className = 'text-enhancer-content';
  
  // Context input section
  const contextSection = document.createElement('div');
  contextSection.className = 'text-enhancer-section';
  
  const contextLabel = document.createElement('label');
  contextLabel.textContent = 'Provide Context:';
  contextLabel.htmlFor = 'text-enhancer-context-input';
  
  const contextInput = document.createElement('textarea');
  contextInput.id = 'text-enhancer-context-input';
  contextInput.className = 'text-enhancer-textarea';
  contextInput.placeholder = 'Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")';
  contextInput.rows = 3;
  
  contextSection.appendChild(contextLabel);
  contextSection.appendChild(contextInput);
  
  // Text input section
  const textSection = document.createElement('div');
  textSection.className = 'text-enhancer-section';
  
  const textLabel = document.createElement('label');
  textLabel.textContent = 'Additional Information (optional):';
  textLabel.htmlFor = 'text-enhancer-text-input';
  
  const textInput = document.createElement('textarea');
  textInput.id = 'text-enhancer-text-input';
  textInput.className = 'text-enhancer-textarea';
  textInput.placeholder = 'Add any details you want included (e.g., dates, names, specific points)';
  textInput.rows = 3;
  
  textSection.appendChild(textLabel);
  textSection.appendChild(textInput);
  
  // Options section
  const optionsSection = document.createElement('div');
  optionsSection.className = 'text-enhancer-options';
  
  const humanizeOption = document.createElement('div');
  humanizeOption.className = 'text-enhancer-option';
  
  const humanizeCheckbox = document.createElement('input');
  humanizeCheckbox.type = 'checkbox';
  humanizeCheckbox.id = 'text-enhancer-humanize';
  humanizeCheckbox.checked = true;
  
  const humanizeLabel = document.createElement('label');
  humanizeLabel.htmlFor = 'text-enhancer-humanize';
  humanizeLabel.textContent = 'Make it sound natural and human-written';
  
  humanizeOption.appendChild(humanizeCheckbox);
  humanizeOption.appendChild(humanizeLabel);
  
  const emojiOption = document.createElement('div');
  emojiOption.className = 'text-enhancer-option';
  
  const emojiCheckbox = document.createElement('input');
  emojiCheckbox.type = 'checkbox';
  emojiCheckbox.id = 'text-enhancer-emoji';
  
  const emojiLabel = document.createElement('label');
  emojiLabel.htmlFor = 'text-enhancer-emoji';
  emojiLabel.textContent = 'Include appropriate emojis';
  
  emojiOption.appendChild(emojiCheckbox);
  emojiOption.appendChild(emojiLabel);
  
  optionsSection.appendChild(humanizeOption);
  optionsSection.appendChild(emojiOption);
  
  // Button container
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'text-enhancer-buttons';
  
  const cancelButton = document.createElement('button');
  cancelButton.className = 'text-enhancer-button text-enhancer-cancel-btn';
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', () => popup.remove());
  
  const generateButton = document.createElement('button');
  generateButton.className = 'text-enhancer-button text-enhancer-generate-btn';
  generateButton.textContent = 'Generate';
  
  // Generate button click handler
  generateButton.addEventListener('click', () => {
    const contextValue = contextInput.value.trim();
    const textValue = textInput.value.trim();
    const humanize = humanizeCheckbox.checked;
    const includeEmojis = emojiCheckbox.checked;
    
    if (!contextValue) {
      showToast('Please provide context for what you want to generate', 'error');
      return;
    }
    
    // Show loading state
    generateButton.disabled = true;
    generateButton.textContent = 'Generating...';
    
    // Build the custom prompt
    let customPrompt = `${contextValue}`;
    
    if (textValue) {
      customPrompt += `\n\nAdditional information: ${textValue}`;
    }
    
    if (humanize) {
      customPrompt += `\n\nMake the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`;
    }
    
    // Send message to background script
    chrome.runtime.sendMessage(
      {
        action: 'enhance-text-with-gemini',
        text: textValue || 'Generate from context',
        context: 'context-based',
        customPrompt: customPrompt,
        includeEmojis: includeEmojis
      },
      (response) => {
        // Reset button state
        generateButton.disabled = false;
        generateButton.textContent = 'Generate';
        
        if (response && response.success) {
          // Try to set text in the focused element
          let success = false;
          if (focusedElement && isEditableElement(focusedElement)) {
            success = setTextInFocusedElement(focusedElement, response.enhancedText);
          }
          
          // If we couldn't set the text, copy to clipboard
          if (!success) {
            copyToClipboard(response.enhancedText);
          }
          
          // Close the popup
          popup.remove();
        } else {
          showToast(
            response && response.error 
              ? `Error: ${response.error}` 
              : 'Failed to generate text',
            'error'
          );
        }
      }
    );
  });
  
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(generateButton);
  
  // Add all sections to the content container
  contentContainer.appendChild(contextSection);
  contentContainer.appendChild(textSection);
  contentContainer.appendChild(optionsSection);
  contentContainer.appendChild(buttonContainer);
  
  // Add header and content to popup
  popup.appendChild(header);
  popup.appendChild(contentContainer);
  
  // Add popup to page
  document.body.appendChild(popup);
  
  // Focus the context input
  contextInput.focus();
  
  // Add styles for the context enhancer popup
  addContextEnhancerStyles();
}

// Function to add styles for the context enhancer popup
function addContextEnhancerStyles() {
  const styleId = 'text-enhancer-context-styles';
  
  // Check if styles already exist
  if (document.getElementById(styleId)) {
    return;
  }
  
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    .text-enhancer-context-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      max-width: 90vw;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      z-index: 2147483647;
      overflow: hidden;
      font-family: 'Segoe UI', Arial, sans-serif;
      color: #1f2937;
    }
    
    .text-enhancer-popup-header {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: white;
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .text-enhancer-popup-header h2 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
    }
    
    .text-enhancer-close-btn {
      background: transparent;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      transition: opacity 0.2s;
    }
    
    .text-enhancer-close-btn:hover {
      opacity: 1;
    }
    
    .text-enhancer-content {
      padding: 16px;
    }
    
    .text-enhancer-section {
      margin-bottom: 16px;
    }
    
    .text-enhancer-section label {
      display: block;
      margin-bottom: 6px;
      font-weight: 500;
      font-size: 14px;
      color: #4b5563;
    }
    
    .text-enhancer-textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      font-size: 14px;
      resize: vertical;
      background-color: #f9fafb;
      color: #1f2937;
      transition: border-color 0.2s;
    }
    
    .text-enhancer-textarea:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    }
    
    .text-enhancer-options {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 16px;
    }
    
    .text-enhancer-option {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .text-enhancer-option label {
      font-size: 14px;
      color: #4b5563;
      cursor: pointer;
    }
    
    .text-enhancer-buttons {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    
    .text-enhancer-button {
      padding: 8px 16px;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
    }
    
    .text-enhancer-cancel-btn {
      background-color: #f3f4f6;
      color: #4b5563;
    }
    
    .text-enhancer-cancel-btn:hover {
      background-color: #e5e7eb;
    }
    
    .text-enhancer-generate-btn {
      background-color: #6366f1;
      color: white;
    }
    
    .text-enhancer-generate-btn:hover {
      background-color: #4f46e5;
    }
    
    .text-enhancer-generate-btn:disabled {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }
  `;
  
  document.head.appendChild(style);
}

// Export the function to be used in content.js
export { showContextEnhancerPopup };
