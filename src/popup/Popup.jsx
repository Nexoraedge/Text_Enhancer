import React, { useState, useEffect } from 'react';

function Popup() {
  // Pre-fill with the provided API key
  const [apiKey, setApiKey] = useState('AIzaSyDa5zBDlmWtrVigdkcvjuhOcSB3TOYo-M8');
  const [status, setStatus] = useState('API key pre-filled');
  const [activeTab, setActiveTab] = useState('settings');
  const [testText, setTestText] = useState('');
  const [enhancedText, setEnhancedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [contextType, setContextType] = useState('general');

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
      // Create a mock context based on the selected context type
      const mockContext = getMockContextForType(contextType);
      
      // Send message to background script
      chrome.runtime.sendMessage({
        action: 'enhance-text-with-gemini',
        text: testText,
        context: mockContext
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
      <h1>Gemini Text Enhancer</h1>
      
      <div className="tabs">
        <button 
          className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
        <button 
          className={`tab-btn ${activeTab === 'test' ? 'active' : ''}`}
          onClick={() => setActiveTab('test')}
        >
          Test Enhancer
        </button>
        <button 
          className={`tab-btn ${activeTab === 'help' ? 'active' : ''}`}
          onClick={() => setActiveTab('help')}
        >
          Help
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
            <p>Press <strong>Ctrl+G</strong> to enhance text in any input field</p>
          </div>
        </div>
      )}
      
      {activeTab === 'test' && (
        <div className="tab-content">
          <div className="test-section">
            <label htmlFor="contextType">Context Type:</label>
            <select 
              id="contextType" 
              value={contextType} 
              onChange={(e) => setContextType(e.target.value)}
              disabled={isProcessing}
            >
              <option value="general">General</option>
              <option value="email">Email</option>
              <option value="social">Social Media</option>
              <option value="professional">Professional</option>
              <option value="romantic">Romantic</option>
              <option value="academic">Academic</option>
            </select>
            
            <label htmlFor="testText">Enter text to enhance:</label>
            <textarea
              id="testText"
              value={testText}
              onChange={(e) => setTestText(e.target.value)}
              placeholder="Enter your rough text here..."
              rows="4"
              disabled={isProcessing}
            />
            
            <button 
              onClick={testEnhancement} 
              disabled={isProcessing || !testText.trim()}
              className="enhance-btn"
            >
              {isProcessing ? 'Enhancing...' : 'Enhance Text'}
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
            <h2>How it works:</h2>
            <ol>
              <li>Focus on any text input field on a webpage</li>
              <li>Type your rough text</li>
              <li>Press <strong>Ctrl+G</strong> to enhance your text</li>
              <li>The enhanced text will replace your original text</li>
            </ol>
            
            <h2>Context Detection:</h2>
            <p>The extension automatically detects the context of the webpage to provide appropriate enhancements:</p>
            <ul>
              <li><strong>Email:</strong> Professional, clear communication</li>
              <li><strong>Social Media:</strong> Engaging, concise content</li>
              <li><strong>Professional:</strong> Formal, achievement-oriented</li>
              <li><strong>Personal Chat:</strong> Warm, emotionally engaging</li>
              <li><strong>Academic:</strong> Formal, precise language</li>
            </ul>
            
            <h2>Troubleshooting:</h2>
            <ul>
              <li>Make sure your Gemini API key is correctly entered</li>
              <li>Ensure you're focused on an editable text field</li>
              <li>Try refreshing the page if the extension isn't responding</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
