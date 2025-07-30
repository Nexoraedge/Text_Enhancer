"use strict";function y(I,$="info"){let L=document.getElementById("gemini-enhancer-toast-container");L||(L=document.createElement("div"),L.id="gemini-enhancer-toast-container",L.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `,document.body.appendChild(L));const k=document.createElement("div");k.style.cssText=`
      background-color: ${$==="error"?"#f44336":"#1a73e8"};
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
    `,k.textContent=I,L.appendChild(k),setTimeout(()=>{k.style.opacity="1"},10),setTimeout(()=>{k.style.opacity="0",setTimeout(()=>{L.removeChild(k)},300)},3e3)}const ue=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function Ce(){chrome.storage.local.get("Feedback_Submitted",function(I){useCount+=1,chrome.storage.local.set({textEnhancerUsage:useCount}),useCount>0&&useCount%4===0&&ke()})}function ke(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const I=document.createElement("div");I.className="text-enhancer-feedback-popup",I.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const $=document.createElement("p");$.textContent=ue[Math.floor(Math.random()*ue.length)],$.style.margin="0 0 12px 0",I.appendChild($);const L=document.createElement("div");L.className="text-enhancer-stars",L.style.cssText="display:flex;gap:6px;margin-bottom:12px;";for(let D=1;D<=5;D++){const q=document.createElement("button");q.className="text-enhancer-star-btn",q.textContent="★",q.style.cssText="background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;",q.onclick=()=>{for(let O=1;O<=D;O++)L.children[O-1].style.color="#facc15"},L.appendChild(q)}I.appendChild(L);const k=document.createElement("textarea");k.className=" .text-enhancer-review-popup textarea ",k.style.cssText="width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;",k.placeholder="Your thoughts",k.rows=2,k.cols=20,I.appendChild(k);const M=document.createElement("button");M.textContent="Share",M.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",M.onclick=()=>{SubmitReview(),chrome.storage.local.set({textEnhancerReviewed:!0}),I.remove()};const j=document.createElement("button");j.textContent="Later",j.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",j.onclick=()=>I.remove(),I.appendChild(M),I.appendChild(j),document.body.appendChild(I)}if(window.__TEXT_ENHANCER_LOADED__)console.debug("[TE] content script already loaded");else{let I=function(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const t=document.createElement("link");t.rel="stylesheet",t.dataset.textEnhancerTheme="true",t.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(t)}}},$=function(e,t){const n=e.toLowerCase(),o=t.toLowerCase();return n.includes("x.com")||n.includes("instagram.com")||n.includes("facebook.com")||n.includes("tiktok.com")||n.includes("reddit.com")||o.includes("tweet")||o.includes("post")||o.includes("comment")?"social_media":n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||o.includes("inbox")||o.includes("email")||o.includes("compose")?"email":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||o.includes("document")||o.includes("report")||o.includes("project")||o.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||o.includes("course")||o.includes("assignment")||o.includes("paper")||o.includes("research")||o.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||o.includes("dating")||o.includes("chat")&&(o.includes("match")||o.includes("date")||o.includes("love"))?"romantic":"general"},L=function(){const e=document.activeElement;return e&&e!==document.body?e:null},k=function(e=null){const t=e||L();return t?typeof ce=="function"?ce(t):t.value||t.innerText||t.textContent||"":""},M=function(e){if(!e)return!1;const t=e.tagName.toLowerCase(),n=t==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),o=t==="textarea",a=e.isContentEditable||e.hasAttribute("contenteditable");return n||o||a},O=function(e){return e?e.closest('[contenteditable="true"]'):null},me=function(e){if(!e)return"";const t=e.getAttribute("placeholder");if(t)return t;const n=e.dataset||{};if(n){if(n.placeholder)return n.placeholder;if(n.textPlaceholder)return n.textPlaceholder}const o=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(o)return o;const a=e.getAttribute("title");if(a)return a;const r=e.querySelector("[data-placeholder]");return r&&r.textContent?r.textContent.trim():""},V=function(e,t,n,o=!1){const a={bubbles:!0,cancelable:!0,key:t,code:n,ctrlKey:o};e.dispatchEvent(new KeyboardEvent("keydown",a)),e.dispatchEvent(new KeyboardEvent("keyup",a))},he=function(e,t){if(!e)return;e.focus(),e.innerHTML="";const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o);try{document.execCommand("insertText",!1,t)}catch{const r=new DataTransfer;r.setData("text/plain",t);const d=new ClipboardEvent("paste",{bubbles:!0,clipboardData:r});e.dispatchEvent(d)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0}))},xe=function(e,t){const o=(r=>{for(const d in r)if(d.startsWith("__reactInternalInstance$")||d.startsWith("__reactFiber$"))return r[d];return null})(e);if(o){const r=o;r&&r.stateNode&&r.stateNode.forceUpdate&&r.stateNode.forceUpdate()}["input","change","blur","focus"].forEach(r=>{e.dispatchEvent(new Event(r,{bubbles:!0}))})},fe=function(e,t){var n,o;if(!e)return!1;try{e.focus();const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set,r=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set,d=e._reactInternalFiber||e._reactInternals||e.__reactInternalInstance;if(d){const c=window.getSelection(),i=document.createRange();i.selectNodeContents(e),c.removeAllRanges(),c.addRange(i),document.execCommand("delete"),document.execCommand("insertText",!1,t);const v=((n=d.memoizedProps)==null?void 0:n.onChange)||((o=d.pendingProps)==null?void 0:o.onChange);v&&v({target:{value:t}})}else{const c=window.getSelection(),i=document.createRange();i.selectNodeContents(e),c.removeAllRanges(),c.addRange(i),document.execCommand("delete"),document.execCommand("insertText",!1,t)}[new InputEvent("beforeinput",{bubbles:!0,inputType:"insertText",data:t}),new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}),new Event("change",{bubbles:!0}),new KeyboardEvent("keyup",{bubbles:!0,key:"Enter"}),new FocusEvent("blur",{bubbles:!0}),new FocusEvent("focus",{bubbles:!0})].forEach(c=>{try{e.dispatchEvent(c)}catch(i){console.warn("Event dispatch failed:",i)}}),setTimeout(()=>{e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}));const c=new Event("input",{bubbles:!0});c.simulated=!0,e.dispatchEvent(c)},50),document.querySelectorAll('textarea[data-testid^="tweetTextarea"]').forEach(c=>{const i=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;i?i.call(c,t):c.value=t,c.dispatchEvent(new Event("input",{bubbles:!0})),c.dispatchEvent(new Event("change",{bubbles:!0}))}),e.contentEditable!=="true"&&e.setAttribute("contenteditable","true");const s=window.getSelection();if(s){s.removeAllRanges();const c=document.createRange();c.selectNodeContents(e),c.collapse(!1),s.addRange(c)}return e.focus(),!0}catch(a){return console.error("[TE] twitterRewrite failed:",a),!1}},de=function(e,t){if(!e)return;e.focus();const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),V(e,"a","KeyA",!0),V(e,"Backspace","Backspace");const a=document.execCommand("insertText",!1,t);if(console.debug("Instagram replace execCommand after keystroke clear",a,e),!a){const r=new DataTransfer;r.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:r}))}console.log("Instagram text injected")},Y=function(e,t,n=null){if(n||(n={action:"enhance-text-with-gemini",context:"general"}),e&&!re.has(e)){const r=ce(e);re.set(e,{text:r,params:n})}if(!e||!M(e))return!1;const o=e.selectionStart,a=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const r=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(r,"value").set.call(e,t),typeof o=="number"&&typeof a=="number"){const c=Math.min(o,t.length);try{e.setSelectionRange(c,c)}catch(i){console.error("Failed to restore cursor position:",i)}}const g=new Event("input",{bubbles:!0}),T=new Event("change",{bubbles:!0}),s=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(g),e.dispatchEvent(T),e.dispatchEvent(s),H(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let r=e.isContentEditable?e:O(e);r&&r.querySelector('[contenteditable="true"]')&&(r=r.querySelector('[contenteditable="true"]'));let d=r;for(;d&&d.parentElement&&d.parentElement.isContentEditable;)d=d.parentElement;if(r){const g=window.location.hostname,T=(s,c)=>{s.focus(),V(s,"a","KeyA",!0),V(s,"Backspace","Backspace");const i=new DataTransfer;i.setData("text/plain",c);const v=new ClipboardEvent("paste",{bubbles:!0,clipboardData:i});s.dispatchEvent(v)};if(g.endsWith("whatsapp.com"))try{return T(r,t),H(e),!0}catch(s){console.error("WhatsApp replace failed, falling back:",s)}if(g.endsWith("instagram.com"))try{const s=r&&r.querySelector('[data-lexical-editor="true"]')||d||r;return de(s,t),H(e),!0}catch(s){console.error("Instagram replace failed",s)}if(g.endsWith("twitter.com")||g.endsWith("x.com")){const s=document.querySelector('div[role="textbox"][contenteditable="true"]')||document.querySelector('[data-testid="tweetTextarea_0"]')||document.querySelector('div[contenteditable="true"][data-testid*="tweet"]')||r;if(s&&fe(s,t))return setTimeout(()=>{xe(s),setTimeout(()=>{s.textContent!==t&&(s.textContent=t,s.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t})))},100)},100),H(e),!0}if(g.endsWith("instagram.com"))try{const s=d||r;return s?(de(s,t),H(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(s){console.error("Instagram replace failed",s)}return he(d||r,t),H(e),!0}}return!1},G=function(e,t=!0){navigator.clipboard.writeText(e).then(()=>{t&&y("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),t&&y("Failed to copy to clipboard","error")})},pe=function(){if(I(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)},ge=function(){pe(),ae();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const t=document.createElement("div");t.id="text-enhancer-popup",t.className="text-enhancer-context-popup modern-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header modern-header";const o=document.createElement("div");o.className="title-container";const a=document.createElement("h2");a.id="text-enhancer-title",a.textContent="✨ Text-Enhancer";const r=document.createElement("p");r.id="text-enhancer-subtitle",r.textContent="AI-powered writing enhancement",o.appendChild(a),o.appendChild(r);const d=document.createElement("button");d.className="text-enhancer-close-btn modern-close",d.innerHTML="×",d.addEventListener("click",()=>{t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>t.remove(),200)}),n.appendChild(o),n.appendChild(d);const g=document.createElement("div");g.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((h,b)=>{const w=document.createElement("button");w.className=`text-enhancer-tab ${b===0?"active":""}`,w.dataset.tab=h.id;const P=document.createElement("span");P.className="tab-icon",P.textContent=h.icon;const S=document.createElement("span");S.className="tab-text",S.textContent=h.text,w.appendChild(P),w.appendChild(S),w.addEventListener("click",Ee=>{document.querySelectorAll(".text-enhancer-tab").forEach(le=>le.classList.remove("active")),Ee.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(le=>le.classList.remove("active")),document.getElementById(`text-enhancer-${h.id}-content`).classList.add("active")}),g.appendChild(w)});const s=document.createElement("div");s.id="text-enhancer-content";const c=document.createElement("div");c.id="text-enhancer-custom-content",c.className="text-enhancer-tab-content active";const i=document.createElement("label");i.className="text-enhancer-label",i.textContent="Custom Prompt:",i.htmlFor="text-enhancer-prompt";const v=document.createElement("textarea");v.id="text-enhancer-prompt",v.className="text-enhancer-textarea",v.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',v.rows=3;const x=document.createElement("label");x.className="text-enhancer-label",x.textContent="Text to Enhance:",x.htmlFor="text-enhancer-text";const l=document.createElement("textarea");l.id="text-enhancer-text",l.className="text-enhancer-textarea",l.placeholder="Enter or paste text to enhance...",l.rows=5;const m=L();let F="";M(m)&&(F=k(m),F&&F.trim()!==""&&(l.value=F)),c.appendChild(i),c.appendChild(v),c.appendChild(x),c.appendChild(l);const z=document.createElement("div");z.id="text-enhancer-templates-content",z.className="text-enhancer-tab-content";const R=document.createElement("h3");R.className="text-enhancer-subtitle",R.textContent="Choose a Template",z.appendChild(R),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(h=>{const b=document.createElement("div");b.className="text-enhancer-template-card";const w=document.createElement("h4");w.className="text-enhancer-template-name",w.textContent=h.name;const P=document.createElement("p");P.className="text-enhancer-template-description",P.textContent=h.description;const S=document.createElement("button");S.className="text-enhancer-button text-enhancer-button-primary",S.textContent="Use Template",S.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),v.value=h.prompt,l.focus()}),b.appendChild(w),b.appendChild(P),b.appendChild(S),z.appendChild(b)});const N=document.createElement("div");N.id="text-enhancer-freelance-content",N.className="text-enhancer-tab-content";const f=document.createElement("h3");f.className="text-enhancer-subtitle",f.textContent="Freelance Proposal Templates",N.appendChild(f),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(h=>{const b=document.createElement("div");b.className="text-enhancer-template-card";const w=document.createElement("h4");w.className="text-enhancer-template-name",w.textContent=h.name;const P=document.createElement("p");P.className="text-enhancer-template-description",P.textContent=h.description;const S=document.createElement("button");S.className="text-enhancer-button text-enhancer-button-primary",S.textContent="Use Template",S.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),v.value=h.prompt,l.focus()}),b.appendChild(w),b.appendChild(P),b.appendChild(S),N.appendChild(b)});const p=document.createElement("div");p.id="text-enhancer-tone-content",p.className="text-enhancer-tab-content";const E=document.createElement("h3");E.className="text-enhancer-subtitle",E.textContent="Select Tone & Style",p.appendChild(E);const C=document.createElement("label");C.className="text-enhancer-label",C.textContent="Tone:",C.htmlFor="text-enhancer-tone";const A=document.createElement("select");A.id="text-enhancer-tone",A.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(h=>{const b=document.createElement("option");b.value=h.value,b.textContent=h.icon?`${h.icon} ${h.text}`:h.text,A.appendChild(b)});const J=document.createElement("label");J.className="text-enhancer-label",J.textContent="Style:",J.htmlFor="text-enhancer-style";const K=document.createElement("select");K.id="text-enhancer-style",K.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(h=>{const b=document.createElement("option");b.value=h.value,b.textContent=h.icon?`${h.icon} ${h.text}`:h.text,K.appendChild(b)});const Q=document.createElement("div");Q.className="text-enhancer-checkbox-container";const X=document.createElement("input");X.type="checkbox",X.id="text-enhancer-emoji",X.className="text-enhancer-checkbox";const Z=document.createElement("label");Z.htmlFor="text-enhancer-emoji",Z.className="text-enhancer-checkbox-label",Z.textContent="Include emojis for emotional emphasis",Q.appendChild(X),Q.appendChild(Z);const ee=document.createElement("label");ee.className="text-enhancer-label",ee.textContent="Additional Instructions (optional):",ee.htmlFor="text-enhancer-instructions";const U=document.createElement("textarea");U.id="text-enhancer-instructions",U.className="text-enhancer-textarea",U.placeholder="Add any specific instructions or requirements...",U.rows=2;const se=document.createElement("div");se.className="text-enhancer-button-group";const te=document.createElement("button");te.className="text-enhancer-button text-enhancer-button-primary",te.innerHTML="🎨 Apply Tone & Style",te.addEventListener("click",()=>{const h=A.value,b=K.value,w=U.value.trim(),P=X.checked;if(!h&&!b){y("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let S="Rewrite the following text";h&&(S+=` in a ${h} tone`),b&&(S+=h?` and ${b} style`:` in a ${b} style`),w&&(S+=`. Additional instructions: ${w}`),P&&(S+=". Include appropriate emojis to emphasize emotions and key points."),v.value=S,l.focus()}),se.appendChild(te),p.appendChild(C),p.appendChild(A),p.appendChild(J),p.appendChild(K),p.appendChild(Q),p.appendChild(ee),p.appendChild(U),p.appendChild(se);const ne=document.createElement("div");ne.className="text-enhancer-button-group";const oe=document.createElement("button");oe.className="text-enhancer-button text-enhancer-button-secondary",oe.textContent="Cancel",oe.addEventListener("click",()=>t.remove());const _=document.createElement("button");_.className="text-enhancer-button text-enhancer-button-primary",_.textContent="Generate",_.addEventListener("click",()=>{const h=v.value.trim(),b=l.value.trim();if(!h){y("Please enter a custom prompt","error");return}if(!b){y("Please enter text to enhance","error");return}_.disabled=!0,_.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:b,context:"general",customPrompt:h},w=>{if(_.disabled=!1,_.textContent="Generate",w&&w.success){let P=!1;m&&M(m)&&(P=Y(m,w.enhancedText)),P||G(w.enhancedText),t.remove()}else y(w&&w.error?`Error: ${w.error}`:"Failed to enhance text","error")})}),ne.appendChild(oe),ne.appendChild(_),c.appendChild(ne),s.appendChild(c),s.appendChild(z),s.appendChild(N),s.appendChild(p),t.appendChild(n),t.appendChild(g),t.appendChild(s),document.body.appendChild(t),v.focus()},ye=function(){ae(),pe();const e=document.createElement("div");e.className="text-enhancer-context-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const o=document.createElement("button");o.className="text-enhancer-close-btn",o.textContent="×",o.addEventListener("click",()=>e.remove()),t.appendChild(n),t.appendChild(o);const a=document.createElement("div");a.className="text-enhancer-content";const r=document.createElement("div");r.className="text-enhancer-section";const d=document.createElement("label");d.textContent="Provide Context:",d.htmlFor="text-enhancer-context-input";const g=document.createElement("textarea");g.id="text-enhancer-context-input",g.className="text-enhancer-textarea",g.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',g.rows=3,r.appendChild(d),r.appendChild(g);const T=document.createElement("div");T.className="text-enhancer-section";const s=document.createElement("label");s.textContent="Additional Information (optional):",s.htmlFor="text-enhancer-text-input";const c=document.createElement("textarea");c.id="text-enhancer-text-input",c.className="text-enhancer-textarea",c.placeholder="Add any details you want included (e.g., dates, names, specific points)",c.rows=3,T.appendChild(s),T.appendChild(c);const i=document.createElement("div");i.className="text-enhancer-options";const v=document.createElement("div");v.className="text-enhancer-option";const x=document.createElement("input");x.type="checkbox",x.id="text-enhancer-humanize",x.checked=!0;const l=document.createElement("label");l.htmlFor="text-enhancer-humanize",l.textContent="Make it sound natural and human-written",v.appendChild(x),v.appendChild(l);const m=document.createElement("div");m.className="text-enhancer-option";const F=document.createElement("input");F.type="checkbox",F.id="text-enhancer-emoji";const z=document.createElement("label");z.htmlFor="text-enhancer-emoji",z.textContent="Include appropriate emojis",m.appendChild(F),m.appendChild(z),i.appendChild(v),i.appendChild(m);const R=document.createElement("div");R.className="text-enhancer-buttons";const B=document.createElement("button");B.className="text-enhancer-button text-enhancer-cancel-btn",B.textContent="Cancel",B.addEventListener("click",()=>e.remove());const N=document.createElement("button");N.className="text-enhancer-button text-enhancer-generate-btn",N.textContent="Generate",N.addEventListener("click",()=>{const f=g.value.trim(),u=c.value.trim(),p=x.checked,E=F.checked;if(!f){y("Please provide context for what you want to generate","error");return}N.disabled=!0,N.textContent="Generating...";let C=`${f}`;u&&(C+=`

Additional information: ${u}`),p&&(C+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:u||"Generate from context",context:"context-based",customPrompt:C,includeEmojis:E},A=>{N.disabled=!1,N.textContent="Generate",A&&A.success?(G(A.enhancedText),e.remove()):y(A&&A.error?`Error: ${A.error}`:"Failed to generate text","error")})}),R.appendChild(B),R.appendChild(N),a.appendChild(r),a.appendChild(T),a.appendChild(i),a.appendChild(R),e.appendChild(t),e.appendChild(a),document.body.appendChild(e),g.focus(),ae()},ae=function(){I();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
  `,document.head.appendChild(t)},ce=function(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""},H=function(e){if(!e)return;ve();const t=document.createElement("div"),n=re.get(e);n&&(t.dataset.originalText=n.text||"",t.dataset.originalParams=JSON.stringify(n.params||{})),t.className="te-action-bar",t.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const o=document.createElement("button");o.textContent="×",o.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const a=document.createElement("button");a.textContent="↩ Revert",a.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const r=document.createElement("button");r.textContent="🔄 Regenerate",r.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",t.appendChild(o),t.appendChild(a),t.appendChild(r),document.body.appendChild(t),d();function d(){const x=e.getBoundingClientRect();t.style.top=`${window.scrollY+x.bottom+4}px`,t.style.left=`${window.scrollX+x.left}px`}window.addEventListener("scroll",d,{passive:!0});const g=new ResizeObserver(d);g.observe(document.body,{childList:!0});let T=0,s=0,c=!1;t.addEventListener("mousedown",x=>{c=!0,T=x.clientX-parseInt(t.style.left),s=x.clientY-parseInt(t.style.top),x.preventDefault()}),document.addEventListener("mousemove",x=>{c&&(t.style.left=`${x.clientX-T}px`,t.style.top=`${x.clientY-s}px`)}),document.addEventListener("mouseup",()=>{c=!1});function i(){t.remove(),window.removeEventListener("scroll",d),g.disconnect()}a.addEventListener("click",x=>{x.preventDefault(),x.stopPropagation();const l=t.dataset.originalText||"",m=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;console.debug("[TE] Revert click",l),i(),setTimeout(()=>{Y(e,l,m)},50)}),a.addEventListener("mousedown",x=>x.stopPropagation()),r.addEventListener("mousedown",x=>x.stopPropagation()),o.addEventListener("click",()=>i()),r.addEventListener("click",()=>{const x=t.dataset.originalText||"",l=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;r.disabled=!0,r.textContent="…",chrome.runtime.sendMessage({action:l&&l.action?l.action:"enhance-text-with-gemini",text:x,context:l&&l.context?l.context:"general",customPrompt:l?l.customPrompt:void 0,tone:l?l.tone:void 0,includeEmojis:l?l.includeEmojis:!1},m=>{r.disabled=!1,r.textContent="🔄 Regenerate",m&&m.success?Y(e,m.enhancedText):console.error("Regenerate failed",m&&m.error)})});const v=()=>i();e.addEventListener("keydown",v,{once:!0}),window.__teCleanupBar=i},ve=function(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)},we=function(e){const t=window.location.hostname;let n=!1;for(const o in ie)if(o!=="*"&&t.endsWith(o)){n=!0;const a=ie[o].selector,r=e&&e.closest?e.closest(a):null;if(r)return r;const d=document.querySelector(a);if(d)return d}if(!n){const o=ie["*"].selector,a=e&&e.closest?e.closest(o):null;if(a)return a;const r=document.querySelector(o);if(r)return r}return null};window.__TEXT_ENHANCER_LOADED__=!0,window.safeSend||(window.safeSend=function e(t,n,o=1){try{chrome.runtime.sendMessage(t,a=>{if(chrome.runtime.lastError&&/context invalidated/i.test(chrome.runtime.lastError.message)&&o<3)return console.warn("[TE] safeSend placeholder retry",o),setTimeout(()=>e(t,n,o+1),200*o);n&&n(a)})}catch(a){if(o<3)return console.warn("[TE] safeSend placeholder retry throw",o),setTimeout(()=>e(t,n,o+1),200*o);console.warn("safeSend placeholder error",a)}});const j={isEditableElement:M,findContentEditableAncestor:O,findPlatformEditable:we,getPlaceholderFromElement:me,getTextFromFocusedElement:k,getFocusedElement:L,getTextFromElement:k,setTextInElement:Y},D=j,q=D.setTextInElement;D.setTextInElement=function(e,t,n){const o=D.getTextFromElement(e),a=q?q(e,t,n):!1;return y("Inserted ✅","info"),createRevertBar(e,o),a},window.TextEnhancerEditable=D;async function be(){const{isEditableElement:e,getTextFromFocusedElement:t,getPlaceholderFromElement:n,getFocusedElement:o}=j;let a=o(),r;if(!e(a)){const i=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');i.length>0?a=i[0]:(a=null,y("No input field found. Enhanced text will be copied to clipboard.","info"))}if(e(a)){if(r=t(a),!r||r.trim()===""){const i=n(a);if(i.trim()!=="")r=i,y('Using placeholder text: "'+r.substring(0,20)+(r.length>20?"...":"")+'"');else{y("No text to enhance","error");return}}}else{y("No text found to enhance","error");return}y("Enhancing text with AI...");const d=window.location.href,g=document.title,T=$(d,g),s=location.hostname;let c=null;/^(?:www\.)?(?:x|twitter)\.com$/i.test(s)?c="twitter":/^(?:www\.)?instagram\.com$/i.test(s)?c="instagram":/whatsapp\.com$/i.test(s)&&(c="whatsapp"),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:r,context:T,platform:c},i=>{i&&i.success?e(a)&&Y(a,i.enhancedText)?(y("Text enhanced and filled in!","success"),G(i.enhancedText,!1)):G(i.enhancedText,!0):y(i&&i.error?`Error: ${i.error}`:"Failed to enhance text","error")})}const re=new WeakMap,ie={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};(function(){if(/(web\.whatsapp\.com|whatsapp\.com|instagram\.com|(?:x|twitter)\.com)$/i.test(location.hostname))return;let n=null,o=null,a=null,r=!1,d=0,g=0,T=!1;function s(){if(document.getElementById("te-quick-style"))return;const l=document.createElement("style");l.id="te-quick-style",l.textContent=`
      .te-qa-btn{position:absolute;width:22px;height:22px;background:#7c3aed;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);transition:transform .15s ease;z-index:99999;}
      .te-qa-btn:hover{transform:scale(1.1);}    
      .te-qa-menu{position:absolute;display:flex;flex-direction:column;gap:4px;background:#232336;color:#fff;padding:6px 8px;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.4);font-family:Inter,sans-serif;font-size:12px;z-index:99999;}
      .te-qa-menu button{all:unset;cursor:pointer;padding:4px 6px;border-radius:4px;transition:background .1s;}
      .te-qa-menu button:hover{background:#2d2d40;}
    `,document.head.appendChild(l)}function c(){n==null||n.remove(),o==null||o.remove(),n=o=a=null,T=!1,document.removeEventListener("scroll",i,!0)}function i(){if(!n||!a||T)return;const l=a.getBoundingClientRect();n.style.top=`${window.scrollY+l.top-26}px`,n.style.left=`${window.scrollX+l.right-10}px`,o&&(o.style.top=`${parseFloat(n.style.top)+24}px`,o.style.left=n.style.left)}function v(){if(o){o.remove(),o=null;return}const l=()=>{!n||!o||(o.style.top=`${parseFloat(n.style.top)+24}px`,o.style.left=n.style.left)};o=document.createElement("div"),o.className="te-qa-menu";const m=[{label:"Quick Enhance",key:"quick"},{label:"Custom Prompt",key:"custom"},{label:"AI Write",key:"aiwrite"}];let F="";function z(R){if(a){if(F=k(a),window.EditableHelper&&typeof j.replaceText=="function")try{j.replaceText(a,R)}catch{}else a.value!==void 0?a.value=R:a.innerText=R;["input","change"].forEach(B=>{a.dispatchEvent(new Event(B,{bubbles:!0}))}),y("Enhanced ☑️","info"),createRevertBar(a,F)}}m.forEach(({label:R,key:B})=>{const N=document.createElement("button");N.textContent=R,N.addEventListener("click",()=>{if(B==="quick"){const f=k(a);y("Enhancing...","info"),safeSend({action:"enhance-text",text:f},u=>{u&&u.success?(z(u.enhancedText),y("Enhanced ☑️","info")):y(u.error||"Enhancement failed","error"),c()}),a.focus()}else if(B==="custom"){o.innerHTML="";const f=document.createElement("div");f.style.background="#232336",f.style.color="#fff",f.style.padding="8px",f.style.borderRadius="8px",f.style.display="flex",f.style.flexDirection="column",f.style.gap="6px";const u=document.createElement("textarea");u.rows=3,u.placeholder="Describe how you'd like it enhanced...",u.className="text-enhancer-textarea",u.style.width="220px",u.style.fontSize="12px",u.style.background="#1c1c2b",u.style.color="#fff",u.style.border="1px solid #444",u.style.borderRadius="4px",u.style.padding="4px 6px";const p=document.createElement("button");p.style.padding="4px 8px",p.style.fontSize="12px",p.style.display="flex",p.style.alignItems="center",p.style.gap="4px",p.style.background="#4c4b8e",p.style.color="#fff",p.style.border="none",p.style.borderRadius="4px";const E=document.createElement("img");E.alt="Enhance",E.style.width="14px",E.style.height="14px",E.style.objectFit="contain",E.src=chrome.runtime.getURL("/icons/logo.png"),E.onerror=()=>{E.onerror=null,E.onerror=()=>{p.textContent="Enhance"}},p.appendChild(E),E.complete||(E.onload=()=>{}),p.addEventListener("click",()=>{const C=u.value.trim();if(!C)return;let A=k(a);A||(A=" "),y("Enhancing...","info"),safeSend({action:"custom-prompt",customPrompt:C,text:A},W=>{W&&W.success?(z(W.enhancedText),y("Enhanced ✅","info")):y(W.error||"Enhancement failed","error"),a&&typeof a.focus=="function"&&a.focus(),c()})}),u.addEventListener("keydown",C=>{C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),p.click())}),f.appendChild(u),f.appendChild(p),o.appendChild(f),u.focus()}else if(B==="aiwrite"){o.innerHTML="";const f=document.createElement("div");f.style.background="#232336",f.style.color="#fff",f.style.padding="8px",f.style.borderRadius="8px",f.style.display="flex",f.style.flexDirection="column",f.style.gap="6px";const u=document.createElement("textarea");u.rows=3,u.placeholder="Ask AI to write something...",u.style.width="220px",u.style.fontSize="12px",u.style.background="#1c1c2b",u.style.color="#fff",u.style.border="1px solid #444",u.style.borderRadius="4px",u.style.padding="4px 6px";const p=document.createElement("button");p.textContent="Ask",p.style.padding="4px 8px",p.style.fontSize="12px",p.style.background="#4c4b8e",p.style.color="#fff",p.style.border="none",p.style.borderRadius="4px",p.addEventListener("click",()=>{const E=u.value.trim();E&&(y("Asking AI...","info"),safeSend({action:"ai-write",customPrompt:E,text:"",includeEmojis:!1},C=>{C&&C.success?(z(C.generatedText||C.enhancedText||""),y("Enhanced ✅","info")):y((C==null?void 0:C.error)||"AI request failed","error"),a&&typeof a.focus=="function"&&a.focus(),c()}))}),u.addEventListener("keydown",E=>{E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),p.click())}),f.appendChild(u),f.appendChild(p),o.appendChild(f),u.focus()}}),o.appendChild(N)}),document.body.appendChild(o),l(),i(),i()}function x(l){c(),a=l,s(),n=document.createElement("div"),n.setAttribute("tabindex","-1"),n.className="te-qa-btn",n.style="padding:2px;",n.textContent="✏",n.addEventListener("click",v),n.addEventListener("mousedown",m=>{m.button===0&&(r=!0,d=m.clientX-n.getBoundingClientRect().left,g=m.clientY-n.getBoundingClientRect().top,T=!0,m.preventDefault())}),document.addEventListener("mousemove",m=>{r&&(n.style.left=`${m.clientX-d}px`,n.style.top=`${m.clientY-g}px`,o&&(o.style.top=`${parseFloat(n.style.top)+24}px`,o.style.left=n.style.left))}),document.addEventListener("mouseup",()=>{r=!1}),document.body.appendChild(n),i(),document.addEventListener("scroll",i,!0)}document.addEventListener("focusin",l=>{const m=l.target;m.closest(".te-qa-btn")||m.closest(".te-qa-menu")||(j.isEditableElement(m)?x(m):c())})})(),chrome.runtime.onMessage.addListener((e,t,n)=>(e.action==="enhance-text"?(be(),Ce(),n({success:!0})):e.action==="show-custom-prompt"?(ge(),n({success:!0})):e.action==="show-context-enhancer"?(ye(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0))}
