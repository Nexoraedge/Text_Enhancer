/*
  Text-Enhancer – Gemini helper (proxy only)
  -----------------------------------------
  All AI calls are proxied to the Tone-Genie backend; the extension bundles
  ZERO remote or eval’d code and fully complies with Chrome Manifest V3.
*/

// Backend REST endpoint (overrideable via chrome.storage.local → apiBaseUrl)
const DEFAULT_API_BASE = 'https://tone-genie.vercel.app/api/enhance';

// Generation defaults (mirrors backend defaults)
const DEFAULT_GENERATION_CONFIG = { temperature: 0.7 };

// Back-compat no-op (older code may still call it)
export function initGeminiApi() {
  return null;
}

/**
 * Enhance text via hosted backend.
 * @param {*}      _apiKey   Ignored – backend holds the real key.
 * @param {string} text      User text / prompt.
 * @param {object} context   Optional: customPrompt, includeEmojis, contextType.
 * @returns {Promise<string>} Enhanced text.
 */
export async function enhanceTextWithGemini(_apiKey, text, context = {}) {
  if (!text) throw new Error('No text provided');

  const body = {
    text,
    options: {
      prompt: context.customPrompt,
      includeEmojis: context.includeEmojis ?? false,
      generationConfig: DEFAULT_GENERATION_CONFIG,
      contextType: context.contextType ?? 'general',
    },
  };

  // Allow endpoint override
  let endpoint = DEFAULT_API_BASE;
  try {
    const { apiBaseUrl } = await chrome.storage?.local?.get?.('apiBaseUrl') ?? {};
    if (apiBaseUrl) endpoint = apiBaseUrl;
  } catch {
    /* ignore storage errors */
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errJson = await res.json().catch(() => ({}));
    throw new Error(errJson.error || `Backend error ${res.status}`);
  }

  const data = await res.json();
  if (!data.success) throw new Error(data.error || 'Enhancement failed');
  return data.enhancedText.trim();
}

// Minimal stubs retained for existing imports
export function getContextSpecificPrompt() { return ''; }
export function detectContextType()       { return 'default'; }
