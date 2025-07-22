if (window.__TEXT_ENHANCER_LOADED__) {
  console.debug('[TE] content script already loaded');
  // Prevent duplicate execution
} else {
  window.__TEXT_ENHANCER_LOADED__ = true;

// --- Support messages for review popup ---
const SUPPORT_MESSAGES = [
  "✨ Enjoying ToneGenie? A kind review would mean a lot!",
  "☕ Like the tool? Buy me a coffee & keep it alive!",
  "💬 Helped you today? A small review goes a long way.",
  "🪄 Magic happened? Show some love with a quick rating!",
  "💡 This tool runs on creativity (and a little coffee)!",
  "🫶 Built this for creators — your feedback fuels updates!",
  "😄 Smiled while using ToneGenie? Say thanks with a review!",
  "🚀 Help us grow! Drop a review if it helped you fly.",
  "🔧 One dev. Many cups of coffee. Support keeps me coding!",
  "❤️ Liked the vibe? A rating helps more than you think.",
  "🌟 If this saved your time — rate it, fuel the mission!",
  "📝 Love ToneGenie? Tap a star & tell the world!",
  "👀 Still here? Might as well drop a 5-star review 😉",
  "🌈 Spread good vibes — your review keeps this tool free!",
  "🔥 This took caffeine, passion & late nights. Show support!",
  "💻 One-man army here. A review = real motivation 🚀",
  "🎁 Like a free gift? Help me with a tiny shoutout!",
  "🤖 AI worked hard. Now give it a little applause 💬",
  "📢 Love tools like this? Your feedback keeps them alive!",
  "🥰 Reviews aren’t just stars — they keep solo devs going!",
  "🙌 If this helped you close a deal, boost the project!",
  "🔁 Using this often? Pay it forward with a kind review.",
  "🎯 If this hit the right tone — let the world know!",
  "😌 Made writing easier today? Consider showing some ❤️",
  "💬 Sharing is caring — leave feedback to help others!",
  "🌟 Found it useful? A small review = huge impact!",
  "🧠 Good AI deserves good vibes. Drop a rating!",
  "🍀 Feeling lucky this worked? Pay it back with stars!",
  "🎉 This is free, but your review is priceless!",
  "👋 Before you go, your 5-star review = fuel for updates!"
];

function addReviewStyles() {
  const styleId = 'text-enhancer-review-styles';
  if (document.getElementById(styleId)) return;
  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = `
    .text-enhancer-review-popup {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 320px;
      max-width: 95vw;
      background: #232336;
      color: #f3f4f6;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.4);
      padding: 20px;
      z-index: 100000;
      font-family: 'Inter', sans-serif;
    }
    .text-enhancer-review-popup h3 {
      margin-top: 0;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    .text-enhancer-stars {
      display: flex;
      gap: 6px;
      margin-bottom: 12px;
    }
    .text-enhancer-star-btn {
      background: transparent;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #6b7280;
      transition: color 0.2s;
    }
    .text-enhancer-star-btn.active,
    .text-enhancer-star-btn:hover {
      color: #facc15;
    }
    .text-enhancer-review-popup textarea {
      width: 100%;
      min-height: 60px;
      resize: vertical;
      border-radius: 8px;
      padding: 8px 10px;
      background: #1c1c24;
      color: #f3f4f6;
      border: 1px solid #3f3f46;
      font-size: 13px;
      margin-bottom: 12px;
    }
    .text-enhancer-review-popup .actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .text-enhancer-review-popup button {
      padding: 6px 12px;
      border-radius: 8px;
      font-size: 13px;
      cursor: pointer;
      border: none;
      transition: background 0.2s;
    }
    .text-enhancer-submit-btn { background:#7c3aed; color:#fff; }
    .text-enhancer-submit-btn:hover { background:#a78bfa; color:#18181b; }
    .text-enhancer-later-btn { background:#2d2d40; color:#c4b5fd; }
    .text-enhancer-later-btn:hover { background:#18181b; color:#fff; }
    @media(max-width:500px){
      .text-enhancer-review-popup{right:10px;left:10px;bottom:10px;width:auto;}
    }
  `;
  document.head.appendChild(style);
}

function incrementUsageCountAndMaybePrompt() {
  chrome.storage.local.get(
    ['textEnhancerUsage', 'textEnhancerReviewed', 'textEnhancerUser'],
    (res) => {
      let useCount = res.textEnhancerUsage || 0;
      const reviewed = res.textEnhancerReviewed;
      const user = res.textEnhancerUser;


      useCount += 1;

   

      // Persist counters
      chrome.storage.local.set({ textEnhancerUsage: useCount });

      // feedback popup logic – every 4 uses after first use
      if (!reviewed && useCount > 0 && (useCount % 4 === 0)) {
        showReviewPopup();
      }
    }
  );
}

let focusedElement = null; // Will always be assigned safely before use

// Inject shared theme CSS into the page (once)
function injectPlaceholderStyles(){
  const id='text-enhancer-placeholder-styles';
  if(document.getElementById(id)) return;
  const style=document.createElement('style');
  style.id=id;
  style.textContent=`
    /* Ensure textarea/input in pop-ups always use white text on black background */
    .text-enhancer-textarea,
    textarea.text-enhancer-textarea,
    input.text-enhancer-input {
      color:#ffffff !important;
      background:#000000 !important;
    }
    .text-enhancer-textarea::placeholder,
    textarea.text-enhancer-textarea::placeholder,
    input.text-enhancer-input::placeholder {
      color:#ffffff !important;
      opacity:0.8;
    }
  `;
  document.head.appendChild(style);
}

function injectTheme() {
  try {
    const href = chrome.runtime.getURL('theme.css');
    if (!document.querySelector(`link[href="${href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  } catch (err) {
    // Fallback for non-extension pages or testing without chrome.*
    if (!document.querySelector('link[data-text-enhancer-theme]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.dataset.textEnhancerTheme = 'true';
      link.href = chrome && chrome.runtime && chrome.runtime.getURL ? chrome.runtime.getURL('theme.css') : 'theme.css';
      document.head.appendChild(link);
    }
  }
}

// Function to detect context type based on URL and page title
function detectContextType(url, pageTitle) {
  const urlLower = url.toLowerCase();
  const titleLower = pageTitle.toLowerCase();
  
  // Social media context detection
  if (
    urlLower.includes('x.com') || 
    urlLower.includes('instagram.com') ||
    urlLower.includes('facebook.com') ||
    urlLower.includes('tiktok.com') ||
    urlLower.includes('reddit.com') ||
    titleLower.includes('tweet') ||
    titleLower.includes('post') ||
    titleLower.includes('comment')
  ) {
    return 'social_media';
  }
  
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

  // Detect native inputs & textareas
  const isNativeInput = tagName === 'input' &&
    ['text', 'search', 'email', 'url', 'tel', 'number', 'password'].includes(element.type);

  const isTextArea = tagName === 'textarea';

  // Detect any content-editable surface (attribute may be "", "true", or inherited).
  const isContentEditable = element.isContentEditable || element.hasAttribute('contenteditable');

  return isNativeInput || isTextArea || isContentEditable;
}

// Bundle helper functions for easier consumption elsewhere
const EditableHelper = {
  isEditableElement,
  findContentEditableAncestor,
  findPlatformEditable,
  getPlaceholderFromElement,
  getFocusedElement,
  getTextFromElement: getTextFromFocusedElement, // alias for clarity
  setTextInElement: setTextInFocusedElement
};

// Expose globally (useful for debugging in DevTools)
window.TextEnhancerEditable = EditableHelper;

// Helper: find the closest element with contenteditable="true"
function findContentEditableAncestor(el) {
  return el ? el.closest('[contenteditable="true"]') : null;
}

// Helper: get placeholder-like text from editable elements (supports WhatsApp/Instagram data-placeholder)
function getPlaceholderFromElement(el) {
  if (!el) return '';

  // 1. Native placeholder attribute (inputs/textarea)
  const direct = el.getAttribute('placeholder');
  if (direct) return direct;

  // 2. Data-* placeholder constructs used by many frameworks
  const ds = el.dataset || {};
  if (ds) {
    if (ds.placeholder) return ds.placeholder;
    if (ds.textPlaceholder) return ds.textPlaceholder;
  }

  // 3. ARIA labels sometimes use placeholder text
  const aria = el.getAttribute('aria-label') || el.getAttribute('aria-placeholder');
  if (aria) return aria;

  // 4. title attribute (fallback)
  const titleAttr = el.getAttribute('title');
  if (titleAttr) return titleAttr;

  // 5. WhatsApp / Instagram / Draft.js style: a child span/div with data-placeholder attribute
  const childPlaceholder = el.querySelector('[data-placeholder]');
  if (childPlaceholder && childPlaceholder.textContent) return childPlaceholder.textContent.trim();

  // 6. Twitter/X & other React apps sometimes render placeholder in ::before via CSS – not accessible.
  return '';
}


// Function to get the text from the currently focused element
function getTextFromFocusedElement(element = null) {
  // Use provided element or fall back to document.activeElement
  const activeElement = element || document.activeElement;
  
  // Check if the active element is an input or textarea
  if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
    // Store the element for later reference
    focusedElement = activeElement;
    
    // Get text based on element type
    if (activeElement.isContentEditable) {
      const txt = activeElement.innerText || '';
      return txt.trim() !== '' ? txt : getPlaceholderFromElement(activeElement);
    } else {
      // Get the actual text content from the input or textarea
      const txt = activeElement.value || '';
      return txt.trim() !== '' ? txt : getPlaceholderFromElement(activeElement);
    }
  }
  
  // If no active element, try to find any editable element with text
  const editableElements = document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');
  
  for (const element of editableElements) {
    // Skip hidden elements
    if (element.offsetParent === null) continue;
    
    // Skip elements with very small dimensions (likely not visible)
    if (element.offsetWidth < 20 || element.offsetHeight < 20) continue;
    
    // Get the text from the element
    let text = '';
    if (element.isContentEditable || element.getAttribute('contenteditable') === 'true') {
      text = (element.innerText && element.innerText.trim() !== '') ? element.innerText : getPlaceholderFromElement(element);
    } else {
      text = (element.value && element.value.trim() !== '') ? element.value : getPlaceholderFromElement(element);
    }
    
    // If we found an element with text, use it
    if (text.trim() !== '') {
      focusedElement = element;
      return text;
    }
  }
  
  // If we still haven't found anything, look for any visible input
  if (editableElements.length > 0) {
    for (const element of editableElements) {
      if (element.offsetParent !== null && element.offsetWidth > 50 && element.offsetHeight > 20) {
        focusedElement = element;
        return element.value || element.innerText || '';
      }
    }
  }
  
  return null;
}

// Helper: simulate keystroke events (keydown/keyup)
function dispatchKeystroke(el, key, code, ctrlKey = false) {
  const opts = { bubbles: true, cancelable: true, key, code, ctrlKey };
  el.dispatchEvent(new KeyboardEvent('keydown', opts));
  el.dispatchEvent(new KeyboardEvent('keyup', opts));
}

// --- Text replacement helpers (generic & Instagram) ---
function replaceContentEditable(el, newText) {
  if (!el) return;
  el.focus();
  el.innerHTML = '';
  const sel = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(el);
  sel.removeAllRanges();
  sel.addRange(range);
  try {
    document.execCommand('insertText', false, newText);
  } catch (_) {
    const dt = new DataTransfer();
    dt.setData('text/plain', newText);
    const pasteEvt = new ClipboardEvent('paste', { bubbles: true, clipboardData: dt });
    el.dispatchEvent(pasteEvt);
  }
  el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertReplacementText', data: newText }));
  el.dispatchEvent(new Event('change', { bubbles: true }));
}

function replaceTwitterEditable(el, newText) {
  if (!el) return false;
  try {
    el.focus();
    // Select all & delete to fully clear DraftJS state
    const sel = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('delete');

        // --- Robust insertion via synthetic paste ---
    const dt = new DataTransfer();
    dt.setData('text/plain', newText);
    el.dispatchEvent(new ClipboardEvent('paste', { bubbles: true, clipboardData: dt }));

    // DraftJS usually handles the paste and updates its state. Give it a tick.
    setTimeout(() => {
      // Ensure value shows (if not already)
      if (el.innerText.trim() !== newText.trim()) {
        el.innerText = newText;
        el.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'insertFromPaste', data: newText }));
      }
    }, 0);

    // Blur/focus trick to force React commit
    el.blur();
    setTimeout(() => el.focus(), 0);

    console.debug('[TE] Twitter replacement done');
    return true;
  } catch (err) {
    console.error('[TE] Twitter replacement error', err);
    return false;
  }
}


function replaceInstagramEditable(el, newText) {
  if (!el) return;
  el.focus();
  // Select all existing content
  const sel = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(el);
  sel.removeAllRanges();
  sel.addRange(range);

  // Clear existing content via real user-like keystrokes so Lexical truly empties
  dispatchKeystroke(el, 'a', 'KeyA', true); // Ctrl/⌘ + A
  dispatchKeystroke(el, 'Backspace', 'Backspace');

  // Now insert once via execCommand – Lexical will translate this into its model
  const ok = document.execCommand('insertText', false, newText);
  console.debug('Instagram replace execCommand after keystroke clear', ok, el);

  if (!ok) {
    // As last resort: paste
    const dt = new DataTransfer();
    dt.setData('text/plain', newText);
    el.dispatchEvent(new ClipboardEvent('paste', { bubbles: true, clipboardData: dt }));
  }

  console.log('Instagram text injected');
}

// Show copy notification
function showCopyNotification() {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
    z-index: 2147483647;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `;
  notification.innerHTML = '✅ Copied to clipboard!';
  
  document.body.appendChild(notification);
  
  // Animate in
  requestAnimationFrame(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateX(0)';
  });
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Function to set text in the focused element
function setTextInFocusedElement(element, text, params = null) {
  // Ensure params object exists so regenerate has something meaningful
  if (!params) {
    params = { action: 'enhance-text-with-gemini', context: 'general' };
  }
  // Cache original text for revert/regenerate if not already stored
  if (element && !originalTextMap.has(element)) {
    const orig = getTextFromElement(element);
    originalTextMap.set(element, { text: orig, params });
  }
  if (!element || !isEditableElement(element)) {
    return false;
  }
  
  // Save current selection/cursor position
  const selectionStart = element.selectionStart;
  const selectionEnd = element.selectionEnd;
  
  // ---- Native INPUT / TEXTAREA (covers Twitter/X composer etc.) ----
  if (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea') {
    // Use the native value setter so frameworks (React, Vue, Svelte) detect the change
    const prototype = element.tagName.toLowerCase() === 'textarea'
      ? window.HTMLTextAreaElement.prototype
      : window.HTMLInputElement.prototype;
    const valueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
    valueSetter.call(element, text);
    // element.value already set via native setter
    
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
    const changeEvent = new Event('change', { bubbles: true });
    const keyupEvent = new KeyboardEvent('keyup', { bubbles: true, key: 'Enter', code: 'Enter' });
    element.dispatchEvent(inputEvent);
    element.dispatchEvent(changeEvent);
    element.dispatchEvent(keyupEvent);
    
    renderActionBar(element);
    return true;
  // ---- CONTENTEDITABLE surfaces (WhatsApp, Instagram DM, etc.) ----
  } else if (element.isContentEditable || element.hasAttribute('contenteditable')) {
    // Safely inject text into rich-text editors (WhatsApp / Instagram etc.)
    // without triggering the send action.  We avoid any simulated “Enter” key
    // press – we only dispatch an InputEvent so React/Vue/etc. notice the
    // update but leave sending up to the user.
    let targetEditable = element.isContentEditable ? element : findContentEditableAncestor(element);
    // WhatsApp Web wraps the editor in two nested spans; ensure we write into the deepest contenteditable if present
    // Walk down to deepest child (WhatsApp input is nested)
    if (targetEditable && targetEditable.querySelector('[contenteditable="true"]')) {
      targetEditable = targetEditable.querySelector('[contenteditable="true"]');
    }
    // Also capture the outermost contenteditable ancestor to purge it too
    let rootEditable = targetEditable;
    while (rootEditable && rootEditable.parentElement && rootEditable.parentElement.isContentEditable) {
      rootEditable = rootEditable.parentElement;
    }
    if (targetEditable) {
      const host = window.location.hostname;
      // Platform helpers
      const replaceViaKeystrokes = (el, newText) => {
        el.focus();
        dispatchKeystroke(el, 'a', 'KeyA', true); // Ctrl/⌘+A
        dispatchKeystroke(el, 'Backspace', 'Backspace');
        // Let the platform editor emit its own input event
        const dt = new DataTransfer();
        dt.setData('text/plain', newText);
        const pasteEvt = new ClipboardEvent('paste', { bubbles: true, clipboardData: dt });
        el.dispatchEvent(pasteEvt);
        // Rely on platform to generate insertFromPaste/input events
      };

      // ----- WhatsApp Web specific path -----
      if (host.endsWith('whatsapp.com')) {
        try {
          replaceViaKeystrokes(targetEditable, text);
          renderActionBar(element);
          return true;
        } catch(err) {
          console.error('WhatsApp replace failed, falling back:', err);
        }
      }
      if (host.endsWith('instagram.com')) {
        try {
          // Instagram uses Lexical editor; target the element with data-lexical-editor if present to avoid duplicate insertion
          const igEditable = (targetEditable && targetEditable.querySelector('[data-lexical-editor="true"]')) || rootEditable || targetEditable;
          replaceInstagramEditable(igEditable, text);
          renderActionBar(element);
          return true;
        } catch(err){ console.error('Instagram replace failed', err); }
      }
      if (host.endsWith('twitter.com') || host.endsWith('x.com')) {
        try {
          const twEditable = (targetEditable && targetEditable.querySelector('[data-testid="tweetTextarea_0"],div[role="textbox"]')) || rootEditable || targetEditable;
          replaceTwitterEditable(twEditable, text);
          renderActionBar(element);
          return true;
        } catch(err){ console.error('Twitter replace failed', err);} 
      }
      // ----- Generic contenteditable replacement (other sites) -----
      if (host.endsWith('instagram.com')) {
        try {
          // Instagram DM replacement – use Selection API + explicit events for React sync (debounced)
          const rootIg = rootEditable || targetEditable;
          if (!rootIg) {
            console.warn('[TE] Instagram DM replacement: no editable element found');
            return false; // let fallback handle
          }
          replaceInstagramEditable(rootIg, text);
          renderActionBar(element);
          console.log('[TE] Instagram DM replacement via IG helper done');
          return true;
        } catch(err){ console.error('Instagram replace failed', err);} 
      }
      // ----- Generic contenteditable replacement (other sites) -----
      replaceContentEditable(rootEditable || targetEditable, text);
      renderActionBar(element);
      return true;
    }
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
  // Always use the global focusedElement
  focusedElement = getFocusedElement();
  let text;
  
  // If no element is focused, look for search inputs, prompt areas, etc.
  if (!isEditableElement(focusedElement)) {
    // Look for search inputs, prompt areas, etc.
    const searchInputs = document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');
    if (searchInputs.length > 0) {
      focusedElement = searchInputs[0];
    } else {
      focusedElement = null;
      showToast('No input field found. Enhanced text will be copied to clipboard.', 'info');
    }
  }
  
  // Get text from the element
  if (isEditableElement(focusedElement)) {
    text = getTextFromFocusedElement(focusedElement);
    if (!text || text.trim() === '') {
      const ph = getPlaceholderFromElement(focusedElement);
        if (ph.trim() !== '') {
        text = ph;
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
  
  showToast('Enhancing text with AI...');
  
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

// Add CSS styles to the document
function addCustomStyles() {
  injectTheme();
  if (document.getElementById('text-enhancer-styles')) return;
  
  const styleEl = document.createElement('style');
  styleEl.id = 'text-enhancer-styles';
  styleEl.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

    /* Unified theme variables */
    :root {
      --primary-color: #a78bfa;
      --primary-dark: #7c3aed;
      --primary-light: #9029e4;
      --text-white: #f3f4f6;
      --text-light: #4e4e50;
      --text-medium: #9ca3af;
      --bg-dark: #18181b;
      --bg-darker: #131316;
      --bg-card: #232336;
      --border-color: #27272a;
    }
    
    #text-enhancer-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #232336;
      border-radius: 12px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 0;
      z-index: 10000;
      width: 650px;
      max-width: 92%;
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: 90vh;
      border: 1px solid rgba(99, 102, 241, 0.1);
    }
    
    #text-enhancer-header {
      display: flex;
      align-items: center;
      padding: 18px 24px;
      background: linear-gradient(135deg, #7c3aed, #a78bfa);
      color: white;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
    
    #text-enhancer-title {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
      flex-grow: 1;
    }
    
    #text-enhancer-subtitle {
      font-size: 14px;
      opacity: 0.9;
      margin-top: 4px;
      font-weight: 400;
    }
    
    #text-enhancer-close {
      background: transparent;
      border: none;
      color: white;
      font-size: 22px;
      cursor: pointer;
      padding: 0;
      margin-left: 10px;
      transition: transform 0.2s;
    }
    
    #text-enhancer-close:hover {
      transform: scale(1.1);
    }
    
    #text-enhancer-tabs {
      display: flex;
      background-color: #1c1c24;
      border-bottom: 1px solid #27272a;
    }
    
    .text-enhancer-tab {
      padding: 14px 20px;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      font-size: 14px;
      font-weight: 500;
      color: #4e4e50;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .text-enhancer-tab.active {
      border-bottom-color: #8b5cf6;
      color: #4f46e5;
      background-color: rgba(167, 139, 250, 0.05);
    }
    
    .text-enhancer-tab:hover:not(.active) {
      background-color: #232336;
      color: #4b5563;
    }
    
    .tab-icon {
      font-size: 16px;
      margin-right: 8px;
      display: inline-block;
    }
    
    #text-enhancer-content {
      padding: 20px;
      overflow-y: auto;
    }
    
    .text-enhancer-tab-content {
      display: none;
    }
    
    .text-enhancer-tab-content.active {
      display: flex;
      flex-direction: column;
      justify-content: center;
    
    }
    
    /* Fix for text visibility in tabs */
    .text-enhancer-tab span {
      color: inherit;
      display: inline-block;
    }
    
    .text-enhancer-label {
      display: block;
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 500;
      color: #c4b5fd;
    }
    
    .text-enhancer-textarea {
    color:#fff; 
      width: auto;
      padding: 12px 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      resize: vertical;
      min-height: 140px;
      margin-bottom: 16px;
      font-family: inherit;
      transition: all 0.2s;
      background-color: #000;
      line-height: 1.5;
    }
    
    .text-enhancer-input:hover,
    .text-enhancer-textarea:hover {
      border-color: #9ca3af;
      background-color: #1c1c24;
    }
    
    .text-enhancer-input:focus,
    .text-enhancer-textarea:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
      background-color: #1c1c24;
    }
    
    .text-enhancer-textarea {
      min-height: 140px;
      resize: vertical;
      line-height: 1.5;
    }
    
    .text-enhancer-select {
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      margin-bottom: 16px;
      background-color: #1c1c24;
      cursor: pointer;
      transition: all 0.2s;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 36px;
    }
    
    .text-enhancer-select:hover {
      border-color: #9ca3af;
      background-color: #1c1c24;
    }
    
    .text-enhancer-select:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
      background-color: #1c1c24;
    }
    

    
    .text-enhancer-button-group {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      margin-top: 10px;
    }
    
    .text-enhancer-button {
      background-color: #6366f1;
      color: white;
      border: none;
      border-radius: 8px;
      padding: 12px 18px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 2px 4px rgba(99, 102, 241, 0.15);
    }
    
    .text-enhancer-button-primary {
      background-color: #6366f1;
      color: white;
    }
    
    .text-enhancer-button-primary:hover {
      background-color: #4f46e5;
      transform: translateY(-1px);
      box-shadow: 0 4px 6px rgba(99, 102, 241, 0.2);
    }
    
    .text-enhancer-button-primary:active {
      transform: translateY(0);
      box-shadow: 0 1px 2px rgba(99, 102, 241, 0.15);
    }
    
    .text-enhancer-button-primary:disabled {
      background-color: #a5b4fc;
      cursor: not-allowed;
      box-shadow: none;
      transform: none;
    }
    
    .text-enhancer-button-secondary {
      background-color: #232336;
      border: 1px solid #d1d5db;
      color: #4b5563;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    
    .text-enhancer-button-secondary:hover {
      background-color: #1c1c24;
      border-color: #9ca3af;
      color: #c4b5fd;
    }
    
    .text-enhancer-template-card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: all 0.2s;
    }
    
    .text-enhancer-template-card:hover {
      border-color: #8b5cf6;
      background-color: #1c1c24;
    }
    
    .text-enhancer-template-title {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 4px;
      color: #4b5563;
    }
    
    .text-enhancer-template-description {
      font-size: 13px;
      color: #4e4e50;
    }
    
    /* Checkbox container styling */
    .text-enhancer-checkbox-container {
      display: flex;
      align-items: center;
      margin: 16px 0;
      padding: 8px 12px;
      background-color: #1c1c24;
      border-radius: 6px;
    }
    
    /* Custom checkbox styling */
    .text-enhancer-checkbox {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid #8b5cf6;
      border-radius: 4px;
      margin-right: 10px;
      position: relative;
      cursor: pointer;
      transition: all 0.2s ease;
      background-color: #232336;
    }
    
    .text-enhancer-checkbox:checked {
      background-color: #8b5cf6;
    }
    
    .text-enhancer-checkbox:checked::after {
      content: '✓';
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 12px;
    }
    
    .text-enhancer-checkbox:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
    }
    
    .text-enhancer-checkbox-label {
      font-size: 14px;
      cursor: pointer;
      user-select: none;
    }
    
    /* Style for tab icons */
    .tab-icon {
      margin-right: 6px;
      font-size: 16px;
    }
  `;
  
  document.head.appendChild(styleEl);
}

// Create and show custom prompt popup
function showCustomPromptPopup() {
  // Add styles
  addCustomStyles();
  addContextEnhancerStyles();
  
  // Remove any existing popup
  const existingPopup = document.getElementById('text-enhancer-popup');
  if (existingPopup) {
    existingPopup.remove();
  }

  // Create popup container with modern responsive design
  const popup = document.createElement('div');
  popup.id = 'text-enhancer-popup';
  popup.className = 'text-enhancer-context-popup modern-popup';

  // Create header with improved design
  const header = document.createElement('div');
  header.className = 'text-enhancer-popup-header modern-header';
  
  const titleContainer = document.createElement('div');
  titleContainer.className = 'title-container';
  
  const title = document.createElement('h2');
  title.id = 'text-enhancer-title';
  title.textContent = '✨ Text-Enhancer';
  
  const subtitle = document.createElement('p');
  subtitle.id = 'text-enhancer-subtitle';
  subtitle.textContent = 'AI-powered writing enhancement';
  
  titleContainer.appendChild(title);
  titleContainer.appendChild(subtitle);
  
  const closeButton = document.createElement('button');
  closeButton.className = 'text-enhancer-close-btn modern-close';
  closeButton.innerHTML = '×';
  closeButton.addEventListener('click', () => {
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.95)';
    setTimeout(() => popup.remove(), 200);
  });
  
  header.appendChild(titleContainer);
  header.appendChild(closeButton);
  
  // Create tabs
  const tabsContainer = document.createElement('div');
  tabsContainer.id = 'text-enhancer-tabs';
  
  const tabs = [
    { id: 'custom', text: 'Custom Prompt', icon: '✏️' },
    { id: 'templates', text: 'Templates', icon: '📋' },
    { id: 'freelance', text: 'Freelance', icon: '💼' },
    { id: 'tone', text: 'Tone & Style', icon: '🎨' }
  ];
  
  tabs.forEach((tab, index) => {
    const tabButton = document.createElement('button');
    tabButton.className = `text-enhancer-tab ${index === 0 ? 'active' : ''}`;
    tabButton.dataset.tab = tab.id;
    
    // Create icon span
    const iconSpan = document.createElement('span');
    iconSpan.className = 'tab-icon';
    iconSpan.textContent = tab.icon;
    
    // Create text span with improved visibility
    const textSpan = document.createElement('span');
    textSpan.className = 'tab-text';
    textSpan.textContent = tab.text;
    
    // Add icon and text to button
    tabButton.appendChild(iconSpan);
    tabButton.appendChild(textSpan);
    
    tabButton.addEventListener('click', (e) => {
      // Set active tab
      document.querySelectorAll('.text-enhancer-tab').forEach(t => t.classList.remove('active'));
      
      // Make sure the button itself gets the active class, not the span inside it
      const clickedButton = e.target.closest('.text-enhancer-tab');
      clickedButton.classList.add('active');
      
      // Show active content
      document.querySelectorAll('.text-enhancer-tab-content').forEach(c => c.classList.remove('active'));
      document.getElementById(`text-enhancer-${tab.id}-content`).classList.add('active');
    });
    
    tabsContainer.appendChild(tabButton);
  });
  
  // Create content container
  const contentContainer = document.createElement('div');
  contentContainer.id = 'text-enhancer-content';
  
  // Create custom prompt tab content
  const customTabContent = document.createElement('div');
  customTabContent.id = 'text-enhancer-custom-content';
  customTabContent.className = 'text-enhancer-tab-content active';
  
  const promptLabel = document.createElement('label');
  promptLabel.className = 'text-enhancer-label';
  promptLabel.textContent = 'Custom Prompt:';
  promptLabel.htmlFor = 'text-enhancer-prompt';
  
  const promptInput = document.createElement('textarea');
  promptInput.id = 'text-enhancer-prompt';
  promptInput.className = 'text-enhancer-textarea';
  promptInput.placeholder = 'Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...';
  promptInput.rows = 3;
  
  const textLabel = document.createElement('label');
  textLabel.className = 'text-enhancer-label';
  textLabel.textContent = 'Text to Enhance:';
  textLabel.htmlFor = 'text-enhancer-text';
  
  const textInput = document.createElement('textarea');
  textInput.id = 'text-enhancer-text';
  textInput.className = 'text-enhancer-textarea';
  textInput.placeholder = 'Enter or paste text to enhance...';
  textInput.rows = 5;
  
  // Get text from focused element to populate the text input
  const focusedElement = getFocusedElement();
  let targetText = '';
  
  if (isEditableElement(focusedElement)) {
    targetText = getTextFromFocusedElement(focusedElement);
    if (targetText && targetText.trim() !== '') {
      // Populate the text input with the focused element's text
      textInput.value = targetText;
    }
  }
  
  customTabContent.appendChild(promptLabel);
  customTabContent.appendChild(promptInput);
  customTabContent.appendChild(textLabel);
  customTabContent.appendChild(textInput);
  
  // Create templates tab content
  const templatesTabContent = document.createElement('div');
  templatesTabContent.id = 'text-enhancer-templates-content';
  templatesTabContent.className = 'text-enhancer-tab-content';
  
  const templatesTitle = document.createElement('h3');
  templatesTitle.className = 'text-enhancer-subtitle';
  templatesTitle.textContent = 'Choose a Template';
  
  templatesTabContent.appendChild(templatesTitle);
  
  const templates = [
    { name: 'Professional Email', description: 'Formal and clear communication for business contexts', prompt: 'Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off.' },
    { name: 'Creative Writing', description: 'Engaging and imaginative content with vivid descriptions', prompt: 'Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth.' },
    { name: 'Academic Paper', description: 'Scholarly tone with formal language and structured arguments', prompt: 'Rewrite this text in an academic style with formal language, proper citations, and structured arguments.' },
    { name: 'Marketing Copy', description: 'Persuasive content that highlights benefits and drives action', prompt: 'Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action.' },
    { name: 'Technical Documentation', description: 'Clear, precise instructions and explanations', prompt: 'Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable.' }
  ];
  
  templates.forEach(template => {
    const templateCard = document.createElement('div');
    templateCard.className = 'text-enhancer-template-card';
    
    const templateName = document.createElement('h4');
    templateName.className = 'text-enhancer-template-name';
    templateName.textContent = template.name;
    
    const templateDescription = document.createElement('p');
    templateDescription.className = 'text-enhancer-template-description';
    templateDescription.textContent = template.description;
    
    const useTemplateButton = document.createElement('button');
    useTemplateButton.className = 'text-enhancer-button text-enhancer-button-primary';
    useTemplateButton.textContent = 'Use Template';
    useTemplateButton.addEventListener('click', () => {
      // Switch to custom tab
      document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();
      // Fill the prompt
      promptInput.value = template.prompt;
      // Focus the text input
      textInput.focus();
    });
    
    templateCard.appendChild(templateName);
    templateCard.appendChild(templateDescription);
    templateCard.appendChild(useTemplateButton);
    
    templatesTabContent.appendChild(templateCard);
  });
  
  // Create freelance tab content
  const freelanceTabContent = document.createElement('div');
  freelanceTabContent.id = 'text-enhancer-freelance-content';
  freelanceTabContent.className = 'text-enhancer-tab-content';
  
  const freelanceTitle = document.createElement('h3');
  freelanceTitle.className = 'text-enhancer-subtitle';
  freelanceTitle.textContent = 'Freelance Proposal Templates';
  
  freelanceTabContent.appendChild(freelanceTitle);
  
  const freelanceTemplates = [
    { name: 'Project Proposal', description: 'Formal project proposal with scope, timeline, and deliverables', prompt: 'Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure.' },
    { name: 'Cover Letter', description: 'Personalized introduction highlighting relevant skills and experience', prompt: 'Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position.' },
    { name: 'Client Pitch', description: 'Persuasive pitch focusing on client benefits and your unique value', prompt: 'Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition.' },
    { name: 'Follow-up Message', description: 'Professional follow-up to maintain relationship and prompt action', prompt: 'Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step.' }
  ];
  
  freelanceTemplates.forEach(template => {
    const templateCard = document.createElement('div');
    templateCard.className = 'text-enhancer-template-card';
    
    const templateName = document.createElement('h4');
    templateName.className = 'text-enhancer-template-name';
    templateName.textContent = template.name;
    
    const templateDescription = document.createElement('p');
    templateDescription.className = 'text-enhancer-template-description';
    templateDescription.textContent = template.description;
    
    const useTemplateButton = document.createElement('button');
    useTemplateButton.className = 'text-enhancer-button text-enhancer-button-primary';
    useTemplateButton.textContent = 'Use Template';
    useTemplateButton.addEventListener('click', () => {
      // Switch to custom tab
      document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();
      // Fill the prompt
      promptInput.value = template.prompt;
      // Focus the text input
      textInput.focus();
    });
    
    templateCard.appendChild(templateName);
    templateCard.appendChild(templateDescription);
    templateCard.appendChild(useTemplateButton);
    
    freelanceTabContent.appendChild(templateCard);
  });
  
  // Create tone & style tab content with emoji support
  const toneTabContent = document.createElement('div');
  toneTabContent.id = 'text-enhancer-tone-content';
  toneTabContent.className = 'text-enhancer-tab-content';
  
  const toneTitle = document.createElement('h3');
  toneTitle.className = 'text-enhancer-subtitle';
  toneTitle.textContent = 'Select Tone & Style';
  
  toneTabContent.appendChild(toneTitle);
  
  const toneLabel = document.createElement('label');
  toneLabel.className = 'text-enhancer-label';
  toneLabel.textContent = 'Tone:';
  toneLabel.htmlFor = 'text-enhancer-tone';
  
  const toneSelect = document.createElement('select');
  toneSelect.id = 'text-enhancer-tone';
  toneSelect.className = 'text-enhancer-select';
  
  const tones = [
    { value: '', text: 'Select a tone...', icon: '' },
    { value: 'professional', text: 'Professional', icon: '👔' },
    { value: 'friendly', text: 'Friendly', icon: '😊' },
    { value: 'confident', text: 'Confident', icon: '💪' },
    { value: 'empathetic', text: 'Empathetic', icon: '❤️' },
    { value: 'enthusiastic', text: 'Enthusiastic', icon: '🎉' },
    { value: 'humorous', text: 'Humorous', icon: '😄' },
    { value: 'formal', text: 'Formal', icon: '🎩' },
    { value: 'casual', text: 'Casual', icon: '👋' },
    { value: 'persuasive', text: 'Persuasive', icon: '🔍' },
    { value: 'inspirational', text: 'Inspirational', icon: '✨' }
  ];
  
  tones.forEach(tone => {
    const option = document.createElement('option');
    option.value = tone.value;
    option.textContent = tone.icon ? `${tone.icon} ${tone.text}` : tone.text;
    toneSelect.appendChild(option);
  });
  
  const styleLabel = document.createElement('label');
  styleLabel.className = 'text-enhancer-label';
  styleLabel.textContent = 'Style:';
  styleLabel.htmlFor = 'text-enhancer-style';
  
  const styleSelect = document.createElement('select');
  styleSelect.id = 'text-enhancer-style';
  styleSelect.className = 'text-enhancer-select';
  
  const styles = [
    { value: '', text: 'Select a style...', icon: '' },
    { value: 'concise', text: 'Concise', icon: '✂️' },
    { value: 'descriptive', text: 'Descriptive', icon: '🖌️' },
    { value: 'analytical', text: 'Analytical', icon: '📊' },
    { value: 'storytelling', text: 'Storytelling', icon: '📚' },
    { value: 'technical', text: 'Technical', icon: '⚙️' },
    { value: 'conversational', text: 'Conversational', icon: '💬' },
    { value: 'academic', text: 'Academic', icon: '🎓' },
    { value: 'poetic', text: 'Poetic', icon: '🌹' },
    { value: 'journalistic', text: 'Journalistic', icon: '📰' },
    { value: 'instructional', text: 'Instructional', icon: '📝' }
  ];
  
  styles.forEach(style => {
    const option = document.createElement('option');
    option.value = style.value;
    option.textContent = style.icon ? `${style.icon} ${style.text}` : style.text;
    styleSelect.appendChild(option);
  });
  
  // Add emoji support checkbox
  const emojiContainer = document.createElement('div');
  emojiContainer.className = 'text-enhancer-checkbox-container';
  
  const emojiCheckbox = document.createElement('input');
  emojiCheckbox.type = 'checkbox';
  emojiCheckbox.id = 'text-enhancer-emoji';
  emojiCheckbox.className = 'text-enhancer-checkbox';
  
  const emojiLabel = document.createElement('label');
  emojiLabel.htmlFor = 'text-enhancer-emoji';
  emojiLabel.className = 'text-enhancer-checkbox-label';
  emojiLabel.textContent = 'Include emojis for emotional emphasis';
  
  emojiContainer.appendChild(emojiCheckbox);
  emojiContainer.appendChild(emojiLabel);
  
  const instructionsLabel = document.createElement('label');
  instructionsLabel.className = 'text-enhancer-label';
  instructionsLabel.textContent = 'Additional Instructions (optional):';
  instructionsLabel.htmlFor = 'text-enhancer-instructions';
  
  const instructionsInput = document.createElement('textarea');
  instructionsInput.id = 'text-enhancer-instructions';
  instructionsInput.className = 'text-enhancer-textarea';
  instructionsInput.placeholder = 'Add any specific instructions or requirements...';
  instructionsInput.rows = 2;
  
  const toneButtonContainer = document.createElement('div');
  toneButtonContainer.className = 'text-enhancer-button-group';
  
  const toneApplyButton = document.createElement('button');
  toneApplyButton.className = 'text-enhancer-button text-enhancer-button-primary';
  toneApplyButton.innerHTML = '🎨 Apply Tone & Style';
  toneApplyButton.addEventListener('click', () => {
    const tone = toneSelect.value;
    const style = styleSelect.value;
    const instructions = instructionsInput.value.trim();
    const includeEmojis = emojiCheckbox.checked;
    
    if (!tone && !style) {
      showToast('Please select at least one tone or style', 'error');
      return;
    }
    
    // Switch to custom tab
    document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();
    
    // Create prompt based on selections
    let customPrompt = 'Rewrite the following text';
    
    if (tone) {
      customPrompt += ` in a ${tone} tone`;
    }
    
    if (style) {
      customPrompt += tone ? ` and ${style} style` : ` in a ${style} style`;
    }
    
    if (instructions) {
      customPrompt += `. Additional instructions: ${instructions}`;
    }
    
    if (includeEmojis) {
      customPrompt += '. Include appropriate emojis to emphasize emotions and key points.';
    }
    
    // Fill the prompt
    promptInput.value = customPrompt;
    
    // Focus the text input
    textInput.focus();
  });
  
  toneButtonContainer.appendChild(toneApplyButton);
  
  toneTabContent.appendChild(toneLabel);
  toneTabContent.appendChild(toneSelect);
  toneTabContent.appendChild(styleLabel);
  toneTabContent.appendChild(styleSelect);
  toneTabContent.appendChild(emojiContainer);
  toneTabContent.appendChild(instructionsLabel);
  toneTabContent.appendChild(instructionsInput);
  toneTabContent.appendChild(toneButtonContainer);

  // Get focused element or search box - we already did this above when populating the text input
  // const focusedElement is already defined above

  // Create button container for custom tab
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'text-enhancer-button-group';
  
  const cancelButton = document.createElement('button');
  cancelButton.className = 'text-enhancer-button text-enhancer-button-secondary';
  cancelButton.textContent = 'Cancel';
  cancelButton.addEventListener('click', () => popup.remove());
  
  const generateButton = document.createElement('button');
  generateButton.className = 'text-enhancer-button text-enhancer-button-primary';
  generateButton.textContent = 'Generate';
  generateButton.addEventListener('click', () => {
    const customPrompt = promptInput.value.trim();
    const textToEnhance = textInput.value.trim();
    
    if (!customPrompt) {
      showToast('Please enter a custom prompt', 'error');
      return;
    }
    
    if (!textToEnhance) {
      showToast('Please enter text to enhance', 'error');
      return;
    }
    
    // Show loading state
    generateButton.disabled = true;
    generateButton.textContent = 'Generating...';
    
    // Send message to background script with custom prompt
    chrome.runtime.sendMessage(
      {
        action: 'enhance-text-with-gemini',
        text: textToEnhance,
        context: 'general',
        customPrompt: customPrompt
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
              : 'Failed to enhance text',
            'error'
          );
        }
      }
    );
  });
  
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(generateButton);
  customTabContent.appendChild(buttonContainer);
  
  // Add all tab content to content container
  contentContainer.appendChild(customTabContent);
  contentContainer.appendChild(templatesTabContent);
  contentContainer.appendChild(freelanceTabContent);
  contentContainer.appendChild(toneTabContent);
  
  // Add elements to popup
  popup.appendChild(header);
  popup.appendChild(tabsContainer);
  popup.appendChild(contentContainer);

  // Add popup to page
  document.body.appendChild(popup);
  
  // Focus the prompt textarea
  promptInput.focus();
}

// Function to show context enhancer popup
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
  injectTheme();
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
      transform: translate(-50%, -50%) scale(0.95);
      width: min(420px, 95vw);
      max-height: min(85vh, 650px);
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #ffffff;
      border-radius: 16px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1);
      padding: 0;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      z-index: 2147483647;
      backdrop-filter: blur(20px);
      opacity: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: popupSlideIn 0.3s ease-out forwards;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.15);
      overflow: hidden;
    }
    
    @keyframes popupSlideIn {
      to {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
    
    @media (max-width: 480px) {
      .text-enhancer-context-popup {
        width: 95vw;
        max-height: 90vh;
        border-radius: 12px;
      }
    }
    
    .text-enhancer-popup-header {
      background: linear-gradient(135deg, #7c3aed, #a78bfa);
      color: #fff;
      padding: 18px 24px 10px 24px;
      border-radius: 14px 14px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .text-enhancer-popup-header h2 {
      font-size: 20px;
      font-weight: 700;
      margin: 0;
      color: #fff;
    }
    .text-enhancer-close-btn {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 22px;
      font-weight: 700;
      cursor: pointer;
      margin-left: 12px;
      transition: color 0.2s;
    }
    .text-enhancer-close-btn:hover {
      color: #c4b5fd;
    }
    .text-enhancer-content {
      padding: 20px 20px 18px 20px;
      background: #232336;
    }
    .text-enhancer-section {
      margin-bottom: 18px;
      display:flex;
      flex-direction: column;
       

    }
    .text-enhancer-section label {
      color: #d1d5db;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 6px;
      display: block;
    }
    .text-enhancer-input {
      width: 100%;
      padding: 16px;
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.08);
      color: #fff;
      font-size: 14px;
      font-family: inherit;
      resize: vertical;
      min-height: 100px;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }
    .text-enhancer-input::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-style: italic;
    }
    .text-enhancer-input:focus {
      outline: none;
      border-color: rgba(16, 185, 129, 0.6);
      background: rgba(255, 255, 255, 0.12);
      box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-1px);
    }
    .text-enhancer-input:hover {
      border-color: rgba(255, 255, 255, 0.25);
      background: rgba(255, 255, 255, 0.1);
    }
    .text-enhancer-options {
      display: flex;
      gap: 18px;
      margin-bottom: 16px;
    }
    .text-enhancer-option {
      display: flex;
      align-items: center;
      gap: 7px;
    }
    .text-enhancer-option label {
      color: #c4b5fd;
      font-size: 14px;
      font-weight: 400;
      margin: 0;
    }
    .text-enhancer-buttons {
      display: flex;
      gap: 12px;
      margin-top: 24px;
      flex-wrap: wrap;
    }
    .text-enhancer-button {
      flex: 1;
      min-width: 120px;
      padding: 14px 24px;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }
    .text-enhancer-button:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    .text-enhancer-button:hover:before {
      left: 100%;
    }
    .text-enhancer-cancel-btn {
      background: rgba(255, 255, 255, 0.1);
      color: #fff;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    .text-enhancer-cancel-btn:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    }
    .text-enhancer-generate-btn {
      background: linear-gradient(135deg, #10b981, #059669);
      color: #fff;
      box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
    }
    .text-enhancer-generate-btn:hover {
      background: linear-gradient(135deg, #059669, #047857);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
    }
    .text-enhancer-generate-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
    @media (max-width: 480px) {
      .text-enhancer-buttons {
        flex-direction: column;
      }
      .text-enhancer-button {
        min-width: unset;
      }
    }
    @media (max-width: 500px) {
      .text-enhancer-context-popup {
        width: 98vw;
        min-width: 0;
      }
    }
  `;
  document.head.appendChild(style);
}


