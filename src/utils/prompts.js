// Generated prompt utilities for Text-Enhancer
// --------------------------------------------
// 1. QUICK ENHANCE PROMPT
export const QUICK_ENHANCE_PROMPT = `You are a skilled Writer. Improve the following text while keeping it natural and authentic.
Guidelines:
- Do Not inlcude Hashtags
- Fix grammar, spelling, and punctuation
- Improve clarity and flow
- Keep the original tone and personality
- Make it more engaging but not overly dramatic
- keep things Cathy and Feels Fastastic to read .
- Use Line gaps and all to make it more readable.
- don't Overdo things .
- Make sure to convey message in engaing way.
- For paragrahs and vast content use line gaps for better readability
- Use emojis sparingly (1-2 max) and only if they fit naturally
- Avoid excessive hashtags or repetitive phrases
- Make it sound human and genuiney
- Return ONLY the improved text

Text to enhance: "{text}"

Improved text:`;

// 2. TONE-SPECIFIC PROMPTS
export const TONE_PROMPTS = {
  professional: `Transform the following text into a professional, polished version suitable for business communication.

Guidelines:
- Use formal language and proper business etiquette
- Ensure clear, concise communication
- Maintain respect and professionalism
- Remove casual expressions and slang
- Keep the core message intact

Original text: "{text}"

Professional version:`,
  casual: `Rewrite the following text in a casual, friendly tone that feels natural and conversational.

Guidelines:
- Use everyday language and casual expressions
- Make it sound warm and approachable
- Remove overly formal language
- Keep it relatable and easy to understand
- Maintain the original meaning

Original text: "{text}"

Casual version:`,
  romantic: `Transform the following text into a romantic, loving tone that expresses deep affection and warmth.

Guidelines:
- Use tender, affectionate language
- Express emotions genuinely and beautifully
- Add romantic warmth without being overly dramatic
- Keep it heartfelt and sincere
- Maintain the original intent

Original text: "{text}"

Romantic version:`,
  poetic: `Rewrite the following text in a poetic, artistic style that captures beauty and emotion.

Guidelines:
- Use elegant, flowing language
- Add literary flair and artistic expression
- Create rhythm and beauty in the words
- Use metaphors and imagery when appropriate
- Keep the original meaning while elevating the style

Original text: "{text}"

Poetic version:`,
  humorous: `Transform the following text into a funny, lighthearted version that brings joy and laughter.

Guidelines:
- Add appropriate humor and wit
- Use playful language and expressions
- Keep it tasteful and appropriate
- Maintain the original message while making it entertaining
- Use clever wordplay when possible

Original text: "{text}"

Humorous version:`,
  confident: `Rewrite the following text with confidence and assertiveness while remaining respectful.

Guidelines:
- Use strong, decisive language
- Remove hesitation and uncertainty
- Express ideas with conviction
- Maintain professionalism and respect
- Keep the original meaning but make it more powerful

Original text: "{text}"

Confident version:`,
  empathetic: `Transform the following text to show understanding, compassion, and emotional intelligence.

Guidelines:
- Use caring, supportive language
- Show understanding and validation
- Express empathy and emotional awareness
- Maintain warmth and kindness
- Keep the original message while adding emotional depth

Original text: "{text}"

Empathetic version:`
};

// 3. CONTEXT-BASED PROMPTS
export const CONTEXT_PROMPTS = {
  email: `Enhance this text for email communication. Make it clear, professional, and well-structured.

Guidelines:
- Use proper email etiquette
- Ensure clear subject matter
- Make it concise and actionable
- Maintain appropriate tone for the context
- Fix any grammar or clarity issues

Text: "{text}"

Enhanced email text:`,
  social_media: `Optimize this text for social media platforms. Make it engaging, shareable, and platform-appropriate.

Guidelines:
- Make it attention-grabbing and engaging
- Use conversational tone
- Optimize for readability on mobile
- Add natural flow and rhythm
- Keep it concise and impactful

Text: "{text}"

Social media optimized text:`,
  academic: `Transform this text for academic or scholarly writing with proper formality and precision.

Guidelines:
- Use formal academic language
- Ensure precision and clarity
- Follow academic writing conventions
- Remove casual expressions
- Maintain scholarly tone

Text: "{text}"

Academic version:`,
  creative: `Enhance this text with creative flair and artistic expression while maintaining its core message.

Guidelines:
- Use vivid, descriptive language
- Add creative elements and imagery
- Make it more engaging and memorable
- Use literary devices appropriately
- Keep the original meaning intact

Text: "{text}"

Creative version:`
};

// 5. CONTEXT GENERATOR PROMPTS
export const CONTEXT_GENERATOR_PROMPTS = {
  generate_from_context: `Based on the following context, generate appropriate text that fulfills the user's request.

Context: "{context}"
Request: "{request}"
Tone: "{tone}"

Guidelines:
- Generate natural, human-like text
- Match the requested tone perfectly
- Ensure the content is relevant to the context
- Make it engaging and well-written
- Keep it appropriate length for the context

Generated text:`,
  expand_idea: `Take the following brief idea and expand it into a well-written, comprehensive text.

Idea: "{text}"
Context: "{context}"
Tone: "{tone}"

Guidelines:
- Expand the idea naturally and logically
- Add relevant details and examples
- Maintain consistency in tone
- Make it engaging and informative
- Keep it focused and relevant

Expanded text:`,
  rewrite_from_scratch: `Completely rewrite the following text from scratch while maintaining the core message.

Original: "{text}"
New tone: "{tone}"
Context: "{context}"

Guidelines:
- Start fresh with new wording
- Maintain the original meaning
- Apply the requested tone throughout
- Make it more engaging and polished
- Improve clarity and impact

Rewritten text:`
};

