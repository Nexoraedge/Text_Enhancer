import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the landing page by default
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'landing.html'));
});

// Keep the test page available at /test
app.get('/test', (req, res) => {
  res.sendFile(path.join(__dirname, 'test-page.html'));
});

// --- Gemini AI Proxy Endpoint ---
import dotenv from 'dotenv';
dotenv.config();
import fetch from 'node-fetch';

app.use(express.json());

app.post('/api/enhance', async (req, res) => {
  const { text, options = {} } = req.body; // Default options to an empty object
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ success: false, error: 'Server API key not configured.' });
  }
  try {
    // Call Gemini API (replace with actual Gemini endpoint and payload as needed)
    const geminiRes = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: options.prompt || text }] },],
        generationConfig: options.generationConfig || { temperature: 0.7, topK: 40, topP: 0.95, maxOutputTokens: 1024 }
      })
    });
    const geminiData = await geminiRes.json();
    if (geminiData.candidates && geminiData.candidates[0] && geminiData.candidates[0].content && geminiData.candidates[0].content.parts) {
      const enhancedText = geminiData.candidates[0].content.parts.map(p => p.text).join(' ');
      res.json({ success: true, enhancedText });
    } else {
      console.error('Gemini API Error:', geminiData.error || geminiData);
      res.status(500).json({ success: false, error: 'AI response error', details: geminiData.error || geminiData });
    }
  } catch (error) {
    console.error('Fetch/Server Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  //console.log(`Server running at http://localhost:${PORT}`);
  //console.log(`Open http://localhost:${PORT} to view the landing page.`);
  //console.log(`Open http://localhost:${PORT}/test to test the extension.`);
});