function showReviewPopup() {
  if (document.querySelector('.text-enhancer-feedback-popup')) return;
  const popup = document.createElement('div');
  popup.className = 'text-enhancer-feedback-popup';
  popup.style.cssText = `position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;`;

  const msg = document.createElement('p');
  msg.textContent = SUPPORT_MESSAGES[Math.floor(Math.random()*SUPPORT_MESSAGES.length)];
  msg.style.margin='0 0 12px 0';
  popup.appendChild(msg);

  const btn = document.createElement('button');
  btn.textContent = 'Leave feedback';
  btn.style.cssText = 'display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;';
  btn.onclick = () => {
    // open feedback page
    window.open('https://tone-genie.vercel.app/feedback', '_blank');
    chrome.storage.local.set({ textEnhancerReviewed: true });
    popup.remove();
  };

  const later = document.createElement('button');
  later.textContent = 'Later';
  later.style.cssText='display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;';
  later.onclick = () => popup.remove();
  popup.appendChild(btn);
  popup.appendChild(later);

  document.body.appendChild(popup);
}



const originalTextMap = new WeakMap(); // store original text per element for revert
let teTargetEl = null; // currently focused editable element for inline toolbar

// --- Revert / Regenerate inline toolbar ---
function getTextFromElement(el) {
  if (!el) return '';
  if (el.tagName && (el.tagName.toLowerCase() === 'textarea' || el.tagName.toLowerCase() === 'input')) {
    return el.value || '';
  }
  return el.innerText || el.textContent || '';
}

