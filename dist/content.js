"use strict";function y(I,_="info"){let L=document.getElementById("gemini-enhancer-toast-container");L||(L=document.createElement("div"),L.id="gemini-enhancer-toast-container",L.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `,document.body.appendChild(L));const k=document.createElement("div");k.style.cssText=`
      background-color: ${_==="error"?"#f44336":"#1a73e8"};
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
    `,k.textContent=I,L.appendChild(k),setTimeout(()=>{k.style.opacity="1"},10),setTimeout(()=>{k.style.opacity="0",setTimeout(()=>{L.removeChild(k)},300)},3e3)}const pe=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function Ee(){chrome.storage.local.get("Feedback_Submitted",function(I){useCount+=1,chrome.storage.local.set({textEnhancerUsage:useCount}),useCount>0&&useCount%4===0&&Ce()})}function Ce(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const I=document.createElement("div");I.className="text-enhancer-feedback-popup",I.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const _=document.createElement("p");_.textContent=pe[Math.floor(Math.random()*pe.length)],_.style.margin="0 0 12px 0",I.appendChild(_);const L=document.createElement("div");L.className="text-enhancer-stars",L.style.cssText="display:flex;gap:6px;margin-bottom:12px;";for(let D=1;D<=5;D++){const q=document.createElement("button");q.className="text-enhancer-star-btn",q.textContent="★",q.style.cssText="background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;",q.onclick=()=>{for(let H=1;H<=D;H++)L.children[H-1].style.color="#facc15"},L.appendChild(q)}I.appendChild(L);const k=document.createElement("textarea");k.className=" .text-enhancer-review-popup textarea ",k.style.cssText="width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;",k.placeholder="Your thoughts",k.rows=2,k.cols=20,I.appendChild(k);const j=document.createElement("button");j.textContent="Share",j.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",j.onclick=()=>{SubmitReview(),chrome.storage.local.set({textEnhancerReviewed:!0}),I.remove()};const M=document.createElement("button");M.textContent="Later",M.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",M.onclick=()=>I.remove(),I.appendChild(j),I.appendChild(M),document.body.appendChild(I)}if(window.__TEXT_ENHANCER_LOADED__)console.debug("[TE] content script already loaded");else{let I=function(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const n=document.createElement("link");n.rel="stylesheet",n.href=e,document.head.appendChild(n)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const n=document.createElement("link");n.rel="stylesheet",n.dataset.textEnhancerTheme="true",n.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(n)}}},_=function(e,n){const t=e.toLowerCase(),o=n.toLowerCase();return t.includes("x.com")||t.includes("instagram.com")||t.includes("facebook.com")||t.includes("tiktok.com")||t.includes("reddit.com")||o.includes("tweet")||o.includes("post")||o.includes("comment")?"social_media":t.includes("mail.google.com")||t.includes("outlook")||t.includes("yahoo.com/mail")||t.includes("mail")||o.includes("inbox")||o.includes("email")||o.includes("compose")?"email":t.includes("linkedin.com")&&!t.includes("linkedin.com/feed")||t.includes("docs.google.com")||t.includes("notion.so")||t.includes("slack.com")||t.includes("teams.microsoft.com")||o.includes("document")||o.includes("report")||o.includes("project")||o.includes("proposal")?"professional":t.includes("scholar.google.com")||t.includes(".edu")||t.includes("academia.edu")||t.includes("researchgate.net")||t.includes("coursera.org")||t.includes("canvas")||o.includes("course")||o.includes("assignment")||o.includes("paper")||o.includes("research")||o.includes("study")?"academic":t.includes("tinder.com")||t.includes("bumble.com")||t.includes("hinge.co")||t.includes("okcupid.com")||t.includes("match.com")||o.includes("dating")||o.includes("chat")&&(o.includes("match")||o.includes("date")||o.includes("love"))?"romantic":"general"},L=function(){const e=document.activeElement;return e&&e!==document.body?e:null},k=function(e=null){const n=e||L();return n?typeof ce=="function"?ce(n):n.value||n.innerText||n.textContent||"":""},j=function(e){if(!e)return!1;const n=e.tagName.toLowerCase(),t=n==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),o=n==="textarea",a=e.isContentEditable||e.hasAttribute("contenteditable");return t||o||a},H=function(e){return e?e.closest('[contenteditable="true"]'):null},ue=function(e){if(!e)return"";const n=e.getAttribute("placeholder");if(n)return n;const t=e.dataset||{};if(t){if(t.placeholder)return t.placeholder;if(t.textPlaceholder)return t.textPlaceholder}const o=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(o)return o;const a=e.getAttribute("title");if(a)return a;const r=e.querySelector("[data-placeholder]");return r&&r.textContent?r.textContent.trim():""},O=function(e,n,t,o=!1){const a={bubbles:!0,cancelable:!0,key:n,code:t,ctrlKey:o};e.dispatchEvent(new KeyboardEvent("keydown",a)),e.dispatchEvent(new KeyboardEvent("keyup",a))},me=function(e,n){if(!e)return;e.focus(),e.innerHTML="";const t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o);try{document.execCommand("insertText",!1,n)}catch{const r=new DataTransfer;r.setData("text/plain",n);const u=new ClipboardEvent("paste",{bubbles:!0,clipboardData:r});e.dispatchEvent(u)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:n})),e.dispatchEvent(new Event("change",{bubbles:!0}))},he=function(e,n){if(!e)return!1;try{e.focus();const t=window.getSelection(),o=document.createRange();if(o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o),document.execCommand("delete"),!document.execCommand("insertText",!1,n)){const r=new DataTransfer;r.setData("text/plain",n),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:r})),e.textContent=n}return e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:n})),e.dispatchEvent(new Event("change",{bubbles:!0})),O(e," ","Space"),O(e,"Backspace","Backspace"),e.blur(),setTimeout(()=>e.focus(),20),!0}catch(t){return console.error("[TE] twitterRewrite failed:",t),!1}},de=function(e,n){if(!e)return;e.focus();const t=window.getSelection(),o=document.createRange();o.selectNodeContents(e),t.removeAllRanges(),t.addRange(o),O(e,"a","KeyA",!0),O(e,"Backspace","Backspace");const a=document.execCommand("insertText",!1,n);if(console.debug("Instagram replace execCommand after keystroke clear",a,e),!a){const r=new DataTransfer;r.setData("text/plain",n),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:r}))}console.log("Instagram text injected")},G=function(e,n,t=null){if(t||(t={action:"enhance-text-with-gemini",context:"general"}),e&&!re.has(e)){const r=ce(e);re.set(e,{text:r,params:t})}if(!e||!j(e))return!1;const o=e.selectionStart,a=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const r=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(r,"value").set.call(e,n),typeof o=="number"&&typeof a=="number"){const p=Math.min(o,n.length);try{e.setSelectionRange(p,p)}catch(i){console.error("Failed to restore cursor position:",i)}}const g=new Event("input",{bubbles:!0}),N=new Event("change",{bubbles:!0}),l=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(g),e.dispatchEvent(N),e.dispatchEvent(l),U(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let r=e.isContentEditable?e:H(e);r&&r.querySelector('[contenteditable="true"]')&&(r=r.querySelector('[contenteditable="true"]'));let u=r;for(;u&&u.parentElement&&u.parentElement.isContentEditable;)u=u.parentElement;if(r){const g=window.location.hostname,N=(l,p)=>{l.focus(),O(l,"a","KeyA",!0),O(l,"Backspace","Backspace");const i=new DataTransfer;i.setData("text/plain",p);const C=new ClipboardEvent("paste",{bubbles:!0,clipboardData:i});l.dispatchEvent(C)};if(g.endsWith("whatsapp.com"))try{return N(r,n),U(e),!0}catch(l){console.error("WhatsApp replace failed, falling back:",l)}if(g.endsWith("instagram.com"))try{const l=r&&r.querySelector('[data-lexical-editor="true"]')||u||r;return de(l,n),U(e),!0}catch(l){console.error("Instagram replace failed",l)}if(g.endsWith("twitter.com")||g.endsWith("x.com")){const l=document.querySelector('div[role="textbox"][contenteditable="true"]');if(he(l||r,n))return U(e),!0}if(g.endsWith("instagram.com"))try{const l=u||r;return l?(de(l,n),U(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(l){console.error("Instagram replace failed",l)}return me(u||r,n),U(e),!0}}return!1},W=function(e,n=!0){navigator.clipboard.writeText(e).then(()=>{n&&y("Enhanced text copied to clipboard!","success")}).catch(t=>{console.error("Failed to copy text:",t),n&&y("Failed to copy to clipboard","error")})},fe=function(){if(I(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)},be=function(){fe(),ae();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const n=document.createElement("div");n.id="text-enhancer-popup",n.className="text-enhancer-context-popup modern-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header modern-header";const o=document.createElement("div");o.className="title-container";const a=document.createElement("h2");a.id="text-enhancer-title",a.textContent="✨ Text-Enhancer";const r=document.createElement("p");r.id="text-enhancer-subtitle",r.textContent="AI-powered writing enhancement",o.appendChild(a),o.appendChild(r);const u=document.createElement("button");u.className="text-enhancer-close-btn modern-close",u.innerHTML="×",u.addEventListener("click",()=>{n.style.opacity="0",n.style.transform="scale(0.95)",setTimeout(()=>n.remove(),200)}),t.appendChild(o),t.appendChild(u);const g=document.createElement("div");g.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((h,b)=>{const v=document.createElement("button");v.className=`text-enhancer-tab ${b===0?"active":""}`,v.dataset.tab=h.id;const P=document.createElement("span");P.className="tab-icon",P.textContent=h.icon;const T=document.createElement("span");T.className="tab-text",T.textContent=h.text,v.appendChild(P),v.appendChild(T),v.addEventListener("click",we=>{document.querySelectorAll(".text-enhancer-tab").forEach(le=>le.classList.remove("active")),we.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(le=>le.classList.remove("active")),document.getElementById(`text-enhancer-${h.id}-content`).classList.add("active")}),g.appendChild(v)});const l=document.createElement("div");l.id="text-enhancer-content";const p=document.createElement("div");p.id="text-enhancer-custom-content",p.className="text-enhancer-tab-content active";const i=document.createElement("label");i.className="text-enhancer-label",i.textContent="Custom Prompt:",i.htmlFor="text-enhancer-prompt";const C=document.createElement("textarea");C.id="text-enhancer-prompt",C.className="text-enhancer-textarea",C.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',C.rows=3;const x=document.createElement("label");x.className="text-enhancer-label",x.textContent="Text to Enhance:",x.htmlFor="text-enhancer-text";const c=document.createElement("textarea");c.id="text-enhancer-text",c.className="text-enhancer-textarea",c.placeholder="Enter or paste text to enhance...",c.rows=5;const m=L();let B="";j(m)&&(B=k(m),B&&B.trim()!==""&&(c.value=B)),p.appendChild(i),p.appendChild(C),p.appendChild(x),p.appendChild(c);const R=document.createElement("div");R.id="text-enhancer-templates-content",R.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Choose a Template",R.appendChild(z),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(h=>{const b=document.createElement("div");b.className="text-enhancer-template-card";const v=document.createElement("h4");v.className="text-enhancer-template-name",v.textContent=h.name;const P=document.createElement("p");P.className="text-enhancer-template-description",P.textContent=h.description;const T=document.createElement("button");T.className="text-enhancer-button text-enhancer-button-primary",T.textContent="Use Template",T.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),C.value=h.prompt,c.focus()}),b.appendChild(v),b.appendChild(P),b.appendChild(T),R.appendChild(b)});const S=document.createElement("div");S.id="text-enhancer-freelance-content",S.className="text-enhancer-tab-content";const f=document.createElement("h3");f.className="text-enhancer-subtitle",f.textContent="Freelance Proposal Templates",S.appendChild(f),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(h=>{const b=document.createElement("div");b.className="text-enhancer-template-card";const v=document.createElement("h4");v.className="text-enhancer-template-name",v.textContent=h.name;const P=document.createElement("p");P.className="text-enhancer-template-description",P.textContent=h.description;const T=document.createElement("button");T.className="text-enhancer-button text-enhancer-button-primary",T.textContent="Use Template",T.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),C.value=h.prompt,c.focus()}),b.appendChild(v),b.appendChild(P),b.appendChild(T),S.appendChild(b)});const s=document.createElement("div");s.id="text-enhancer-tone-content",s.className="text-enhancer-tab-content";const w=document.createElement("h3");w.className="text-enhancer-subtitle",w.textContent="Select Tone & Style",s.appendChild(w);const E=document.createElement("label");E.className="text-enhancer-label",E.textContent="Tone:",E.htmlFor="text-enhancer-tone";const A=document.createElement("select");A.id="text-enhancer-tone",A.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(h=>{const b=document.createElement("option");b.value=h.value,b.textContent=h.icon?`${h.icon} ${h.text}`:h.text,A.appendChild(b)});const Q=document.createElement("label");Q.className="text-enhancer-label",Q.textContent="Style:",Q.htmlFor="text-enhancer-style";const K=document.createElement("select");K.id="text-enhancer-style",K.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(h=>{const b=document.createElement("option");b.value=h.value,b.textContent=h.icon?`${h.icon} ${h.text}`:h.text,K.appendChild(b)});const V=document.createElement("div");V.className="text-enhancer-checkbox-container";const J=document.createElement("input");J.type="checkbox",J.id="text-enhancer-emoji",J.className="text-enhancer-checkbox";const Z=document.createElement("label");Z.htmlFor="text-enhancer-emoji",Z.className="text-enhancer-checkbox-label",Z.textContent="Include emojis for emotional emphasis",V.appendChild(J),V.appendChild(Z);const ee=document.createElement("label");ee.className="text-enhancer-label",ee.textContent="Additional Instructions (optional):",ee.htmlFor="text-enhancer-instructions";const Y=document.createElement("textarea");Y.id="text-enhancer-instructions",Y.className="text-enhancer-textarea",Y.placeholder="Add any specific instructions or requirements...",Y.rows=2;const se=document.createElement("div");se.className="text-enhancer-button-group";const te=document.createElement("button");te.className="text-enhancer-button text-enhancer-button-primary",te.innerHTML="🎨 Apply Tone & Style",te.addEventListener("click",()=>{const h=A.value,b=K.value,v=Y.value.trim(),P=J.checked;if(!h&&!b){y("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let T="Rewrite the following text";h&&(T+=` in a ${h} tone`),b&&(T+=h?` and ${b} style`:` in a ${b} style`),v&&(T+=`. Additional instructions: ${v}`),P&&(T+=". Include appropriate emojis to emphasize emotions and key points."),C.value=T,c.focus()}),se.appendChild(te),s.appendChild(E),s.appendChild(A),s.appendChild(Q),s.appendChild(K),s.appendChild(V),s.appendChild(ee),s.appendChild(Y),s.appendChild(se);const ne=document.createElement("div");ne.className="text-enhancer-button-group";const oe=document.createElement("button");oe.className="text-enhancer-button text-enhancer-button-secondary",oe.textContent="Cancel",oe.addEventListener("click",()=>n.remove());const $=document.createElement("button");$.className="text-enhancer-button text-enhancer-button-primary",$.textContent="Generate",$.addEventListener("click",()=>{const h=C.value.trim(),b=c.value.trim();if(!h){y("Please enter a custom prompt","error");return}if(!b){y("Please enter text to enhance","error");return}$.disabled=!0,$.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:b,context:"general",customPrompt:h},v=>{if($.disabled=!1,$.textContent="Generate",v&&v.success){let P=!1;m&&j(m)&&(P=G(m,v.enhancedText)),P||W(v.enhancedText),n.remove()}else y(v&&v.error?`Error: ${v.error}`:"Failed to enhance text","error")})}),ne.appendChild(oe),ne.appendChild($),p.appendChild(ne),l.appendChild(p),l.appendChild(R),l.appendChild(S),l.appendChild(s),n.appendChild(t),n.appendChild(g),n.appendChild(l),document.body.appendChild(n),C.focus()},ge=function(){ae();const e=document.createElement("div");e.className="text-enhancer-context-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header";const t=document.createElement("h2");t.textContent="Context-Based Enhancement";const o=document.createElement("button");o.className="text-enhancer-close-btn",o.textContent="×",o.addEventListener("click",()=>e.remove()),n.appendChild(t),n.appendChild(o);const a=document.createElement("div");a.className="text-enhancer-content";const r=document.createElement("div");r.className="text-enhancer-section";const u=document.createElement("label");u.textContent="Provide Context:",u.htmlFor="text-enhancer-context-input";const g=document.createElement("textarea");g.id="text-enhancer-context-input",g.className="text-enhancer-textarea",g.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',g.rows=3,r.appendChild(u),r.appendChild(g);const N=document.createElement("div");N.className="text-enhancer-section";const l=document.createElement("label");l.textContent="Additional Information (optional):",l.htmlFor="text-enhancer-text-input";const p=document.createElement("textarea");p.id="text-enhancer-text-input",p.className="text-enhancer-textarea",p.placeholder="Add any details you want included (e.g., dates, names, specific points)",p.rows=3,N.appendChild(l),N.appendChild(p);const i=document.createElement("div");i.className="text-enhancer-options";const C=document.createElement("div");C.className="text-enhancer-option";const x=document.createElement("input");x.type="checkbox",x.id="text-enhancer-humanize",x.checked=!0;const c=document.createElement("label");c.htmlFor="text-enhancer-humanize",c.textContent="Make it sound natural and human-written",C.appendChild(x),C.appendChild(c);const m=document.createElement("div");m.className="text-enhancer-option";const B=document.createElement("input");B.type="checkbox",B.id="text-enhancer-emoji";const R=document.createElement("label");R.htmlFor="text-enhancer-emoji",R.textContent="Include appropriate emojis",m.appendChild(B),m.appendChild(R),i.appendChild(C),i.appendChild(m);const z=document.createElement("div");z.className="text-enhancer-buttons";const F=document.createElement("button");F.className="text-enhancer-button text-enhancer-cancel-btn",F.textContent="Cancel",F.addEventListener("click",()=>e.remove());const S=document.createElement("button");S.className="text-enhancer-button text-enhancer-generate-btn",S.textContent="Generate",S.addEventListener("click",()=>{const f=g.value.trim(),d=p.value.trim(),s=x.checked,w=B.checked;if(!f){y("Please provide context for what you want to generate","error");return}S.disabled=!0,S.textContent="Generating...";let E=`${f}`;d&&(E+=`

Additional information: ${d}`),s&&(E+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:d||"Generate from context",context:"context-based",customPrompt:E,includeEmojis:w},A=>{S.disabled=!1,S.textContent="Generate",A&&A.success?(W(A.enhancedText),e.remove()):y(A&&A.error?`Error: ${A.error}`:"Failed to generate text","error")})}),z.appendChild(F),z.appendChild(S),a.appendChild(r),a.appendChild(N),a.appendChild(i),a.appendChild(z),e.appendChild(n),e.appendChild(a),document.body.appendChild(e),g.focus(),ae()},ae=function(){I();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const n=document.createElement("style");n.id=e,n.textContent=`
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
  `,document.head.appendChild(n)},ce=function(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""},U=function(e){if(!e)return;ye();const n=document.createElement("div"),t=re.get(e);t&&(n.dataset.originalText=t.text||"",n.dataset.originalParams=JSON.stringify(t.params||{})),n.className="te-action-bar",n.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const o=document.createElement("button");o.textContent="×",o.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const a=document.createElement("button");a.textContent="↩ Revert",a.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const r=document.createElement("button");r.textContent="🔄 Regenerate",r.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",n.appendChild(o),n.appendChild(a),n.appendChild(r),document.body.appendChild(n),u();function u(){const x=e.getBoundingClientRect();n.style.top=`${window.scrollY+x.bottom+4}px`,n.style.left=`${window.scrollX+x.left}px`}window.addEventListener("scroll",u,{passive:!0});const g=new ResizeObserver(u);g.observe(document.body,{childList:!0});let N=0,l=0,p=!1;n.addEventListener("mousedown",x=>{p=!0,N=x.clientX-parseInt(n.style.left),l=x.clientY-parseInt(n.style.top),x.preventDefault()}),document.addEventListener("mousemove",x=>{p&&(n.style.left=`${x.clientX-N}px`,n.style.top=`${x.clientY-l}px`)}),document.addEventListener("mouseup",()=>{p=!1});function i(){n.remove(),window.removeEventListener("scroll",u),g.disconnect()}a.addEventListener("click",x=>{x.preventDefault(),x.stopPropagation();const c=n.dataset.originalText||"",m=n.dataset.originalParams?JSON.parse(n.dataset.originalParams):null;console.debug("[TE] Revert click",c),i(),setTimeout(()=>{G(e,c,m)},50)}),a.addEventListener("mousedown",x=>x.stopPropagation()),r.addEventListener("mousedown",x=>x.stopPropagation()),o.addEventListener("click",()=>i()),r.addEventListener("click",()=>{const x=n.dataset.originalText||"",c=n.dataset.originalParams?JSON.parse(n.dataset.originalParams):null;r.disabled=!0,r.textContent="…",chrome.runtime.sendMessage({action:c&&c.action?c.action:"enhance-text-with-gemini",text:x,context:c&&c.context?c.context:"general",customPrompt:c?c.customPrompt:void 0,tone:c?c.tone:void 0,includeEmojis:c?c.includeEmojis:!1},m=>{r.disabled=!1,r.textContent="🔄 Regenerate",m&&m.success?G(e,m.enhancedText):console.error("Regenerate failed",m&&m.error)})});const C=()=>i();e.addEventListener("keydown",C,{once:!0}),window.__teCleanupBar=i},ye=function(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)},ve=function(e){const n=window.location.hostname;let t=!1;for(const o in ie)if(o!=="*"&&n.endsWith(o)){t=!0;const a=ie[o].selector,r=e&&e.closest?e.closest(a):null;if(r)return r;const u=document.querySelector(a);if(u)return u}if(!t){const o=ie["*"].selector,a=e&&e.closest?e.closest(o):null;if(a)return a;const r=document.querySelector(o);if(r)return r}return null};window.__TEXT_ENHANCER_LOADED__=!0,window.safeSend||(window.safeSend=function e(n,t,o=1){try{chrome.runtime.sendMessage(n,a=>{if(chrome.runtime.lastError&&/context invalidated/i.test(chrome.runtime.lastError.message)&&o<3)return console.warn("[TE] safeSend placeholder retry",o),setTimeout(()=>e(n,t,o+1),200*o);t&&t(a)})}catch(a){if(o<3)return console.warn("[TE] safeSend placeholder retry throw",o),setTimeout(()=>e(n,t,o+1),200*o);console.warn("safeSend placeholder error",a)}});const M={isEditableElement:j,findContentEditableAncestor:H,findPlatformEditable:ve,getPlaceholderFromElement:ue,getTextFromFocusedElement:k,getFocusedElement:L,getTextFromElement:k,setTextInElement:G},D=M,q=D.setTextInElement;D.setTextInElement=function(e,n,t){const o=D.getTextFromElement(e),a=q?q(e,n,t):!1;return y("Inserted ✅","info"),createRevertBar(e,o),a},window.TextEnhancerEditable=D;async function xe(){const{isEditableElement:e,getTextFromFocusedElement:n,getPlaceholderFromElement:t,getFocusedElement:o}=M;let a=o(),r;if(!e(a)){const i=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');i.length>0?a=i[0]:(a=null,y("No input field found. Enhanced text will be copied to clipboard.","info"))}if(e(a)){if(r=n(a),!r||r.trim()===""){const i=t(a);if(i.trim()!=="")r=i,y('Using placeholder text: "'+r.substring(0,20)+(r.length>20?"...":"")+'"');else{y("No text to enhance","error");return}}}else{y("No text found to enhance","error");return}y("Enhancing text with AI...");const u=window.location.href,g=document.title,N=_(u,g),l=location.hostname;let p=null;/^(?:www\.)?(?:x|twitter)\.com$/i.test(l)?p="twitter":/^(?:www\.)?instagram\.com$/i.test(l)?p="instagram":/whatsapp\.com$/i.test(l)&&(p="whatsapp"),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:r,context:N,platform:p},i=>{i&&i.success?e(a)&&G(a,i.enhancedText)?(y("Text enhanced and filled in!","success"),W(i.enhancedText,!1)):W(i.enhancedText,!0):y(i&&i.error?`Error: ${i.error}`:"Failed to enhance text","error")})}const re=new WeakMap,ie={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};(function(){if(/(web\.whatsapp\.com|whatsapp\.com|instagram\.com|(?:x|twitter)\.com)$/i.test(location.hostname))return;let t=null,o=null,a=null,r=!1,u=0,g=0,N=!1;function l(){if(document.getElementById("te-quick-style"))return;const c=document.createElement("style");c.id="te-quick-style",c.textContent=`
      .te-qa-btn{position:absolute;width:22px;height:22px;background:#7c3aed;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);transition:transform .15s ease;z-index:99999;}
      .te-qa-btn:hover{transform:scale(1.1);}    
      .te-qa-menu{position:absolute;display:flex;flex-direction:column;gap:4px;background:#232336;color:#fff;padding:6px 8px;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.4);font-family:Inter,sans-serif;font-size:12px;z-index:99999;}
      .te-qa-menu button{all:unset;cursor:pointer;padding:4px 6px;border-radius:4px;transition:background .1s;}
      .te-qa-menu button:hover{background:#2d2d40;}
    `,document.head.appendChild(c)}function p(){t==null||t.remove(),o==null||o.remove(),t=o=a=null,N=!1,document.removeEventListener("scroll",i,!0)}function i(){if(!t||!a||N)return;const c=a.getBoundingClientRect();t.style.top=`${window.scrollY+c.top-26}px`,t.style.left=`${window.scrollX+c.right-10}px`,o&&(o.style.top=`${parseFloat(t.style.top)+24}px`,o.style.left=t.style.left)}function C(){if(o){o.remove(),o=null;return}const c=()=>{!t||!o||(o.style.top=`${parseFloat(t.style.top)+24}px`,o.style.left=t.style.left)};o=document.createElement("div"),o.className="te-qa-menu";const m=[{label:"Quick Enhance",key:"quick"},{label:"Custom Prompt",key:"custom"},{label:"AI Write",key:"aiwrite"}];let B="";function R(z){if(a){if(B=k(a),window.EditableHelper&&typeof M.replaceText=="function")try{M.replaceText(a,z)}catch{}else a.value!==void 0?a.value=z:a.innerText=z;["input","change"].forEach(F=>{a.dispatchEvent(new Event(F,{bubbles:!0}))}),y("Enhanced ☑️","info"),createRevertBar(a,B)}}m.forEach(({label:z,key:F})=>{const S=document.createElement("button");S.textContent=z,S.addEventListener("click",()=>{if(F==="quick"){const f=k(a);y("Enhancing...","info"),safeSend({action:"enhance-text",text:f},d=>{d&&d.success?(R(d.enhancedText),y("Enhanced ☑️","info")):y(d.error||"Enhancement failed","error"),p()}),a.focus()}else if(F==="custom"){o.innerHTML="";const f=document.createElement("div");f.style.background="#232336",f.style.color="#fff",f.style.padding="8px",f.style.borderRadius="8px",f.style.display="flex",f.style.flexDirection="column",f.style.gap="6px";const d=document.createElement("textarea");d.rows=3,d.placeholder="Describe how you'd like it enhanced...",d.className="text-enhancer-textarea",d.style.width="220px",d.style.fontSize="12px",d.style.background="#1c1c2b",d.style.color="#fff",d.style.border="1px solid #444",d.style.borderRadius="4px",d.style.padding="4px 6px";const s=document.createElement("button");s.style.padding="4px 8px",s.style.fontSize="12px",s.style.display="flex",s.style.alignItems="center",s.style.gap="4px",s.style.background="#4c4b8e",s.style.color="#fff",s.style.border="none",s.style.borderRadius="4px";const w=document.createElement("img");w.alt="Enhance",w.style.width="14px",w.style.height="14px",w.style.objectFit="contain",w.src=chrome.runtime.getURL("/icons/logo.png"),w.onerror=()=>{w.onerror=null,w.onerror=()=>{s.textContent="Enhance"}},s.appendChild(w),w.complete||(w.onload=()=>{}),s.addEventListener("click",()=>{const E=d.value.trim();if(!E)return;let A=k(a);A||(A=" "),y("Enhancing...","info"),safeSend({action:"custom-prompt",customPrompt:E,text:A},X=>{X&&X.success?(R(X.enhancedText),y("Enhanced ✅","info")):y(X.error||"Enhancement failed","error"),a&&typeof a.focus=="function"&&a.focus(),p()})}),d.addEventListener("keydown",E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),s.click())}),f.appendChild(d),f.appendChild(s),o.appendChild(f),d.focus()}else if(F==="aiwrite"){o.innerHTML="";const f=document.createElement("div");f.style.background="#232336",f.style.color="#fff",f.style.padding="8px",f.style.borderRadius="8px",f.style.display="flex",f.style.flexDirection="column",f.style.gap="6px";const d=document.createElement("textarea");d.rows=3,d.placeholder="Ask AI to write something...",d.style.width="220px",d.style.fontSize="12px",d.style.background="#1c1c2b",d.style.color="#fff",d.style.border="1px solid #444",d.style.borderRadius="4px",d.style.padding="4px 6px";const s=document.createElement("button");s.textContent="Ask",s.style.padding="4px 8px",s.style.fontSize="12px",s.style.background="#4c4b8e",s.style.color="#fff",s.style.border="none",s.style.borderRadius="4px",s.addEventListener("click",()=>{const w=d.value.trim();w&&(y("Asking AI...","info"),safeSend({action:"ai-write",prompt:w},E=>{E&&E.success?(R(E.generatedText||E.enhancedText||""),y("Enhanced ✅","info")):y((E==null?void 0:E.error)||"AI request failed","error"),a&&typeof a.focus=="function"&&a.focus(),p()}))}),d.addEventListener("keydown",w=>{w.key==="Enter"&&!w.shiftKey&&(w.preventDefault(),s.click())}),f.appendChild(d),f.appendChild(s),o.appendChild(f),d.focus()}}),o.appendChild(S)}),document.body.appendChild(o),c(),i(),i()}function x(c){p(),a=c,l(),t=document.createElement("div"),t.setAttribute("tabindex","-1"),t.className="te-qa-btn",t.style="padding:2px;",t.textContent="✏",t.addEventListener("click",C),t.addEventListener("mousedown",m=>{m.button===0&&(r=!0,u=m.clientX-t.getBoundingClientRect().left,g=m.clientY-t.getBoundingClientRect().top,N=!0,m.preventDefault())}),document.addEventListener("mousemove",m=>{r&&(t.style.left=`${m.clientX-u}px`,t.style.top=`${m.clientY-g}px`,o&&(o.style.top=`${parseFloat(t.style.top)+24}px`,o.style.left=t.style.left))}),document.addEventListener("mouseup",()=>{r=!1}),document.body.appendChild(t),i(),document.addEventListener("scroll",i,!0)}document.addEventListener("focusin",c=>{const m=c.target;m.closest(".te-qa-btn")||m.closest(".te-qa-menu")||(M.isEditableElement(m)?x(m):p())})})(),chrome.runtime.onMessage.addListener((e,n,t)=>(e.action==="enhance-text"?(xe(),Ee(),t({success:!0})):e.action==="show-custom-prompt"?(be(),t({success:!0})):e.action==="show-context-enhancer"?(ge(),t({success:!0})):e.action==="ping"&&t({status:"content_script_ready"}),!0))}
