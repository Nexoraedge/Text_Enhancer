import React, { useState, useEffect } from 'react';
import './Popup.css';

function Popup() {
  // Pre-fill with the provided API key
  const [apiKey, setApiKey] = useState('AIzaSyDa5zBDlmWtrVigdkcvjuhOcSB3TOYo-M8');
  const [status, setStatus] = useState('API key pre-filled');
  const [activeTab, setActiveTab] = useState('settings');
  const [testText, setTestText] = useState('');
  const [enhancedText, setEnhancedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [contextType, setContextType] = useState('general');
  const [includeEmojis, setIncludeEmojis] = useState(false);

  useEffect(() => {
    // Load API key from storage when popup opens
    chrome.storage.sync.get(['geminiApiKey'], (result) => {
      if (result.geminiApiKey) {
        setApiKey(result.geminiApiKey);
        setStatus('API key is set');
      } else {
        setStatus('Please set your Gemini API key');
      }
    });
  }, []);

  const validateApiKey = (key) => {
    if (!key || key.trim() === '') {
      return { valid: false, message: 'API key cannot be empty' };
    }
    
    if (!key.match(/^[A-Za-z0-9_-]+$/)) {
      return { valid: false, message: 'Invalid API key format' };
    }
    
    return { valid: true };
  };

  const saveApiKey = () => {
    const validation = validateApiKey(apiKey);
    
    if (validation.valid) {
      chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
        setStatus('API key saved successfully!');
        setTimeout(() => setStatus(''), 3000);
      });
    } else {
      setStatus(validation.message);
    }
  };

  const testApiConnection = () => {
    setStatus('Testing API connection...');
    
    chrome.storage.sync.get(['geminiApiKey'], async (result) => {
      if (!result.geminiApiKey) {
        setStatus('API key not found. Please set it in the Settings tab.');
        return;
      }
      
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash?key=${result.geminiApiKey}`);
        const data = await response.json();
        
        if (response.ok) {
          setStatus('API connection successful! Your API key is working.');
        } else {
          setStatus(`API Error: ${data.error?.message || 'Unknown error'}`); 
        }
      } catch (error) {
        setStatus(`Connection Error: ${error.message}`);
      }
    });
  };

  const testEnhancement = async () => {
    if (!testText.trim()) {
      setStatus('Please enter some text to enhance');
      return;
    }

    if (!apiKey.trim()) {
      setStatus('Please set your Gemini API key first');
      return;
    }

    setIsProcessing(true);
    setStatus('Enhancing text...');

    try {
      // Create a custom prompt if emojis are requested
      let customPrompt = null;
      if (includeEmojis) {
        customPrompt = `Enhance this text in a ${contextType} style. Make it more polished, clear, and effective. Include appropriate emojis for emphasis and emotion throughout the text. Make sure the emojis feel natural and enhance the message.`;
      }
      
      // Send message to background script
      chrome.runtime.sendMessage({
        action: 'enhance-text-with-gemini',
        text: testText,
        context: contextType,
        customPrompt: customPrompt
      }, (response) => {
        setIsProcessing(false);
        
        if (response && response.success) {
          setEnhancedText(response.enhancedText);
          setStatus('Text enhanced successfully!');
          setTimeout(() => setStatus(''), 3000);
        } else {
          const errorMsg = response && response.error ? response.error : 'Unknown error occurred';
          setStatus(`Error: ${errorMsg}`);
        }
      });
    } catch (error) {
      setIsProcessing(false);
      setStatus(`Error: ${error.message || 'Unknown error occurred'}`);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(enhancedText).then(() => {
      setStatus('Copied to clipboard!');
      setTimeout(() => setStatus(''), 3000);
    }).catch(err => {
      setStatus(`Error copying to clipboard: ${err.message}`);
    });
  };

  // Helper function to create mock contexts for testing
  const getMockContextForType = (type) => {
    switch (type) {
      case 'email':
        return {
          url: 'https://mail.google.com/mail/compose',
          title: 'Compose Email - Gmail',
          conversationHint: 'professional'
        };
      case 'social':
        return {
          url: 'https://twitter.com/compose/tweet',
          title: 'Compose Tweet',
          conversationHint: 'casual'
        };
      case 'professional':
        return {
          url: 'https://www.linkedin.com/feed/',
          title: 'LinkedIn Feed',
          conversationHint: 'professional'
        };
      case 'romantic':
        return {
          url: 'https://www.messenger.com/',
          title: 'Chat with Crush',
          conversationHint: 'personal'
        };
      case 'academic':
        return {
          url: 'https://scholar.google.com/',
          title: 'Google Scholar',
          conversationHint: 'academic'
        };
      default:
        return {
          url: window.location.href,
          title: document.title,
          conversationHint: 'neutral'
        };
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-header">
        <h1>Text-Enhancer</h1>
        <p className="tagline">Style your text with AI</p>
      </div>
      
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <span className="tab-icon">⚙️</span> Settings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'test' ? 'active' : ''}`}
          onClick={() => setActiveTab('test')}
        >
          <span className="tab-icon">✨</span> Try It
        </button>
        <button 
          className={`tab-btn ${activeTab === 'help' ? 'active' : ''}`}
          onClick={() => setActiveTab('help')}
        >
          <span className="tab-icon">❓</span> Help
        </button>
      </div>
      
      {activeTab === 'settings' && (
        <div className="tab-content">
          <div className="api-key-section">
            <label htmlFor="apiKey">Gemini API Key:</label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Gemini API key"
            />
            <button onClick={saveApiKey} disabled={isProcessing}>Save API Key</button>
            <button onClick={testApiConnection} disabled={isProcessing} className="secondary-btn">Test API Connection</button>
          </div>
          
          <p className="status-message">{status}</p>
          
          <div className="shortcut-info">
            <h3>Keyboard Shortcuts:</h3>
            <ul>
              <li>Press <strong>Ctrl+G</strong> to quickly enhance text in any input field</li>
              <li>Press <strong>Ctrl+Shift+O</strong> to open the custom prompt popup with templates</li>
              <li>Press <strong>Ctrl+Shift+H</strong> to open the context-based text generator</li>
            </ul>
          </div>
        </div>
      )}
      
      {activeTab === 'test' && (
        <div className="tab-content">
          <div className="test-section">
            <div className="option-row">
              <div className="option-group">
                <label htmlFor="contextType">Style:</label>
                <select 
                  id="contextType" 
                  value={contextType} 
                  onChange={(e) => setContextType(e.target.value)}
                  disabled={isProcessing}
                  className="styled-select"
                >
                  <option value="general">General Professional</option>
                  <option value="email">Email Communication</option>
                  <option value="social">Social Media</option>
                  <option value="professional">Business/Corporate</option>
                  <option value="romantic">Personal/Friendly</option>
                  <option value="academic">Academic/Technical</option>
                </select>
              </div>
              
              <div className="option-group emoji-option">
                <input
                  type="checkbox"
                  id="includeEmojis"
                  checked={includeEmojis}
                  onChange={(e) => setIncludeEmojis(e.target.checked)}
                  disabled={isProcessing}
                />
                <label htmlFor="includeEmojis">Include emojis for emotion and emphasis</label>
              </div>
            </div>
            
            <label htmlFor="testText">Enter text to enhance:</label>
            <textarea
              id="testText"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter your text here and we'll make it shine ✨"
              rows="5"
              disabled={isProcessing}
              className="styled-textarea"
            />
            
            <button 
              onClick={testEnhancement} 
              disabled={isProcessing || !testText.trim()}
              className="enhance-btn"
            >
              {isProcessing ? 'Enhancing...' : '✨ Enhance Text'}
            </button>
            
            {enhancedText && (
              <div className="result-section">
                <label htmlFor="enhancedText">Enhanced Text:</label>
                <textarea
                  id="enhancedText"
                  value={enhancedText}
                  readOnly
                  rows="4"
                />
                <button onClick={copyToClipboard} className="copy-btn">
                  Copy to Clipboard
                </button>
              </div>
            )}
            
            <p className="status-message">{status}</p>
          </div>
        </div>
      )}
      
      {activeTab === 'help' && (
        <div className="tab-content">
          <div className="instructions">
            <h2>How to Use:</h2>
            <ol>
              <li>Focus on any text input field on a webpage</li>
              <li>Type your rough text</li>
              <li>Press <strong>Ctrl+G</strong> for quick enhancement</li>
              <li>Or press <strong>Ctrl+Shift+O</strong> for custom prompt options</li>
              <li>Or press <strong>Ctrl+Shift+H</strong> for context-based text generation</li>
              <li>The enhanced text will replace your original text</li>
            </ol>
            
            <h2>Key Features:</h2>
            <ul>
              <li><strong>Quick Enhancement:</strong> Instant text improvement with Ctrl+G</li>
              <li><strong>Custom Prompts:</strong> Create your own enhancement instructions</li>
              <li><strong>Context-Based Generation:</strong> Provide context and get humanized text</li>
              <li><strong>Templates:</strong> Pre-made prompts for common writing styles</li>
              <li><strong>Freelance Proposals:</strong> Generate professional proposals</li>
              <li><strong>Tone & Style:</strong> Adjust writing tone with emoji support</li>
            </ul>
            
            <h2>Style Options:</h2>
            <ul>
              <li><strong>Email Communication:</strong> Professional, clear messaging</li>
              <li><strong>Social Media:</strong> Engaging, attention-grabbing content</li>
              <li><strong>Business/Corporate:</strong> Formal, achievement-oriented</li>
              <li><strong>Personal/Friendly:</strong> Warm, emotionally engaging</li>
              <li><strong>Academic/Technical:</strong> Precise, scholarly language</li>
            </ul>
            
            <h2>Troubleshooting:</h2>
            <ul>
              <li>Make sure your API key is correctly entered</li>
              <li>Ensure you're focused on an editable text field</li>
              <li>If text isn't replaced, check clipboard for the enhanced text</li>
              <li>Try refreshing the page if the extension isn't responding</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