function renderActionBar(targetEl) {
  if (!targetEl) return;
  // Remove existing bar if any
  removeActionBar();
  const bar = document.createElement('div');
  // attach original data onto bar for quick access
  const origEntry = originalTextMap.get(targetEl);
  if (origEntry) {
    bar.dataset.originalText = origEntry.text || '';
    bar.dataset.originalParams = JSON.stringify(origEntry.params || {});
  }
  bar.className = 'te-action-bar';
  bar.style.cssText = `position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);`;

  const btnClose = document.createElement('button');
  btnClose.textContent = '×';
  btnClose.style.cssText = 'background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;';

  const btnRevert = document.createElement('button');
  btnRevert.textContent = '↩ Revert';
  btnRevert.style.cssText = 'background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;';

  const btnRegenerate = document.createElement('button');
  btnRegenerate.textContent = '🔄 Regenerate';
  btnRegenerate.style.cssText = 'background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;';

  bar.appendChild(btnClose);
  bar.appendChild(btnRevert);
  bar.appendChild(btnRegenerate);

  document.body.appendChild(bar);
  positionBar();

  function positionBar() {
    const rect = targetEl.getBoundingClientRect();
    bar.style.top = `${window.scrollY + rect.bottom + 4}px`;
    bar.style.left = `${window.scrollX + rect.left}px`;
  }

  window.addEventListener('scroll', positionBar, { passive: true });
  const observer = new ResizeObserver(positionBar);
  observer.observe(targetEl);

  function cleanup() {
    bar.remove();
    window.removeEventListener('scroll', positionBar);
    observer.disconnect();
  }

  btnRevert.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const originalText = bar.dataset.originalText || '';
    const originalParams = bar.dataset.originalParams ? JSON.parse(bar.dataset.originalParams) : null;
    console.debug('[TE] Revert click', originalText);
    
    // Clean up first to prevent glitches
    cleanup();
    
    // Then revert the text
    setTimeout(() => {
      setTextInFocusedElement(targetEl, originalText, originalParams);
    }, 50);
  });

  btnRevert.addEventListener('mousedown', e => e.stopPropagation());
  btnRegenerate.addEventListener('mousedown', e => e.stopPropagation());
  btnClose.addEventListener('click', () => cleanup());

  btnRegenerate.addEventListener('click', () => {
    const entryText = bar.dataset.originalText || '';
    const entryParams = bar.dataset.originalParams ? JSON.parse(bar.dataset.originalParams) : null;
    btnRegenerate.disabled = true;
    btnRegenerate.textContent = '…';
    chrome.runtime.sendMessage({
      action: entryParams && entryParams.action ? entryParams.action : 'enhance-text-with-gemini',
      text: entryText,
      context: entryParams && entryParams.context ? entryParams.context : 'general',
      customPrompt: entryParams ? entryParams.customPrompt : undefined,
      tone: entryParams ? entryParams.tone : undefined,
      includeEmojis: entryParams ? entryParams.includeEmojis : false
    }, (response) => {
      btnRegenerate.disabled = false;
      btnRegenerate.textContent = '🔄 Regenerate';
      if (response && response.success) {
        setTextInFocusedElement(targetEl, response.enhancedText);
      } else {
        console.error('Regenerate failed', response && response.error);
      }
    });
  });

  // auto cleanup when element loses focus or user types
  const keyListener = () => cleanup();
  targetEl.addEventListener('keydown', keyListener, { once: true });
  // Do NOT auto-cleanup on blur, as clicking buttons steals focus and removes the bar before handler fires

  // expose for other calls
  window.__teCleanupBar = cleanup;
}

