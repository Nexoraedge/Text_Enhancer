const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index.esm-5dwx-eWw.js","assets/index.esm2017-c3AR7Od2.js","assets/index.esm-Dw8aRtCO.js"])))=>i.map(i=>d[i]);
const se="modulepreload",le=function(e){return"/"+e},Z={},ee=function(o,n,t){let a=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),i=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));a=Promise.allSettled(n.map(p=>{if(p=le(p),p in Z)return;Z[p]=!0;const x=p.endsWith(".css"),d=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${d}`))return;const u=document.createElement("link");if(u.rel=x?"stylesheet":se,x||(u.as="script"),u.crossOrigin="",u.href=p,i&&u.setAttribute("nonce",i),document.head.appendChild(u),x)return new Promise((f,k)=>{u.addEventListener("load",f),u.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${p}`)))})}))}function h(s){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s}return a.then(s=>{for(const i of s||[])i.status==="rejected"&&h(i.reason);return o().catch(h)})},te={apiKey:"AIzaSyCXVBOKxT_NSKP2yUVufxFr_QImJGApD2E",authDomain:"toneginie.firebaseapp.com",projectId:"toneginie",storageBucket:"toneginie.firebasestorage.app",messagingSenderId:"297868877529",appId:"1:297868877529:web:472296d8ce6311a472e8c8",measurementId:"G-N1QXVS2NZB"},ne=["✨ Enjoying ToneGenie? A kind review would mean a lot!","☕ Like the tool? Buy me a coffee & keep it alive!","💬 Helped you today? A small review goes a long way.","🪄 Magic happened? Show some love with a quick rating!","💡 This tool runs on creativity (and a little coffee)!","🫶 Built this for creators — your feedback fuels updates!","😄 Smiled while using ToneGenie? Say thanks with a review!","🚀 Help us grow! Drop a review if it helped you fly.","🔧 One dev. Many cups of coffee. Support keeps me coding!","❤️ Liked the vibe? A rating helps more than you think.","🌟 If this saved your time — rate it, fuel the mission!","📝 Love ToneGenie? Tap a star & tell the world!","👀 Still here? Might as well drop a 5-star review 😉","🌈 Spread good vibes — your review keeps this tool free!","🔥 This took caffeine, passion & late nights. Show support!","💻 One-man army here. A review = real motivation 🚀","🎁 Like a free gift? Help me with a tiny shoutout!","🤖 AI worked hard. Now give it a little applause 💬","📢 Love tools like this? Your feedback keeps them alive!","🥰 Reviews aren’t just stars — they keep solo devs going!","🙌 If this helped you close a deal, boost the project!","🔁 Using this often? Pay it forward with a kind review.","🎯 If this hit the right tone — let the world know!","😌 Made writing easier today? Consider showing some ❤️","💬 Sharing is caring — leave feedback to help others!","🌟 Found it useful? A small review = huge impact!","🧠 Good AI deserves good vibes. Drop a rating!","🍀 Feeling lucky this worked? Pay it back with stars!","🎉 This is free, but your review is priceless!","👋 Before you go, your 5-star review = fuel for updates!"];let J=null;function de(){return J||(J=(async()=>{if(window.firebase&&window.firebase.apps&&window.firebase.apps.length)return window.firebase;const e=await ee(()=>import("./index.esm-5dwx-eWw.js"),__vite__mapDeps([0,1]));if(await ee(()=>import("./index.esm-Dw8aRtCO.js"),__vite__mapDeps([2,1])),!e.default&&e.initializeApp)return e.apps.length||e.initializeApp(te),e;const o=e.default||e;return o.apps.length||o.initializeApp(te),o})(),J)}function pe(){if(document.getElementById("text-enhancer-login-styles"))return;const e=document.createElement("style");e.id="text-enhancer-login-styles",e.textContent=`
    .text-enhancer-login-popup {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 320px;
      max-width: 95vw;
      background: #232336;
      color: #f3f4f6;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.4);
      padding: 20px;
      z-index: 100000;
      font-family: 'Inter', sans-serif;
    }
    .text-enhancer-login-popup h3{margin-top:0;font-size:16px;font-weight:600;margin-bottom:12px;}
    .text-enhancer-oauth-btn{display:block;width:100%;margin-bottom:10px;padding:10px 12px;border-radius:8px;font-size:14px;font-weight:500;border:none;cursor:pointer;transition:background 0.2s;}
    .login-google{background:#4285F4;color:#fff;}
    .login-github{background:#333;color:#fff;}
    .login-later{background:#2d2d40;color:#c4b5fd;width:100%;}
    .text-enhancer-oauth-btn:hover{opacity:0.9;}
    @media(max-width:500px){.text-enhancer-login-popup{right:10px;left:10px;bottom:10px;width:auto;}}
  `,document.head.appendChild(e)}function ue(){if(document.querySelector(".text-enhancer-login-popup"))return;pe();const e=document.createElement("div");e.className="text-enhancer-login-popup";const o=document.createElement("h3");o.textContent="Sign in to save preferences",e.appendChild(o);const n=document.createElement("button");n.className="text-enhancer-oauth-btn login-google",n.textContent="Continue with Google",e.appendChild(n);const t=document.createElement("button");t.className="text-enhancer-oauth-btn login-github",t.textContent="Continue with GitHub",e.appendChild(t);const a=document.createElement("button");a.className="text-enhancer-oauth-btn login-later",a.textContent="Later",e.appendChild(a);async function h(s){try{const i=await de();let p;s==="google"?p=new i.auth.GoogleAuthProvider:p=new i.auth.GithubAuthProvider;const d=(await i.auth().signInWithPopup(p)).user;if(d){const u={uid:d.uid,name:d.displayName||"Anonymous",email:d.email||"",provider:s,extVersion:chrome.runtime.getManifest().version,ua:navigator.userAgent};chrome.storage.local.set({textEnhancerUser:u}),fetch("https://tone-genie.vercel.app/api/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)}).catch(console.error)}e.remove()}catch(i){console.error("Login failed",i);const p=`https://tone-genie.vercel.app/login?provider=${s}`;try{window.open(p,"_blank")}catch{chrome.runtime.sendMessage({action:"open_login_tab",url:p})}g("Opening login page…","info")}}n.onclick=()=>h("google"),t.onclick=()=>h("github"),a.onclick=()=>{e.remove()},document.body.appendChild(e)}function he(){chrome.storage.local.get(["textEnhancerUsage","textEnhancerReviewed","textEnhancerUser"],e=>{let o=e.textEnhancerUsage||0;const n=e.textEnhancerReviewed,t=e.textEnhancerUser;o+=1,!t&&o>0&&o%3===0&&ue(),chrome.storage.local.set({textEnhancerUsage:o}),!n&&o>0&&o%4===0&&ye()})}let v=null;function oe(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const o=document.createElement("link");o.rel="stylesheet",o.href=e,document.head.appendChild(o)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const o=document.createElement("link");o.rel="stylesheet",o.dataset.textEnhancerTheme="true",o.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(o)}}}function me(e,o){const n=e.toLowerCase(),t=o.toLowerCase();return n.includes("mail.google.com")||n.includes("outlook")||n.includes("yahoo.com/mail")||n.includes("mail")||t.includes("inbox")||t.includes("email")||t.includes("compose")?"email":n.includes("twitter.com")||n.includes("facebook.com")||n.includes("instagram.com")||n.includes("linkedin.com/feed")||n.includes("reddit.com")||t.includes("feed")||t.includes("post")||t.includes("timeline")?"social":n.includes("linkedin.com")&&!n.includes("linkedin.com/feed")||n.includes("docs.google.com")||n.includes("notion.so")||n.includes("slack.com")||n.includes("teams.microsoft.com")||t.includes("document")||t.includes("report")||t.includes("project")||t.includes("proposal")?"professional":n.includes("scholar.google.com")||n.includes(".edu")||n.includes("academia.edu")||n.includes("researchgate.net")||n.includes("coursera.org")||n.includes("canvas")||t.includes("course")||t.includes("assignment")||t.includes("paper")||t.includes("research")||t.includes("study")?"academic":n.includes("tinder.com")||n.includes("bumble.com")||n.includes("hinge.co")||n.includes("okcupid.com")||n.includes("match.com")||t.includes("dating")||t.includes("chat")&&(t.includes("match")||t.includes("date")||t.includes("love"))?"romantic":"general"}function g(e,o="info"){let n=document.getElementById("gemini-enhancer-toast-container");n||(n=document.createElement("div"),n.id="gemini-enhancer-toast-container",n.style.cssText=`
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
  `,t.textContent=e,n.appendChild(t),setTimeout(()=>{t.style.opacity="1"},10),setTimeout(()=>{t.style.opacity="0",setTimeout(()=>{n.removeChild(t)},300)},3e3)}function ae(){return document.activeElement}function I(e){if(!e)return!1;const o=e.tagName.toLowerCase(),n=o==="input"&&["text","search","email","url","tel","number","password"].includes(e.type),t=o==="textarea",a=e.isContentEditable||e.hasAttribute("contenteditable");return n||t||a}function xe(e){return e?e.closest('[contenteditable="true"]'):null}function M(e){return e&&(e.getAttribute("placeholder")||e.dataset&&e.dataset.placeholder)||""}function re(e=null){const o=e||document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))if(v=o,o.isContentEditable){const t=o.innerText||"";return t.trim()!==""?t:M(o)}else{const t=o.value||"";return t.trim()!==""?t:M(o)}const n=document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');for(const t of n){if(t.offsetParent===null||t.offsetWidth<20||t.offsetHeight<20)continue;let a="";if(t.isContentEditable||t.getAttribute("contenteditable")==="true"?a=t.innerText&&t.innerText.trim()!==""?t.innerText:M(t):a=t.value&&t.value.trim()!==""?t.value:M(t),a.trim()!=="")return v=t,a}if(n.length>0){for(const t of n)if(t.offsetParent!==null&&t.offsetWidth>50&&t.offsetHeight>20)return v=t,t.value||t.innerText||""}return null}function Q(e,o){if(!e||!I(e))return!1;const n=e.selectionStart,t=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){if(e.value=o,typeof n=="number"&&typeof t=="number"){const h=Math.min(n,o.length);try{e.setSelectionRange(h,h)}catch(s){console.error("Failed to restore cursor position:",s)}}const a=new Event("input",{bubbles:!0});return e.dispatchEvent(a),!0}else if(e.isContentEditable||e.hasAttribute("contenteditable")){const a=e.isContentEditable?e:xe(e);if(a){a.focus(),a.textContent=o;const h=new InputEvent("input",{bubbles:!0});return a.dispatchEvent(h),!0}}return!1}function $(e,o=!0){navigator.clipboard.writeText(e).then(()=>{o&&g("Enhanced text copied to clipboard!","success")}).catch(n=>{console.error("Failed to copy text:",n),o&&g("Failed to copy to clipboard","error")})}async function fe(){v=ae();let e;if(!I(v)){const a=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');a.length>0?v=a[0]:(v=null,g("No input field found. Enhanced text will be copied to clipboard.","info"))}if(I(v)){if(e=re(v),!e||e.trim()===""){const a=M(v);if(a.trim()!=="")e=a,g('Using placeholder text: "'+e.substring(0,20)+(e.length>20?"...":"")+'"');else{g("No text to enhance","error");return}}}else{g("No text found to enhance","error");return}g("Enhancing text with AI...");const o=window.location.href,n=document.title,t=me(o,n);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:e,context:t},a=>{a&&a.success?I(v)&&Q(v,a.enhancedText)?(g("Text enhanced and filled in!","success"),$(a.enhancedText,!1)):$(a.enhancedText,!0):g(a&&a.error?`Error: ${a.error}`:"Failed to enhance text","error")})}function be(){if(oe(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function ge(){be(),ce();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const o=document.createElement("div");o.id="text-enhancer-popup",o.className="text-enhancer-context-popup";const n=document.createElement("div");n.className="text-enhancer-popup-header";const t=document.createElement("div"),a=document.createElement("h2");a.id="text-enhancer-title",a.textContent="Tone Genie (AI-powered text enhancer)";const h=document.createElement("p");h.id="text-enhancer-subtitle",h.textContent="Enhance your writing style with AI",t.appendChild(a),t.appendChild(h);const s=document.createElement("button");s.className="text-enhancer-close-btn",s.innerHTML="&times;",s.addEventListener("click",()=>o.remove()),n.appendChild(t),n.appendChild(s);const i=document.createElement("div");i.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((r,c)=>{const l=document.createElement("button");l.className=`text-enhancer-tab ${c===0?"active":""}`,l.dataset.tab=r.id;const b=document.createElement("span");b.className="tab-icon",b.textContent=r.icon;const m=document.createElement("span");m.className="tab-text",m.textContent=r.text,l.appendChild(b),l.appendChild(m),l.addEventListener("click",ie=>{document.querySelectorAll(".text-enhancer-tab").forEach(Y=>Y.classList.remove("active")),ie.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(Y=>Y.classList.remove("active")),document.getElementById(`text-enhancer-${r.id}-content`).classList.add("active")}),i.appendChild(l)});const x=document.createElement("div");x.id="text-enhancer-content";const d=document.createElement("div");d.id="text-enhancer-custom-content",d.className="text-enhancer-tab-content active";const u=document.createElement("label");u.className="text-enhancer-label",u.textContent="Custom Prompt:",u.htmlFor="text-enhancer-prompt";const f=document.createElement("textarea");f.id="text-enhancer-prompt",f.className="text-enhancer-textarea",f.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',f.rows=3;const k=document.createElement("label");k.className="text-enhancer-label",k.textContent="Text to Enhance:",k.htmlFor="text-enhancer-text";const y=document.createElement("textarea");y.id="text-enhancer-text",y.className="text-enhancer-textarea",y.placeholder="Enter or paste text to enhance...",y.rows=5;const T=ae();let N="";I(T)&&(N=re(T),N&&N.trim()!==""&&(y.value=N)),d.appendChild(u),d.appendChild(f),d.appendChild(k),d.appendChild(y);const S=document.createElement("div");S.id="text-enhancer-templates-content",S.className="text-enhancer-tab-content";const P=document.createElement("h3");P.className="text-enhancer-subtitle",P.textContent="Choose a Template",S.appendChild(P),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(r=>{const c=document.createElement("div");c.className="text-enhancer-template-card";const l=document.createElement("h4");l.className="text-enhancer-template-name",l.textContent=r.name;const b=document.createElement("p");b.className="text-enhancer-template-description",b.textContent=r.description;const m=document.createElement("button");m.className="text-enhancer-button text-enhancer-button-primary",m.textContent="Use Template",m.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),f.value=r.prompt,y.focus()}),c.appendChild(l),c.appendChild(b),c.appendChild(m),S.appendChild(c)});const w=document.createElement("div");w.id="text-enhancer-freelance-content",w.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Freelance Proposal Templates",w.appendChild(z),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(r=>{const c=document.createElement("div");c.className="text-enhancer-template-card";const l=document.createElement("h4");l.className="text-enhancer-template-name",l.textContent=r.name;const b=document.createElement("p");b.className="text-enhancer-template-description",b.textContent=r.description;const m=document.createElement("button");m.className="text-enhancer-button text-enhancer-button-primary",m.textContent="Use Template",m.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),f.value=r.prompt,y.focus()}),c.appendChild(l),c.appendChild(b),c.appendChild(m),w.appendChild(c)});const C=document.createElement("div");C.id="text-enhancer-tone-content",C.className="text-enhancer-tab-content";const B=document.createElement("h3");B.className="text-enhancer-subtitle",B.textContent="Select Tone & Style",C.appendChild(B);const L=document.createElement("label");L.className="text-enhancer-label",L.textContent="Tone:",L.htmlFor="text-enhancer-tone";const E=document.createElement("select");E.id="text-enhancer-tone",E.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(r=>{const c=document.createElement("option");c.value=r.value,c.textContent=r.icon?`${r.icon} ${r.text}`:r.text,E.appendChild(c)});const G=document.createElement("label");G.className="text-enhancer-label",G.textContent="Style:",G.htmlFor="text-enhancer-style";const U=document.createElement("select");U.id="text-enhancer-style",U.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(r=>{const c=document.createElement("option");c.value=r.value,c.textContent=r.icon?`${r.icon} ${r.text}`:r.text,U.appendChild(c)});const q=document.createElement("div");q.className="text-enhancer-checkbox-container";const _=document.createElement("input");_.type="checkbox",_.id="text-enhancer-emoji",_.className="text-enhancer-checkbox";const D=document.createElement("label");D.htmlFor="text-enhancer-emoji",D.className="text-enhancer-checkbox-label",D.textContent="Include emojis for emotional emphasis",q.appendChild(_),q.appendChild(D);const O=document.createElement("label");O.className="text-enhancer-label",O.textContent="Additional Instructions (optional):",O.htmlFor="text-enhancer-instructions";const F=document.createElement("textarea");F.id="text-enhancer-instructions",F.className="text-enhancer-textarea",F.placeholder="Add any specific instructions or requirements...",F.rows=2;const X=document.createElement("div");X.className="text-enhancer-button-group";const H=document.createElement("button");H.className="text-enhancer-button text-enhancer-button-primary",H.innerHTML="🎨 Apply Tone & Style",H.addEventListener("click",()=>{const r=E.value,c=U.value,l=F.value.trim(),b=_.checked;if(!r&&!c){g("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let m="Rewrite the following text";r&&(m+=` in a ${r} tone`),c&&(m+=r?` and ${c} style`:` in a ${c} style`),l&&(m+=`. Additional instructions: ${l}`),b&&(m+=". Include appropriate emojis to emphasize emotions and key points."),f.value=m,y.focus()}),X.appendChild(H),C.appendChild(L),C.appendChild(E),C.appendChild(G),C.appendChild(U),C.appendChild(q),C.appendChild(O),C.appendChild(F),C.appendChild(X);const V=document.createElement("div");V.className="text-enhancer-button-group";const W=document.createElement("button");W.className="text-enhancer-button text-enhancer-button-secondary",W.textContent="Cancel",W.addEventListener("click",()=>o.remove());const A=document.createElement("button");A.className="text-enhancer-button text-enhancer-button-primary",A.textContent="Generate",A.addEventListener("click",()=>{const r=f.value.trim(),c=y.value.trim();if(!r){g("Please enter a custom prompt","error");return}if(!c){g("Please enter text to enhance","error");return}A.disabled=!0,A.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:c,context:"general",customPrompt:r},l=>{if(A.disabled=!1,A.textContent="Generate",l&&l.success){let b=!1;T&&I(T)&&(b=Q(T,l.enhancedText)),b||$(l.enhancedText),o.remove()}else g(l&&l.error?`Error: ${l.error}`:"Failed to enhance text","error")})}),V.appendChild(W),V.appendChild(A),d.appendChild(V),x.appendChild(d),x.appendChild(S),x.appendChild(w),x.appendChild(C),o.appendChild(n),o.appendChild(i),o.appendChild(x),document.body.appendChild(o),f.focus()}function ve(){const e=document.createElement("div");e.className="text-enhancer-context-popup";const o=document.createElement("div");o.className="text-enhancer-popup-header";const n=document.createElement("h2");n.textContent="Context-Based Enhancement";const t=document.createElement("button");t.className="text-enhancer-close-btn",t.textContent="×",t.addEventListener("click",()=>e.remove()),o.appendChild(n),o.appendChild(t);const a=document.createElement("div");a.className="text-enhancer-content";const h=document.createElement("div");h.className="text-enhancer-section";const s=document.createElement("label");s.textContent="Provide Context:",s.htmlFor="text-enhancer-context-input";const i=document.createElement("textarea");i.id="text-enhancer-context-input",i.className="text-enhancer-textarea",i.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',i.rows=3,h.appendChild(s),h.appendChild(i);const p=document.createElement("div");p.className="text-enhancer-section";const x=document.createElement("label");x.textContent="Additional Information (optional):",x.htmlFor="text-enhancer-text-input";const d=document.createElement("textarea");d.id="text-enhancer-text-input",d.className="text-enhancer-textarea",d.placeholder="Add any details you want included (e.g., dates, names, specific points)",d.rows=3,p.appendChild(x),p.appendChild(d);const u=document.createElement("div");u.className="text-enhancer-options";const f=document.createElement("div");f.className="text-enhancer-option";const k=document.createElement("input");k.type="checkbox",k.id="text-enhancer-humanize",k.checked=!0;const y=document.createElement("label");y.htmlFor="text-enhancer-humanize",y.textContent="Make it sound natural and human-written",f.appendChild(k),f.appendChild(y);const T=document.createElement("div");T.className="text-enhancer-option";const N=document.createElement("input");N.type="checkbox",N.id="text-enhancer-emoji";const S=document.createElement("label");S.htmlFor="text-enhancer-emoji",S.textContent="Include appropriate emojis",T.appendChild(N),T.appendChild(S),u.appendChild(f),u.appendChild(T);const P=document.createElement("div");P.className="text-enhancer-buttons";const j=document.createElement("button");j.className="text-enhancer-button text-enhancer-cancel-btn",j.textContent="Cancel",j.addEventListener("click",()=>e.remove());const w=document.createElement("button");w.className="text-enhancer-button text-enhancer-generate-btn",w.textContent="Generate",w.addEventListener("click",()=>{const z=i.value.trim(),R=d.value.trim(),C=k.checked,B=N.checked;if(!z){g("Please provide context for what you want to generate","error");return}w.disabled=!0,w.textContent="Generating...";let L=`${z}`;R&&(L+=`

Additional information: ${R}`),C&&(L+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:R||"Generate from context",context:"context-based",customPrompt:L,includeEmojis:B},E=>{if(w.disabled=!1,w.textContent="Generate",E&&E.success){let K=!1;v&&I(v)&&(K=Q(v,E.enhancedText)),K||$(E.enhancedText),e.remove()}else g(E&&E.error?`Error: ${E.error}`:"Failed to generate text","error")})}),P.appendChild(j),P.appendChild(w),a.appendChild(h),a.appendChild(p),a.appendChild(u),a.appendChild(P),e.appendChild(o),e.appendChild(a),document.body.appendChild(e),i.focus(),ce()}function ce(){oe();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const o=document.createElement("style");o.id=e,o.textContent=`
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
  `,document.head.appendChild(o)}window.showLoginPopup=()=>{if(document.querySelector(".text-enhancer-login-simple"))return;const e=document.createElement("div");e.className="text-enhancer-login-simple",e.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter,sans-serif;";const o=document.createElement("p");o.textContent="Sign in to sync preferences & get updates",o.style.margin="0 0 12px 0",e.appendChild(o);const n=document.createElement("div");n.style.cssText="display:flex;gap:8px;";const t=document.createElement("button");t.textContent="Later",t.style.cssText="flex:1;padding:10px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;cursor:pointer;",t.onclick=()=>e.remove();const a=document.createElement("button");a.textContent="Login",a.style.cssText="flex:1;padding:10px;border:none;border-radius:8px;background:#7c3aed;color:#fff;cursor:pointer;",a.onclick=()=>{window.open("https://tone-genie.vercel.app/login","_blank"),e.remove()},n.appendChild(t),n.appendChild(a),e.appendChild(n),document.body.appendChild(e)};function ye(){if(document.querySelector(".text-enhancer-feedback-popup"))return;const e=document.createElement("div");e.className="text-enhancer-feedback-popup",e.style.cssText="position:fixed;bottom:24px;right:24px;width:320px;max-width:95vw;background:#232336;color:#f3f4f6;border-radius:12px;box-shadow:0 4px 10px rgba(0,0,0,0.4);padding:18px;z-index:100000;font-family:Inter, sans-serif;";const o=document.createElement("p");o.textContent=ne[Math.floor(Math.random()*ne.length)],o.style.margin="0 0 12px 0",e.appendChild(o);const n=document.createElement("button");n.textContent="Leave feedback",n.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#7c3aed;color:#fff;font-weight:600;cursor:pointer;",n.onclick=()=>{window.open("https://tone-genie.vercel.app/feedback","_blank"),chrome.storage.local.set({textEnhancerReviewed:!0}),e.remove()};const t=document.createElement("button");t.textContent="Later",t.style.cssText="display:block;width:100%;padding:10px 12px;border:none;border-radius:8px;background:#2d2d40;color:#c4b5fd;font-weight:600;cursor:pointer;margin-top:8px;",t.onclick=()=>e.remove(),e.appendChild(n),e.appendChild(t),document.body.appendChild(e)}chrome.runtime.onMessage.addListener((e,o,n)=>(e.action==="enhance-text"?(fe(),he(),n({success:!0})):e.action==="show-custom-prompt"?(ge(),n({success:!0})):e.action==="show-context-enhancer"?(ve(),n({success:!0})):e.action==="ping"&&n({status:"content_script_ready"}),!0));(function(){try{chrome.runtime.sendMessage({action:"content_script_ready"},function(e){chrome.runtime.lastError})}catch(e){console.error("Error sending ready message:",e)}})();
