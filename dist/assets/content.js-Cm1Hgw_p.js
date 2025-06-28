(function(){let s=null;function K(){try{const e=chrome.runtime.getURL("theme.css");if(!document.querySelector(`link[href="${e}"]`)){const o=document.createElement("link");o.rel="stylesheet",o.href=e,document.head.appendChild(o)}}catch{if(!document.querySelector("link[data-text-enhancer-theme]")){const o=document.createElement("link");o.rel="stylesheet",o.dataset.textEnhancerTheme="true",o.href=chrome&&chrome.runtime&&chrome.runtime.getURL?chrome.runtime.getURL("theme.css"):"theme.css",document.head.appendChild(o)}}}function te(e,o){const t=e.toLowerCase(),n=o.toLowerCase();return t.includes("mail.google.com")||t.includes("outlook")||t.includes("yahoo.com/mail")||t.includes("mail")||n.includes("inbox")||n.includes("email")||n.includes("compose")?"email":t.includes("twitter.com")||t.includes("facebook.com")||t.includes("instagram.com")||t.includes("linkedin.com/feed")||t.includes("reddit.com")||n.includes("feed")||n.includes("post")||n.includes("timeline")?"social":t.includes("linkedin.com")&&!t.includes("linkedin.com/feed")||t.includes("docs.google.com")||t.includes("notion.so")||t.includes("slack.com")||t.includes("teams.microsoft.com")||n.includes("document")||n.includes("report")||n.includes("project")||n.includes("proposal")?"professional":t.includes("scholar.google.com")||t.includes(".edu")||t.includes("academia.edu")||t.includes("researchgate.net")||t.includes("coursera.org")||t.includes("canvas")||n.includes("course")||n.includes("assignment")||n.includes("paper")||n.includes("research")||n.includes("study")?"academic":t.includes("tinder.com")||t.includes("bumble.com")||t.includes("hinge.co")||t.includes("okcupid.com")||t.includes("match.com")||n.includes("dating")||n.includes("chat")&&(n.includes("match")||n.includes("date")||n.includes("love"))?"romantic":"general"}function m(e,o="info"){let t=document.getElementById("gemini-enhancer-toast-container");t||(t=document.createElement("div"),t.id="gemini-enhancer-toast-container",t.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
    `,document.body.appendChild(t));const n=document.createElement("div");n.style.cssText=`
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
  `,n.textContent=e,t.appendChild(n),setTimeout(()=>{n.style.opacity="1"},10),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{t.removeChild(n)},300)},3e3)}function Q(){return document.activeElement}function P(e){if(!e)return!1;const o=e.tagName.toLowerCase(),t=e.getAttribute("contenteditable");return o==="input"&&["text","search","email","url","tel","number","password"].includes(e.type)||o==="textarea"||t==="true"}function Z(e=null){const o=e||document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return s=o,o.isContentEditable?o.innerText||"":o.value||"";const t=document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');for(const n of t){if(n.offsetParent===null||n.offsetWidth<20||n.offsetHeight<20)continue;let c="";if(n.isContentEditable||n.getAttribute("contenteditable")==="true"?c=n.innerText||"":c=n.value||"",c.trim()!=="")return s=n,c}if(t.length>0){for(const n of t)if(n.offsetParent!==null&&n.offsetWidth>50&&n.offsetHeight>20)return s=n,n.value||n.innerText||""}return null}function X(e,o){if(!e||!P(e))return!1;const t=e.selectionStart,n=e.selectionEnd;if(e.tagName.toLowerCase()==="input"||e.tagName.toLowerCase()==="textarea"){if(e.value=o,typeof t=="number"&&typeof n=="number"){const g=Math.min(t,o.length);try{e.setSelectionRange(g,g)}catch(C){console.error("Failed to restore cursor position:",C)}}const c=new Event("input",{bubbles:!0});return e.dispatchEvent(c),!0}else if(e.getAttribute("contenteditable")==="true")return e.innerText=o,!0;return!1}function q(e,o=!0){navigator.clipboard.writeText(e).then(()=>{o&&m("Enhanced text copied to clipboard!","success")}).catch(t=>{console.error("Failed to copy text:",t),o&&m("Failed to copy to clipboard","error")})}async function ne(){s=Q();let e;if(!P(s)){const c=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');c.length>0?s=c[0]:(s=null,m("No input field found. Enhanced text will be copied to clipboard.","info"))}if(P(s)){if(e=Z(s),!e||e.trim()==="")if(s&&s.placeholder&&s.placeholder.trim()!=="")e=s.placeholder,m('Using placeholder text: "'+e.substring(0,20)+(e.length>20?"...":"")+'"');else{m("No text to enhance","error");return}}else{m("No text found to enhance","error");return}m("Enhancing text with AI...");const o=window.location.href,t=document.title,n=te(o,t);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:e,context:n},c=>{c&&c.success?P(s)&&X(s,c.enhancedText)?(m("Text enhanced and filled in!","success"),q(c.enhancedText,!1)):q(c.enhancedText,!0):m(c&&c.error?`Error: ${c.error}`:"Failed to enhance text","error")})}function oe(){if(K(),document.getElementById("text-enhancer-styles"))return;const e=document.createElement("style");e.id="text-enhancer-styles",e.textContent=`
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
  `,document.head.appendChild(e)}function ae(){oe();const e=document.getElementById("text-enhancer-popup");e&&e.remove();const o=document.createElement("div");o.id="text-enhancer-popup";const t=document.createElement("div");t.id="text-enhancer-header";const n=document.createElement("div"),c=document.createElement("h2");c.id="text-enhancer-title",c.textContent="Text-Enhancer (AI-powered)";const g=document.createElement("p");g.id="text-enhancer-subtitle",g.textContent="Style your text with AI",n.appendChild(c),n.appendChild(g);const C=document.createElement("button");C.id="text-enhancer-close",C.innerHTML="&times;",C.addEventListener("click",()=>o.remove()),t.appendChild(n),t.appendChild(C);const v=document.createElement("div");v.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((a,r)=>{const i=document.createElement("button");i.className=`text-enhancer-tab ${r===0?"active":""}`,i.dataset.tab=a.id;const d=document.createElement("span");d.className="tab-icon",d.textContent=a.icon;const l=document.createElement("span");l.className="tab-text",l.textContent=a.text,i.appendChild(d),i.appendChild(l),i.addEventListener("click",ee=>{document.querySelectorAll(".text-enhancer-tab").forEach(J=>J.classList.remove("active")),ee.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(J=>J.classList.remove("active")),document.getElementById(`text-enhancer-${a.id}-content`).classList.add("active")}),v.appendChild(i)});const y=document.createElement("div");y.id="text-enhancer-content";const p=document.createElement("div");p.id="text-enhancer-custom-content",p.className="text-enhancer-tab-content active";const k=document.createElement("label");k.className="text-enhancer-label",k.textContent="Custom Prompt:",k.htmlFor="text-enhancer-prompt";const u=document.createElement("textarea");u.id="text-enhancer-prompt",u.className="text-enhancer-textarea",u.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',u.rows=3;const E=document.createElement("label");E.className="text-enhancer-label",E.textContent="Text to Enhance:",E.htmlFor="text-enhancer-text";const h=document.createElement("textarea");h.id="text-enhancer-text",h.className="text-enhancer-textarea",h.placeholder="Enter or paste text to enhance...",h.rows=5;const w=Q();let T="";P(w)&&(T=Z(w),T&&T.trim()!==""&&(h.value=T)),p.appendChild(k),p.appendChild(u),p.appendChild(E),p.appendChild(h);const N=document.createElement("div");N.id="text-enhancer-templates-content",N.className="text-enhancer-tab-content";const L=document.createElement("h3");L.className="text-enhancer-subtitle",L.textContent="Choose a Template",N.appendChild(L),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(a=>{const r=document.createElement("div");r.className="text-enhancer-template-card";const i=document.createElement("h4");i.className="text-enhancer-template-name",i.textContent=a.name;const d=document.createElement("p");d.className="text-enhancer-template-description",d.textContent=a.description;const l=document.createElement("button");l.className="text-enhancer-button text-enhancer-button-primary",l.textContent="Use Template",l.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),u.value=a.prompt,h.focus()}),r.appendChild(i),r.appendChild(d),r.appendChild(l),N.appendChild(r)});const x=document.createElement("div");x.id="text-enhancer-freelance-content",x.className="text-enhancer-tab-content";const I=document.createElement("h3");I.className="text-enhancer-subtitle",I.textContent="Freelance Proposal Templates",x.appendChild(I),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(a=>{const r=document.createElement("div");r.className="text-enhancer-template-card";const i=document.createElement("h4");i.className="text-enhancer-template-name",i.textContent=a.name;const d=document.createElement("p");d.className="text-enhancer-template-description",d.textContent=a.description;const l=document.createElement("button");l.className="text-enhancer-button text-enhancer-button-primary",l.textContent="Use Template",l.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),u.value=a.prompt,h.focus()}),r.appendChild(i),r.appendChild(d),r.appendChild(l),x.appendChild(r)});const b=document.createElement("div");b.id="text-enhancer-tone-content",b.className="text-enhancer-tab-content";const B=document.createElement("h3");B.className="text-enhancer-subtitle",B.textContent="Select Tone & Style",b.appendChild(B);const S=document.createElement("label");S.className="text-enhancer-label",S.textContent="Tone:",S.htmlFor="text-enhancer-tone";const f=document.createElement("select");f.id="text-enhancer-tone",f.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(a=>{const r=document.createElement("option");r.value=a.value,r.textContent=a.icon?`${a.icon} ${a.text}`:a.text,f.appendChild(r)});const R=document.createElement("label");R.className="text-enhancer-label",R.textContent="Style:",R.htmlFor="text-enhancer-style";const $=document.createElement("select");$.id="text-enhancer-style",$.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(a=>{const r=document.createElement("option");r.value=a.value,r.textContent=a.icon?`${a.icon} ${a.text}`:a.text,$.appendChild(r)});const G=document.createElement("div");G.className="text-enhancer-checkbox-container";const M=document.createElement("input");M.type="checkbox",M.id="text-enhancer-emoji",M.className="text-enhancer-checkbox";const D=document.createElement("label");D.htmlFor="text-enhancer-emoji",D.className="text-enhancer-checkbox-label",D.textContent="Include emojis for emotional emphasis",G.appendChild(M),G.appendChild(D);const H=document.createElement("label");H.className="text-enhancer-label",H.textContent="Additional Instructions (optional):",H.htmlFor="text-enhancer-instructions";const F=document.createElement("textarea");F.id="text-enhancer-instructions",F.className="text-enhancer-textarea",F.placeholder="Add any specific instructions or requirements...",F.rows=2;const Y=document.createElement("div");Y.className="text-enhancer-button-group";const W=document.createElement("button");W.className="text-enhancer-button text-enhancer-button-primary",W.innerHTML="🎨 Apply Tone & Style",W.addEventListener("click",()=>{const a=f.value,r=$.value,i=F.value.trim(),d=M.checked;if(!a&&!r){m("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let l="Rewrite the following text";a&&(l+=` in a ${a} tone`),r&&(l+=a?` and ${r} style`:` in a ${r} style`),i&&(l+=`. Additional instructions: ${i}`),d&&(l+=". Include appropriate emojis to emphasize emotions and key points."),u.value=l,h.focus()}),Y.appendChild(W),b.appendChild(S),b.appendChild(f),b.appendChild(R),b.appendChild($),b.appendChild(G),b.appendChild(H),b.appendChild(F),b.appendChild(Y);const _=document.createElement("div");_.className="text-enhancer-button-group";const O=document.createElement("button");O.className="text-enhancer-button text-enhancer-button-secondary",O.textContent="Cancel",O.addEventListener("click",()=>o.remove());const z=document.createElement("button");z.className="text-enhancer-button text-enhancer-button-primary",z.textContent="Generate",z.addEventListener("click",()=>{const a=u.value.trim(),r=h.value.trim();if(!a){m("Please enter a custom prompt","error");return}if(!r){m("Please enter text to enhance","error");return}z.disabled=!0,z.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:r,context:"general",customPrompt:a},i=>{if(z.disabled=!1,z.textContent="Generate",i&&i.success){let d=!1;w&&P(w)&&(d=X(w,i.enhancedText)),d||q(i.enhancedText),o.remove()}else m(i&&i.error?`Error: ${i.error}`:"Failed to enhance text","error")})}),_.appendChild(O),_.appendChild(z),p.appendChild(_),y.appendChild(p),y.appendChild(N),y.appendChild(x),y.appendChild(b),o.appendChild(t),o.appendChild(v),o.appendChild(y),document.body.appendChild(o),u.focus()}function ce(){const e=document.createElement("div");e.className="text-enhancer-context-popup";const o=document.createElement("div");o.className="text-enhancer-popup-header";const t=document.createElement("h2");t.textContent="Context-Based Enhancement";const n=document.createElement("button");n.className="text-enhancer-close-btn",n.textContent="×",n.addEventListener("click",()=>e.remove()),o.appendChild(t),o.appendChild(n);const c=document.createElement("div");c.className="text-enhancer-content";const g=document.createElement("div");g.className="text-enhancer-section";const C=document.createElement("label");C.textContent="Provide Context:",C.htmlFor="text-enhancer-context-input";const v=document.createElement("textarea");v.id="text-enhancer-context-input",v.className="text-enhancer-textarea",v.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',v.rows=3,g.appendChild(C),g.appendChild(v);const j=document.createElement("div");j.className="text-enhancer-section";const y=document.createElement("label");y.textContent="Additional Information (optional):",y.htmlFor="text-enhancer-text-input";const p=document.createElement("textarea");p.id="text-enhancer-text-input",p.className="text-enhancer-textarea",p.placeholder="Add any details you want included (e.g., dates, names, specific points)",p.rows=3,j.appendChild(y),j.appendChild(p);const k=document.createElement("div");k.className="text-enhancer-options";const u=document.createElement("div");u.className="text-enhancer-option";const E=document.createElement("input");E.type="checkbox",E.id="text-enhancer-humanize",E.checked=!0;const h=document.createElement("label");h.htmlFor="text-enhancer-humanize",h.textContent="Make it sound natural and human-written",u.appendChild(E),u.appendChild(h);const w=document.createElement("div");w.className="text-enhancer-option";const T=document.createElement("input");T.type="checkbox",T.id="text-enhancer-emoji";const N=document.createElement("label");N.htmlFor="text-enhancer-emoji",N.textContent="Include appropriate emojis",w.appendChild(T),w.appendChild(N),k.appendChild(u),k.appendChild(w);const L=document.createElement("div");L.className="text-enhancer-buttons";const A=document.createElement("button");A.className="text-enhancer-button text-enhancer-cancel-btn",A.textContent="Cancel",A.addEventListener("click",()=>e.remove());const x=document.createElement("button");x.className="text-enhancer-button text-enhancer-generate-btn",x.textContent="Generate",x.addEventListener("click",()=>{const I=v.value.trim(),U=p.value.trim(),b=E.checked,B=T.checked;if(!I){m("Please provide context for what you want to generate","error");return}x.disabled=!0,x.textContent="Generating...";let S=`${I}`;U&&(S+=`

Additional information: ${U}`),b&&(S+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:U||"Generate from context",context:"context-based",customPrompt:S,includeEmojis:B},f=>{if(x.disabled=!1,x.textContent="Generate",f&&f.success){let V=!1;s&&P(s)&&(V=X(s,f.enhancedText)),V||q(f.enhancedText),e.remove()}else m(f&&f.error?`Error: ${f.error}`:"Failed to generate text","error")})}),L.appendChild(A),L.appendChild(x),c.appendChild(g),c.appendChild(j),c.appendChild(k),c.appendChild(L),e.appendChild(o),e.appendChild(c),document.body.appendChild(e),v.focus(),re()}function re(){K();const e="text-enhancer-context-styles";if(document.getElementById(e))return;const o=document.createElement("style");o.id=e,o.textContent=`
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
  `,document.head.appendChild(o)}chrome.runtime.onMessage.addListener((e,o,t)=>(e.action==="enhance-text"?(ne(),t({success:!0})):e.action==="show-custom-prompt"?(ae(),t({success:!0})):e.action==="show-context-enhancer"?(ce(),t({success:!0})):e.action==="ping"&&t({status:"content_script_ready"}),!0));(function(){try{chrome.runtime.sendMessage({action:"content_script_ready"},function(e){chrome.runtime.lastError})}catch(e){console.error("Error sending ready message:",e)}})();
})()