function removeActionBar() {
  if (window.__teCleanupBar) {
    window.__teCleanupBar();
    window.__teCleanupBar = null;
  }
}

// --- Platform-specific editable selectors ---
// Map of domains to selectors for their main text inputs/editors
const platformHandlers = {
  // Updated selector: try DM composer textbox specifically, fallback to any contenteditable
  'instagram.com': { selector: 'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]' },
  'x.com':   { selector: '[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]' },
  'web.whatsapp.com': { selector: '[contenteditable="true"][data-tab][data-tab!="1"]' },
  // Generic fallback for all other sites
  '*': { selector: 'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]' }
};

// Helper: given a DOM node, attempt to find an editable element based on platform-specific selectors
function findPlatformEditable(node) {
  const host = window.location.hostname;
  let matched = false;
  for (const domain in platformHandlers) {
    if (domain !== '*' && host.endsWith(domain)) {
      matched = true;
      const sel = platformHandlers[domain].selector;
      // Try closest match first (to handle nested clicks)
      const closestMatch = node && node.closest ? node.closest(sel) : null;
      if (closestMatch) return closestMatch;
      // Fallback to first visible match on page
      const anyMatch = document.querySelector(sel);
      if (anyMatch) return anyMatch;
    }
  }
  // No specific handler match – use generic fallback
  if (!matched) {
    const genericSel = platformHandlers['*'].selector;
    const closest = node && node.closest ? node.closest(genericSel) : null;
    if (closest) return closest;
    const anyGeneric = document.querySelector(genericSel);
    if (anyGeneric) return anyGeneric;
  } 
  return null;
}
function quickEnhanceAction(){
  if(!teTargetEl)return;
  const txt = getTextFromFocusedElement(teTargetEl) || '';
  originalTextMap.set(teTargetEl, txt);

  // ensure target is focused for enhanceText flow
  teTargetEl.focus();
  enhanceText();
}
function revertAction(){
  if(!teTargetEl)return;
  const orig = originalTextMap.get(teTargetEl);
  if(orig!==undefined){
    setTextInFocusedElement(teTargetEl, orig);
    showToast('Reverted to original text','info');
  } else {
    showToast('No original text stored','error');
  }
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'enhance-text') {
    enhanceText();
    incrementUsageCountAndMaybePrompt();
    sendResponse({ success: true });
  } else if (message.action === 'show-custom-prompt') {
    showCustomPromptPopup();
    sendResponse({ success: true });
  } else if (message.action === 'show-context-enhancer') {
    showContextEnhancerPopup();
    sendResponse({ success: true });
  } else if (message.action === 'ping') {
    // Respond to ping to confirm content script is loaded
    sendResponse({ status: 'content_script_ready' });
  }
  return true; // Keep the message channel open for async responses
});
 

// Mark review as completed if user is on the hosted feedback page
try{
  if(location.hostname.includes('tone-genie.vercel.app') && location.pathname.includes('feedback')){
    chrome.storage&&chrome.storage.local&&chrome.storage.local.set({textEnhancerReviewed:true});
  }
}catch(err){/* ignore */}

// Initialize the extension
(function() {
  // Send a ready message to the background script
  try {
    chrome.runtime.sendMessage({ action: 'content_script_ready' }, function(response) {
      if (chrome.runtime.lastError) {
        //console.log('Background script not ready yet:', chrome.runtime.lastError.message);
      } else {
        //console.log('Connection with background script established');
      }
    });
  } catch (error) {
    console.error('Error sending ready message:', error);
  }
  // Close the IIFE function wrapper
})();
}
