"use strict";function y(T,q="info"){let k=document.getElementById("gemini-enhancer-toast-container");k||(k=document.createElement("div"),k.id="gemini-enhancer-toast-container",k.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `,document.body.appendChild(k));const w=document.createElement("div");w.style.cssText=`
      background-color: ${q==="error"?"#f44336":"#1a73e8"};
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
    `,w.textContent=T,k.appendChild(w),setTimeout(()=>{w.style.opacity="1"},10),setTimeout(()=>{w.style.opacity="0",setTimeout(()=>{k.removeChild(w)},300)},3e3)}const de=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function we(){chrome.storage.local.get("Feedback_Submitted",function(T){useCount+=1,chrome.storage.local.set({textEnhancerUsage:useCount}),useCount>0&&useCount%4===0&&Ee()})}function Ee(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const T=document.createElement("div");T.className="text-enhancer-feedback-popup",T.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const q=document.createElement("p");q.textContent=de[Math.floor(Math.random()*de.length)],q.style.margin="0 0 12px 0",T.appendChild(q);const k=document.createElement("div");k.className="text-enhancer-stars",k.style.cssText="display:flex;gap:6px;margin-bottom:12px;";for(let R=1;R<=5;R++){const j=document.createElement("button");j.className="text-enhancer-star-btn",j.textContent="★",j.style.cssText="background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;",j.onclick=()=>{for(let _=1;_<=R;_++)k.children[_-1].style.color="#facc15"},k.appendChild(j)}T.appendChild(k);const w=document.createElement("textarea");w.className=" .text-enhancer-review-popup textarea ",w.style.cssText="width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;",w.placeholder="Your thoughts",w.rows=2,w.cols=20,T.appendChild(w);const F=document.createElement("button");F.textContent="Share",F.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",F.onclick=()=>{SubmitReview(),chrome.storage.local.set({textEnhancerReviewed:!0}),T.remove()};const B=document.createElement("button");B.textContent="Later",B.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",B.onclick=()=>T.remove(),T.appendChild(F),T.appendChild(B),document.body.appendChild(T)}if(window.__TEXT_ENHANCER_LOADED__)console.debug("[TE] content script already loaded");else{let T=function(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const t=document.createElement("link");t.rel="stylesheet",t.dataset.textEnhancerTheme="true",t.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(t)}}},q=function(e,t){const n=e.toLowerCase(),o=t.toLowerCase();return n.includes("x.com")||n.includes("instagram.com")||n.includes("facebook.com")||n.includes("tiktok.com")||n.includes("reddit.com")||o.includes("tweet")||o.includes("post")||o.includes("comment")?"social_media":n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||o.includes("inbox")||o.includes("email")||o.includes("compose")?"email":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||o.includes("document")||o.includes("report")||o.includes("project")||o.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||o.includes("course")||o.includes("assignment")||o.includes("paper")||o.includes("research")||o.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||o.includes("dating")||o.includes("chat")&&(o.includes("match")||o.includes("date")||o.includes("love"))?"romantic":"general"},k=function(){const e=document.activeElement;return e&&e!==document.body?e:null},w=function(e=null){const t=e||k();return t?typeof ae=="function"?ae(t):t.value||t.innerText||t.textContent||"":""},F=function(e){if(!e)return!1;const t=e.tagName.toLowerCase(),n=t==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),o=t==="textarea",c=e.isContentEditable||e.hasAttribute("contenteditable");return n||o||c},_=function(e){return e?e.closest('[contenteditable="true"]'):null},pe=function(e){if(!e)return"";const t=e.getAttribute("placeholder");if(t)return t;const n=e.dataset||{};if(n){if(n.placeholder)return n.placeholder;if(n.textPlaceholder)return n.textPlaceholder}const o=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(o)return o;const c=e.getAttribute("title");if(c)return c;const a=e.querySelector("[data-placeholder]");return a&&a.textContent?a.textContent.trim():""},$=function(e,t,n,o=!1){const c={bubbles:!0,cancelable:!0,key:t,code:n,ctrlKey:o};e.dispatchEvent(new KeyboardEvent("keydown",c)),e.dispatchEvent(new KeyboardEvent("keyup",c))},ue=function(e,t){if(!e)return;e.focus(),e.innerHTML="";const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o);try{document.execCommand("insertText",!1,t)}catch{const a=new DataTransfer;a.setData("text/plain",t);const s=new ClipboardEvent("paste",{bubbles:!0,clipboardData:a});e.dispatchEvent(s)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0}))},me=function(e,t){if(!e)return!1;e.focus(),$(e,"a","KeyA",!0),$(e,"Backspace","Backspace");const n=new DataTransfer;return n.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:n})),e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertFromPaste",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0})),!0},se=function(e,t){if(!e)return;e.focus();const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),$(e,"a","KeyA",!0),$(e,"Backspace","Backspace");const c=document.execCommand("insertText",!1,t);if(console.debug("Instagram replace execCommand after keystroke clear",c,e),!c){const a=new DataTransfer;a.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:a}))}console.log("Instagram text injected")},G=function(e,t,n=null){if(n||(n={action:"enhance-text-with-gemini",context:"general"}),e&&!oe.has(e)){const a=ae(e);oe.set(e,{text:a,params:n})}if(!e||!F(e))return!1;const o=e.selectionStart,c=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const a=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(a,"value").set.call(e,t),typeof o=="number"&&typeof c=="number"){const d=Math.min(o,t.length);try{e.setSelectionRange(d,d)}catch(v){console.error("Failed to restore cursor position:",v)}}const x=new Event("input",{bubbles:!0}),N=new Event("change",{bubbles:!0}),r=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(x),e.dispatchEvent(N),e.dispatchEvent(r),O(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let a=e.isContentEditable?e:_(e);a&&a.querySelector('[contenteditable="true"]')&&(a=a.querySelector('[contenteditable="true"]'));let s=a;for(;s&&s.parentElement&&s.parentElement.isContentEditable;)s=s.parentElement;if(a){const x=window.location.hostname,N=(r,d)=>{r.focus(),$(r,"a","KeyA",!0),$(r,"Backspace","Backspace");const v=new DataTransfer;v.setData("text/plain",d);const b=new ClipboardEvent("paste",{bubbles:!0,clipboardData:v});r.dispatchEvent(b)};if(x.endsWith("whatsapp.com"))try{return N(a,t),O(e),!0}catch(r){console.error("WhatsApp replace failed, falling back:",r)}if(x.endsWith("instagram.com"))try{const r=a&&a.querySelector('[data-lexical-editor="true"]')||s||a;return se(r,t),O(e),!0}catch(r){console.error("Instagram replace failed",r)}if(x.endsWith("twitter.com")||x.endsWith("x.com")){const r=document.querySelector('div[role="textbox"][contenteditable="true"]');if(me(r||a,t))return O(e),!0}if(x.endsWith("instagram.com"))try{const r=s||a;return r?(se(r,t),O(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(r){console.error("Instagram replace failed",r)}return ue(s||a,t),O(e),!0}}return!1},H=function(e,t=!0){navigator.clipboard.writeText(e).then(()=>{t&&y("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),t&&y("Failed to copy to clipboard","error")})},xe=function(){if(T(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)},be=function(){xe(),le();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const t=document.createElement("div");t.id="text-enhancer-popup",t.className="text-enhancer-context-popup modern-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header modern-header";const o=document.createElement("div");o.className="title-container";const c=document.createElement("h2");c.id="text-enhancer-title",c.textContent="✨ Text-Enhancer";const a=document.createElement("p");a.id="text-enhancer-subtitle",a.textContent="AI-powered writing enhancement",o.appendChild(c),o.appendChild(a);const s=document.createElement("button");s.className="text-enhancer-close-btn modern-close",s.innerHTML="×",s.addEventListener("click",()=>{t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>t.remove(),200)}),n.appendChild(o),n.appendChild(s);const x=document.createElement("div");x.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((u,h)=>{const f=document.createElement("button");f.className=`text-enhancer-tab ${h===0?"active":""}`,f.dataset.tab=u.id;const L=document.createElement("span");L.className="tab-icon",L.textContent=u.icon;const C=document.createElement("span");C.className="tab-text",C.textContent=u.text,f.appendChild(L),f.appendChild(C),f.addEventListener("click",ve=>{document.querySelectorAll(".text-enhancer-tab").forEach(ie=>ie.classList.remove("active")),ve.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(ie=>ie.classList.remove("active")),document.getElementById(`text-enhancer-${u.id}-content`).classList.add("active")}),x.appendChild(f)});const r=document.createElement("div");r.id="text-enhancer-content";const d=document.createElement("div");d.id="text-enhancer-custom-content",d.className="text-enhancer-tab-content active";const v=document.createElement("label");v.className="text-enhancer-label",v.textContent="Custom Prompt:",v.htmlFor="text-enhancer-prompt";const b=document.createElement("textarea");b.id="text-enhancer-prompt",b.className="text-enhancer-textarea",b.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',b.rows=3;const i=document.createElement("label");i.className="text-enhancer-label",i.textContent="Text to Enhance:",i.htmlFor="text-enhancer-text";const l=document.createElement("textarea");l.id="text-enhancer-text",l.className="text-enhancer-textarea",l.placeholder="Enter or paste text to enhance...",l.rows=5;const p=k();let m="";F(p)&&(m=w(p),m&&m.trim()!==""&&(l.value=m)),d.appendChild(v),d.appendChild(b),d.appendChild(i),d.appendChild(l);const g=document.createElement("div");g.id="text-enhancer-templates-content",g.className="text-enhancer-tab-content";const E=document.createElement("h3");E.className="text-enhancer-subtitle",E.textContent="Choose a Template",g.appendChild(E),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(u=>{const h=document.createElement("div");h.className="text-enhancer-template-card";const f=document.createElement("h4");f.className="text-enhancer-template-name",f.textContent=u.name;const L=document.createElement("p");L.className="text-enhancer-template-description",L.textContent=u.description;const C=document.createElement("button");C.className="text-enhancer-button text-enhancer-button-primary",C.textContent="Use Template",C.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),b.value=u.prompt,l.focus()}),h.appendChild(f),h.appendChild(L),h.appendChild(C),g.appendChild(h)});const S=document.createElement("div");S.id="text-enhancer-freelance-content",S.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Freelance Proposal Templates",S.appendChild(z),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(u=>{const h=document.createElement("div");h.className="text-enhancer-template-card";const f=document.createElement("h4");f.className="text-enhancer-template-name",f.textContent=u.name;const L=document.createElement("p");L.className="text-enhancer-template-description",L.textContent=u.description;const C=document.createElement("button");C.className="text-enhancer-button text-enhancer-button-primary",C.textContent="Use Template",C.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),b.value=u.prompt,l.focus()}),h.appendChild(f),h.appendChild(L),h.appendChild(C),S.appendChild(h)});const I=document.createElement("div");I.id="text-enhancer-tone-content",I.className="text-enhancer-tab-content";const Y=document.createElement("h3");Y.className="text-enhancer-subtitle",Y.textContent="Select Tone & Style",I.appendChild(Y);const M=document.createElement("label");M.className="text-enhancer-label",M.textContent="Tone:",M.htmlFor="text-enhancer-tone";const A=document.createElement("select");A.id="text-enhancer-tone",A.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(u=>{const h=document.createElement("option");h.value=u.value,h.textContent=u.icon?`${u.icon} ${u.text}`:u.text,A.appendChild(h)});const J=document.createElement("label");J.className="text-enhancer-label",J.textContent="Style:",J.htmlFor="text-enhancer-style";const W=document.createElement("select");W.id="text-enhancer-style",W.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(u=>{const h=document.createElement("option");h.value=u.value,h.textContent=u.icon?`${u.icon} ${u.text}`:u.text,W.appendChild(h)});const Q=document.createElement("div");Q.className="text-enhancer-checkbox-container";const K=document.createElement("input");K.type="checkbox",K.id="text-enhancer-emoji",K.className="text-enhancer-checkbox";const V=document.createElement("label");V.htmlFor="text-enhancer-emoji",V.className="text-enhancer-checkbox-label",V.textContent="Include emojis for emotional emphasis",Q.appendChild(K),Q.appendChild(V);const Z=document.createElement("label");Z.className="text-enhancer-label",Z.textContent="Additional Instructions (optional):",Z.htmlFor="text-enhancer-instructions";const U=document.createElement("textarea");U.id="text-enhancer-instructions",U.className="text-enhancer-textarea",U.placeholder="Add any specific instructions or requirements...",U.rows=2;const ce=document.createElement("div");ce.className="text-enhancer-button-group";const ee=document.createElement("button");ee.className="text-enhancer-button text-enhancer-button-primary",ee.innerHTML="🎨 Apply Tone & Style",ee.addEventListener("click",()=>{const u=A.value,h=W.value,f=U.value.trim(),L=K.checked;if(!u&&!h){y("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let C="Rewrite the following text";u&&(C+=` in a ${u} tone`),h&&(C+=u?` and ${h} style`:` in a ${h} style`),f&&(C+=`. Additional instructions: ${f}`),L&&(C+=". Include appropriate emojis to emphasize emotions and key points."),b.value=C,l.focus()}),ce.appendChild(ee),I.appendChild(M),I.appendChild(A),I.appendChild(J),I.appendChild(W),I.appendChild(Q),I.appendChild(Z),I.appendChild(U),I.appendChild(ce);const te=document.createElement("div");te.className="text-enhancer-button-group";const ne=document.createElement("button");ne.className="text-enhancer-button text-enhancer-button-secondary",ne.textContent="Cancel",ne.addEventListener("click",()=>t.remove());const D=document.createElement("button");D.className="text-enhancer-button text-enhancer-button-primary",D.textContent="Generate",D.addEventListener("click",()=>{const u=b.value.trim(),h=l.value.trim();if(!u){y("Please enter a custom prompt","error");return}if(!h){y("Please enter text to enhance","error");return}D.disabled=!0,D.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:h,context:"general",customPrompt:u},f=>{if(D.disabled=!1,D.textContent="Generate",f&&f.success){let L=!1;p&&F(p)&&(L=G(p,f.enhancedText)),L||H(f.enhancedText),t.remove()}else y(f&&f.error?`Error: ${f.error}`:"Failed to enhance text","error")})}),te.appendChild(ne),te.appendChild(D),d.appendChild(te),r.appendChild(d),r.appendChild(g),r.appendChild(S),r.appendChild(I),t.appendChild(n),t.appendChild(x),t.appendChild(r),document.body.appendChild(t),b.focus()},fe=function(){const e=document.createElement("div");e.className="text-enhancer-context-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const o=document.createElement("button");o.className="text-enhancer-close-btn",o.textContent="×",o.addEventListener("click",()=>e.remove()),t.appendChild(n),t.appendChild(o);const c=document.createElement("div");c.className="text-enhancer-content";const a=document.createElement("div");a.className="text-enhancer-section";const s=document.createElement("label");s.textContent="Provide Context:",s.htmlFor="text-enhancer-context-input";const x=document.createElement("textarea");x.id="text-enhancer-context-input",x.className="text-enhancer-textarea",x.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',x.rows=3,a.appendChild(s),a.appendChild(x);const N=document.createElement("div");N.className="text-enhancer-section";const r=document.createElement("label");r.textContent="Additional Information (optional):",r.htmlFor="text-enhancer-text-input";const d=document.createElement("textarea");d.id="text-enhancer-text-input",d.className="text-enhancer-textarea",d.placeholder="Add any details you want included (e.g., dates, names, specific points)",d.rows=3,N.appendChild(r),N.appendChild(d);const v=document.createElement("div");v.className="text-enhancer-options";const b=document.createElement("div");b.className="text-enhancer-option";const i=document.createElement("input");i.type="checkbox",i.id="text-enhancer-humanize",i.checked=!0;const l=document.createElement("label");l.htmlFor="text-enhancer-humanize",l.textContent="Make it sound natural and human-written",b.appendChild(i),b.appendChild(l);const p=document.createElement("div");p.className="text-enhancer-option";const m=document.createElement("input");m.type="checkbox",m.id="text-enhancer-emoji";const g=document.createElement("label");g.htmlFor="text-enhancer-emoji",g.textContent="Include appropriate emojis",p.appendChild(m),p.appendChild(g),v.appendChild(b),v.appendChild(p);const E=document.createElement("div");E.className="text-enhancer-buttons";const P=document.createElement("button");P.className="text-enhancer-button text-enhancer-cancel-btn",P.textContent="Cancel",P.addEventListener("click",()=>e.remove());const S=document.createElement("button");S.className="text-enhancer-button text-enhancer-generate-btn",S.textContent="Generate",S.addEventListener("click",()=>{const z=x.value.trim(),X=d.value.trim(),I=i.checked,Y=m.checked;if(!z){y("Please provide context for what you want to generate","error");return}S.disabled=!0,S.textContent="Generating...";let M=`${z}`;X&&(M+=`

Additional information: ${X}`),I&&(M+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:X||"Generate from context",context:"context-based",customPrompt:M,includeEmojis:Y},A=>{S.disabled=!1,S.textContent="Generate",A&&A.success?(H(A.enhancedText),e.remove()):y(A&&A.error?`Error: ${A.error}`:"Failed to generate text","error")})}),E.appendChild(P),E.appendChild(S),c.appendChild(a),c.appendChild(N),c.appendChild(v),c.appendChild(E),e.appendChild(t),e.appendChild(c),document.body.appendChild(e),x.focus(),le()},le=function(){T();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
  `,document.head.appendChild(t)},ae=function(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""},O=function(e){if(!e)return;ge();const t=document.createElement("div"),n=oe.get(e);n&&(t.dataset.originalText=n.text||"",t.dataset.originalParams=JSON.stringify(n.params||{})),t.className="te-action-bar",t.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const o=document.createElement("button");o.textContent="×",o.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const c=document.createElement("button");c.textContent="↩ Revert",c.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const a=document.createElement("button");a.textContent="🔄 Regenerate",a.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",t.appendChild(o),t.appendChild(c),t.appendChild(a),document.body.appendChild(t),s();function s(){const i=e.getBoundingClientRect();t.style.top=`${window.scrollY+i.bottom+4}px`,t.style.left=`${window.scrollX+i.left}px`}window.addEventListener("scroll",s,{passive:!0});const x=new ResizeObserver(s);x.observe(document.body,{childList:!0});let N=0,r=0,d=!1;t.addEventListener("mousedown",i=>{d=!0,N=i.clientX-parseInt(t.style.left),r=i.clientY-parseInt(t.style.top),i.preventDefault()}),document.addEventListener("mousemove",i=>{d&&(t.style.left=`${i.clientX-N}px`,t.style.top=`${i.clientY-r}px`)}),document.addEventListener("mouseup",()=>{d=!1});function v(){t.remove(),window.removeEventListener("scroll",s),x.disconnect()}c.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const l=t.dataset.originalText||"",p=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;console.debug("[TE] Revert click",l),v(),setTimeout(()=>{G(e,l,p)},50)}),c.addEventListener("mousedown",i=>i.stopPropagation()),a.addEventListener("mousedown",i=>i.stopPropagation()),o.addEventListener("click",()=>v()),a.addEventListener("click",()=>{const i=t.dataset.originalText||"",l=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;a.disabled=!0,a.textContent="…",chrome.runtime.sendMessage({action:l&&l.action?l.action:"enhance-text-with-gemini",text:i,context:l&&l.context?l.context:"general",customPrompt:l?l.customPrompt:void 0,tone:l?l.tone:void 0,includeEmojis:l?l.includeEmojis:!1},p=>{a.disabled=!1,a.textContent="🔄 Regenerate",p&&p.success?G(e,p.enhancedText):console.error("Regenerate failed",p&&p.error)})});const b=()=>v();e.addEventListener("keydown",b,{once:!0}),window.__teCleanupBar=v},ge=function(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)},ye=function(e){const t=window.location.hostname;let n=!1;for(const o in re)if(o!=="*"&&t.endsWith(o)){n=!0;const c=re[o].selector,a=e&&e.closest?e.closest(c):null;if(a)return a;const s=document.querySelector(c);if(s)return s}if(!n){const o=re["*"].selector,c=e&&e.closest?e.closest(o):null;if(c)return c;const a=document.querySelector(o);if(a)return a}return null};window.__TEXT_ENHANCER_LOADED__=!0,window.safeSend||(window.safeSend=(e,t)=>{try{chrome.runtime.sendMessage(e,t)}catch(n){console.warn("safeSend placeholder error",n)}});const B={isEditableElement:F,findContentEditableAncestor:_,findPlatformEditable:ye,getPlaceholderFromElement:pe,getTextFromFocusedElement:w,getFocusedElement:k,getTextFromElement:w,setTextInElement:G},R=B,j=R.setTextInElement;R.setTextInElement=function(e,t,n){const o=R.getTextFromElement(e),c=j?j(e,t,n):!1;return y("Inserted ✅","info"),createRevertBar(e,o),c},window.TextEnhancerEditable=R;async function he(){const{isEditableElement:e,getTextFromFocusedElement:t,getPlaceholderFromElement:n,getFocusedElement:o}=B;let c=o(),a;if(!e(c)){const r=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');r.length>0?c=r[0]:(c=null,y("No input field found. Enhanced text will be copied to clipboard.","info"))}if(e(c)){if(a=t(c),!a||a.trim()===""){const r=n(c);if(r.trim()!=="")a=r,y('Using placeholder text: "'+a.substring(0,20)+(a.length>20?"...":"")+'"');else{y("No text to enhance","error");return}}}else{y("No text found to enhance","error");return}y("Enhancing text with AI...");const s=window.location.href,x=document.title,N=q(s,x);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:a,context:N},r=>{r&&r.success?e(c)&&G(c,r.enhancedText)?(y("Text enhanced and filled in!","success"),H(r.enhancedText,!1)):H(r.enhancedText,!0):y(r&&r.error?`Error: ${r.error}`:"Failed to enhance text","error")})}const oe=new WeakMap,re={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};(function(){let t=null,n=null,o=null;function c(){if(document.getElementById("te-quick-style"))return;const r=document.createElement("style");r.id="te-quick-style",r.textContent=`
      .te-qa-btn{position:absolute;width:22px;height:22px;background:#7c3aed;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);transition:transform .15s ease;z-index:99999;}
      .te-qa-btn:hover{transform:scale(1.1);}    
      .te-qa-menu{position:absolute;display:flex;flex-direction:column;gap:4px;background:#232336;color:#fff;padding:6px 8px;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.4);font-family:Inter,sans-serif;font-size:12px;z-index:99999;}
      .te-qa-menu button{all:unset;cursor:pointer;padding:4px 6px;border-radius:4px;transition:background .1s;}
      .te-qa-menu button:hover{background:#2d2d40;}
    `,document.head.appendChild(r)}function a(){t==null||t.remove(),n==null||n.remove(),t=n=o=null,document.removeEventListener("scroll",s,!0)}function s(){if(!t||!o)return;const r=o.getBoundingClientRect();t.style.top=`${window.scrollY+r.top-26}px`,t.style.left=`${window.scrollX+r.right-10}px`,n&&(n.style.top=`${parseFloat(t.style.top)+24}px`,n.style.left=t.style.left)}function x(){if(n){n.remove(),n=null;return}n=document.createElement("div"),n.className="te-qa-menu";const r=[{label:"Quick Enhance",key:"quick"},{label:"Custom Prompt",key:"custom"},{label:"Context Generator",key:"context"}];let d="";function v(b){if(o){if(d=w(o),window.EditableHelper&&typeof B.replaceText=="function")try{B.replaceText(o,b)}catch{}else o.value!==void 0?o.value=b:o.innerText=b;["input","change"].forEach(i=>{o.dispatchEvent(new Event(i,{bubbles:!0}))}),y("Enhanced ☑️","info"),createRevertBar(o,d)}}r.forEach(({label:b,key:i})=>{const l=document.createElement("button");l.textContent=b,l.addEventListener("click",()=>{if(i==="quick"){const p=w(o);y("Enhancing...","info"),safeSend({action:"enhance-text",text:p},m=>{m&&m.success?(v(m.enhancedText),y("Enhanced ☑️","info")):y(m.error||"Enhancement failed","error"),a()}),o.focus()}else if(i==="custom"){n.innerHTML="";const p=document.createElement("div");p.style.background="#232336",p.style.color="#fff",p.style.padding="8px",p.style.borderRadius="8px",p.style.display="flex",p.style.flexDirection="column",p.style.gap="6px";const m=document.createElement("textarea");m.rows=3,m.placeholder="Describe how you'd like it enhanced...",m.className="text-enhancer-textarea",m.style.width="220px",m.style.fontSize="12px",m.style.background="#1c1c2b",m.style.color="#fff",m.style.border="1px solid #444",m.style.borderRadius="4px",m.style.padding="4px 6px";const g=document.createElement("button");g.style.padding="4px 8px",g.style.fontSize="12px",g.style.display="flex",g.style.alignItems="center",g.style.gap="4px",g.style.background="#4c4b8e",g.style.color="#fff",g.style.border="none",g.style.borderRadius="4px";const E=document.createElement("img");E.alt="Enhance",E.style.width="14px",E.style.height="14px",E.style.objectFit="contain",E.src=chrome.runtime.getURL("logo.png"),E.onerror=()=>{E.onerror=null,E.src=chrome.runtime.getURL("Pen.png"),E.onerror=()=>{g.textContent="Enhance"}},g.appendChild(E),E.complete||(E.onload=()=>{}),g.addEventListener("click",()=>{const P=m.value.trim();if(!P)return;const S=w(o);y("Enhancing...","info"),safeSend({action:"custom-prompt",customPrompt:P,text:S},z=>{z&&z.success?(v(z.enhancedText),y("Inserted ✅","info")):y(z.error||"Enhancement failed","error"),o&&typeof o.focus=="function"&&o.focus(),a()})}),m.addEventListener("keydown",P=>{P.key==="Enter"&&!P.shiftKey&&(P.preventDefault(),g.click())}),p.appendChild(m),p.appendChild(g),n.appendChild(p),m.focus()}else if(i==="context"){const p=w(o);chrome.runtime.sendMessage({action:"context-enhancer",text:p}),a()}}),n.appendChild(l)}),document.body.appendChild(n),s()}function N(r){a(),o=r,c(),t=document.createElement("div"),t.className="te-qa-btn",t.style="padding:2px;",t.textContent="✏",t.addEventListener("click",x),document.body.appendChild(t),s(),document.addEventListener("scroll",s,!0)}document.addEventListener("focusin",r=>{const d=r.target;d.closest(".te-qa-btn")||d.closest(".te-qa-menu")||(B.isEditableElement(d)?N(d):a())})})(),chrome.runtime.onMessage.addListener((e,t,n)=>(e.action==="enhance-text"?(he(),we(),n({success:!0})):e.action==="show-custom-prompt"?(be(),n({success:!0})):e.action==="show-context-enhancer"?(fe(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0))}
