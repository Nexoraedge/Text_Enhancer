"use strict";const h=`You are a skilled Writer. Improve the following text while keeping it natural and authentic.
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

Improved text:`,s={professional:`Transform the following text into a professional, polished version suitable for business communication.

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

Empathetic version:`},l={email:`Enhance this text for email communication. Make it clear, professional, and well-structured.

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

Creative version:`},m={generate_from_context:`Based on the following context, generate appropriate text that fulfills the user's request.

Context: "{context}"
Request: "{request}"
Tone: "{tone}"

Guidelines:
- Generate natural, human-like text
- Match the requested tone perfectly
- Ensure the content is relevant to the context
- Make it engaging and well-written
- Keep it appropriate length for the context

Generated text:`},c={instagram:`Rewrite the following text so it feels like a natural chat. Provide exactly ONE rewritten version – no bullet points, no numbering, no Markdown formatting.

Guidelines:
- Use friendly, conversational language
- keep things Cathy and Feels Fastastic to read .
- Make sure to convey message in engaing way.
- Add relevant emojis if they enhance the message, but don't overdo it
- Do NOT add email-style elements such as “Subject:”, greetings like “Dear…”, or sign-offs
- Preserve the original intent and personality

Text: "{text}"

Rewritten DM:`,twitter:`You are a skilled Writer. Improve the following text while keeping it natural and authentic.

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

X optimized:`,whatsapp:`Optimize this text for WhatsApp messaging. Make it conversational and natural.

Guidelines:
- Use natural, conversational tone
- imporve the grammer and spellings
- Keep it appropriate for messaging
- Make it friendly and approachable
- Ensure easy readability on mobile
- Maintain personal touch
- Ensure line gaps when writing a paragrh or long content for better readability.

Text: "{text}"

WhatsApp optimized:`,linkedin:`Optimize this text for LinkedIn professional networking. Make it professional and engaging.

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

LinkedIn optimized:`};function g(e,n){return`${e}

Text to enhance: "${n}"

Enhanced text:`}function f(e,n={}){const{customPrompt:a,tone:t,context:r,platform:o,action:u}=n;let i=null;return a&&(i=g(a,e)),!i&&u==="context-enhancer"&&r&&(i=m.generate_from_context.replace("{context}",r).replace("{request}",e).replace("{tone}",t||"natural")),!i&&o&&c[o]&&(i=c[o].replace("{text}",e)),!i&&r&&l[r]&&(i=l[r].replace("{text}",e)),!i&&t&&s[t]&&(i=s[t].replace("{text}",e)),i||(i=h.replace("{text}",e)),`${i}

Respond with only the final enhanced text, without explanations.`}function x(e){return`${e}

Additional instruction: Add appropriate emojis to enhance the text, but use them sparingly and only where they naturally fit.`}async function y(e,n={}){const t=await(await fetch("https://tone-genie.vercel.app/api/enhance",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:e,options:n})})).json();if(t.success)return t.enhancedText;throw new Error(t.error||"Enhancement failed")}const p="https://tone-genie.vercel.app/",w="https://tone-genie.vercel.app/feedback";chrome.runtime.onInstalled.addListener(e=>{chrome.runtime.setUninstallURL(w,()=>{chrome.runtime.lastError&&console.error("Failed to set uninstall URL:",chrome.runtime.lastError)});try{e.reason==="install"?chrome.tabs.create({url:p}):e.reason==="update"&&chrome.tabs.create({url:`${p}?updated=1`})}catch(n){console.error("Error opening landing page:",n)}});chrome.commands.onCommand.addListener(e=>{const n={"quick-enhance":{action:"enhance-text"},"custom-prompt":{action:"show-custom-prompt"},"context-generator":{action:"show-context-enhancer"},"open-main-popup":{action:"open-main-popup"}};if(n[e]){if(e==="open-main-popup"){chrome.action.openPopup().catch(a=>console.error("Failed to open action popup:",a));return}chrome.tabs.query({active:!0,currentWindow:!0},async a=>{if(a[0])try{await v(a[0].id),chrome.tabs.sendMessage(a[0].id,n[e],t=>{chrome.runtime.lastError&&(console.error("Error sending message:",chrome.runtime.lastError.message),d(a[0].id,n[e]))})}catch(t){console.error(`Error in ${e} command:`,t)}})}else console.warn("Unrecognized keyboard shortcut command:",e)});async function v(e){try{await chrome.tabs.sendMessage(e,{action:"ping"})}catch{await d(e)}}async function d(e,n=null){try{await chrome.scripting.executeScript({target:{tabId:e},files:["content.js"]}),n&&setTimeout(()=>{chrome.tabs.sendMessage(e,n,a=>{chrome.runtime.lastError&&console.error("Error sending message after injection:",chrome.runtime.lastError.message)})},500)}catch(a){console.error("Error injecting content script:",a)}}chrome.runtime.onMessage.addListener((e,n,a)=>{if(e.action==="enhance-text-with-gemini"||e.action==="enhanceTextFromPopup"||e.action==="enhance-text"||e.action==="custom-prompt"||e.action==="context-enhancer"||e.action==="ai-write")return(async()=>{try{let t=f(e.text,{customPrompt:e.customPrompt,tone:e.tone,context:e.context,platform:e.platform,action:e.action});e.includeEmojis&&(t=x(t));let r=e.action==="ai-write"?e.prompt||" ":e.text||"";const o=await y(r,{prompt:t,includeEmojis:!1,contextType:e.context||"general"});a({success:!0,enhancedText:o})}catch(t){console.error("Error enhancing text:",t),a({success:!1,error:t.message})}})(),!0});
