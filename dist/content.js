"use strict";function v(S,D="info"){let N=document.getElementById("gemini-enhancer-toast-container");N||(N=document.createElement("div"),N.id="gemini-enhancer-toast-container",N.style.cssText=`
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 10000;
      `,document.body.appendChild(N));const I=document.createElement("div");I.style.cssText=`
      background-color: ${D==="error"?"#f44336":"#1a73e8"};
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
    `,I.textContent=S,N.appendChild(I),setTimeout(()=>{I.style.opacity="1"},10),setTimeout(()=>{I.style.opacity="0",setTimeout(()=>{N.removeChild(I)},300)},3e3)}const Y=document.createElement("div");Y.style.cssText="position:fixed;bottom:80px;right:24px;padding:10px 14px;background:#16a34a;color:#fff;border-radius:8px;font-size:13px;font-family:Inter, sans-serif;opacity:0;transition:opacity .3s;z-index:100001;pointer-events:none;";document.body.appendChild(Y);function ie(S,D=!1){Y.textContent=S,Y.style.background=D?"#dc2626":"#16a34a",Y.style.opacity="1",setTimeout(()=>{Y.style.opacity="0"},3e3)}let Z=0;const fe=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];function be(){chrome.storage.local.get(["Feedback_Submitted","textEnhancerUsage"],function(S){S.Feedback_Submitted||(Z=S.textEnhancerUsage||0,Z+=1,chrome.storage.local.set({textEnhancerUsage:Z}),Z>0&&Z%4===0&&ge())})}function ge(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const S=document.createElement("div");S.className="text-enhancer-feedback-popup",S.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const D=document.createElement("p");D.textContent=fe[Math.floor(Math.random()*fe.length)],D.style.margin="0 0 12px 0",S.appendChild(D);const N=document.createElement("div");N.className="text-enhancer-stars",N.style.cssText="display:flex;gap:6px;margin-bottom:12px;";let I=0;for(let U=1;U<=5;U++){const _=document.createElement("button");_.className="text-enhancer-star-btn",_.textContent="★",_.style.cssText="background:transparent;border:none;font-size:24px;cursor:pointer;color:#6b7280;transition:color 0.2s;",_.onclick=()=>{I=U,Array.from(N.children).forEach(H=>H.style.color="#6b7280");for(let H=1;H<=U;H++)N.children[H-1].style.color="#facc15"},N.appendChild(_)}S.appendChild(N);const R=document.createElement("textarea");R.className=" .text-enhancer-review-popup textarea ",R.style.cssText="width:100%;padding:10px 12px;border:none;border-radius:8px;background:#1c1c24;color:#f3f4f6;font-size:13px;margin-bottom:12px;",R.placeholder="Your thoughts",R.rows=2,R.cols=20,S.appendChild(R);const q=document.createElement("button");q.textContent="Share",q.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",q.onclick=()=>{Ie(I,R.value.trim()),chrome.storage.local.set({Feedback_Submitted:!0}),S.remove()};const j=document.createElement("button");j.textContent="Later",j.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",j.onclick=()=>S.remove(),S.appendChild(q),S.appendChild(j),document.body.appendChild(S)}async function Ie(S,D){var N,I;try{if(!S&&!D){ie("Please add rating or comment",!0);return}const R={stars:S||0,comment:D||"",extVersion:((I=(N=chrome.runtime)==null?void 0:N.getManifest)==null?void 0:I.call(N).version)||"dev",ua:navigator.userAgent},j=await fetch("https://tone-genie.vercel.app/api/review",{mode:"no-cors",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(R)});j.ok||j.type==="opaque"?ie("Thanks! We got your feedback."):(console.error("Failed to submit feedback:",j.status),ie("Sorry — couldn’t send your feedback (our fault).",!0))}catch(R){console.error("Failed to submit feedback:",R),ie("Sorry — couldn’t send your feedback (our fault).",!0)}}window.showTextEnhancerReviewPopup=ge;window.incrementTEUsage=be;if(window.__TEXT_ENHANCER_LOADED__)console.debug("[TE] content script already loaded");else{let S=function(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.head.appendChild(t)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const t=document.createElement("link");t.rel="stylesheet",t.dataset.textEnhancerTheme="true",t.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(t)}}},D=function(e,t){const n=e.toLowerCase(),o=t.toLowerCase();return n.includes("x.com")||n.includes("instagram.com")||n.includes("facebook.com")||n.includes("tiktok.com")||n.includes("reddit.com")||o.includes("tweet")||o.includes("post")||o.includes("comment")?"social_media":n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||o.includes("inbox")||o.includes("email")||o.includes("compose")?"email":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||o.includes("document")||o.includes("report")||o.includes("project")||o.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||o.includes("course")||o.includes("assignment")||o.includes("paper")||o.includes("research")||o.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||o.includes("dating")||o.includes("chat")&&(o.includes("match")||o.includes("date")||o.includes("love"))?"romantic":"general"},N=function(){const e=document.activeElement;return e&&e!==document.body?e:null},I=function(e=null){const t=e||N();return t?typeof pe=="function"?pe(t):t.value||t.innerText||t.textContent||"":""},R=function(e){if(!e)return!1;const t=e.tagName.toLowerCase(),n=t==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),o=t==="textarea",r=e.isContentEditable||e.hasAttribute("contenteditable");return n||o||r},_=function(e){return e?e.closest('[contenteditable="true"]'):null},H=function(e){if(!e)return"";const t=e.getAttribute("placeholder");if(t)return t;const n=e.dataset||{};if(n){if(n.placeholder)return n.placeholder;if(n.textPlaceholder)return n.textPlaceholder}const o=e.getAttribute("aria-label")||e.getAttribute("aria-placeholder");if(o)return o;const r=e.getAttribute("title");if(r)return r;const a=e.querySelector("[data-placeholder]");return a&&a.textContent?a.textContent.trim():""},$=function(e,t,n,o=!1){const r={bubbles:!0,cancelable:!0,key:t,code:n,ctrlKey:o};e.dispatchEvent(new KeyboardEvent("keydown",r)),e.dispatchEvent(new KeyboardEvent("keyup",r))},ye=function(e,t){if(!e)return;e.focus(),e.innerHTML="";const n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o);try{document.execCommand("insertText",!1,t)}catch{const a=new DataTransfer;a.setData("text/plain",t);const s=new ClipboardEvent("paste",{bubbles:!0,clipboardData:a});e.dispatchEvent(s)}e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertReplacementText",data:t})),e.dispatchEvent(new Event("change",{bubbles:!0}))},ve=function(e,t){const o=(a=>{for(const s in a)if(s.startsWith("__reactInternalInstance$")||s.startsWith("__reactFiber$"))return a[s];return null})(e);if(o){const a=o;a&&a.stateNode&&a.stateNode.forceUpdate&&a.stateNode.forceUpdate()}["input","change","blur","focus"].forEach(a=>{e.dispatchEvent(new Event(a,{bubbles:!0}))})},we=function(e,t){if(!e)return!1;try{const n=e.closest('[role="textbox"]')||e;n.focus(),$(n,"a","KeyA",!0),$(n,"Backspace","Backspace");const o=new DataTransfer;o.setData("text/plain",t),n.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:o}));const r=document.querySelector('textarea[data-testid^="tweetTextarea"]');if(r){const s=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;s?s.call(r,t):r.value=t,["input","change"].forEach(x=>r.dispatchEvent(new Event(x,{bubbles:!0})))}const a=window.getSelection();if(a){a.removeAllRanges();const s=document.createRange();s.selectNodeContents(n),s.collapse(!1),a.addRange(s)}return n.focus(),!0}catch(n){return console.error("[TE] newTwitterReplace failed",n),!1}},Ee=function(e,t){var n,o;if(!e)return!1;try{e.focus();const r=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set,a=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set,s=e._reactInternalFiber||e._reactInternals||e.__reactInternalInstance;if(s){const c=window.getSelection(),i=document.createRange();i.selectNodeContents(e),c.removeAllRanges(),c.addRange(i),document.execCommand("delete"),document.execCommand("insertText",!1,t);const w=((n=s.memoizedProps)==null?void 0:n.onChange)||((o=s.pendingProps)==null?void 0:o.onChange);w&&w({target:{value:t}})}else{const c=window.getSelection(),i=document.createRange();i.selectNodeContents(e),c.removeAllRanges(),c.addRange(i),document.execCommand("delete"),document.execCommand("insertText",!1,t)}[new InputEvent("beforeinput",{bubbles:!0,inputType:"insertText",data:t}),new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}),new Event("change",{bubbles:!0}),new KeyboardEvent("keyup",{bubbles:!0,key:"Enter"}),new FocusEvent("blur",{bubbles:!0}),new FocusEvent("focus",{bubbles:!0})].forEach(c=>{try{e.dispatchEvent(c)}catch(i){console.warn("Event dispatch failed:",i)}}),setTimeout(()=>{e.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t}));const c=new Event("input",{bubbles:!0});c.simulated=!0,e.dispatchEvent(c)},50),document.querySelectorAll('textarea[data-testid^="tweetTextarea"]').forEach(c=>{const i=Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype,"value").set;i?i.call(c,t):c.value=t,c.dispatchEvent(new Event("input",{bubbles:!0})),c.dispatchEvent(new Event("change",{bubbles:!0}))}),e.contentEditable!=="true"&&e.setAttribute("contenteditable","true");const l=window.getSelection();if(l){l.removeAllRanges();const c=document.createRange();c.selectNodeContents(e),c.collapse(!1),l.addRange(c)}return e.focus(),!0}catch(r){return console.error("[TE] twitterRewrite failed:",r),!1}},se=function(e,t){if(e)try{let n=e.querySelector&&e.querySelector("p span")?e.querySelector("p span"):e;n.focus(),$(n,"a","KeyA",!0),$(n,"Backspace","Backspace");const o=new DataTransfer;o.setData("text/plain",t),n.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:o})),console.log("[TE] Instagram text injected via paste to span")}catch(n){console.warn("[TE] replaceInstagramEditable error",n)}},K=function(e,t,n=null){if(n||(n={action:"enhance-text-with-gemini",context:"general"}),e&&!de.has(e)){const a=pe(e);de.set(e,{text:a,params:n})}if(!e||!R(e))return!1;const o=e.selectionStart,r=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){const a=e.tagName.toLowerCase()==="textarea"?window.HTMLTextAreaElement.prototype:window.HTMLInputElement.prototype;if(Object.getOwnPropertyDescriptor(a,"value").set.call(e,t),typeof o=="number"&&typeof r=="number"){const c=Math.min(o,t.length);try{e.setSelectionRange(c,c)}catch(i){console.error("Failed to restore cursor position:",i)}}const x=new Event("input",{bubbles:!0}),P=new Event("change",{bubbles:!0}),l=new KeyboardEvent("keyup",{bubbles:!0,key:"Enter",code:"Enter"});return e.dispatchEvent(x),e.dispatchEvent(P),e.dispatchEvent(l),W(e),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){let a=e.isContentEditable?e:_(e);a&&a.querySelector('[contenteditable="true"]')&&(a=a.querySelector('[contenteditable="true"]'));let s=a;for(;s&&s.parentElement&&s.parentElement.isContentEditable;)s=s.parentElement;if(a){const x=window.location.hostname,P=(l,c)=>{l.focus(),$(l,"a","KeyA",!0),$(l,"Backspace","Backspace");const i=new DataTransfer;i.setData("text/plain",c);const w=new ClipboardEvent("paste",{bubbles:!0,clipboardData:i});l.dispatchEvent(w)};if(x.endsWith("whatsapp.com"))try{return P(a,t),W(e),!0}catch(l){console.error("WhatsApp replace failed, falling back:",l)}if(x.endsWith("instagram.com"))try{const l=a&&a.querySelector('[data-lexical-editor="true"]')||s||a;return se(l,t),W(e),!0}catch(l){console.error("Instagram replace failed",l)}if(x.endsWith("twitter.com")||x.endsWith("x.com")){const l=document.querySelector('div[role="textbox"][contenteditable="true"]')||document.querySelector('[data-testid="tweetTextarea_0"]')||document.querySelector('div[contenteditable="true"][data-testid*="tweet"]')||a;if(l&&Ee(l,t))return setTimeout(()=>{ve(l),setTimeout(()=>{l.textContent!==t&&(l.textContent=t,l.dispatchEvent(new InputEvent("input",{bubbles:!0,inputType:"insertText",data:t})))},100)},100),W(e),!0}if(x.endsWith("instagram.com"))try{const l=s||a;return l?(se(l,t),W(e),console.log("[TE] Instagram DM replacement via IG helper done"),!0):(console.warn("[TE] Instagram DM replacement: no editable element found"),!1)}catch(l){console.error("Instagram replace failed",l)}return ye(s||a,t),W(e),!0}}return!1},X=function(e,t=!0){navigator.clipboard.writeText(e).then(()=>{t&&v("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),t&&v("Failed to copy to clipboard","error")})},xe=function(){if(S(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)},ke=function(){xe(),le();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const t=document.createElement("div");t.id="text-enhancer-popup",t.className="text-enhancer-context-popup modern-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header modern-header";const o=document.createElement("div");o.className="title-container";const r=document.createElement("h2");r.id="text-enhancer-title",r.textContent="✨ Text-Enhancer";const a=document.createElement("p");a.id="text-enhancer-subtitle",a.textContent="AI-powered writing enhancement",o.appendChild(r),o.appendChild(a);const s=document.createElement("button");s.className="text-enhancer-close-btn modern-close",s.innerHTML="×",s.addEventListener("click",()=>{t.style.opacity="0",t.style.transform="scale(0.95)",setTimeout(()=>t.remove(),200)}),n.appendChild(o),n.appendChild(s);const x=document.createElement("div");x.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((h,g)=>{const C=document.createElement("button");C.className=`text-enhancer-tab ${g===0?"active":""}`,C.dataset.tab=h.id;const B=document.createElement("span");B.className="tab-icon",B.textContent=h.icon;const A=document.createElement("span");A.className="tab-text",A.textContent=h.text,C.appendChild(B),C.appendChild(A),C.addEventListener("click",Le=>{document.querySelectorAll(".text-enhancer-tab").forEach(he=>he.classList.remove("active")),Le.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(he=>he.classList.remove("active")),document.getElementById(`text-enhancer-${h.id}-content`).classList.add("active")}),x.appendChild(C)});const l=document.createElement("div");l.id="text-enhancer-content";const c=document.createElement("div");c.id="text-enhancer-custom-content",c.className="text-enhancer-tab-content active";const i=document.createElement("label");i.className="text-enhancer-label",i.textContent="Custom Prompt:",i.htmlFor="text-enhancer-prompt";const w=document.createElement("textarea");w.id="text-enhancer-prompt",w.className="text-enhancer-textarea",w.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',w.rows=3;const f=document.createElement("label");f.className="text-enhancer-label",f.textContent="Text to Enhance:",f.htmlFor="text-enhancer-text";const d=document.createElement("textarea");d.id="text-enhancer-text",d.className="text-enhancer-textarea",d.placeholder="Enter or paste text to enhance...",d.rows=5;const m=N();let E="";R(m)&&(E=I(m),E&&E.trim()!==""&&(d.value=E)),c.appendChild(i),c.appendChild(w),c.appendChild(f),c.appendChild(d);const M=document.createElement("div");M.id="text-enhancer-templates-content",M.className="text-enhancer-tab-content";const k=document.createElement("h3");k.className="text-enhancer-subtitle",k.textContent="Choose a Template",M.appendChild(k),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(h=>{const g=document.createElement("div");g.className="text-enhancer-template-card";const C=document.createElement("h4");C.className="text-enhancer-template-name",C.textContent=h.name;const B=document.createElement("p");B.className="text-enhancer-template-description",B.textContent=h.description;const A=document.createElement("button");A.className="text-enhancer-button text-enhancer-button-primary",A.textContent="Use Template",A.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),w.value=h.prompt,d.focus()}),g.appendChild(C),g.appendChild(B),g.appendChild(A),M.appendChild(g)});const y=document.createElement("div");y.id="text-enhancer-freelance-content",y.className="text-enhancer-tab-content";const b=document.createElement("h3");b.className="text-enhancer-subtitle",b.textContent="Freelance Proposal Templates",y.appendChild(b),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(h=>{const g=document.createElement("div");g.className="text-enhancer-template-card";const C=document.createElement("h4");C.className="text-enhancer-template-name",C.textContent=h.name;const B=document.createElement("p");B.className="text-enhancer-template-description",B.textContent=h.description;const A=document.createElement("button");A.className="text-enhancer-button text-enhancer-button-primary",A.textContent="Use Template",A.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),w.value=h.prompt,d.focus()}),g.appendChild(C),g.appendChild(B),g.appendChild(A),y.appendChild(g)});const p=document.createElement("div");p.id="text-enhancer-tone-content",p.className="text-enhancer-tab-content";const T=document.createElement("h3");T.className="text-enhancer-subtitle",T.textContent="Select Tone & Style",p.appendChild(T);const L=document.createElement("label");L.className="text-enhancer-label",L.textContent="Tone:",L.htmlFor="text-enhancer-tone";const F=document.createElement("select");F.id="text-enhancer-tone",F.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(h=>{const g=document.createElement("option");g.value=h.value,g.textContent=h.icon?`${h.icon} ${h.text}`:h.text,F.appendChild(g)});const ee=document.createElement("label");ee.className="text-enhancer-label",ee.textContent="Style:",ee.htmlFor="text-enhancer-style";const J=document.createElement("select");J.id="text-enhancer-style",J.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(h=>{const g=document.createElement("option");g.value=h.value,g.textContent=h.icon?`${h.icon} ${h.text}`:h.text,J.appendChild(g)});const te=document.createElement("div");te.className="text-enhancer-checkbox-container";const Q=document.createElement("input");Q.type="checkbox",Q.id="text-enhancer-emoji",Q.className="text-enhancer-checkbox";const ne=document.createElement("label");ne.htmlFor="text-enhancer-emoji",ne.className="text-enhancer-checkbox-label",ne.textContent="Include emojis for emotional emphasis",te.appendChild(Q),te.appendChild(ne);const oe=document.createElement("label");oe.className="text-enhancer-label",oe.textContent="Additional Instructions (optional):",oe.htmlFor="text-enhancer-instructions";const G=document.createElement("textarea");G.id="text-enhancer-instructions",G.className="text-enhancer-textarea",G.placeholder="Add any specific instructions or requirements...",G.rows=2;const me=document.createElement("div");me.className="text-enhancer-button-group";const ae=document.createElement("button");ae.className="text-enhancer-button text-enhancer-button-primary",ae.innerHTML="🎨 Apply Tone & Style",ae.addEventListener("click",()=>{const h=F.value,g=J.value,C=G.value.trim(),B=Q.checked;if(!h&&!g){v("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let A="Rewrite the following text";h&&(A+=` in a ${h} tone`),g&&(A+=h?` and ${g} style`:` in a ${g} style`),C&&(A+=`. Additional instructions: ${C}`),B&&(A+=". Include appropriate emojis to emphasize emotions and key points."),w.value=A,d.focus()}),me.appendChild(ae),p.appendChild(L),p.appendChild(F),p.appendChild(ee),p.appendChild(J),p.appendChild(te),p.appendChild(oe),p.appendChild(G),p.appendChild(me);const re=document.createElement("div");re.className="text-enhancer-button-group";const ce=document.createElement("button");ce.className="text-enhancer-button text-enhancer-button-secondary",ce.textContent="Cancel",ce.addEventListener("click",()=>t.remove());const O=document.createElement("button");O.className="text-enhancer-button text-enhancer-button-primary",O.textContent="Generate",O.addEventListener("click",()=>{const h=w.value.trim(),g=d.value.trim();if(!h){v("Please enter a custom prompt","error");return}if(!g){v("Please enter text to enhance","error");return}O.disabled=!0,O.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:g,context:"general",customPrompt:h},C=>{if(O.disabled=!1,O.textContent="Generate",C&&C.success){let B=!1;m&&R(m)&&(B=K(m,C.enhancedText)),B||X(C.enhancedText),t.remove()}else v(C&&C.error?`Error: ${C.error}`:"Failed to enhance text","error")})}),re.appendChild(ce),re.appendChild(O),c.appendChild(re),l.appendChild(c),l.appendChild(p),t.appendChild(n),t.appendChild(x),t.appendChild(l),document.body.appendChild(t),w.focus()},Te=function(){le(),xe();const e=document.createElement("div");e.className="text-enhancer-context-popup";const t=document.createElement("div");t.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const o=document.createElement("button");o.className="text-enhancer-close-btn",o.textContent="×",o.addEventListener("click",()=>e.remove()),t.appendChild(n),t.appendChild(o);const r=document.createElement("div");r.className="text-enhancer-content";const a=document.createElement("div");a.className="text-enhancer-section";const s=document.createElement("label");s.textContent="Provide Context:",s.htmlFor="text-enhancer-context-input";const x=document.createElement("textarea");x.id="text-enhancer-context-input",x.className="text-enhancer-textarea",x.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',x.rows=3,a.appendChild(s),a.appendChild(x);const P=document.createElement("div");P.className="text-enhancer-section";const l=document.createElement("label");l.textContent="Additional Information (optional):",l.htmlFor="text-enhancer-text-input";const c=document.createElement("textarea");c.id="text-enhancer-text-input",c.className="text-enhancer-textarea",c.placeholder="Add any details you want included (e.g., dates, names, specific points)",c.rows=3,P.appendChild(l),P.appendChild(c);const i=document.createElement("div");i.className="text-enhancer-options";const w=document.createElement("div");w.className="text-enhancer-option";const f=document.createElement("input");f.type="checkbox",f.id="text-enhancer-humanize",f.checked=!0;const d=document.createElement("label");d.htmlFor="text-enhancer-humanize",d.textContent="Make it sound natural and human-written",w.appendChild(f),w.appendChild(d);const m=document.createElement("div");m.className="text-enhancer-option";const E=document.createElement("input");E.type="checkbox",E.id="text-enhancer-emoji";const M=document.createElement("label");M.htmlFor="text-enhancer-emoji",M.textContent="Include appropriate emojis",m.appendChild(E),m.appendChild(M),i.appendChild(w),i.appendChild(m);const k=document.createElement("div");k.className="text-enhancer-buttons";const z=document.createElement("button");z.className="text-enhancer-button text-enhancer-cancel-btn",z.textContent="Cancel",z.addEventListener("click",()=>e.remove());const y=document.createElement("button");y.className="text-enhancer-button text-enhancer-generate-btn",y.textContent="Generate",y.addEventListener("click",()=>{const b=x.value.trim(),u=c.value.trim(),p=f.checked,T=E.checked;if(!b){v("Please provide context for what you want to generate","error");return}y.disabled=!0,y.textContent="Generating...";let L=`${b}`;u&&(L+=`

Additional information: ${u}`),p&&(L+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:u||"Generate from context",context:"context-based",customPrompt:L,includeEmojis:T},F=>{y.disabled=!1,y.textContent="Generate",F&&F.success?(X(F.enhancedText),e.remove()):v(F&&F.error?`Error: ${F.error}`:"Failed to generate text","error")})}),k.appendChild(z),k.appendChild(y),r.appendChild(a),r.appendChild(P),r.appendChild(i),r.appendChild(k),e.appendChild(t),e.appendChild(r),document.body.appendChild(e),x.focus(),le()},le=function(){S();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const t=document.createElement("style");t.id=e,t.textContent=`
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
  `,document.head.appendChild(t)},pe=function(e){return e?e.tagName&&(e.tagName.toLowerCase()==="textarea"||e.tagName.toLowerCase()==="input")?e.value||"":e.innerText||e.textContent||"":""},W=function(e){if(!e)return;Se();const t=document.createElement("div"),n=de.get(e);n&&(t.dataset.originalText=n.text||"",t.dataset.originalParams=JSON.stringify(n.params||{})),t.className="te-action-bar",t.style.cssText="position:absolute; z-index:99999; background:#232336; color:#f3f4f6; padding:4px 8px; border-radius:6px; display:flex; gap:6px; font-family:Inter, sans-serif; font-size:12px; box-shadow:0 2px 6px rgba(0,0,0,.4);";const o=document.createElement("button");o.textContent="×",o.style.cssText="background:transparent;color:#9ca3af;border:none;font-size:14px;line-height:14px;padding:0 4px;cursor:pointer;";const r=document.createElement("button");r.textContent="↩ Revert",r.style.cssText="background:#2d2d40;color:#c4b5fd;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;";const a=document.createElement("button");a.textContent="🔄 Regenerate",a.style.cssText="background:#7c3aed;color:#fff;border:none;border-radius:4px;padding:2px 6px;cursor:pointer;",t.appendChild(o),t.appendChild(r),t.appendChild(a),document.body.appendChild(t),s();function s(){const f=e.getBoundingClientRect();t.style.top=`${window.scrollY+f.bottom+4}px`,t.style.left=`${window.scrollX+f.left}px`}window.addEventListener("scroll",s,{passive:!0});const x=new ResizeObserver(s);x.observe(document.body,{childList:!0});let P=0,l=0,c=!1;t.addEventListener("mousedown",f=>{c=!0,P=f.clientX-parseInt(t.style.left),l=f.clientY-parseInt(t.style.top),f.preventDefault()}),document.addEventListener("mousemove",f=>{c&&(t.style.left=`${f.clientX-P}px`,t.style.top=`${f.clientY-l}px`)}),document.addEventListener("mouseup",()=>{c=!1});function i(){t.remove(),window.removeEventListener("scroll",s),x.disconnect()}r.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation();const d=t.dataset.originalText||"",m=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;console.debug("[TE] Revert click",d),i(),setTimeout(()=>{K(e,d,m)},50)}),r.addEventListener("mousedown",f=>f.stopPropagation()),a.addEventListener("mousedown",f=>f.stopPropagation()),o.addEventListener("click",()=>i()),a.addEventListener("click",()=>{const f=t.dataset.originalText||"",d=t.dataset.originalParams?JSON.parse(t.dataset.originalParams):null;a.disabled=!0,a.textContent="…",chrome.runtime.sendMessage({action:d&&d.action?d.action:"enhance-text-with-gemini",text:f,context:d&&d.context?d.context:"general",customPrompt:d?d.customPrompt:void 0,tone:d?d.tone:void 0,includeEmojis:d?d.includeEmojis:!1},m=>{a.disabled=!1,a.textContent="🔄 Regenerate",m&&m.success?K(e,m.enhancedText):console.error("Regenerate failed",m&&m.error)})});const w=()=>i();e.addEventListener("keydown",w,{once:!0}),window.__teCleanupBar=i},Se=function(){window.__teCleanupBar&&(window.__teCleanupBar(),window.__teCleanupBar=null)},Ne=function(e){const t=window.location.hostname;let n=!1;for(const o in ue)if(o!=="*"&&t.endsWith(o)){n=!0;const r=ue[o].selector,a=e&&e.closest?e.closest(r):null;if(a)return a;const s=document.querySelector(r);if(s)return s}if(!n){const o=ue["*"].selector,r=e&&e.closest?e.closest(o):null;if(r)return r;const a=document.querySelector(o);if(a)return a}return null};window.__TEXT_ENHANCER_LOADED__=!0,window.safeSend||(window.safeSend=function e(t,n,o=1){try{chrome.runtime.sendMessage(t,r=>{if(chrome.runtime.lastError&&/context invalidated/i.test(chrome.runtime.lastError.message)&&o<3)return console.warn("[TE] safeSend placeholder retry",o),setTimeout(()=>e(t,n,o+1),200*o);n&&n(r)})}catch(r){if(o<3)return console.warn("[TE] safeSend placeholder retry throw",o),setTimeout(()=>e(t,n,o+1),200*o);console.warn("safeSend placeholder error",r)}});const q={isEditableElement:R,findContentEditableAncestor:_,findPlatformEditable:Ne,getPlaceholderFromElement:H,getTextFromFocusedElement:I,getFocusedElement:N,getTextFromElement:I,setTextInElement:K},j=q,U=j.setTextInElement;j.setTextInElement=function(e,t,n){j.getTextFromElement(e);const o=U?U(e,t,n):!1;return v("Inserted ✅","info"),o},window.TextEnhancerEditable=j;async function Ce(){const{isEditableElement:e,getTextFromFocusedElement:t,getPlaceholderFromElement:n,getFocusedElement:o}=q;let r=o(),a;if(!e(r)){const i=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');i.length>0?r=i[0]:(r=null,v("No input field found. Enhanced text will be copied to clipboard.","info"))}if(e(r)){if(a=t(r),!a||a.trim()===""){const i=n(r);if(i.trim()!=="")a=i,v('Using placeholder text: "'+a.substring(0,20)+(a.length>20?"...":"")+'"');else{v("No text to enhance","error");return}}}else{v("No text found to enhance","error");return}v("Enhancing text with AI...");const s=window.location.href,x=document.title,P=D(s,x),l=location.hostname;let c=null;/^(?:www\.)?(?:x|twitter)\.com$/i.test(l)?c="twitter":/^(?:www\.)?instagram\.com$/i.test(l)?c="instagram":/whatsapp\.com$/i.test(l)&&(c="whatsapp"),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:a,context:P,platform:c},i=>{i&&i.success?e(r)&&K(r,i.enhancedText)?(v("Text enhanced and filled in!","success"),X(i.enhancedText,!1)):X(i.enhancedText,!0):v(i&&i.error?`Error: ${i.error}`:"Failed to enhance text","error")})}const de=new WeakMap,ue={"instagram.com":{selector:'div[role="textbox"][contenteditable="true"][aria-describedby="Message"], div[role="textbox"][contenteditable="true"][aria-label="Message"], div[role="textbox"][contenteditable="true"][data-testid="DMComposerTextInput"], div[role="textbox"][contenteditable="true"]'},"x.com":{selector:'[data-testid="tweetTextarea_0"], div[contenteditable="true"][role="textbox"]'},"web.whatsapp.com":{selector:'[contenteditable="true"][data-tab][data-tab!="1"]'},"*":{selector:'textarea, input[type="text"], input[role="textbox"], [contenteditable=""], [contenteditable="true"], div[role="textbox"]'}};(function(){let t=null,n=null,o=null,r=!1,a=0,s=0,x=!1;function P(d){var m,E;if((m=chrome==null?void 0:chrome.runtime)!=null&&m.id&&((E=chrome==null?void 0:chrome.runtime)!=null&&E.getURL))try{return chrome.runtime.getURL(d)}catch{}return`/${d.replace(/^\/+/,"")}`}function l(){if(document.getElementById("te-quick-style"))return;const d=document.createElement("style");d.id="te-quick-style",d.textContent=`
      .te-qa-btn{position:absolute;width:22px;height:22px;background:#7c3aed;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;box-shadow:0 2px 6px rgba(0,0,0,.3);transition:transform .15s ease;z-index:99999;}
      .te-qa-btn:hover{transform:scale(1.1);}    
      .te-qa-menu{position:absolute;display:flex;flex-direction:column;gap:4px;background:#232336;color:#fff;padding:6px 8px;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.4);font-family:Inter,sans-serif;font-size:12px;z-index:99999;}
      .te-qa-menu button{all:unset;cursor:pointer;padding:4px 6px;border-radius:4px;transition:background .1s;}
      .te-qa-menu button:hover{background:#2d2d40;}
    `,document.head.appendChild(d)}function c(){t==null||t.remove(),n==null||n.remove(),t=n=o=null,x=!1,document.removeEventListener("scroll",i,!0)}function i(){if(!t||!o||x)return;const d=o.getBoundingClientRect();t.style.top=`${window.scrollY+d.top-26}px`,t.style.left=`${window.scrollX+d.right-10}px`,n&&(n.style.top=`${parseFloat(t.style.top)+24}px`,n.style.left=t.style.left)}function w(){if(n){n.remove(),n=null;return}const d=()=>{!t||!n||(n.style.top=`${parseFloat(t.style.top)+24}px`,n.style.left=t.style.left)};n=document.createElement("div"),n.className="te-qa-menu";const m=[{label:"Quick Enhance",key:"quick"},{label:"Custom Prompt",key:"custom"},{label:"AI Write",key:"aiwrite"}];function E(k,z){if(k)try{k.focus(),$(k,"a","KeyA",!0),$(k,"Backspace","Backspace");const y=new DataTransfer;y.setData("text/plain",z),k.dispatchEvent(new ClipboardEvent("paste",{bubbles:!0,clipboardData:y}))}catch(y){console.warn("[TE] replaceViaKeystrokes error",y)}}function M(k){if(!o)return;I(o);const z=location.hostname;try{z.endsWith("whatsapp.com")?E(o,k):z.endsWith("instagram.com")?se(o,k):z.endsWith("x.com")||z.endsWith("twitter.com")?we(o,k):window.EditableHelper&&typeof q.replaceText=="function"?q.replaceText(o,k):o.value!==void 0?o.value=k:o.innerText=k}catch(y){console.error("[TE] insertEnhanced failed",y);try{E(o,k)}catch{}}["input","change"].forEach(y=>o.dispatchEvent(new Event(y,{bubbles:!0}))),v("Enhanced ☑️","info")}m.forEach(({label:k,key:z})=>{const y=document.createElement("button");y.textContent=k,y.addEventListener("click",()=>{if(z==="quick"){const b=I(o);v("Enhancing...","info"),safeSend({action:"enhance-text",text:b},u=>{u&&u.success?(M(u.enhancedText),v("Enhanced ☑️","info")):v(u.error||"Enhancement failed","error"),c()}),o.focus()}else if(z==="custom"){n.innerHTML="";const b=document.createElement("div");b.style.background="#232336",b.style.color="#fff",b.style.padding="8px",b.style.borderRadius="8px",b.style.display="flex",b.style.flexDirection="column",b.style.gap="6px";const u=document.createElement("textarea");u.rows=3,u.placeholder="Describe how you'd like it enhanced...",u.className="text-enhancer-textarea",u.style.width="220px",u.style.fontSize="12px",u.style.background="#1c1c2b",u.style.color="#fff",u.style.border="1px solid #444",u.style.borderRadius="4px",u.style.padding="4px 6px";const p=document.createElement("button");p.style.padding="4px 8px",p.style.fontSize="12px",p.style.display="flex",p.style.alignItems="center",p.style.gap="4px",p.style.background="#4c4b8e",p.style.color="#fff",p.style.border="none",p.style.borderRadius="4px";const T=document.createElement("img");T.alt="Enhance",T.style.width="14px",T.style.height="14px",T.style.objectFit="contain",T.src=chrome.runtime.getURL("/icons/logo.png"),T.onerror=()=>{T.onerror=null,T.onerror=()=>{p.textContent="Enhance"}},p.appendChild(T),T.complete||(T.onload=()=>{}),p.addEventListener("click",()=>{const L=u.value.trim();if(!L)return;let F=I(o);F||(F=" "),v("Enhancing...","info"),safeSend({action:"custom-prompt",customPrompt:L,text:F},V=>{V&&V.success?(M(V.enhancedText),v("Enhanced ✅","info")):v(V.error||"Enhancement failed","error"),o&&typeof o.focus=="function"&&o.focus(),c()})}),u.addEventListener("keydown",L=>{L.key==="Enter"&&!L.shiftKey&&(L.preventDefault(),p.click())}),b.appendChild(u),b.appendChild(p),n.appendChild(b),u.focus()}else if(z==="aiwrite"){n.innerHTML="";const b=document.createElement("div");b.style.background="#232336",b.style.color="#fff",b.style.padding="8px",b.style.borderRadius="8px",b.style.display="flex",b.style.flexDirection="column",b.style.gap="6px";const u=document.createElement("textarea");u.rows=3,u.placeholder="Ask AI to write something...",u.style.width="220px",u.style.fontSize="12px",u.style.background="#1c1c2b",u.style.color="#fff",u.style.border="1px solid #444",u.style.borderRadius="4px",u.style.padding="4px 6px";const p=document.createElement("button");p.textContent="Ask",p.style.padding="4px 8px",p.style.fontSize="12px",p.style.background="#4c4b8e",p.style.color="#fff",p.style.border="none",p.style.borderRadius="4px",p.addEventListener("click",()=>{const T=u.value.trim();T&&(v("Asking AI...","info"),safeSend({action:"ai-write",customPrompt:T,text:"",includeEmojis:!1},L=>{L&&L.success?(M(L.generatedText||L.enhancedText||""),v("Enhanced ✅","info")):v((L==null?void 0:L.error)||"AI request failed","error"),o&&typeof o.focus=="function"&&o.focus(),c()}))}),u.addEventListener("keydown",T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),p.click())}),b.appendChild(u),b.appendChild(p),n.appendChild(b),u.focus()}}),n.appendChild(y)}),document.body.appendChild(n),d(),i(),i()}function f(d){c(),o=d;const m=document.createElement("img");try{m.src=P("/icons/Pen.png")}catch(E){console.warn("[TE] getURL failed – using relative path",E),m.src="/icons/Pen.png"}m.style.width="16px",m.style.height="16px",m.style.objectFit="contain",m.style.display="block",l(),t=document.createElement("div"),t.setAttribute("tabindex","-1"),t.className="te-qa-btn",t.style="padding:2px;",t.appendChild(m),t.addEventListener("click",w),t.addEventListener("mousedown",E=>{E.button===0&&(r=!0,a=E.clientX-t.getBoundingClientRect().left,s=E.clientY-t.getBoundingClientRect().top,x=!0,E.preventDefault())}),document.addEventListener("mousemove",E=>{r&&(t.style.left=`${E.clientX-a}px`,t.style.top=`${E.clientY-s}px`,n&&(n.style.top=`${parseFloat(t.style.top)+24}px`,n.style.left=t.style.left))}),document.addEventListener("mouseup",()=>{r=!1}),document.body.appendChild(t),i(),document.addEventListener("scroll",i,!0)}document.addEventListener("focusin",d=>{const m=d.target;m.closest(".te-qa-btn")||m.closest(".te-qa-menu")||(q.isEditableElement(m)?f(m):c())})})(),chrome.runtime.onMessage.addListener((e,t,n)=>(e.action==="enhance-text"?(Ce(),be(),n({success:!0})):e.action==="show-custom-prompt"?(ke(),n({success:!0})):e.action==="show-context-enhancer"?(Te(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0))}
