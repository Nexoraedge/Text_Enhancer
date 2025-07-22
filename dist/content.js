"use strict";const ae=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function de(){chrome.storage.local.get(["textEnhancerUsage","textEnhancerReviewed","textEnhancerUser"],e=>{let t=e.textEnhancerUsage||0;const o=e.textEnhancerReviewed;e.textEnhancerUser,t+=1,chrome.storage.local.set({textEnhancerUsage:t}),!o&&t>0&&t%4===0&&ve()})}let g=null;function ce(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const t=document.createElement("link");t.rel="stylesheet",t.dataset.textEnhancerTheme="true",t.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(t)}}}function pe(e,t){const o=e.toLowerCase(),n=t.toLowerCase();return o.includes("x.com")||o.includes("instagram.com")||o.includes("facebook.com")||o.includes("tiktok.com")||o.includes("reddit.com")||n.includes("tweet")||n.includes("post")||n.includes("comment")?"social_media":o.includes("mail.google.com")||o.includes("outlook")||o.includes("yahoo.com/mail")||o.includes("mail")||n.includes("inbox")||n.includes("email")||n.includes("compose")?"email":o.includes("linkedin.com")&&!o.includes("linkedin.com/feed")||o.includes("docs.google.com")||o.includes("notion.so")||o.includes("slack.com")||o.includes("teams.microsoft.com")||n.includes("document")||n.includes("report")||n.includes("project")||n.includes("proposal")?"professional":o.includes("scholar.google.com")||o.includes(".edu")||o.includes("academia.edu")||o.includes("researchgate.net")||o.includes("coursera.org")||o.includes("canvas")||n.includes("course")||n.includes("assignment")||n.includes("paper")||n.includes("research")||n.includes("study")?"academic":o.includes("tinder.com")||o.includes("bumble.com")||o.includes("hinge.co")||o.includes("okcupid.com")||o.includes("match.com")||n.includes("dating")||n.includes("chat")&&(n.includes("match")||n.includes("date")||n.includes("love"))?"romantic":"general"}function v(e,t="info"){let o=document.getElementById("gemini-enhancer-toast-container");o||(o=document.createElement("div"),o.id="gemini-enhancer-toast-container",o.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
    `,document.body.appendChild(o));const n=document.createElement("div");n.style.cssText=`
    background-color: ${t==="error"?"#f44336":"#1a73e8"};
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
  `,n.textContent=e,o.appendChild(n),setTimeout(()=>{n.style.opacity="1"},10),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{o.removeChild(n)},300)},3e3)}function ne(){return document.activeElement}function A(e){if(!e)return!1;const t=e.tagName.toLowerCase(),o=t==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),n=t==="textarea",a=e.isContentEditable||e.hasAttribute("contenteditable");return o||n||a}const ue={isEditableElement:A,findContentEditableAncestor:ie,findPlatformEditable:Ee,getPlaceholderFromElement:M,getFocusedElement:ne,getTextFromElement:oe,setTextInElement:R};window.TextEnhancerEditable=ue;function ie(e){return e?e.closest('[contenteditable="true"]'):null}function M(e){if(!e)return"";const t=e.getAttribute("placeholder");if(t)return t;const o=e.dataset||{};if(o){if(o.placeholder)return o.placeholder;if(o.textPlaceholder)return o.textPlaceholder}const n=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(n)return n;const a=e.getAttribute("title");if(a)return a;const r=e.querySelector("[data-placeholder]");return r&&r.textContent?r.textContent.trim():""}function oe(e=null){const t=e||document.activeElement;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable))if(g=t,t.isContentEditable){const n=t.innerText||"";return n.trim()!==""?n:M(t)}else{const n=t.value||"";return n.trim()!==""?n:M(t)}const o=document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');for(const n of o){if(n.offsetParent===null||n.offsetWidth<20||n.offsetHeight<20)continue;let a="";if(n.isContentEditable||n.getAttribute("contenteditable")==="true"?a=n.innerText&&n.innerText.trim()!==""?n.innerText:M(n):a=n.value&&n.value.trim()!==""?n.value:M(n),a.trim()!=="")return g=n,a}if(o.length>0){for(const n of o)if(n.offsetParent!==null&&n.offsetWidth>50&&n.offsetHeight>20)return g=n,n.value||n.innerText||""}return null}function V(e,t,o,n=!1){const a={bubbles:!0,cancelable:!0,key:t,code:o,ctrlKey:n};e.dispatchEvent(new KeyboardEvent("keydown",a)),e.dispatchEvent(new KeyboardEvent("keyup",a))}function me(e,t){if(!e)return;e.focus(),e.innerHTML="";const o=window.getSelection(),n=document.createRange();n.selectNodeContents(e),o.removeAllRanges(),o.addRange(n);try{document.execCommand("insertText",!1,t)}catch{const r=new DataTransfer;r.setData("text/plain",t);const l=new ClipboardEvent("paste",{bubbles:!0,clipboardData:r});e.dispatchEvent(l)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0}))}function he(e,t){if(!e)return!1;try{e.focus();const o=window.getSelection(),n=document.createRange();n.selectNodeContents(e),o.removeAllRanges(),o.addRange(n),document.execCommand("delete"),e.innerText="";let a=!1;const r=new InputEvent("beforeinput",{inputType:"insertFromPaste",data:t,bubbles:!0,cancelable:!0});a=e.dispatchEvent(r)?a:!0,e.textContent=t;const l=new InputEvent("input",{inputType:"insertFromPaste",data:t,bubbles:!0});if(e.dispatchEvent(l),!a&&!document.execCommand("insertText",!1,t)){const b=new DataTransfer;b.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:b}))}return e.blur(),setTimeout(()=>e.focus(),0),console.debug("[TE] Twitter replacement done"),!0}catch(o){return console.error("[TE] Twitter replacement error",o),!1}}function re(e,t){if(!e)return;e.focus();const o=window.getSelection(),n=document.createRange();n.selectNodeContents(e),o.removeAllRanges(),o.addRange(n),V(e,"a","KeyA",!0),V(e,"Backspace","Backspace");const a=document.execCommand("insertText",!1,t);if(console.debug("Instagram replace execCommand after keystroke clear",a,e),!a){const r=new DataTransfer;r.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:r}))}console.log("Instagram text injected")}function R(e,t,o=null){if(o||(o={action:"enhance-text-with-gemini",context:"general"}),e&&!te.has(e)){const r=we(e);te.set(e,{text:r,params:o})}if(!e||!A(e))return!1;const n=e.selectionStart,a=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const r=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(r,"value").set.call(e,t),typeof n=="number"&&typeof a=="number"){const i=Math.min(n,t.length);try{e.setSelectionRange(i,i)}catch(d){console.error("Failed to restore cursor position:",d)}}const h=new Event("input",{bubbles:!0}),b=new Event("change",{bubbles:!0}),c=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(h),e.dispatchEvent(b),e.dispatchEvent(c),F(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let r=e.isContentEditable?e:ie(e);r&&r.querySelector('[contenteditable="true"]')&&(r=r.querySelector('[contenteditable="true"]'));let l=r;for(;l&&l.parentElement&&l.parentElement.isContentEditable;)l=l.parentElement;if(r){const h=window.location.hostname,b=(c,i)=>{c.focus(),V(c,"a","KeyA",!0),V(c,"Backspace","Backspace");const d=new DataTransfer;d.setData("text/plain",i);const u=new ClipboardEvent("paste",{bubbles:!0,clipboardData:d});c.dispatchEvent(u)};if(h.endsWith("whatsapp.com"))try{return b(r,t),F(e),!0}catch(c){console.error("WhatsApp replace failed, falling back:",c)}if(h.endsWith("instagram.com"))try{const c=r&&r.querySelector('[data-lexical-editor="true"]')||l||r;return re(c,t),F(e),!0}catch(c){console.error("Instagram replace failed",c)}if(h.endsWith("twitter.com")||h.endsWith("x.com"))try{const c=r&&r.querySelector('[data-testid="tweetTextarea_0"],div[role="textbox"]')||l||r;return he(c,t),F(e),!0}catch(c){console.error("Twitter replace failed",c)}if(h.endsWith("instagram.com"))try{const c=l||r;return c?(re(c,t),F(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(c){console.error("Instagram replace failed",c)}return me(l||r,t),F(e),!0}}return!1}function $(e,t=!0){navigator.clipboard.writeText(e).then(()=>{t&&v("Enhanced text copied to clipboard!","success")}).catch(o=>{console.error("Failed to copy text:",o),t&&v("Failed to copy to clipboard","error")})}async function xe(){g=ne();let e;if(!A(g)){const a=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');a.length>0?g=a[0]:(g=null,v("No input field found. Enhanced text will be copied to clipboard.","info"))}if(A(g)){if(e=oe(g),!e||e.trim()===""){const a=M(g);if(a.trim()!=="")e=a,v('Using placeholder text: "'+e.substring(0,20)+(e.length>20?"...":"")+'"');else{v("No text to enhance","error");return}}}else{v("No text found to enhance","error");return}v("Enhancing text with AI...");const t=window.location.href,o=document.title,n=pe(t,o);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:e,context:n},a=>{a&&a.success?A(g)&&R(g,a.enhancedText)?(v("Text enhanced and filled in!","success"),$(a.enhancedText,!1)):$(a.enhancedText,!0):v(a&&a.error?`Error: ${a.error}`:"Failed to enhance text","error")})}function be(){if(ce(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function fe(){be(),se();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const t=document.createElement("div");t.id="text-enhancer-popup",t.className="text-enhancer-context-popup modern-popup";const o=document.createElement("div");o.className="text-enhancer-popup-header modern-header";const n=document.createElement("div");n.className="title-container";const a=document.createElement("h2");a.id="text-enhancer-title",a.textContent="✨ Text-Enhancer";const r=document.createElement("p");r.id="text-enhancer-subtitle",r.textContent="AI-powered writing enhancement",n.appendChild(a),n.appendChild(r);const l=document.createElement("button");l.className="text-enhancer-close-btn modern-close",l.innerHTML="×",l.addEventListener("click",()=>{t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>t.remove(),200)}),o.appendChild(n),o.appendChild(l);const h=document.createElement("div");h.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((s,p)=>{const m=document.createElement("button");m.className=`text-enhancer-tab ${p===0?"active":""}`,m.dataset.tab=s.id;const f=document.createElement("span");f.className="tab-icon",f.textContent=s.icon;const x=document.createElement("span");x.className="tab-text",x.textContent=s.text,m.appendChild(f),m.appendChild(x),m.addEventListener("click",le=>{document.querySelectorAll(".text-enhancer-tab").forEach(Z=>Z.classList.remove("active")),le.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(Z=>Z.classList.remove("active")),document.getElementById(`text-enhancer-${s.id}-content`).classList.add("active")}),h.appendChild(m)});const c=document.createElement("div");c.id="text-enhancer-content";const i=document.createElement("div");i.id="text-enhancer-custom-content",i.className="text-enhancer-tab-content active";const d=document.createElement("label");d.className="text-enhancer-label",d.textContent="Custom Prompt:",d.htmlFor="text-enhancer-prompt";const u=document.createElement("textarea");u.id="text-enhancer-prompt",u.className="text-enhancer-textarea",u.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',u.rows=3;const k=document.createElement("label");k.className="text-enhancer-label",k.textContent="Text to Enhance:",k.htmlFor="text-enhancer-text";const w=document.createElement("textarea");w.id="text-enhancer-text",w.className="text-enhancer-textarea",w.placeholder="Enter or paste text to enhance...",w.rows=5;const T=ne();let N="";A(T)&&(N=oe(T),N&&N.trim()!==""&&(w.value=N)),i.appendChild(d),i.appendChild(u),i.appendChild(k),i.appendChild(w);const S=document.createElement("div");S.id="text-enhancer-templates-content",S.className="text-enhancer-tab-content";const L=document.createElement("h3");L.className="text-enhancer-subtitle",L.textContent="Choose a Template",S.appendChild(L),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(s=>{const p=document.createElement("div");p.className="text-enhancer-template-card";const m=document.createElement("h4");m.className="text-enhancer-template-name",m.textContent=s.name;const f=document.createElement("p");f.className="text-enhancer-template-description",f.textContent=s.description;const x=document.createElement("button");x.className="text-enhancer-button text-enhancer-button-primary",x.textContent="Use Template",x.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),u.value=s.prompt,w.focus()}),p.appendChild(m),p.appendChild(f),p.appendChild(x),S.appendChild(p)});const y=document.createElement("div");y.id="text-enhancer-freelance-content",y.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Freelance Proposal Templates",y.appendChild(z),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(s=>{const p=document.createElement("div");p.className="text-enhancer-template-card";const m=document.createElement("h4");m.className="text-enhancer-template-name",m.textContent=s.name;const f=document.createElement("p");f.className="text-enhancer-template-description",f.textContent=s.description;const x=document.createElement("button");x.className="text-enhancer-button text-enhancer-button-primary",x.textContent="Use Template",x.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),u.value=s.prompt,w.focus()}),p.appendChild(m),p.appendChild(f),p.appendChild(x),y.appendChild(p)});const E=document.createElement("div");E.id="text-enhancer-tone-content",E.className="text-enhancer-tab-content";const D=document.createElement("h3");D.className="text-enhancer-subtitle",D.textContent="Select Tone & Style",E.appendChild(D);const P=document.createElement("label");P.className="text-enhancer-label",P.textContent="Tone:",P.htmlFor="text-enhancer-tone";const C=document.createElement("select");C.id="text-enhancer-tone",C.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(s=>{const p=document.createElement("option");p.value=s.value,p.textContent=s.icon?`${s.icon} ${s.text}`:s.text,C.appendChild(p)});const G=document.createElement("label");G.className="text-enhancer-label",G.textContent="Style:",G.htmlFor="text-enhancer-style";const q=document.createElement("select");q.id="text-enhancer-style",q.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(s=>{const p=document.createElement("option");p.value=s.value,p.textContent=s.icon?`${s.icon} ${s.text}`:s.text,q.appendChild(p)});const H=document.createElement("div");H.className="text-enhancer-checkbox-container";const U=document.createElement("input");U.type="checkbox",U.id="text-enhancer-emoji",U.className="text-enhancer-checkbox";const W=document.createElement("label");W.htmlFor="text-enhancer-emoji",W.className="text-enhancer-checkbox-label",W.textContent="Include emojis for emotional emphasis",H.appendChild(U),H.appendChild(W);const O=document.createElement("label");O.className="text-enhancer-label",O.textContent="Additional Instructions (optional):",O.htmlFor="text-enhancer-instructions";const B=document.createElement("textarea");B.id="text-enhancer-instructions",B.className="text-enhancer-textarea",B.placeholder="Add any specific instructions or requirements...",B.rows=2;const Q=document.createElement("div");Q.className="text-enhancer-button-group";const K=document.createElement("button");K.className="text-enhancer-button text-enhancer-button-primary",K.innerHTML="🎨 Apply Tone & Style",K.addEventListener("click",()=>{const s=C.value,p=q.value,m=B.value.trim(),f=U.checked;if(!s&&!p){v("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let x="Rewrite the following text";s&&(x+=` in a ${s} tone`),p&&(x+=s?` and ${p} style`:` in a ${p} style`),m&&(x+=`. Additional instructions: ${m}`),f&&(x+=". Include appropriate emojis to emphasize emotions and key points."),u.value=x,w.focus()}),Q.appendChild(K),E.appendChild(P),E.appendChild(C),E.appendChild(G),E.appendChild(q),E.appendChild(H),E.appendChild(O),E.appendChild(B),E.appendChild(Q);const Y=document.createElement("div");Y.className="text-enhancer-button-group";const J=document.createElement("button");J.className="text-enhancer-button text-enhancer-button-secondary",J.textContent="Cancel",J.addEventListener("click",()=>t.remove());const I=document.createElement("button");I.className="text-enhancer-button text-enhancer-button-primary",I.textContent="Generate",I.addEventListener("click",()=>{const s=u.value.trim(),p=w.value.trim();if(!s){v("Please enter a custom prompt","error");return}if(!p){v("Please enter text to enhance","error");return}I.disabled=!0,I.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:p,context:"general",customPrompt:s},m=>{if(I.disabled=!1,I.textContent="Generate",m&&m.success){let f=!1;T&&A(T)&&(f=R(T,m.enhancedText)),f||$(m.enhancedText),t.remove()}else v(m&&m.error?`Error: ${m.error}`:"Failed to enhance text","error")})}),Y.appendChild(J),Y.appendChild(I),i.appendChild(Y),c.appendChild(i),c.appendChild(S),c.appendChild(y),c.appendChild(E),t.appendChild(o),t.appendChild(h),t.appendChild(c),document.body.appendChild(t),u.focus()}function ge(){const e=document.createElement("div");e.className="text-enhancer-context-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header";const o=document.createElement("h2");o.textContent="Context-Based Enhancement";const n=document.createElement("button");n.className="text-enhancer-close-btn",n.textContent="×",n.addEventListener("click",()=>e.remove()),t.appendChild(o),t.appendChild(n);const a=document.createElement("div");a.className="text-enhancer-content";const r=document.createElement("div");r.className="text-enhancer-section";const l=document.createElement("label");l.textContent="Provide Context:",l.htmlFor="text-enhancer-context-input";const h=document.createElement("textarea");h.id="text-enhancer-context-input",h.className="text-enhancer-textarea",h.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',h.rows=3,r.appendChild(l),r.appendChild(h);const b=document.createElement("div");b.className="text-enhancer-section";const c=document.createElement("label");c.textContent="Additional Information (optional):",c.htmlFor="text-enhancer-text-input";const i=document.createElement("textarea");i.id="text-enhancer-text-input",i.className="text-enhancer-textarea",i.placeholder="Add any details you want included (e.g., dates, names, specific points)",i.rows=3,b.appendChild(c),b.appendChild(i);const d=document.createElement("div");d.className="text-enhancer-options";const u=document.createElement("div");u.className="text-enhancer-option";const k=document.createElement("input");k.type="checkbox",k.id="text-enhancer-humanize",k.checked=!0;const w=document.createElement("label");w.htmlFor="text-enhancer-humanize",w.textContent="Make it sound natural and human-written",u.appendChild(k),u.appendChild(w);const T=document.createElement("div");T.className="text-enhancer-option";const N=document.createElement("input");N.type="checkbox",N.id="text-enhancer-emoji";const S=document.createElement("label");S.htmlFor="text-enhancer-emoji",S.textContent="Include appropriate emojis",T.appendChild(N),T.appendChild(S),d.appendChild(u),d.appendChild(T);const L=document.createElement("div");L.className="text-enhancer-buttons";const j=document.createElement("button");j.className="text-enhancer-button text-enhancer-cancel-btn",j.textContent="Cancel",j.addEventListener("click",()=>e.remove());const y=document.createElement("button");y.className="text-enhancer-button text-enhancer-generate-btn",y.textContent="Generate",y.addEventListener("click",()=>{const z=h.value.trim(),_=i.value.trim(),E=k.checked,D=N.checked;if(!z){v("Please provide context for what you want to generate","error");return}y.disabled=!0,y.textContent="Generating...";let P=`${z}`;_&&(P+=`

Additional information: ${_}`),E&&(P+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:_||"Generate from context",context:"context-based",customPrompt:P,includeEmojis:D},C=>{if(y.disabled=!1,y.textContent="Generate",C&&C.success){let X=!1;g&&A(g)&&(X=R(g,C.enhancedText)),X||$(C.enhancedText),e.remove()}else v(C&&C.error?`Error: ${C.error}`:"Failed to generate text","error")})}),L.appendChild(j),L.appendChild(y),a.appendChild(r),a.appendChild(b),a.appendChild(d),a.appendChild(L),e.appendChild(t),e.appendChild(a),document.body.appendChild(e),h.focus(),se()}function se(){ce();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
  `,document.head.appendChild(t)}function ve(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const e=document.createElement("div");e.className="text-enhancer-feedback-popup",e.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const t=document.createElement("p");t.textContent=ae[Math.floor(Math.random()*ae.length)],t.style.margin="0 0 12px 0",e.appendChild(t);const o=document.createElement("button");o.textContent="Leave feedback",o.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",o.onclick=()=>{window.open("https://tone-genie.vercel.app/feedback","_blank"),chrome.storage.local.set({textEnhancerReviewed:!0}),e.remove()};const n=document.createElement("button");n.textContent="Later",n.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",n.onclick=()=>e.remove(),e.appendChild(o),e.appendChild(n),document.body.appendChild(e)}const te=new WeakMap;function we(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""}function F(e){if(!e)return;ye();const t=document.createElement("div"),o=te.get(e);o&&(t.dataset.originalText=o.text||"",t.dataset.originalParams=JSON.stringify(o.params||{})),t.className="te-action-bar",t.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const n=document.createElement("button");n.textContent="×",n.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const a=document.createElement("button");a.textContent="↩ Revert",a.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const r=document.createElement("button");r.textContent="🔄 Regenerate",r.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",t.appendChild(n),t.appendChild(a),t.appendChild(r),document.body.appendChild(t),l();function l(){const i=e.getBoundingClientRect();t.style.top=`${window.scrollY+i.bottom+4}px`,t.style.left=`${window.scrollX+i.left}px`}window.addEventListener("scroll",l,{passive:!0});const h=new ResizeObserver(l);h.observe(e);function b(){t.remove(),window.removeEventListener("scroll",l),h.disconnect()}a.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const d=t.dataset.originalText||"",u=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;console.debug("[TE] Revert click",d),b(),setTimeout(()=>{R(e,d,u)},50)}),a.addEventListener("mousedown",i=>i.stopPropagation()),r.addEventListener("mousedown",i=>i.stopPropagation()),n.addEventListener("click",()=>b()),r.addEventListener("click",()=>{const i=t.dataset.originalText||"",d=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;r.disabled=!0,r.textContent="…",chrome.runtime.sendMessage({action:d&&d.action?d.action:"enhance-text-with-gemini",text:i,context:d&&d.context?d.context:"general",customPrompt:d?d.customPrompt:void 0,tone:d?d.tone:void 0,includeEmojis:d?d.includeEmojis:!1},u=>{r.disabled=!1,r.textContent="🔄 Regenerate",u&&u.success?R(e,u.enhancedText):console.error("Regenerate failed",u&&u.error)})});const c=()=>b();e.addEventListener("keydown",c,{once:!0}),window.__teCleanupBar=b}function ye(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)}const ee={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};function Ee(e){const t=window.location.hostname;let o=!1;for(const n in ee)if(n!=="*"&&t.endsWith(n)){o=!0;const a=ee[n].selector,r=e&&e.closest?e.closest(a):null;if(r)return r;const l=document.querySelector(a);if(l)return l}if(!o){const n=ee["*"].selector,a=e&&e.closest?e.closest(n):null;if(a)return a;const r=document.querySelector(n);if(r)return r}return null}chrome.runtime.onMessage.addListener((e,t,o)=>(e.action==="enhance-text"?(xe(),de(),o({success:!0})):e.action==="show-custom-prompt"?(fe(),o({success:!0})):e.action==="show-context-enhancer"?(ge(),o({success:!0})):e.action==="ping"&&o({status:"content_script_ready"}),!0));try{location.hostname.includes("tone-genie.vercel.app")&&location.pathname.includes("feedback")&&chrome.storage&&chrome.storage.local&&chrome.storage.local.set({textEnhancerReviewed:!0})}catch{}(function(){try{chrome.runtime.sendMessage({action:"content_script_ready"},function(e){chrome.runtime.lastError})}catch(e){console.error("Error sending ready message:",e)}})();
