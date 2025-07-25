"use strict";const m=`You are a skilled text enhancer. Improve the following text while keeping it natural and authentic.

Guidelines:
- Fix grammar, spelling, and punctuation
- Improve clarity and flow
- Keep the original tone and personality
- Make it more engaging but not overly dramatic
- Use emojis sparingly (1-2 max) and only if they fit naturally
- Avoid excessive hashtags or repetitive phrases
- Keep the same general length
- Make it sound human and genuiney
- Return ONLY the improved text

Text to enhance: "{text}"

Improved text:`,l={professional:`Transform the following text into a professional, polished version suitable for business communication.

Guidelines:
- Use formal language and proper business etiquette
- Ensure clear, concise communication
- Maintain respect and professionalism
- Remove casual expressions and slang
- Keep the core message intact

Original text: "{text}"

Professional version:`,casual:`Rewrite the following text in a casual, friendly tone that feels natural and conversational.

Guidelines:
- Use everyday language and casual expressions
- Make it sound warm and approachable
- Remove overly formal language
- Keep it relatable and easy to understand
- Maintain the original meaning

Original text: "{text}"

Casual version:`,romantic:`Transform the following text into a romantic, loving tone that expresses deep affection and warmth.

Guidelines:
- Use tender, affectionate language
- Express emotions genuinely and beautifully
- Add romantic warmth without being overly dramatic
- Keep it heartfelt and sincere
- Maintain the original intent

Original text: "{text}"

Romantic version:`,poetic:`Rewrite the following text in a poetic, artistic style that captures beauty and emotion.

Guidelines:
- Use elegant, flowing language
- Add literary flair and artistic expression
- Create rhythm and beauty in the words
- Use metaphors and imagery when appropriate
- Keep the original meaning while elevating the style

Original text: "{text}"

Poetic version:`,humorous:`Transform the following text into a funny, lighthearted version that brings joy and laughter.

Guidelines:
- Add appropriate humor and wit
- Use playful language and expressions
- Keep it tasteful and appropriate
- Maintain the original message while making it entertaining
- Use clever wordplay when possible

Original text: "{text}"

Humorous version:`,confident:`Rewrite the following text with confidence and assertiveness while remaining respectful.

Guidelines:
- Use strong, decisive language
- Remove hesitation and uncertainty
- Express ideas with conviction
- Maintain professionalism and respect
- Keep the original meaning but make it more powerful

Original text: "{text}"

Confident version:`,empathetic:`Transform the following text to show understanding, compassion, and emotional intelligence.

Guidelines:
- Use caring, supportive language
- Show understanding and validation
- Express empathy and emotional awareness
- Maintain warmth and kindness
- Keep the original message while adding emotional depth

Original text: "{text}"

Empathetic version:`},c={email:`Enhance this text for email communication. Make it clear, professional, and well-structured.

Guidelines:
- Use proper email etiquette
- Ensure clear subject matter
- Make it concise and actionable
- Maintain appropriate tone for the context
- Fix any grammar or clarity issues

Text: "{text}"

Enhanced email text:`,social_media:`Optimize this text for social media platforms. Make it engaging, shareable, and platform-appropriate.

Guidelines:
- Make it attention-grabbing and engaging
- Use conversational tone
- Optimize for readability on mobile
- Add natural flow and rhythm
- Keep it concise and impactful

Text: "{text}"

Social media optimized text:`,academic:`Transform this text for academic or scholarly writing with proper formality and precision.

Guidelines:
- Use formal academic language
- Ensure precision and clarity
- Follow academic writing conventions
- Remove casual expressions
- Maintain scholarly tone

Text: "{text}"

Academic version:`,creative:`Enhance this text with creative flair and artistic expression while maintaining its core message.

Guidelines:
- Use vivid, descriptive language
- Add creative elements and imagery
- Make it more engaging and memorable
- Use literary devices appropriately
- Keep the original meaning intact

Text: "{text}"

Creative version:`},h={generate_from_context:`Based on the following context, generate appropriate text that fulfills the user's request.

Context: "{context}"
Request: "{request}"
Tone: "{tone}"

Guidelines:
- Generate natural, human-like text
- Match the requested tone perfectly
- Ensure the content is relevant to the context
- Make it engaging and well-written
- Keep it appropriate length for the context

Generated text:`},p={instagram:`Rewrite the following text for an Instagram Direct Message so it feels like a natural chat. Provide exactly ONE rewritten version – no bullet points, no numbering, no Markdown formatting.

Guidelines:
- Use friendly, conversational language
- Keep it short and mobile-friendly (1-3 sentences)
- Add relevant emojis if they enhance the message, but don't overdo it
- Do NOT add email-style elements such as “Subject:”, greetings like “Dear…”, or sign-offs
- Preserve the original intent and personality

Text: "{text}"

Rewritten DM:`,X:`Optimize this text for Twitter/X platform. Make it concise, engaging.

Guidelines:
- Keep it concise and punchy
- Tone must not be changed
- Ensure clarity in limited characters  , must be in X word limit .
- Make it conversation-worthy.
- No need to use keywords unless earlier mentioned.

Text: "{text}"

X optimized:`,whatsapp:`Optimize this text for WhatsApp messaging. Make it conversational and natural.

Guidelines:
- Use natural, conversational tone
- Keep it appropriate for messaging
- Make it friendly and approachable
- Ensure easy readability on mobile
- Maintain personal touch

Text: "{text}"

WhatsApp optimized:`,linkedin:`Optimize this text for LinkedIn professional networking. Make it professional and engaging.

Guidelines:
- Use professional language
- Make it networking-appropriate
- Add professional value
- Keep it engaging for business context
- Maintain professional credibility

Text: "{text}"

LinkedIn optimized:`};function g(e,t){return`${e}

Text to enhance: "${t}"

Enhanced text:`}function f(e,t={}){const{customPrompt:n,tone:i,context:o,platform:r,action:s}=t;let a=null;return n&&(a=g(n,e)),!a&&s==="context-enhancer"&&o&&(a=h.generate_from_context.replace("{context}",o).replace("{request}",e).replace("{tone}",i||"natural")),!a&&r&&p[r]&&(a=p[r].replace("{text}",e)),!a&&o&&c[o]&&(a=c[o].replace("{text}",e)),!a&&i&&l[i]&&(a=l[i].replace("{text}",e)),a||(a=m.replace("{text}",e)),`${a}

Respond with only the final enhanced text, without explanations.`}function x(e){return`${e}

Additional instruction: Add appropriate emojis to enhance the text, but use them sparingly and only where they naturally fit.`}async function y(e,t={}){const i=await(await fetch("https://tone-genie.vercel.app/api/enhance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e,options:t})})).json();if(i.success)return i.enhancedText;throw new Error(i.error||"Enhancement failed")}const d="https://tone-genie.vercel.app/",w="https://tone-genie.vercel.app/feedback";chrome.runtime.onInstalled.addListener(e=>{chrome.runtime.setUninstallURL(w,()=>{chrome.runtime.lastError&&console.error("Failed to set uninstall URL:",chrome.runtime.lastError)});try{e.reason==="install"?chrome.tabs.create({url:d}):e.reason==="update"&&chrome.tabs.create({url:`${d}?updated=1`})}catch(t){console.error("Error opening landing page:",t)}});chrome.commands.onCommand.addListener(e=>{const t={"quick-enhance":{action:"enhance-text"},"custom-prompt":{action:"show-custom-prompt"},"context-generator":{action:"show-context-enhancer"},"open-main-popup":{action:"open-main-popup"}};if(t[e]){if(e==="open-main-popup"){chrome.action.openPopup().catch(n=>console.error("Failed to open action popup:",n));return}chrome.tabs.query({active:!0,currentWindow:!0},async n=>{if(n[0])try{await v(n[0].id),chrome.tabs.sendMessage(n[0].id,t[e],i=>{chrome.runtime.lastError&&(console.error("Error sending message:",chrome.runtime.lastError.message),u(n[0].id,t[e]))})}catch(i){console.error(`Error in ${e} command:`,i)}})}else console.warn("Unrecognized keyboard shortcut command:",e)});async function v(e){try{await chrome.tabs.sendMessage(e,{action:"ping"})}catch{await u(e)}}async function u(e,t=null){try{await chrome.scripting.executeScript({target:{tabId:e},files:["content.js"]}),t&&setTimeout(()=>{chrome.tabs.sendMessage(e,t,n=>{chrome.runtime.lastError&&console.error("Error sending message after injection:",chrome.runtime.lastError.message)})},500)}catch(n){console.error("Error injecting content script:",n)}}chrome.runtime.onMessage.addListener((e,t,n)=>{if(e.action==="enhance-text-with-gemini"||e.action==="enhanceTextFromPopup"||e.action==="enhance-text"||e.action==="custom-prompt"||e.action==="context-enhancer")return(async()=>{try{const o={url:t.tab?t.tab.url:"",title:t.tab?t.tab.title:""};let r=f(e.text,{customPrompt:e.customPrompt,tone:e.tone,context:e.context,platform:e.platform,action:e.action});e.includeEmojis&&(r=x(r));const s=await y(e.text,{prompt:r,includeEmojis:!1,contextType:e.context||"general"});n({success:!0,enhancedText:s})}catch(i){console.error("Error enhancing text:",i),n({success:!1,error:i.message})}})(),!0});
