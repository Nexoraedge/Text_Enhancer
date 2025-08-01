"use strict";function v(C,B="info"){let k=document.getElementById("gemini-enhancer-toast-container");k||(k=document.createElement("div"),k.id="gemini-enhancer-toast-container",k.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `,document.body.appendChild(k));const S=document.createElement("div");S.style.cssText=`
      background-color: ${B==="error"?"#f44336":"#1a73e8"};
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
    `,S.textContent=C,k.appendChild(S),setTimeout(()=>{S.style.opacity="1"},10),setTimeout(()=>{S.style.opacity="0",setTimeout(()=>{k.removeChild(S)},300)},3e3)}const G=document.createElement("div");G.style.cssText="position:fixed;bottom:80px;right:24px;padding:10px 14px;background:#16a34a;color:#fff;border-radius:8px;font-size:13px;font-family:Inter, sans-serif;opacity:0;transition:opacity .3s;z-index:100001;pointer-events:none;";document.body.appendChild(G);function ce(C,B=!1){G.textContent=C,G.style.background=B?"#dc2626":"#16a34a",G.style.opacity="1",setTimeout(()=>{G.style.opacity="0"},3e3)}let J=0;const xe=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function fe(){chrome.storage.local.get(["Feedback_Submitted","textEnhancerUsage"],function(C){C.Feedback_Submitted||(J=C.textEnhancerUsage||0,J+=1,chrome.storage.local.set({textEnhancerUsage:J}),J>0&&J%4===0&&be())})}function be(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const C=document.createElement("div");C.className="text-enhancer-feedback-popup",C.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const B=document.createElement("p");B.textContent=xe[Math.floor(Math.random()*xe.length)],B.style.margin="0 0 12px 0",C.appendChild(B);const k=document.createElement("div");k.className="text-enhancer-stars",k.style.cssText="display:flex;gap:6px;margin-bottom:12px;";let S=0;for(let O=1;O<=5;O++){const D=document.createElement("button");D.className="text-enhancer-star-btn",D.textContent="★",D.style.cssText="background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;",D.onclick=()=>{S=O,Array.from(k.children).forEach(U=>U.style.color="#6b7280");for(let U=1;U<=O;U++)k.children[U-1].style.color="#facc15"},k.appendChild(D)}C.appendChild(k);const A=document.createElement("textarea");A.className=" .text-enhancer-review-popup textarea ",A.style.cssText="width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;",A.placeholder="Your thoughts",A.rows=2,A.cols=20,C.appendChild(A);const _=document.createElement("button");_.textContent="Share",_.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",_.onclick=()=>{Ne(S,A.value.trim()),chrome.storage.local.set({Feedback_Submitted:!0}),C.remove()};const F=document.createElement("button");F.textContent="Later",F.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",F.onclick=()=>C.remove(),C.appendChild(_),C.appendChild(F),document.body.appendChild(C)}async function Ne(C,B){var k,S;try{if(!C&&!B){ce("Please add rating or comment",!0);return}const A={stars:C||0,comment:B||"",extVersion:((S=(k=chrome.runtime)==null?void 0:k.getManifest)==null?void 0:S.call(k).version)||"dev",ua:navigator.userAgent},F=await fetch("https://tone-genie.vercel.app/api/review",{mode:"no-cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A)});F.ok||F.type==="opaque"?ce("Thanks! We got your feedback."):(console.error("Failed to submit feedback:",F.status),ce("Sorry — couldn’t send your feedback (our fault).",!0))}catch(A){console.error("Failed to submit feedback:",A),ce("Sorry — couldn’t send your feedback (our fault).",!0)}}window.showTextEnhancerReviewPopup=be;window.incrementTEUsage=fe;if(window.__TEXT_ENHANCER_LOADED__)console.debug("[TE] content script already loaded");else{let C=function(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const t=document.createElement("link");t.rel="stylesheet",t.dataset.textEnhancerTheme="true",t.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(t)}}},B=function(e,t){const n=e.toLowerCase(),o=t.toLowerCase();return n.includes("x.com")||n.includes("instagram.com")||n.includes("facebook.com")||n.includes("tiktok.com")||n.includes("reddit.com")||o.includes("tweet")||o.includes("post")||o.includes("comment")?"social_media":n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||o.includes("inbox")||o.includes("email")||o.includes("compose")?"email":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||o.includes("document")||o.includes("report")||o.includes("project")||o.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||o.includes("course")||o.includes("assignment")||o.includes("paper")||o.includes("research")||o.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||o.includes("dating")||o.includes("chat")&&(o.includes("match")||o.includes("date")||o.includes("love"))?"romantic":"general"},k=function(){const e=document.activeElement;return e&&e!==document.body?e:null},S=function(e=null){const t=e||k();return t?typeof le=="function"?le(t):t.value||t.innerText||t.textContent||"":""},A=function(e){if(!e)return!1;const t=e.tagName.toLowerCase(),n=t==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),o=t==="textarea",r=e.isContentEditable||e.hasAttribute("contenteditable");return n||o||r},D=function(e){return e?e.closest('[contenteditable="true"]'):null},U=function(e){if(!e)return"";const t=e.getAttribute("placeholder");if(t)return t;const n=e.dataset||{};if(n){if(n.placeholder)return n.placeholder;if(n.textPlaceholder)return n.textPlaceholder}const o=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(o)return o;const r=e.getAttribute("title");if(r)return r;const a=e.querySelector("[data-placeholder]");return a&&a.textContent?a.textContent.trim():""},Q=function(e,t,n,o=!1){const r={bubbles:!0,cancelable:!0,key:t,code:n,ctrlKey:o};e.dispatchEvent(new KeyboardEvent("keydown",r)),e.dispatchEvent(new KeyboardEvent("keyup",r))},ge=function(e,t){if(!e)return;e.focus(),e.innerHTML="";const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o);try{document.execCommand("insertText",!1,t)}catch{const a=new DataTransfer;a.setData("text/plain",t);const d=new ClipboardEvent("paste",{bubbles:!0,clipboardData:a});e.dispatchEvent(d)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0}))},ye=function(e,t){const o=(a=>{for(const d in a)if(d.startsWith("__reactInternalInstance$")||d.startsWith("__reactFiber$"))return a[d];return null})(e);if(o){const a=o;a&&a.stateNode&&a.stateNode.forceUpdate&&a.stateNode.forceUpdate()}["input","change","blur","focus"].forEach(a=>{e.dispatchEvent(new Event(a,{bubbles:!0}))})},ve=function(e,t){var n,o;if(!e)return!1;try{e.focus();const r=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set,a=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set,d=e._reactInternalFiber||e._reactInternals||e.__reactInternalInstance;if(d){const c=window.getSelection(),i=document.createRange();i.selectNodeContents(e),c.removeAllRanges(),c.addRange(i),document.execCommand("delete"),document.execCommand("insertText",!1,t);const w=((n=d.memoizedProps)==null?void 0:n.onChange)||((o=d.pendingProps)==null?void 0:o.onChange);w&&w({target:{value:t}})}else{const c=window.getSelection(),i=document.createRange();i.selectNodeContents(e),c.removeAllRanges(),c.addRange(i),document.execCommand("delete"),document.execCommand("insertText",!1,t)}[new InputEvent("beforeinput",{bubbles:!0,inputType:"insertText",data:t}),new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}),new Event("change",{bubbles:!0}),new KeyboardEvent("keyup",{bubbles:!0,key:"Enter"}),new FocusEvent("blur",{bubbles:!0}),new FocusEvent("focus",{bubbles:!0})].forEach(c=>{try{e.dispatchEvent(c)}catch(i){console.warn("Event dispatch failed:",i)}}),setTimeout(()=>{e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}));const c=new Event("input",{bubbles:!0});c.simulated=!0,e.dispatchEvent(c)},50),document.querySelectorAll('textarea[data-testid^="tweetTextarea"]').forEach(c=>{const i=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;i?i.call(c,t):c.value=t,c.dispatchEvent(new Event("input",{bubbles:!0})),c.dispatchEvent(new Event("change",{bubbles:!0}))}),e.contentEditable!=="true"&&e.setAttribute("contenteditable","true");const s=window.getSelection();if(s){s.removeAllRanges();const c=document.createRange();c.selectNodeContents(e),c.collapse(!1),s.addRange(c)}return e.focus(),!0}catch(r){return console.error("[TE] twitterRewrite failed:",r),!1}},me=function(e,t){if(!e)return;e.focus();const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),Q(e,"a","KeyA",!0),Q(e,"Backspace","Backspace");const r=document.execCommand("insertText",!1,t);if(console.debug("Instagram replace execCommand after keystroke clear",r,e),!r){const a=new DataTransfer;a.setData("text/plain",t),e.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:a}))}console.log("Instagram text injected")},W=function(e,t,n=null){if(n||(n={action:"enhance-text-with-gemini",context:"general"}),e&&!se.has(e)){const a=le(e);se.set(e,{text:a,params:n})}if(!e||!A(e))return!1;const o=e.selectionStart,r=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const a=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(a,"value").set.call(e,t),typeof o=="number"&&typeof r=="number"){const c=Math.min(o,t.length);try{e.setSelectionRange(c,c)}catch(i){console.error("Failed to restore cursor position:",i)}}const y=new Event("input",{bubbles:!0}),N=new Event("change",{bubbles:!0}),s=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(y),e.dispatchEvent(N),e.dispatchEvent(s),H(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let a=e.isContentEditable?e:D(e);a&&a.querySelector('[contenteditable="true"]')&&(a=a.querySelector('[contenteditable="true"]'));let d=a;for(;d&&d.parentElement&&d.parentElement.isContentEditable;)d=d.parentElement;if(a){const y=window.location.hostname,N=(s,c)=>{s.focus(),Q(s,"a","KeyA",!0),Q(s,"Backspace","Backspace");const i=new DataTransfer;i.setData("text/plain",c);const w=new ClipboardEvent("paste",{bubbles:!0,clipboardData:i});s.dispatchEvent(w)};if(y.endsWith("whatsapp.com"))try{return N(a,t),H(e),!0}catch(s){console.error("WhatsApp replace failed, falling back:",s)}if(y.endsWith("instagram.com"))try{const s=a&&a.querySelector('[data-lexical-editor="true"]')||d||a;return me(s,t),H(e),!0}catch(s){console.error("Instagram replace failed",s)}if(y.endsWith("twitter.com")||y.endsWith("x.com")){const s=document.querySelector('div[role="textbox"][contenteditable="true"]')||document.querySelector('[data-testid="tweetTextarea_0"]')||document.querySelector('div[contenteditable="true"][data-testid*="tweet"]')||a;if(s&&ve(s,t))return setTimeout(()=>{ye(s),setTimeout(()=>{s.textContent!==t&&(s.textContent=t,s.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t})))},100)},100),H(e),!0}if(y.endsWith("instagram.com"))try{const s=d||a;return s?(me(s,t),H(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(s){console.error("Instagram replace failed",s)}return ge(d||a,t),H(e),!0}}return!1},K=function(e,t=!0){navigator.clipboard.writeText(e).then(()=>{t&&v("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),t&&v("Failed to copy to clipboard","error")})},he=function(){if(C(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)},Ee=function(){he(),ie();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const t=document.createElement("div");t.id="text-enhancer-popup",t.className="text-enhancer-context-popup modern-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header modern-header";const o=document.createElement("div");o.className="title-container";const r=document.createElement("h2");r.id="text-enhancer-title",r.textContent="✨ Text-Enhancer";const a=document.createElement("p");a.id="text-enhancer-subtitle",a.textContent="AI-powered writing enhancement",o.appendChild(r),o.appendChild(a);const d=document.createElement("button");d.className="text-enhancer-close-btn modern-close",d.innerHTML="×",d.addEventListener("click",()=>{t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>t.remove(),200)}),n.appendChild(o),n.appendChild(d);const y=document.createElement("div");y.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((x,g)=>{const E=document.createElement("button");E.className=`text-enhancer-tab ${g===0?"active":""}`,E.dataset.tab=x.id;const P=document.createElement("span");P.className="tab-icon",P.textContent=x.icon;const L=document.createElement("span");L.className="tab-text",L.textContent=x.text,E.appendChild(P),E.appendChild(L),E.addEventListener("click",Se=>{document.querySelectorAll(".text-enhancer-tab").forEach(ue=>ue.classList.remove("active")),Se.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(ue=>ue.classList.remove("active")),document.getElementById(`text-enhancer-${x.id}-content`).classList.add("active")}),y.appendChild(E)});const s=document.createElement("div");s.id="text-enhancer-content";const c=document.createElement("div");c.id="text-enhancer-custom-content",c.className="text-enhancer-tab-content active";const i=document.createElement("label");i.className="text-enhancer-label",i.textContent="Custom Prompt:",i.htmlFor="text-enhancer-prompt";const w=document.createElement("textarea");w.id="text-enhancer-prompt",w.className="text-enhancer-textarea",w.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',w.rows=3;const f=document.createElement("label");f.className="text-enhancer-label",f.textContent="Text to Enhance:",f.htmlFor="text-enhancer-text";const l=document.createElement("textarea");l.id="text-enhancer-text",l.className="text-enhancer-textarea",l.placeholder="Enter or paste text to enhance...",l.rows=5;const m=k();let j="";A(m)&&(j=S(m),j&&j.trim()!==""&&(l.value=j)),c.appendChild(i),c.appendChild(w),c.appendChild(f),c.appendChild(l);const z=document.createElement("div");z.id="text-enhancer-templates-content",z.className="text-enhancer-tab-content";const R=document.createElement("h3");R.className="text-enhancer-subtitle",R.textContent="Choose a Template",z.appendChild(R),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(x=>{const g=document.createElement("div");g.className="text-enhancer-template-card";const E=document.createElement("h4");E.className="text-enhancer-template-name",E.textContent=x.name;const P=document.createElement("p");P.className="text-enhancer-template-description",P.textContent=x.description;const L=document.createElement("button");L.className="text-enhancer-button text-enhancer-button-primary",L.textContent="Use Template",L.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),w.value=x.prompt,l.focus()}),g.appendChild(E),g.appendChild(P),g.appendChild(L),z.appendChild(g)});const u=document.createElement("div");u.id="text-enhancer-freelance-content",u.className="text-enhancer-tab-content";const p=document.createElement("h3");p.className="text-enhancer-subtitle",p.textContent="Freelance Proposal Templates",u.appendChild(p),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(x=>{const g=document.createElement("div");g.className="text-enhancer-template-card";const E=document.createElement("h4");E.className="text-enhancer-template-name",E.textContent=x.name;const P=document.createElement("p");P.className="text-enhancer-template-description",P.textContent=x.description;const L=document.createElement("button");L.className="text-enhancer-button text-enhancer-button-primary",L.textContent="Use Template",L.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),w.value=x.prompt,l.focus()}),g.appendChild(E),g.appendChild(P),g.appendChild(L),u.appendChild(g)});const h=document.createElement("div");h.id="text-enhancer-tone-content",h.className="text-enhancer-tab-content";const T=document.createElement("h3");T.className="text-enhancer-subtitle",T.textContent="Select Tone & Style",h.appendChild(T);const M=document.createElement("label");M.className="text-enhancer-label",M.textContent="Tone:",M.htmlFor="text-enhancer-tone";const I=document.createElement("select");I.id="text-enhancer-tone",I.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(x=>{const g=document.createElement("option");g.value=x.value,g.textContent=x.icon?`${x.icon} ${x.text}`:x.text,I.appendChild(g)});const Z=document.createElement("label");Z.className="text-enhancer-label",Z.textContent="Style:",Z.htmlFor="text-enhancer-style";const X=document.createElement("select");X.id="text-enhancer-style",X.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(x=>{const g=document.createElement("option");g.value=x.value,g.textContent=x.icon?`${x.icon} ${x.text}`:x.text,X.appendChild(g)});const ee=document.createElement("div");ee.className="text-enhancer-checkbox-container";const V=document.createElement("input");V.type="checkbox",V.id="text-enhancer-emoji",V.className="text-enhancer-checkbox";const te=document.createElement("label");te.htmlFor="text-enhancer-emoji",te.className="text-enhancer-checkbox-label",te.textContent="Include emojis for emotional emphasis",ee.appendChild(V),ee.appendChild(te);const ne=document.createElement("label");ne.className="text-enhancer-label",ne.textContent="Additional Instructions (optional):",ne.htmlFor="text-enhancer-instructions";const Y=document.createElement("textarea");Y.id="text-enhancer-instructions",Y.className="text-enhancer-textarea",Y.placeholder="Add any specific instructions or requirements...",Y.rows=2;const pe=document.createElement("div");pe.className="text-enhancer-button-group";const oe=document.createElement("button");oe.className="text-enhancer-button text-enhancer-button-primary",oe.innerHTML="🎨 Apply Tone & Style",oe.addEventListener("click",()=>{const x=I.value,g=X.value,E=Y.value.trim(),P=V.checked;if(!x&&!g){v("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let L="Rewrite the following text";x&&(L+=` in a ${x} tone`),g&&(L+=x?` and ${g} style`:` in a ${g} style`),E&&(L+=`. Additional instructions: ${E}`),P&&(L+=". Include appropriate emojis to emphasize emotions and key points."),w.value=L,l.focus()}),pe.appendChild(oe),h.appendChild(M),h.appendChild(I),h.appendChild(Z),h.appendChild(X),h.appendChild(ee),h.appendChild(ne),h.appendChild(Y),h.appendChild(pe);const ae=document.createElement("div");ae.className="text-enhancer-button-group";const re=document.createElement("button");re.className="text-enhancer-button text-enhancer-button-secondary",re.textContent="Cancel",re.addEventListener("click",()=>t.remove());const $=document.createElement("button");$.className="text-enhancer-button text-enhancer-button-primary",$.textContent="Generate",$.addEventListener("click",()=>{const x=w.value.trim(),g=l.value.trim();if(!x){v("Please enter a custom prompt","error");return}if(!g){v("Please enter text to enhance","error");return}$.disabled=!0,$.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:g,context:"general",customPrompt:x},E=>{if($.disabled=!1,$.textContent="Generate",E&&E.success){let P=!1;m&&A(m)&&(P=W(m,E.enhancedText)),P||K(E.enhancedText),t.remove()}else v(E&&E.error?`Error: ${E.error}`:"Failed to enhance text","error")})}),ae.appendChild(re),ae.appendChild($),c.appendChild(ae),s.appendChild(c),s.appendChild(h),t.appendChild(n),t.appendChild(y),t.appendChild(s),document.body.appendChild(t),w.focus()},Ce=function(){ie(),he();const e=document.createElement("div");e.className="text-enhancer-context-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const o=document.createElement("button");o.className="text-enhancer-close-btn",o.textContent="×",o.addEventListener("click",()=>e.remove()),t.appendChild(n),t.appendChild(o);const r=document.createElement("div");r.className="text-enhancer-content";const a=document.createElement("div");a.className="text-enhancer-section";const d=document.createElement("label");d.textContent="Provide Context:",d.htmlFor="text-enhancer-context-input";const y=document.createElement("textarea");y.id="text-enhancer-context-input",y.className="text-enhancer-textarea",y.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',y.rows=3,a.appendChild(d),a.appendChild(y);const N=document.createElement("div");N.className="text-enhancer-section";const s=document.createElement("label");s.textContent="Additional Information (optional):",s.htmlFor="text-enhancer-text-input";const c=document.createElement("textarea");c.id="text-enhancer-text-input",c.className="text-enhancer-textarea",c.placeholder="Add any details you want included (e.g., dates, names, specific points)",c.rows=3,N.appendChild(s),N.appendChild(c);const i=document.createElement("div");i.className="text-enhancer-options";const w=document.createElement("div");w.className="text-enhancer-option";const f=document.createElement("input");f.type="checkbox",f.id="text-enhancer-humanize",f.checked=!0;const l=document.createElement("label");l.htmlFor="text-enhancer-humanize",l.textContent="Make it sound natural and human-written",w.appendChild(f),w.appendChild(l);const m=document.createElement("div");m.className="text-enhancer-option";const j=document.createElement("input");j.type="checkbox",j.id="text-enhancer-emoji";const z=document.createElement("label");z.htmlFor="text-enhancer-emoji",z.textContent="Include appropriate emojis",m.appendChild(j),m.appendChild(z),i.appendChild(w),i.appendChild(m);const R=document.createElement("div");R.className="text-enhancer-buttons";const q=document.createElement("button");q.className="text-enhancer-button text-enhancer-cancel-btn",q.textContent="Cancel",q.addEventListener("click",()=>e.remove());const u=document.createElement("button");u.className="text-enhancer-button text-enhancer-generate-btn",u.textContent="Generate",u.addEventListener("click",()=>{const p=y.value.trim(),b=c.value.trim(),h=f.checked,T=j.checked;if(!p){v("Please provide context for what you want to generate","error");return}u.disabled=!0,u.textContent="Generating...";let M=`${p}`;b&&(M+=`

Additional information: ${b}`),h&&(M+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:b||"Generate from context",context:"context-based",customPrompt:M,includeEmojis:T},I=>{u.disabled=!1,u.textContent="Generate",I&&I.success?(K(I.enhancedText),e.remove()):v(I&&I.error?`Error: ${I.error}`:"Failed to generate text","error")})}),R.appendChild(q),R.appendChild(u),r.appendChild(a),r.appendChild(N),r.appendChild(i),r.appendChild(R),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),y.focus(),ie()},ie=function(){C();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
  `,document.head.appendChild(t)},le=function(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""},H=function(e){if(!e)return;ke();const t=document.createElement("div"),n=se.get(e);n&&(t.dataset.originalText=n.text||"",t.dataset.originalParams=JSON.stringify(n.params||{})),t.className="te-action-bar",t.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const o=document.createElement("button");o.textContent="×",o.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const r=document.createElement("button");r.textContent="↩ Revert",r.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const a=document.createElement("button");a.textContent="🔄 Regenerate",a.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",t.appendChild(o),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),d();function d(){const f=e.getBoundingClientRect();t.style.top=`${window.scrollY+f.bottom+4}px`,t.style.left=`${window.scrollX+f.left}px`}window.addEventListener("scroll",d,{passive:!0});const y=new ResizeObserver(d);y.observe(document.body,{childList:!0});let N=0,s=0,c=!1;t.addEventListener("mousedown",f=>{c=!0,N=f.clientX-parseInt(t.style.left),s=f.clientY-parseInt(t.style.top),f.preventDefault()}),document.addEventListener("mousemove",f=>{c&&(t.style.left=`${f.clientX-N}px`,t.style.top=`${f.clientY-s}px`)}),document.addEventListener("mouseup",()=>{c=!1});function i(){t.remove(),window.removeEventListener("scroll",d),y.disconnect()}r.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();const l=t.dataset.originalText||"",m=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;console.debug("[TE] Revert click",l),i(),setTimeout(()=>{W(e,l,m)},50)}),r.addEventListener("mousedown",f=>f.stopPropagation()),a.addEventListener("mousedown",f=>f.stopPropagation()),o.addEventListener("click",()=>i()),a.addEventListener("click",()=>{const f=t.dataset.originalText||"",l=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;a.disabled=!0,a.textContent="…",chrome.runtime.sendMessage({action:l&&l.action?l.action:"enhance-text-with-gemini",text:f,context:l&&l.context?l.context:"general",customPrompt:l?l.customPrompt:void 0,tone:l?l.tone:void 0,includeEmojis:l?l.includeEmojis:!1},m=>{a.disabled=!1,a.textContent="🔄 Regenerate",m&&m.success?W(e,m.enhancedText):console.error("Regenerate failed",m&&m.error)})});const w=()=>i();e.addEventListener("keydown",w,{once:!0}),window.__teCleanupBar=i},ke=function(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)},Te=function(e){const t=window.location.hostname;let n=!1;for(const o in de)if(o!=="*"&&t.endsWith(o)){n=!0;const r=de[o].selector,a=e&&e.closest?e.closest(r):null;if(a)return a;const d=document.querySelector(r);if(d)return d}if(!n){const o=de["*"].selector,r=e&&e.closest?e.closest(o):null;if(r)return r;const a=document.querySelector(o);if(a)return a}return null};window.__TEXT_ENHANCER_LOADED__=!0,window.safeSend||(window.safeSend=function e(t,n,o=1){try{chrome.runtime.sendMessage(t,r=>{if(chrome.runtime.lastError&&/context invalidated/i.test(chrome.runtime.lastError.message)&&o<3)return console.warn("[TE] safeSend placeholder retry",o),setTimeout(()=>e(t,n,o+1),200*o);n&&n(r)})}catch(r){if(o<3)return console.warn("[TE] safeSend placeholder retry throw",o),setTimeout(()=>e(t,n,o+1),200*o);console.warn("safeSend placeholder error",r)}});const _={isEditableElement:A,findContentEditableAncestor:D,findPlatformEditable:Te,getPlaceholderFromElement:U,getTextFromFocusedElement:S,getFocusedElement:k,getTextFromElement:S,setTextInElement:W},F=_,O=F.setTextInElement;F.setTextInElement=function(e,t,n){F.getTextFromElement(e);const o=O?O(e,t,n):!1;return v("Inserted ✅","info"),o},window.TextEnhancerEditable=F;async function we(){const{isEditableElement:e,getTextFromFocusedElement:t,getPlaceholderFromElement:n,getFocusedElement:o}=_;let r=o(),a;if(!e(r)){const i=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');i.length>0?r=i[0]:(r=null,v("No input field found. Enhanced text will be copied to clipboard.","info"))}if(e(r)){if(a=t(r),!a||a.trim()===""){const i=n(r);if(i.trim()!=="")a=i,v('Using placeholder text: "'+a.substring(0,20)+(a.length>20?"...":"")+'"');else{v("No text to enhance","error");return}}}else{v("No text found to enhance","error");return}v("Enhancing text with AI...");const d=window.location.href,y=document.title,N=B(d,y),s=location.hostname;let c=null;/^(?:www\.)?(?:x|twitter)\.com$/i.test(s)?c="twitter":/^(?:www\.)?instagram\.com$/i.test(s)?c="instagram":/whatsapp\.com$/i.test(s)&&(c="whatsapp"),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:a,context:N,platform:c},i=>{i&&i.success?e(r)&&W(r,i.enhancedText)?(v("Text enhanced and filled in!","success"),K(i.enhancedText,!1)):K(i.enhancedText,!0):v(i&&i.error?`Error: ${i.error}`:"Failed to enhance text","error")})}const se=new WeakMap,de={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};(function(){if(/(web\.whatsapp\.com|whatsapp\.com|instagram\.com|(?:x|twitter)\.com)$/i.test(location.hostname))return;let n=null,o=null,r=null,a=!1,d=0,y=0,N=!1;function s(){if(document.getElementById("te-quick-style"))return;const l=document.createElement("style");l.id="te-quick-style",l.textContent=`
      .te-qa-btn{position:absolute;width:22px;height:22px;background:#7c3aed;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);transition:transform .15s ease;z-index:99999;}
      .te-qa-btn:hover{transform:scale(1.1);}    
      .te-qa-menu{position:absolute;display:flex;flex-direction:column;gap:4px;background:#232336;color:#fff;padding:6px 8px;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.4);font-family:Inter,sans-serif;font-size:12px;z-index:99999;}
      .te-qa-menu button{all:unset;cursor:pointer;padding:4px 6px;border-radius:4px;transition:background .1s;}
      .te-qa-menu button:hover{background:#2d2d40;}
    `,document.head.appendChild(l)}function c(){n==null||n.remove(),o==null||o.remove(),n=o=r=null,N=!1,document.removeEventListener("scroll",i,!0)}function i(){if(!n||!r||N)return;const l=r.getBoundingClientRect();n.style.top=`${window.scrollY+l.top-26}px`,n.style.left=`${window.scrollX+l.right-10}px`,o&&(o.style.top=`${parseFloat(n.style.top)+24}px`,o.style.left=n.style.left)}function w(){if(o){o.remove(),o=null;return}const l=()=>{!n||!o||(o.style.top=`${parseFloat(n.style.top)+24}px`,o.style.left=n.style.left)};o=document.createElement("div"),o.className="te-qa-menu";const m=[{label:"Quick Enhance",key:"quick"},{label:"Custom Prompt",key:"custom"},{label:"AI Write",key:"aiwrite"}];function j(z){if(r){if(S(r),window.EditableHelper&&typeof _.replaceText=="function")try{_.replaceText(r,z)}catch{}else r.value!==void 0?r.value=z:r.innerText=z;["input","change"].forEach(R=>{r.dispatchEvent(new Event(R,{bubbles:!0}))}),v("Enhanced ☑️","info")}}m.forEach(({label:z,key:R})=>{const q=document.createElement("button");q.textContent=z,q.addEventListener("click",()=>{if(R==="quick"){const u=S(r);v("Enhancing...","info"),safeSend({action:"enhance-text",text:u},p=>{p&&p.success?(j(p.enhancedText),v("Enhanced ☑️","info")):v(p.error||"Enhancement failed","error"),c()}),r.focus()}else if(R==="custom"){o.innerHTML="";const u=document.createElement("div");u.style.background="#232336",u.style.color="#fff",u.style.padding="8px",u.style.borderRadius="8px",u.style.display="flex",u.style.flexDirection="column",u.style.gap="6px";const p=document.createElement("textarea");p.rows=3,p.placeholder="Describe how you'd like it enhanced...",p.className="text-enhancer-textarea",p.style.width="220px",p.style.fontSize="12px",p.style.background="#1c1c2b",p.style.color="#fff",p.style.border="1px solid #444",p.style.borderRadius="4px",p.style.padding="4px 6px";const b=document.createElement("button");b.style.padding="4px 8px",b.style.fontSize="12px",b.style.display="flex",b.style.alignItems="center",b.style.gap="4px",b.style.background="#4c4b8e",b.style.color="#fff",b.style.border="none",b.style.borderRadius="4px";const h=document.createElement("img");h.alt="Enhance",h.style.width="14px",h.style.height="14px",h.style.objectFit="contain",h.src=chrome.runtime.getURL("/icons/logo.png"),h.onerror=()=>{h.onerror=null,h.onerror=()=>{b.textContent="Enhance"}},b.appendChild(h),h.complete||(h.onload=()=>{}),b.addEventListener("click",()=>{const T=p.value.trim();if(!T)return;let M=S(r);M||(M=" "),v("Enhancing...","info"),safeSend({action:"custom-prompt",customPrompt:T,text:M},I=>{I&&I.success?(j(I.enhancedText),v("Enhanced ✅","info")):v(I.error||"Enhancement failed","error"),r&&typeof r.focus=="function"&&r.focus(),c()})}),p.addEventListener("keydown",T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),b.click())}),u.appendChild(p),u.appendChild(b),o.appendChild(u),p.focus()}else if(R==="aiwrite"){o.innerHTML="";const u=document.createElement("div");u.style.background="#232336",u.style.color="#fff",u.style.padding="8px",u.style.borderRadius="8px",u.style.display="flex",u.style.flexDirection="column",u.style.gap="6px";const p=document.createElement("textarea");p.rows=3,p.placeholder="Ask AI to write something...",p.style.width="220px",p.style.fontSize="12px",p.style.background="#1c1c2b",p.style.color="#fff",p.style.border="1px solid #444",p.style.borderRadius="4px",p.style.padding="4px 6px";const b=document.createElement("button");b.textContent="Ask",b.style.padding="4px 8px",b.style.fontSize="12px",b.style.background="#4c4b8e",b.style.color="#fff",b.style.border="none",b.style.borderRadius="4px",b.addEventListener("click",()=>{const h=p.value.trim();h&&(v("Asking AI...","info"),safeSend({action:"ai-write",customPrompt:h,text:"",includeEmojis:!1},T=>{T&&T.success?(j(T.generatedText||T.enhancedText||""),v("Enhanced ✅","info")):v((T==null?void 0:T.error)||"AI request failed","error"),r&&typeof r.focus=="function"&&r.focus(),c()}))}),p.addEventListener("keydown",h=>{h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),b.click())}),u.appendChild(p),u.appendChild(b),o.appendChild(u),p.focus()}}),o.appendChild(q)}),document.body.appendChild(o),l(),i(),i()}function f(l){c(),r=l,s(),n=document.createElement("div"),n.setAttribute("tabindex","-1"),n.className="te-qa-btn",n.style="padding:2px;",n.textContent="✏",n.addEventListener("click",w),n.addEventListener("mousedown",m=>{m.button===0&&(a=!0,d=m.clientX-n.getBoundingClientRect().left,y=m.clientY-n.getBoundingClientRect().top,N=!0,m.preventDefault())}),document.addEventListener("mousemove",m=>{a&&(n.style.left=`${m.clientX-d}px`,n.style.top=`${m.clientY-y}px`,o&&(o.style.top=`${parseFloat(n.style.top)+24}px`,o.style.left=n.style.left))}),document.addEventListener("mouseup",()=>{a=!1}),document.body.appendChild(n),i(),document.addEventListener("scroll",i,!0)}document.addEventListener("focusin",l=>{const m=l.target;m.closest(".te-qa-btn")||m.closest(".te-qa-menu")||(_.isEditableElement(m)?f(m):c())})})(),chrome.runtime.onMessage.addListener((e,t,n)=>(e.action==="enhance-text"?(we(),fe(),n({success:!0})):e.action==="show-custom-prompt"?(Ee(),n({success:!0})):e.action==="show-context-enhancer"?(Ce(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0))}
