"use strict";const ne=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function se(){chrome.storage.local.get(["textEnhancerUsage","textEnhancerReviewed","textEnhancerUser"],e=>{let o=e.textEnhancerUsage||0;const n=e.textEnhancerReviewed;e.textEnhancerUser,o+=1,chrome.storage.local.set({textEnhancerUsage:o}),!n&&o>0&&o%4===0&&fe()})}let f=null;function ae(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const o=document.createElement("link");o.rel="stylesheet",o.href=e,document.head.appendChild(o)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const o=document.createElement("link");o.rel="stylesheet",o.dataset.textEnhancerTheme="true",o.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(o)}}}function le(e,o){const n=e.toLowerCase(),t=o.toLowerCase();return n.includes("twitter.com")||n.includes("instagram.com")||n.includes("facebook.com")||n.includes("tiktok.com")||n.includes("reddit.com")||t.includes("tweet")||t.includes("post")||t.includes("comment")?"social_media":n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||t.includes("inbox")||t.includes("email")||t.includes("compose")?"email":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||t.includes("document")||t.includes("report")||t.includes("project")||t.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||t.includes("course")||t.includes("assignment")||t.includes("paper")||t.includes("research")||t.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||t.includes("dating")||t.includes("chat")&&(t.includes("match")||t.includes("date")||t.includes("love"))?"romantic":"general"}function g(e,o="info"){let n=document.getElementById("gemini-enhancer-toast-container");n||(n=document.createElement("div"),n.id="gemini-enhancer-toast-container",n.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
    `,document.body.appendChild(n));const t=document.createElement("div");t.style.cssText=`
    background-color: ${o==="error"?"#f44336":"#1a73e8"};
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
  `,t.textContent=e,n.appendChild(t),setTimeout(()=>{t.style.opacity="1"},10),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{n.removeChild(t)},300)},3e3)}function ee(){return document.activeElement}function P(e){if(!e)return!1;const o=e.tagName.toLowerCase(),n=o==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),t=o==="textarea",a=e.isContentEditable||e.hasAttribute("contenteditable");return n||t||a}const de={isEditableElement:P,findContentEditableAncestor:re,findPlatformEditable:ge,getPlaceholderFromElement:F,getFocusedElement:ee,getTextFromElement:te,setTextInElement:Y};window.TextEnhancerEditable=de;function re(e){return e?e.closest('[contenteditable="true"]'):null}function F(e){if(!e)return"";const o=e.getAttribute("placeholder");if(o)return o;const n=e.dataset||{};if(n){if(n.placeholder)return n.placeholder;if(n.textPlaceholder)return n.textPlaceholder}const t=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(t)return t;const a=e.getAttribute("title");if(a)return a;const r=e.querySelector("[data-placeholder]");return r&&r.textContent?r.textContent.trim():""}function te(e=null){const o=e||document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))if(f=o,o.isContentEditable){const t=o.innerText||"";return t.trim()!==""?t:F(o)}else{const t=o.value||"";return t.trim()!==""?t:F(o)}const n=document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');for(const t of n){if(t.offsetParent===null||t.offsetWidth<20||t.offsetHeight<20)continue;let a="";if(t.isContentEditable||t.getAttribute("contenteditable")==="true"?a=t.innerText&&t.innerText.trim()!==""?t.innerText:F(t):a=t.value&&t.value.trim()!==""?t.value:F(t),a.trim()!=="")return f=t,a}if(n.length>0){for(const t of n)if(t.offsetParent!==null&&t.offsetWidth>50&&t.offsetHeight>20)return f=t,t.value||t.innerText||""}return null}function M(e,o,n,t=!1){const a={bubbles:!0,cancelable:!0,key:o,code:n,ctrlKey:t};e.dispatchEvent(new KeyboardEvent("keydown",a)),e.dispatchEvent(new KeyboardEvent("keyup",a))}function pe(e,o){if(!e)return;e.focus(),e.innerHTML="";const n=window.getSelection(),t=document.createRange();t.selectNodeContents(e),n.removeAllRanges(),n.addRange(t);try{document.execCommand("insertText",!1,o)}catch{const r=new DataTransfer;r.setData("text/plain",o);const d=new ClipboardEvent("paste",{bubbles:!0,clipboardData:r});e.dispatchEvent(d)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:o})),e.dispatchEvent(new Event("change",{bubbles:!0}))}function ue(e,o){if(!e)return;e.focus(),document.execCommand("selectAll",!1),document.execCommand("delete",!1),M(e,"a","KeyA",!0),M(e,"Backspace","Backspace");const n=document.execCommand("insertText",!1,o);if(console.debug("Twitter replace execCommand after clear",n,e),!n){const t=new DataTransfer;t.setData("text/plain",o),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:t}))}e.dispatchEvent(new InputEvent("input",{bubbles:!0,cancelable:!0,inputType:"insertText",data:o})),console.log("Twitter text injected")}function oe(e,o){if(!e)return;e.focus();const n=window.getSelection(),t=document.createRange();t.selectNodeContents(e),n.removeAllRanges(),n.addRange(t),M(e,"a","KeyA",!0),M(e,"Backspace","Backspace");const a=document.execCommand("insertText",!1,o);if(console.debug("Instagram replace execCommand after keystroke clear",a,e),!a){const r=new DataTransfer;r.setData("text/plain",o),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:r}))}console.log("Instagram text injected")}function Y(e,o){if(!e||!P(e))return!1;const n=e.selectionStart,t=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const a=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(a,"value").set.call(e,o),typeof n=="number"&&typeof t=="number"){const x=Math.min(n,o.length);try{e.setSelectionRange(x,x)}catch(p){console.error("Failed to restore cursor position:",p)}}const d=new Event("input",{bubbles:!0}),h=new Event("change",{bubbles:!0}),s=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(d),e.dispatchEvent(h),e.dispatchEvent(s),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let a=e.isContentEditable?e:re(e);a&&a.querySelector('[contenteditable="true"]')&&(a=a.querySelector('[contenteditable="true"]'));let r=a;for(;r&&r.parentElement&&r.parentElement.isContentEditable;)r=r.parentElement;if(a){const d=window.location.hostname,h=(s,x)=>{s.focus(),M(s,"a","KeyA",!0),M(s,"Backspace","Backspace");const p=new DataTransfer;p.setData("text/plain",x);const C=new ClipboardEvent("paste",{bubbles:!0,clipboardData:p});s.dispatchEvent(C)};if(d.endsWith("whatsapp.com"))try{return h(a,o),!0}catch(s){console.error("WhatsApp replace failed, falling back:",s)}if(d.endsWith("instagram.com"))try{const s=a&&a.querySelector('[data-lexical-editor="true"]')||r||a;return oe(s,o),!0}catch(s){console.error("Instagram replace failed",s)}if(d.endsWith("twitter.com")||d.endsWith("x.com"))try{const s=a&&a.querySelector('[data-testid="tweetTextarea_0"],[role="textbox"][contenteditable="true"]')||r||a;return ue(s,o),!0}catch(s){console.error("Twitter replace failed",s)}if(d.endsWith("instagram.com"))try{const s=r||a;return s?(oe(s,o),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(s){console.error("Instagram replace failed",s)}return pe(r||a,o),!0}}return!1}function U(e,o=!0){navigator.clipboard.writeText(e).then(()=>{o&&g("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),o&&g("Failed to copy to clipboard","error")})}async function me(){f=ee();let e;if(!P(f)){const a=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');a.length>0?f=a[0]:(f=null,g("No input field found. Enhanced text will be copied to clipboard.","info"))}if(P(f)){if(e=te(f),!e||e.trim()===""){const a=F(f);if(a.trim()!=="")e=a,g('Using placeholder text: "'+e.substring(0,20)+(e.length>20?"...":"")+'"');else{g("No text to enhance","error");return}}}else{g("No text found to enhance","error");return}g("Enhancing text with AI...");const o=window.location.href,n=document.title,t=le(o,n);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:e,context:t},a=>{a&&a.success?P(f)&&Y(f,a.enhancedText)?(g("Text enhanced and filled in!","success"),U(a.enhancedText,!1)):U(a.enhancedText,!0):g(a&&a.error?`Error: ${a.error}`:"Failed to enhance text","error")})}function he(){if(ae(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
      display: block;
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
      width: 100%;
      padding: 12px 14px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      resize: vertical;
      min-height: 140px;
      margin-bottom: 16px;
      font-family: inherit;
      transition: all 0.2s;
      background-color: #1c1c24;
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
  `,document.head.appendChild(e)}function xe(){he(),ce();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const o=document.createElement("div");o.id="text-enhancer-popup",o.className="text-enhancer-context-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header";const t=document.createElement("div"),a=document.createElement("h2");a.id="text-enhancer-title",a.textContent="Tone Genie (AI-powered text enhancer)";const r=document.createElement("p");r.id="text-enhancer-subtitle",r.textContent="Enhance your writing style with AI",t.appendChild(a),t.appendChild(r);const d=document.createElement("button");d.className="text-enhancer-close-btn",d.innerHTML="&times;",d.addEventListener("click",()=>o.remove()),n.appendChild(t),n.appendChild(d);const h=document.createElement("div");h.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((c,i)=>{const l=document.createElement("button");l.className=`text-enhancer-tab ${i===0?"active":""}`,l.dataset.tab=c.id;const m=document.createElement("span");m.className="tab-icon",m.textContent=c.icon;const u=document.createElement("span");u.className="tab-text",u.textContent=c.text,l.appendChild(m),l.appendChild(u),l.addEventListener("click",ie=>{document.querySelectorAll(".text-enhancer-tab").forEach(Q=>Q.classList.remove("active")),ie.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(Q=>Q.classList.remove("active")),document.getElementById(`text-enhancer-${c.id}-content`).classList.add("active")}),h.appendChild(l)});const x=document.createElement("div");x.id="text-enhancer-content";const p=document.createElement("div");p.id="text-enhancer-custom-content",p.className="text-enhancer-tab-content active";const C=document.createElement("label");C.className="text-enhancer-label",C.textContent="Custom Prompt:",C.htmlFor="text-enhancer-prompt";const b=document.createElement("textarea");b.id="text-enhancer-prompt",b.className="text-enhancer-textarea",b.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',b.rows=3;const k=document.createElement("label");k.className="text-enhancer-label",k.textContent="Text to Enhance:",k.htmlFor="text-enhancer-text";const v=document.createElement("textarea");v.id="text-enhancer-text",v.className="text-enhancer-textarea",v.placeholder="Enter or paste text to enhance...",v.rows=5;const T=ee();let N="";P(T)&&(N=te(T),N&&N.trim()!==""&&(v.value=N)),p.appendChild(C),p.appendChild(b),p.appendChild(k),p.appendChild(v);const S=document.createElement("div");S.id="text-enhancer-templates-content",S.className="text-enhancer-tab-content";const I=document.createElement("h3");I.className="text-enhancer-subtitle",I.textContent="Choose a Template",S.appendChild(I),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(c=>{const i=document.createElement("div");i.className="text-enhancer-template-card";const l=document.createElement("h4");l.className="text-enhancer-template-name",l.textContent=c.name;const m=document.createElement("p");m.className="text-enhancer-template-description",m.textContent=c.description;const u=document.createElement("button");u.className="text-enhancer-button text-enhancer-button-primary",u.textContent="Use Template",u.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),b.value=c.prompt,v.focus()}),i.appendChild(l),i.appendChild(m),i.appendChild(u),S.appendChild(i)});const y=document.createElement("div");y.id="text-enhancer-freelance-content",y.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Freelance Proposal Templates",y.appendChild(z),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(c=>{const i=document.createElement("div");i.className="text-enhancer-template-card";const l=document.createElement("h4");l.className="text-enhancer-template-name",l.textContent=c.name;const m=document.createElement("p");m.className="text-enhancer-template-description",m.textContent=c.description;const u=document.createElement("button");u.className="text-enhancer-button text-enhancer-button-primary",u.textContent="Use Template",u.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),b.value=c.prompt,v.focus()}),i.appendChild(l),i.appendChild(m),i.appendChild(u),y.appendChild(i)});const E=document.createElement("div");E.id="text-enhancer-tone-content",E.className="text-enhancer-tab-content";const D=document.createElement("h3");D.className="text-enhancer-subtitle",D.textContent="Select Tone & Style",E.appendChild(D);const A=document.createElement("label");A.className="text-enhancer-label",A.textContent="Tone:",A.htmlFor="text-enhancer-tone";const w=document.createElement("select");w.id="text-enhancer-tone",w.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(c=>{const i=document.createElement("option");i.value=c.value,i.textContent=c.icon?`${c.icon} ${c.text}`:c.text,w.appendChild(i)});const G=document.createElement("label");G.className="text-enhancer-label",G.textContent="Style:",G.htmlFor="text-enhancer-style";const R=document.createElement("select");R.id="text-enhancer-style",R.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(c=>{const i=document.createElement("option");i.value=c.value,i.textContent=c.icon?`${c.icon} ${c.text}`:c.text,R.appendChild(i)});const H=document.createElement("div");H.className="text-enhancer-checkbox-container";const q=document.createElement("input");q.type="checkbox",q.id="text-enhancer-emoji",q.className="text-enhancer-checkbox";const W=document.createElement("label");W.htmlFor="text-enhancer-emoji",W.className="text-enhancer-checkbox-label",W.textContent="Include emojis for emotional emphasis",H.appendChild(q),H.appendChild(W);const _=document.createElement("label");_.className="text-enhancer-label",_.textContent="Additional Instructions (optional):",_.htmlFor="text-enhancer-instructions";const j=document.createElement("textarea");j.id="text-enhancer-instructions",j.className="text-enhancer-textarea",j.placeholder="Add any specific instructions or requirements...",j.rows=2;const X=document.createElement("div");X.className="text-enhancer-button-group";const K=document.createElement("button");K.className="text-enhancer-button text-enhancer-button-primary",K.innerHTML="🎨 Apply Tone & Style",K.addEventListener("click",()=>{const c=w.value,i=R.value,l=j.value.trim(),m=q.checked;if(!c&&!i){g("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let u="Rewrite the following text";c&&(u+=` in a ${c} tone`),i&&(u+=c?` and ${i} style`:` in a ${i} style`),l&&(u+=`. Additional instructions: ${l}`),m&&(u+=". Include appropriate emojis to emphasize emotions and key points."),b.value=u,v.focus()}),X.appendChild(K),E.appendChild(A),E.appendChild(w),E.appendChild(G),E.appendChild(R),E.appendChild(H),E.appendChild(_),E.appendChild(j),E.appendChild(X);const O=document.createElement("div");O.className="text-enhancer-button-group";const V=document.createElement("button");V.className="text-enhancer-button text-enhancer-button-secondary",V.textContent="Cancel",V.addEventListener("click",()=>o.remove());const L=document.createElement("button");L.className="text-enhancer-button text-enhancer-button-primary",L.textContent="Generate",L.addEventListener("click",()=>{const c=b.value.trim(),i=v.value.trim();if(!c){g("Please enter a custom prompt","error");return}if(!i){g("Please enter text to enhance","error");return}L.disabled=!0,L.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:i,context:"general",customPrompt:c},l=>{if(L.disabled=!1,L.textContent="Generate",l&&l.success){let m=!1;T&&P(T)&&(m=Y(T,l.enhancedText)),m||U(l.enhancedText),o.remove()}else g(l&&l.error?`Error: ${l.error}`:"Failed to enhance text","error")})}),O.appendChild(V),O.appendChild(L),p.appendChild(O),x.appendChild(p),x.appendChild(S),x.appendChild(y),x.appendChild(E),o.appendChild(n),o.appendChild(h),o.appendChild(x),document.body.appendChild(o),b.focus()}function be(){const e=document.createElement("div");e.className="text-enhancer-context-popup";const o=document.createElement("div");o.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const t=document.createElement("button");t.className="text-enhancer-close-btn",t.textContent="×",t.addEventListener("click",()=>e.remove()),o.appendChild(n),o.appendChild(t);const a=document.createElement("div");a.className="text-enhancer-content";const r=document.createElement("div");r.className="text-enhancer-section";const d=document.createElement("label");d.textContent="Provide Context:",d.htmlFor="text-enhancer-context-input";const h=document.createElement("textarea");h.id="text-enhancer-context-input",h.className="text-enhancer-textarea",h.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',h.rows=3,r.appendChild(d),r.appendChild(h);const s=document.createElement("div");s.className="text-enhancer-section";const x=document.createElement("label");x.textContent="Additional Information (optional):",x.htmlFor="text-enhancer-text-input";const p=document.createElement("textarea");p.id="text-enhancer-text-input",p.className="text-enhancer-textarea",p.placeholder="Add any details you want included (e.g., dates, names, specific points)",p.rows=3,s.appendChild(x),s.appendChild(p);const C=document.createElement("div");C.className="text-enhancer-options";const b=document.createElement("div");b.className="text-enhancer-option";const k=document.createElement("input");k.type="checkbox",k.id="text-enhancer-humanize",k.checked=!0;const v=document.createElement("label");v.htmlFor="text-enhancer-humanize",v.textContent="Make it sound natural and human-written",b.appendChild(k),b.appendChild(v);const T=document.createElement("div");T.className="text-enhancer-option";const N=document.createElement("input");N.type="checkbox",N.id="text-enhancer-emoji";const S=document.createElement("label");S.htmlFor="text-enhancer-emoji",S.textContent="Include appropriate emojis",T.appendChild(N),T.appendChild(S),C.appendChild(b),C.appendChild(T);const I=document.createElement("div");I.className="text-enhancer-buttons";const B=document.createElement("button");B.className="text-enhancer-button text-enhancer-cancel-btn",B.textContent="Cancel",B.addEventListener("click",()=>e.remove());const y=document.createElement("button");y.className="text-enhancer-button text-enhancer-generate-btn",y.textContent="Generate",y.addEventListener("click",()=>{const z=h.value.trim(),$=p.value.trim(),E=k.checked,D=N.checked;if(!z){g("Please provide context for what you want to generate","error");return}y.disabled=!0,y.textContent="Generating...";let A=`${z}`;$&&(A+=`

Additional information: ${$}`),E&&(A+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:$||"Generate from context",context:"context-based",customPrompt:A,includeEmojis:D},w=>{if(y.disabled=!1,y.textContent="Generate",w&&w.success){let J=!1;f&&P(f)&&(J=Y(f,w.enhancedText)),J||U(w.enhancedText),e.remove()}else g(w&&w.error?`Error: ${w.error}`:"Failed to generate text","error")})}),I.appendChild(B),I.appendChild(y),a.appendChild(r),a.appendChild(s),a.appendChild(C),a.appendChild(I),e.appendChild(o),e.appendChild(a),document.body.appendChild(e),h.focus(),ce()}function ce(){ae();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const o=document.createElement("style");o.id=e,o.textContent=`
    .text-enhancer-context-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 380px;
      max-width: 95vw;
      background: #232336;
      color: #f3f4f6;
      border-radius: 14px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.7);
      padding: 0;
      font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
      z-index: 2147483647;
      overflow: hidden;
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
    }
    .text-enhancer-section label {
      color: #d1d5db;
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 6px;
      display: block;
    }
    .text-enhancer-textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #27272a;
      border-radius: 7px;
      background: #18181b;
      color: #f3f4f6;
      font-size: 15px;
      margin-top: 4px;
      margin-bottom: 2px;
      resize: vertical;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .text-enhancer-textarea::placeholder {
      color: #9ca3af;
      opacity: 0.8;
    }
    .text-enhancer-textarea:focus {
      outline: none;
      border-color: #a78bfa;
      box-shadow: 0 0 0 2px rgba(167, 139, 250, 0.18);
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
      justify-content: flex-end;
      gap: 10px;
      margin-top: 10px;
    }
    .text-enhancer-button {
      padding: 8px 18px;
      border-radius: 7px;
      border: none;
      background: #a78bfa;
      color: #18181b;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s, color 0.2s;
    }
    .text-enhancer-generate-btn {
      background: #7c3aed;
      color: #fff;
    }
    .text-enhancer-generate-btn:hover {
      background: #a78bfa;
      color: #18181b;
    }
    .text-enhancer-cancel-btn {
      background: #232336;
      color: #c4b5fd;
      border: 1px solid #7c3aed;
    }
    .text-enhancer-cancel-btn:hover {
      background: #18181b;
      color: #fff;
    }
    @media (max-width: 500px) {
      .text-enhancer-context-popup {
        width: 98vw;
        min-width: 0;
      }
    }
  `,document.head.appendChild(o)}function fe(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const e=document.createElement("div");e.className="text-enhancer-feedback-popup",e.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const o=document.createElement("p");o.textContent=ne[Math.floor(Math.random()*ne.length)],o.style.margin="0 0 12px 0",e.appendChild(o);const n=document.createElement("button");n.textContent="Leave feedback",n.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",n.onclick=()=>{window.open("https://tone-genie.vercel.app/feedback","_blank"),chrome.storage.local.set({textEnhancerReviewed:!0}),e.remove()};const t=document.createElement("button");t.textContent="Later",t.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",t.onclick=()=>e.remove(),e.appendChild(n),e.appendChild(t),document.body.appendChild(e)}const Z={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"twitter.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};function ge(e){const o=window.location.hostname;let n=!1;for(const t in Z)if(t!=="*"&&o.endsWith(t)){n=!0;const a=Z[t].selector,r=e&&e.closest?e.closest(a):null;if(r)return r;const d=document.querySelector(a);if(d)return d}if(!n){const t=Z["*"].selector,a=e&&e.closest?e.closest(t):null;if(a)return a;const r=document.querySelector(t);if(r)return r}return null}chrome.runtime.onMessage.addListener((e,o,n)=>(e.action==="enhance-text"?(me(),se(),n({success:!0})):e.action==="show-custom-prompt"?(xe(),n({success:!0})):e.action==="show-context-enhancer"?(be(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0));(function(){try{chrome.runtime.sendMessage({action:"content_script_ready"},function(e){chrome.runtime.lastError})}catch(e){console.error("Error sending ready message:",e)}})();