// 6. PLATFORM-SPECIFIC PROMPTS
export const PLATFORM_PROMPTS = {
  instagram: `Rewrite the following text so it feels like a natural chat. Provide exactly ONE rewritten version – no bullet points, no numbering, no Markdown formatting.

Guidelines:
- Use friendly, conversational language
- keep things Cathy and Feels Fastastic to read .
- Make sure to convey message in engaing way.
- Add relevant emojis if they enhance the message, but don't overdo it
- Do NOT add email-style elements such as “Subject:”, greetings like “Dear…”, or sign-offs
- Preserve the original intent and personality

Text: "{text}"

Rewritten DM:`,

twitter: `You are a skilled Writer. Improve the following text while keeping it natural and authentic.

STRICT RULE: Do NOT include any hashtags (no # symbols) anywhere in the rewritten text.

Guidelines:
- Keep it concise and punchy
- Tone must not be changed
- keep things Cathy and Feels Fastastic to read .
- Make sure to convey message in engaing way.
- Ensure clarity in limited characters  , must be in X word limit .
- Make it conversation-worthy.
- No need to use Hashtags.
- Write it as normal not as a Post as user can use it to chat with someone.

Text: "{text}"

X optimized:`
,
  whatsapp: `Optimize this text for WhatsApp messaging. Make it conversational and natural.

Guidelines:
- Use natural, conversational tone
- imporve the grammer and spellings
- Keep it appropriate for messaging
- Make it friendly and approachable
- Ensure easy readability on mobile
- Maintain personal touch
- Ensure line gaps when writing a paragrh or long content for better readability.

Text: "{text}"

WhatsApp optimized:`,

  linkedin: `Optimize this text for LinkedIn professional networking. Make it professional and engaging.

Guidelines:
- Use professional language
- Make it networking-appropriate
- Add professional value
- Keep it engaging for business context
- Make sure to write it in High energy
- The tone should be positive.
- Must Look Natural.
- Maintain professional credibility

Text: "{text}"

LinkedIn optimized:`
};

// 4. CUSTOM PROMPT HANDLER
export function buildCustomPrompt(userPrompt, text) {
  return `${userPrompt}

Text to enhance: "${text}"

Enhanced text:`;
}

// 4b. AI-WRITE (FREEFORM GENERATION) PROMPT HANDLER
export function buildAIWritePrompt(userPrompt) {
  return `
  You are an expert in writing and conversation now , ${userPrompt}\n\nGuidelines:\n- Do NOT provide any options or lists\n-Write things good that it feels to read like written by somone smart while kepping the tone perfect and sync\n - Make sure to write it as Humanized \n- Respond with only the requested content (no preamble, no explanations, no suggestions)\n- Do not add phrases like "Here is your result" or similar\n\nResult:`;
}

// 7. MAIN PROMPT BUILDER FUNCTION
// 7. MAIN PROMPT BUILDER FUNCTION (always ends with strict output instruction)
export function buildEnhancementPrompt(text, options = {}) {
  const { customPrompt, tone, context, platform, action } = options;

  // Special case: AI-write command should ignore existing text and use only the user's prompt with strict rules
  if (action === 'ai-write' && customPrompt) {
    return buildAIWritePrompt(customPrompt);
  }

  let basePrompt = null;

  if (customPrompt) basePrompt = buildCustomPrompt(customPrompt, text);

  if (!basePrompt && action === 'context-enhancer' && context) {
    basePrompt = CONTEXT_GENERATOR_PROMPTS.generate_from_context
      .replace('{context}', context)
      .replace('{request}', text)
      .replace('{tone}', tone || 'natural');

  }

  if (!basePrompt && platform && PLATFORM_PROMPTS[platform]) {
    basePrompt = PLATFORM_PROMPTS[platform].replace('{text}', text);
  }

  if (!basePrompt && context && CONTEXT_PROMPTS[context]) {
    basePrompt = CONTEXT_PROMPTS[context].replace('{text}', text);
  }

  if (!basePrompt && tone && TONE_PROMPTS[tone]) {
    basePrompt = TONE_PROMPTS[tone].replace('{text}', text);
  }

  if (!basePrompt) basePrompt = QUICK_ENHANCE_PROMPT.replace('{text}', text);

  return `${basePrompt}\n\nRespond with only the final enhanced text, without explanations.`;
}

// 8. EMOJI ENHANCEMENT PROMPT
export function addEmojiPrompt(basePrompt) {
  return `${basePrompt}

Additional instruction: Add appropriate emojis to enhance the text, but use them sparingly and only where they naturally fit.`;
}


