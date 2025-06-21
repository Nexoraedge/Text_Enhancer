import React, { useState, useEffect } from 'react';
import './Popup.css'; // Ensure this is imported for styling

// Simple icon components for tabs
const TestIcon = () => <span className="tab-icon">🧪</span>;
const HelpIcon = () => <span className="tab-icon">❓</span>;

const Popup = () => {
  const [textToEnhance, setTextToEnhance] = useState('');
  const [enhancedText, setEnhancedText] = useState('');
  const [activeTab, setActiveTab] = useState('test'); // 'test', 'help'
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [includeEmojis, setIncludeEmojis] = useState(true);

  const handleEnhanceText = () => {
    if (!textToEnhance.trim()) {
      setStatusMessage('Please enter some text to enhance.');
      return;
    }

    setIsLoading(true);
    setEnhancedText('');
    setStatusMessage('Enhancing text...');

    // Send message to background script to perform enhancement
    chrome.runtime.sendMessage(
      {
        action: 'enhance-text-with-gemini',
        text: textToEnhance,
        includeEmojis,
      },
      (response) => {
        setIsLoading(false);
        if (response && response.success) {
          setEnhancedText(response.enhancedText);
          setStatusMessage('Text enhanced successfully!');
        } else {
          setEnhancedText('');
          setStatusMessage(response.error || 'An unknown error occurred.');
        }
        setTimeout(() => setStatusMessage(''), 4000);
      }
    );
  };

  const handleCopyToClipboard = () => {
    if (enhancedText) {
      navigator.clipboard.writeText(enhancedText).then(() => {
        setStatusMessage('Copied to clipboard!');
        setTimeout(() => setStatusMessage(''), 2000);
      });
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'help':
        return (
          <div className="instructions">
            <h2>How to Use</h2>
            <ol>
              <li><strong>Quick Enhance:</strong> Select any text in an input field and press <kbd>Ctrl+Shift+G</kbd> to instantly enhance it.</li>
              <li><strong>Custom Prompt:</strong> Press <kbd>Ctrl+Shift+O</kbd> to open the custom prompt popup for advanced rewriting and templates.</li>
              <li><strong>Context Generator:</strong> Press <kbd>Ctrl+Shift+H</kbd> for context-based AI text generation with humanization and emoji options.</li>
            </ol>
            <h2>Learn More</h2>
            <a href="../public/landing.html" target="_blank" rel="noopener noreferrer" style={{color:'#a78bfa',textDecoration:'underline'}}>View the full landing page &rarr;</a>
          </div>
        );
      default:
        return (
          <div className="test-section tab-content">
            <label htmlFor="text-to-enhance">Enter text to enhance:</label>
            <textarea
              id="text-to-enhance"
              className="styled-textarea"
              placeholder="Paste or type your text here..."
              value={textToEnhance}
              onChange={e => setTextToEnhance(e.target.value)}
              rows={4}
            />
            <div className="option-row emoji-option">
              <input
                type="checkbox"
                id="emoji-toggle"
                checked={includeEmojis}
                onChange={e => setIncludeEmojis(e.target.checked)}
              />
              <label htmlFor="emoji-toggle">Include Emojis</label>
            </div>
            <button onClick={handleEnhanceText} disabled={isLoading} className="enhance-btn">
              {isLoading ? 'Enhancing...' : 'Enhance Text'}
            </button>

            {enhancedText && (
              <div className="result-section">
                <textarea
                  className="styled-textarea result-textarea"
                  value={enhancedText}
                  readOnly
                  rows="5"
                />
                <button onClick={handleCopyToClipboard} className="secondary-btn copy-btn">
                  Copy Result
                </button>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-header">
        <h1>Text-Enhancer</h1>
        <p className="tagline">Transform your writing with AI-powered enhancement tools</p>
      </div>
      <div className="tabs">
        <button className={`tab-btn${activeTab === 'test' ? ' active' : ''}`} onClick={() => setActiveTab('test')} title="Enhance Text" tabIndex={0}><TestIcon />Enhance</button>
        <button className={`tab-btn${activeTab === 'help' ? ' active' : ''}`} onClick={() => setActiveTab('help')} title="Help & Docs" tabIndex={0}><HelpIcon />Help</button>
      </div>
      <div className="tab-content">
        {statusMessage && <div className="status-message">{statusMessage}</div>}
        {renderContent()}
      </div>
    </div>
  );
};

export default Popup;
