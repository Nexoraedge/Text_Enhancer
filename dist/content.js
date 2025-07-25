"use strict";function E(v,M="info"){let f=document.getElementById("gemini-enhancer-toast-container");f||(f=document.createElement("div"),f.id="gemini-enhancer-toast-container",f.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `,document.body.appendChild(f));const g=document.createElement("div");g.style.cssText=`
      background-color: ${M==="error"?"#f44336":"#1a73e8"};
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
    `,g.textContent=v,f.appendChild(g),setTimeout(()=>{g.style.opacity="1"},10),setTimeout(()=>{g.style.opacity="0",setTimeout(()=>{f.removeChild(g)},300)},3e3)}const le=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function ve(){chrome.storage.local.get("Feedback_Submitted",function(v){useCount+=1,chrome.storage.local.set({textEnhancerUsage:useCount}),useCount>0&&useCount%4===0&&we()})}function we(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const v=document.createElement("div");v.className="text-enhancer-feedback-popup",v.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const M=document.createElement("p");M.textContent=le[Math.floor(Math.random()*le.length)],M.style.margin="0 0 12px 0",v.appendChild(M);const f=document.createElement("div");f.className="text-enhancer-stars",f.style.cssText="display:flex;gap:6px;margin-bottom:12px;";for(let _=1;_<=5;_++){const R=document.createElement("button");R.className="text-enhancer-star-btn",R.textContent="★",R.style.cssText="background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;",R.onclick=()=>{for(let S=1;S<=_;S++)f.children[S-1].style.color="#facc15"},f.appendChild(R)}v.appendChild(f);const g=document.createElement("textarea");g.className=" .text-enhancer-review-popup textarea ",g.style.cssText="width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;",g.placeholder="Your thoughts",g.rows=2,g.cols=20,v.appendChild(g);const P=document.createElement("button");P.textContent="Share",P.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",P.onclick=()=>{SubmitReview(),chrome.storage.local.set({textEnhancerReviewed:!0}),v.remove()};const j=document.createElement("button");j.textContent="Later",j.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",j.onclick=()=>v.remove(),v.appendChild(P),v.appendChild(j),document.body.appendChild(v)}if(window.__TEXT_ENHANCER_LOADED__)console.debug("[TE] content script already loaded");else{let v=function(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const t=document.createElement("link");t.rel="stylesheet",t.dataset.textEnhancerTheme="true",t.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(t)}}},M=function(e,t){const n=e.toLowerCase(),o=t.toLowerCase();return n.includes("x.com")||n.includes("instagram.com")||n.includes("facebook.com")||n.includes("tiktok.com")||n.includes("reddit.com")||o.includes("tweet")||o.includes("post")||o.includes("comment")?"social_media":n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||o.includes("inbox")||o.includes("email")||o.includes("compose")?"email":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||o.includes("document")||o.includes("report")||o.includes("project")||o.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||o.includes("course")||o.includes("assignment")||o.includes("paper")||o.includes("research")||o.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||o.includes("dating")||o.includes("chat")&&(o.includes("match")||o.includes("date")||o.includes("love"))?"romantic":"general"},f=function(){const e=document.activeElement;return e&&e!==document.body?e:null},g=function(e=null){const t=e||f();return t?typeof oe=="function"?oe(t):t.value||t.innerText||t.textContent||"":""},P=function(e){if(!e)return!1;const t=e.tagName.toLowerCase(),n=t==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),o=t==="textarea",c=e.isContentEditable||e.hasAttribute("contenteditable");return n||o||c},_=function(e){return e?e.closest('[contenteditable="true"]'):null},R=function(e){if(!e)return"";const t=e.getAttribute("placeholder");if(t)return t;const n=e.dataset||{};if(n){if(n.placeholder)return n.placeholder;if(n.textPlaceholder)return n.textPlaceholder}const o=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(o)return o;const c=e.getAttribute("title");if(c)return c;const a=e.querySelector("[data-placeholder]");return a&&a.textContent?a.textContent.trim():""},S=function(e,t,n,o=!1){const c={bubbles:!0,cancelable:!0,key:t,code:n,ctrlKey:o};e.dispatchEvent(new KeyboardEvent("keydown",c)),e.dispatchEvent(new KeyboardEvent("keyup",c))},de=function(e,t){if(!e)return;e.focus(),e.innerHTML="";const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o);try{document.execCommand("insertText",!1,t)}catch{const a=new DataTransfer;a.setData("text/plain",t);const l=new ClipboardEvent("paste",{bubbles:!0,clipboardData:a});e.dispatchEvent(l)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0}))},pe=function(e,t){if(!e)return!1;e.focus(),S(e,"a","KeyA",!0),S(e,"Backspace","Backspace");const n=new DataTransfer;return n.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:n})),e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertFromPaste",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0})),!0},ie=function(e,t){if(!e)return;e.focus();const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),S(e,"a","KeyA",!0),S(e,"Backspace","Backspace");const c=document.execCommand("insertText",!1,t);if(console.debug("Instagram replace execCommand after keystroke clear",c,e),!c){const a=new DataTransfer;a.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:a}))}console.log("Instagram text injected")},G=function(e,t,n=null){if(n||(n={action:"enhance-text-with-gemini",context:"general"}),e&&!ne.has(e)){const a=oe(e);ne.set(e,{text:a,params:n})}if(!e||!P(e))return!1;const o=e.selectionStart,c=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const a=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(a,"value").set.call(e,t),typeof o=="number"&&typeof c=="number"){const p=Math.min(o,t.length);try{e.setSelectionRange(p,p)}catch(w){console.error("Failed to restore cursor position:",w)}}const h=new Event("input",{bubbles:!0}),C=new Event("change",{bubbles:!0}),r=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(h),e.dispatchEvent(C),e.dispatchEvent(r),D(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let a=e.isContentEditable?e:_(e);a&&a.querySelector('[contenteditable="true"]')&&(a=a.querySelector('[contenteditable="true"]'));let l=a;for(;l&&l.parentElement&&l.parentElement.isContentEditable;)l=l.parentElement;if(a){const h=window.location.hostname,C=(r,p)=>{r.focus(),S(r,"a","KeyA",!0),S(r,"Backspace","Backspace");const w=new DataTransfer;w.setData("text/plain",p);const i=new ClipboardEvent("paste",{bubbles:!0,clipboardData:w});r.dispatchEvent(i)};if(h.endsWith("whatsapp.com"))try{return C(a,t),D(e),!0}catch(r){console.error("WhatsApp replace failed, falling back:",r)}if(h.endsWith("instagram.com"))try{const r=a&&a.querySelector('[data-lexical-editor="true"]')||l||a;return ie(r,t),D(e),!0}catch(r){console.error("Instagram replace failed",r)}if(h.endsWith("twitter.com")||h.endsWith("x.com")){const r=document.querySelector('div[role="textbox"][contenteditable="true"]');if(pe(r||a,t))return D(e),!0}if(h.endsWith("instagram.com"))try{const r=l||a;return r?(ie(r,t),D(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(r){console.error("Instagram replace failed",r)}return de(l||a,t),D(e),!0}}return!1},U=function(e,t=!0){navigator.clipboard.writeText(e).then(()=>{t&&E("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),t&&E("Failed to copy to clipboard","error")})},me=function(){if(v(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)},he=function(){me(),se();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const t=document.createElement("div");t.id="text-enhancer-popup",t.className="text-enhancer-context-popup modern-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header modern-header";const o=document.createElement("div");o.className="title-container";const c=document.createElement("h2");c.id="text-enhancer-title",c.textContent="✨ Text-Enhancer";const a=document.createElement("p");a.id="text-enhancer-subtitle",a.textContent="AI-powered writing enhancement",o.appendChild(c),o.appendChild(a);const l=document.createElement("button");l.className="text-enhancer-close-btn modern-close",l.innerHTML="×",l.addEventListener("click",()=>{t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>t.remove(),200)}),n.appendChild(o),n.appendChild(l);const h=document.createElement("div");h.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((s,d)=>{const m=document.createElement("button");m.className=`text-enhancer-tab ${d===0?"active":""}`,m.dataset.tab=s.id;const y=document.createElement("span");y.className="tab-icon",y.textContent=s.icon;const b=document.createElement("span");b.className="tab-text",b.textContent=s.text,m.appendChild(y),m.appendChild(b),m.addEventListener("click",ge=>{document.querySelectorAll(".text-enhancer-tab").forEach(ce=>ce.classList.remove("active")),ge.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(ce=>ce.classList.remove("active")),document.getElementById(`text-enhancer-${s.id}-content`).classList.add("active")}),h.appendChild(m)});const r=document.createElement("div");r.id="text-enhancer-content";const p=document.createElement("div");p.id="text-enhancer-custom-content",p.className="text-enhancer-tab-content active";const w=document.createElement("label");w.className="text-enhancer-label",w.textContent="Custom Prompt:",w.htmlFor="text-enhancer-prompt";const i=document.createElement("textarea");i.id="text-enhancer-prompt",i.className="text-enhancer-textarea",i.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',i.rows=3;const u=document.createElement("label");u.className="text-enhancer-label",u.textContent="Text to Enhance:",u.htmlFor="text-enhancer-text";const x=document.createElement("textarea");x.id="text-enhancer-text",x.className="text-enhancer-textarea",x.placeholder="Enter or paste text to enhance...",x.rows=5;const L=f();let I="";P(L)&&(I=g(L),I&&I.trim()!==""&&(x.value=I)),p.appendChild(w),p.appendChild(i),p.appendChild(u),p.appendChild(x);const A=document.createElement("div");A.id="text-enhancer-templates-content",A.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Choose a Template",A.appendChild(z),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(s=>{const d=document.createElement("div");d.className="text-enhancer-template-card";const m=document.createElement("h4");m.className="text-enhancer-template-name",m.textContent=s.name;const y=document.createElement("p");y.className="text-enhancer-template-description",y.textContent=s.description;const b=document.createElement("button");b.className="text-enhancer-button text-enhancer-button-primary",b.textContent="Use Template",b.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),i.value=s.prompt,x.focus()}),d.appendChild(m),d.appendChild(y),d.appendChild(b),A.appendChild(d)});const k=document.createElement("div");k.id="text-enhancer-freelance-content",k.className="text-enhancer-tab-content";const q=document.createElement("h3");q.className="text-enhancer-subtitle",q.textContent="Freelance Proposal Templates",k.appendChild(q),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(s=>{const d=document.createElement("div");d.className="text-enhancer-template-card";const m=document.createElement("h4");m.className="text-enhancer-template-name",m.textContent=s.name;const y=document.createElement("p");y.className="text-enhancer-template-description",y.textContent=s.description;const b=document.createElement("button");b.className="text-enhancer-button text-enhancer-button-primary",b.textContent="Use Template",b.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),i.value=s.prompt,x.focus()}),d.appendChild(m),d.appendChild(y),d.appendChild(b),k.appendChild(d)});const T=document.createElement("div");T.id="text-enhancer-tone-content",T.className="text-enhancer-tab-content";const O=document.createElement("h3");O.className="text-enhancer-subtitle",O.textContent="Select Tone & Style",T.appendChild(O);const F=document.createElement("label");F.className="text-enhancer-label",F.textContent="Tone:",F.htmlFor="text-enhancer-tone";const N=document.createElement("select");N.id="text-enhancer-tone",N.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(s=>{const d=document.createElement("option");d.value=s.value,d.textContent=s.icon?`${s.icon} ${s.text}`:s.text,N.appendChild(d)});const J=document.createElement("label");J.className="text-enhancer-label",J.textContent="Style:",J.htmlFor="text-enhancer-style";const W=document.createElement("select");W.id="text-enhancer-style",W.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(s=>{const d=document.createElement("option");d.value=s.value,d.textContent=s.icon?`${s.icon} ${s.text}`:s.text,W.appendChild(d)});const V=document.createElement("div");V.className="text-enhancer-checkbox-container";const K=document.createElement("input");K.type="checkbox",K.id="text-enhancer-emoji",K.className="text-enhancer-checkbox";const X=document.createElement("label");X.htmlFor="text-enhancer-emoji",X.className="text-enhancer-checkbox-label",X.textContent="Include emojis for emotional emphasis",V.appendChild(K),V.appendChild(X);const Q=document.createElement("label");Q.className="text-enhancer-label",Q.textContent="Additional Instructions (optional):",Q.htmlFor="text-enhancer-instructions";const $=document.createElement("textarea");$.id="text-enhancer-instructions",$.className="text-enhancer-textarea",$.placeholder="Add any specific instructions or requirements...",$.rows=2;const re=document.createElement("div");re.className="text-enhancer-button-group";const Z=document.createElement("button");Z.className="text-enhancer-button text-enhancer-button-primary",Z.innerHTML="🎨 Apply Tone & Style",Z.addEventListener("click",()=>{const s=N.value,d=W.value,m=$.value.trim(),y=K.checked;if(!s&&!d){E("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let b="Rewrite the following text";s&&(b+=` in a ${s} tone`),d&&(b+=s?` and ${d} style`:` in a ${d} style`),m&&(b+=`. Additional instructions: ${m}`),y&&(b+=". Include appropriate emojis to emphasize emotions and key points."),i.value=b,x.focus()}),re.appendChild(Z),T.appendChild(F),T.appendChild(N),T.appendChild(J),T.appendChild(W),T.appendChild(V),T.appendChild(Q),T.appendChild($),T.appendChild(re);const ee=document.createElement("div");ee.className="text-enhancer-button-group";const te=document.createElement("button");te.className="text-enhancer-button text-enhancer-button-secondary",te.textContent="Cancel",te.addEventListener("click",()=>t.remove());const B=document.createElement("button");B.className="text-enhancer-button text-enhancer-button-primary",B.textContent="Generate",B.addEventListener("click",()=>{const s=i.value.trim(),d=x.value.trim();if(!s){E("Please enter a custom prompt","error");return}if(!d){E("Please enter text to enhance","error");return}B.disabled=!0,B.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:d,context:"general",customPrompt:s},m=>{if(B.disabled=!1,B.textContent="Generate",m&&m.success){let y=!1;L&&P(L)&&(y=G(L,m.enhancedText)),y||U(m.enhancedText),t.remove()}else E(m&&m.error?`Error: ${m.error}`:"Failed to enhance text","error")})}),ee.appendChild(te),ee.appendChild(B),p.appendChild(ee),r.appendChild(p),r.appendChild(A),r.appendChild(k),r.appendChild(T),t.appendChild(n),t.appendChild(h),t.appendChild(r),document.body.appendChild(t),i.focus()},xe=function(){const e=document.createElement("div");e.className="text-enhancer-context-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const o=document.createElement("button");o.className="text-enhancer-close-btn",o.textContent="×",o.addEventListener("click",()=>e.remove()),t.appendChild(n),t.appendChild(o);const c=document.createElement("div");c.className="text-enhancer-content";const a=document.createElement("div");a.className="text-enhancer-section";const l=document.createElement("label");l.textContent="Provide Context:",l.htmlFor="text-enhancer-context-input";const h=document.createElement("textarea");h.id="text-enhancer-context-input",h.className="text-enhancer-textarea",h.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',h.rows=3,a.appendChild(l),a.appendChild(h);const C=document.createElement("div");C.className="text-enhancer-section";const r=document.createElement("label");r.textContent="Additional Information (optional):",r.htmlFor="text-enhancer-text-input";const p=document.createElement("textarea");p.id="text-enhancer-text-input",p.className="text-enhancer-textarea",p.placeholder="Add any details you want included (e.g., dates, names, specific points)",p.rows=3,C.appendChild(r),C.appendChild(p);const w=document.createElement("div");w.className="text-enhancer-options";const i=document.createElement("div");i.className="text-enhancer-option";const u=document.createElement("input");u.type="checkbox",u.id="text-enhancer-humanize",u.checked=!0;const x=document.createElement("label");x.htmlFor="text-enhancer-humanize",x.textContent="Make it sound natural and human-written",i.appendChild(u),i.appendChild(x);const L=document.createElement("div");L.className="text-enhancer-option";const I=document.createElement("input");I.type="checkbox",I.id="text-enhancer-emoji";const A=document.createElement("label");A.htmlFor="text-enhancer-emoji",A.textContent="Include appropriate emojis",L.appendChild(I),L.appendChild(A),w.appendChild(i),w.appendChild(L);const z=document.createElement("div");z.className="text-enhancer-buttons";const H=document.createElement("button");H.className="text-enhancer-button text-enhancer-cancel-btn",H.textContent="Cancel",H.addEventListener("click",()=>e.remove());const k=document.createElement("button");k.className="text-enhancer-button text-enhancer-generate-btn",k.textContent="Generate",k.addEventListener("click",()=>{const q=h.value.trim(),Y=p.value.trim(),T=u.checked,O=I.checked;if(!q){E("Please provide context for what you want to generate","error");return}k.disabled=!0,k.textContent="Generating...";let F=`${q}`;Y&&(F+=`

Additional information: ${Y}`),T&&(F+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:Y||"Generate from context",context:"context-based",customPrompt:F,includeEmojis:O},N=>{k.disabled=!1,k.textContent="Generate",N&&N.success?(U(N.enhancedText),e.remove()):E(N&&N.error?`Error: ${N.error}`:"Failed to generate text","error")})}),z.appendChild(H),z.appendChild(k),c.appendChild(a),c.appendChild(C),c.appendChild(w),c.appendChild(z),e.appendChild(t),e.appendChild(c),document.body.appendChild(e),h.focus(),se()},se=function(){v();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
  `,document.head.appendChild(t)},oe=function(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""},D=function(e){if(!e)return;be();const t=document.createElement("div"),n=ne.get(e);n&&(t.dataset.originalText=n.text||"",t.dataset.originalParams=JSON.stringify(n.params||{})),t.className="te-action-bar",t.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const o=document.createElement("button");o.textContent="×",o.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const c=document.createElement("button");c.textContent="↩ Revert",c.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const a=document.createElement("button");a.textContent="🔄 Regenerate",a.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",t.appendChild(o),t.appendChild(c),t.appendChild(a),document.body.appendChild(t),l();function l(){const i=e.getBoundingClientRect();t.style.top=`${window.scrollY+i.bottom+4}px`,t.style.left=`${window.scrollX+i.left}px`}window.addEventListener("scroll",l,{passive:!0});const h=new ResizeObserver(l);h.observe(e);const C=()=>p(),r=i=>{!e.contains(i.target)&&!t.contains(i.target)&&p()};e.addEventListener("blur",C,{once:!0}),document.addEventListener("focusin",r);function p(){t.isConnected&&(t.remove(),window.removeEventListener("scroll",l),h.disconnect(),e.removeEventListener("blur",C),document.removeEventListener("focusin",r))}c.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation();const u=t.dataset.originalText||"",x=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;console.debug("[TE] Revert click",u),p(),setTimeout(()=>{G(e,u,x)},50)}),c.addEventListener("mousedown",i=>i.stopPropagation()),a.addEventListener("mousedown",i=>i.stopPropagation()),o.addEventListener("click",()=>p()),a.addEventListener("click",()=>{const i=t.dataset.originalText||"",u=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;a.disabled=!0,a.textContent="…",chrome.runtime.sendMessage({action:u&&u.action?u.action:"enhance-text-with-gemini",text:i,context:u&&u.context?u.context:"general",customPrompt:u?u.customPrompt:void 0,tone:u?u.tone:void 0,includeEmojis:u?u.includeEmojis:!1},x=>{a.disabled=!1,a.textContent="🔄 Regenerate",x&&x.success?G(e,x.enhancedText):console.error("Regenerate failed",x&&x.error)})});const w=()=>p();e.addEventListener("keydown",w,{once:!0}),window.__teCleanupBar=p},be=function(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)},fe=function(e){const t=window.location.hostname;let n=!1;for(const o in ae)if(o!=="*"&&t.endsWith(o)){n=!0;const c=ae[o].selector,a=e&&e.closest?e.closest(c):null;if(a)return a;const l=document.querySelector(c);if(l)return l}if(!n){const o=ae["*"].selector,c=e&&e.closest?e.closest(o):null;if(c)return c;const a=document.querySelector(o);if(a)return a}return null};window.__TEXT_ENHANCER_LOADED__=!0;const j={isEditableElement:P,findContentEditableAncestor:_,findPlatformEditable:fe,getPlaceholderFromElement:R,getTextFromFocusedElement:g,getFocusedElement:f,getTextFromElement:g,setTextInElement:G};window.TextEnhancerEditable=j;async function ue(){const{isEditableElement:e,getTextFromFocusedElement:t,getPlaceholderFromElement:n,getFocusedElement:o}=j;let c=o(),a;if(!e(c)){const r=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');r.length>0?c=r[0]:(c=null,E("No input field found. Enhanced text will be copied to clipboard.","info"))}if(e(c)){if(a=t(c),!a||a.trim()===""){const r=n(c);if(r.trim()!=="")a=r,E('Using placeholder text: "'+a.substring(0,20)+(a.length>20?"...":"")+'"');else{E("No text to enhance","error");return}}}else{E("No text found to enhance","error");return}E("Enhancing text with AI...");const l=window.location.href,h=document.title,C=M(l,h);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:a,context:C},r=>{r&&r.success?e(c)&&G(c,r.enhancedText)?(E("Text enhanced and filled in!","success"),U(r.enhancedText,!1)):U(r.enhancedText,!0):E(r&&r.error?`Error: ${r.error}`:"Failed to enhance text","error")})}const ne=new WeakMap,ae={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};chrome.runtime.onMessage.addListener((e,t,n)=>(e.action==="enhance-text"?(ue(),ve(),n({success:!0})):e.action==="show-custom-prompt"?(he(),n({success:!0})):e.action==="show-context-enhancer"?(xe(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0)),function(){try{chrome.runtime.sendMessage({action:"content_script_ready"},function(e){chrome.runtime.lastError})}catch(e){console.error("Error sending ready message:",e)}}()}
