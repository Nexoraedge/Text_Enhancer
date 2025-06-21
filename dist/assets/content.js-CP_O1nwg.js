(function(){let s=null;function ee(t,o){const e=t.toLowerCase(),n=o.toLowerCase();return e.includes("mail.google.com")||e.includes("outlook")||e.includes("yahoo.com/mail")||e.includes("mail")||n.includes("inbox")||n.includes("email")||n.includes("compose")?"email":e.includes("twitter.com")||e.includes("facebook.com")||e.includes("instagram.com")||e.includes("linkedin.com/feed")||e.includes("reddit.com")||n.includes("feed")||n.includes("post")||n.includes("timeline")?"social":e.includes("linkedin.com")&&!e.includes("linkedin.com/feed")||e.includes("docs.google.com")||e.includes("notion.so")||e.includes("slack.com")||e.includes("teams.microsoft.com")||n.includes("document")||n.includes("report")||n.includes("project")||n.includes("proposal")?"professional":e.includes("scholar.google.com")||e.includes(".edu")||e.includes("academia.edu")||e.includes("researchgate.net")||e.includes("coursera.org")||e.includes("canvas")||n.includes("course")||n.includes("assignment")||n.includes("paper")||n.includes("research")||n.includes("study")?"academic":e.includes("tinder.com")||e.includes("bumble.com")||e.includes("hinge.co")||e.includes("okcupid.com")||e.includes("match.com")||n.includes("dating")||n.includes("chat")&&(n.includes("match")||n.includes("date")||n.includes("love"))?"romantic":"general"}function m(t,o="info"){let e=document.getElementById("gemini-enhancer-toast-container");e||(e=document.createElement("div"),e.id="gemini-enhancer-toast-container",e.style.cssText=`
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 10000;
    `,document.body.appendChild(e));const n=document.createElement("div");n.style.cssText=`
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
  `,n.textContent=t,e.appendChild(n),setTimeout(()=>{n.style.opacity="1"},10),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>{e.removeChild(n)},300)},3e3)}function K(){return document.activeElement}function P(t){if(!t)return!1;const o=t.tagName.toLowerCase(),e=t.getAttribute("contenteditable");return o==="input"&&["text","search","email","url","tel","number","password"].includes(t.type)||o==="textarea"||e==="true"}function Q(t=null){const o=t||document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable))return s=o,o.isContentEditable?o.innerText||"":o.value||"";const e=document.querySelectorAll('input[type="text"], input[type="search"], textarea, [contenteditable="true"]');for(const n of e){if(n.offsetParent===null||n.offsetWidth<20||n.offsetHeight<20)continue;let c="";if(n.isContentEditable||n.getAttribute("contenteditable")==="true"?c=n.innerText||"":c=n.value||"",c.trim()!=="")return s=n,c}if(e.length>0){for(const n of e)if(n.offsetParent!==null&&n.offsetWidth>50&&n.offsetHeight>20)return s=n,n.value||n.innerText||""}return null}function X(t,o){if(!t||!P(t))return!1;const e=t.selectionStart,n=t.selectionEnd;if(t.tagName.toLowerCase()==="input"||t.tagName.toLowerCase()==="textarea"){if(t.value=o,typeof e=="number"&&typeof n=="number"){const g=Math.min(e,o.length);try{t.setSelectionRange(g,g)}catch(C){console.error("Failed to restore cursor position:",C)}}const c=new Event("input",{bubbles:!0});return t.dispatchEvent(c),!0}else if(t.getAttribute("contenteditable")==="true")return t.innerText=o,!0;return!1}function q(t,o=!0){navigator.clipboard.writeText(t).then(()=>{o&&m("Enhanced text copied to clipboard!","success")}).catch(e=>{console.error("Failed to copy text:",e),o&&m("Failed to copy to clipboard","error")})}async function te(){s=K();let t;if(!P(s)){const c=document.querySelectorAll('input[type="search"], input[placeholder*="search"], input[placeholder*="Search"], textarea[placeholder*="prompt"], textarea[placeholder*="Prompt"]');c.length>0?s=c[0]:(s=null,m("No input field found. Enhanced text will be copied to clipboard.","info"))}if(P(s)){if(t=Q(s),!t||t.trim()==="")if(s&&s.placeholder&&s.placeholder.trim()!=="")t=s.placeholder,m('Using placeholder text: "'+t.substring(0,20)+(t.length>20?"...":"")+'"');else{m("No text to enhance","error");return}}else{m("No text found to enhance","error");return}m("Enhancing text with AI...");const o=window.location.href,e=document.title,n=ee(o,e);chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:t,context:n},c=>{c&&c.success?P(s)&&X(s,c.enhancedText)?(m("Text enhanced and filled in!","success"),q(c.enhancedText,!1)):q(c.enhancedText,!0):m(c&&c.error?`Error: ${c.error}`:"Failed to enhance text","error")})}function ne(){if(document.getElementById("text-enhancer-styles"))return;const t=document.createElement("style");t.id="text-enhancer-styles",t.textContent=`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
    
    #text-enhancer-popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: white;
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
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
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
      background-color: #f9fafb;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .text-enhancer-tab {
      padding: 14px 20px;
      background: transparent;
      border: none;
      border-bottom: 3px solid transparent;
      font-size: 14px;
      font-weight: 500;
      color: #6b7280;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .text-enhancer-tab.active {
      border-bottom-color: #8b5cf6;
      color: #4f46e5;
      background-color: rgba(139, 92, 246, 0.05);
    }
    
    .text-enhancer-tab:hover:not(.active) {
      background-color: #f3f4f6;
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
      color: #374151;
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
      background-color: #f9fafb;
      line-height: 1.5;
    }
    
    .text-enhancer-input:hover,
    .text-enhancer-textarea:hover {
      border-color: #9ca3af;
      background-color: #ffffff;
    }
    
    .text-enhancer-input:focus,
    .text-enhancer-textarea:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
      background-color: #ffffff;
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
      background-color: #f9fafb;
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
      background-color: #ffffff;
    }
    
    .text-enhancer-select:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
      background-color: #ffffff;
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
      background-color: white;
      border: 1px solid #d1d5db;
      color: #4b5563;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }
    
    .text-enhancer-button-secondary:hover {
      background-color: #f9fafb;
      border-color: #9ca3af;
      color: #374151;
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
      background-color: #f5f3ff;
    }
    
    .text-enhancer-template-title {
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 4px;
      color: #4b5563;
    }
    
    .text-enhancer-template-description {
      font-size: 13px;
      color: #6b7280;
    }
    
    /* Checkbox container styling */
    .text-enhancer-checkbox-container {
      display: flex;
      align-items: center;
      margin: 16px 0;
      padding: 8px 12px;
      background-color: #f9fafb;
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
      background-color: white;
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
  `,document.head.appendChild(t)}function oe(){ne();const t=document.getElementById("text-enhancer-popup");t&&t.remove();const o=document.createElement("div");o.id="text-enhancer-popup";const e=document.createElement("div");e.id="text-enhancer-header";const n=document.createElement("div"),c=document.createElement("h2");c.id="text-enhancer-title",c.textContent="Text-Enhancer (AI-powered)";const g=document.createElement("p");g.id="text-enhancer-subtitle",g.textContent="Style your text with AI",n.appendChild(c),n.appendChild(g);const C=document.createElement("button");C.id="text-enhancer-close",C.innerHTML="&times;",C.addEventListener("click",()=>o.remove()),e.appendChild(n),e.appendChild(C);const v=document.createElement("div");v.id="text-enhancer-tabs",[{id:"custom",text:"Custom Prompt",icon:"✏️"},{id:"templates",text:"Templates",icon:"📋"},{id:"freelance",text:"Freelance",icon:"💼"},{id:"tone",text:"Tone & Style",icon:"🎨"}].forEach((a,r)=>{const i=document.createElement("button");i.className=`text-enhancer-tab ${r===0?"active":""}`,i.dataset.tab=a.id;const d=document.createElement("span");d.className="tab-icon",d.textContent=a.icon;const l=document.createElement("span");l.className="tab-text",l.textContent=a.text,i.appendChild(d),i.appendChild(l),i.addEventListener("click",Z=>{document.querySelectorAll(".text-enhancer-tab").forEach(J=>J.classList.remove("active")),Z.target.closest(".text-enhancer-tab").classList.add("active"),document.querySelectorAll(".text-enhancer-tab-content").forEach(J=>J.classList.remove("active")),document.getElementById(`text-enhancer-${a.id}-content`).classList.add("active")}),v.appendChild(i)});const y=document.createElement("div");y.id="text-enhancer-content";const p=document.createElement("div");p.id="text-enhancer-custom-content",p.className="text-enhancer-tab-content active";const k=document.createElement("label");k.className="text-enhancer-label",k.textContent="Custom Prompt:",k.htmlFor="text-enhancer-prompt";const u=document.createElement("textarea");u.id="text-enhancer-prompt",u.className="text-enhancer-textarea",u.placeholder='Enter your custom prompt (e.g., "Make this text more professional" or "Rewrite this as a persuasive argument")...',u.rows=3;const E=document.createElement("label");E.className="text-enhancer-label",E.textContent="Text to Enhance:",E.htmlFor="text-enhancer-text";const h=document.createElement("textarea");h.id="text-enhancer-text",h.className="text-enhancer-textarea",h.placeholder="Enter or paste text to enhance...",h.rows=5;const w=K();let T="";P(w)&&(T=Q(w),T&&T.trim()!==""&&(h.value=T)),p.appendChild(k),p.appendChild(u),p.appendChild(E),p.appendChild(h);const N=document.createElement("div");N.id="text-enhancer-templates-content",N.className="text-enhancer-tab-content";const z=document.createElement("h3");z.className="text-enhancer-subtitle",z.textContent="Choose a Template",N.appendChild(z),[{name:"Professional Email",description:"Formal and clear communication for business contexts",prompt:"Rewrite this text as a professional email with clear structure, appropriate greeting and sign-off."},{name:"Creative Writing",description:"Engaging and imaginative content with vivid descriptions",prompt:"Transform this text into creative writing with vivid imagery, engaging narrative, and emotional depth."},{name:"Academic Paper",description:"Scholarly tone with formal language and structured arguments",prompt:"Rewrite this text in an academic style with formal language, proper citations, and structured arguments."},{name:"Marketing Copy",description:"Persuasive content that highlights benefits and drives action",prompt:"Rewrite this as compelling marketing copy that highlights benefits, creates urgency, and includes a clear call to action."},{name:"Technical Documentation",description:"Clear, precise instructions and explanations",prompt:"Transform this into technical documentation with clear, concise explanations, proper terminology, and step-by-step instructions where applicable."}].forEach(a=>{const r=document.createElement("div");r.className="text-enhancer-template-card";const i=document.createElement("h4");i.className="text-enhancer-template-name",i.textContent=a.name;const d=document.createElement("p");d.className="text-enhancer-template-description",d.textContent=a.description;const l=document.createElement("button");l.className="text-enhancer-button text-enhancer-button-primary",l.textContent="Use Template",l.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),u.value=a.prompt,h.focus()}),r.appendChild(i),r.appendChild(d),r.appendChild(l),N.appendChild(r)});const x=document.createElement("div");x.id="text-enhancer-freelance-content",x.className="text-enhancer-tab-content";const I=document.createElement("h3");I.className="text-enhancer-subtitle",I.textContent="Freelance Proposal Templates",x.appendChild(I),[{name:"Project Proposal",description:"Formal project proposal with scope, timeline, and deliverables",prompt:"Transform this into a professional project proposal with clear scope, timeline, deliverables, and pricing structure."},{name:"Cover Letter",description:"Personalized introduction highlighting relevant skills and experience",prompt:"Rewrite this as a compelling cover letter that highlights relevant skills, experience, and enthusiasm for the position."},{name:"Client Pitch",description:"Persuasive pitch focusing on client benefits and your unique value",prompt:"Transform this into a persuasive client pitch that emphasizes benefits, addresses pain points, and highlights your unique value proposition."},{name:"Follow-up Message",description:"Professional follow-up to maintain relationship and prompt action",prompt:"Rewrite this as a professional follow-up message that maintains relationship, references previous communication, and includes a clear next step."}].forEach(a=>{const r=document.createElement("div");r.className="text-enhancer-template-card";const i=document.createElement("h4");i.className="text-enhancer-template-name",i.textContent=a.name;const d=document.createElement("p");d.className="text-enhancer-template-description",d.textContent=a.description;const l=document.createElement("button");l.className="text-enhancer-button text-enhancer-button-primary",l.textContent="Use Template",l.addEventListener("click",()=>{document.querySelector('.text-enhancer-tab[data-tab="custom"]').click(),u.value=a.prompt,h.focus()}),r.appendChild(i),r.appendChild(d),r.appendChild(l),x.appendChild(r)});const f=document.createElement("div");f.id="text-enhancer-tone-content",f.className="text-enhancer-tab-content";const B=document.createElement("h3");B.className="text-enhancer-subtitle",B.textContent="Select Tone & Style",f.appendChild(B);const L=document.createElement("label");L.className="text-enhancer-label",L.textContent="Tone:",L.htmlFor="text-enhancer-tone";const b=document.createElement("select");b.id="text-enhancer-tone",b.className="text-enhancer-select",[{value:"",text:"Select a tone...",icon:""},{value:"professional",text:"Professional",icon:"👔"},{value:"friendly",text:"Friendly",icon:"😊"},{value:"confident",text:"Confident",icon:"💪"},{value:"empathetic",text:"Empathetic",icon:"❤️"},{value:"enthusiastic",text:"Enthusiastic",icon:"🎉"},{value:"humorous",text:"Humorous",icon:"😄"},{value:"formal",text:"Formal",icon:"🎩"},{value:"casual",text:"Casual",icon:"👋"},{value:"persuasive",text:"Persuasive",icon:"🔍"},{value:"inspirational",text:"Inspirational",icon:"✨"}].forEach(a=>{const r=document.createElement("option");r.value=a.value,r.textContent=a.icon?`${a.icon} ${a.text}`:a.text,b.appendChild(r)});const R=document.createElement("label");R.className="text-enhancer-label",R.textContent="Style:",R.htmlFor="text-enhancer-style";const $=document.createElement("select");$.id="text-enhancer-style",$.className="text-enhancer-select",[{value:"",text:"Select a style...",icon:""},{value:"concise",text:"Concise",icon:"✂️"},{value:"descriptive",text:"Descriptive",icon:"🖌️"},{value:"analytical",text:"Analytical",icon:"📊"},{value:"storytelling",text:"Storytelling",icon:"📚"},{value:"technical",text:"Technical",icon:"⚙️"},{value:"conversational",text:"Conversational",icon:"💬"},{value:"academic",text:"Academic",icon:"🎓"},{value:"poetic",text:"Poetic",icon:"🌹"},{value:"journalistic",text:"Journalistic",icon:"📰"},{value:"instructional",text:"Instructional",icon:"📝"}].forEach(a=>{const r=document.createElement("option");r.value=a.value,r.textContent=a.icon?`${a.icon} ${a.text}`:a.text,$.appendChild(r)});const U=document.createElement("div");U.className="text-enhancer-checkbox-container";const M=document.createElement("input");M.type="checkbox",M.id="text-enhancer-emoji",M.className="text-enhancer-checkbox";const D=document.createElement("label");D.htmlFor="text-enhancer-emoji",D.className="text-enhancer-checkbox-label",D.textContent="Include emojis for emotional emphasis",U.appendChild(M),U.appendChild(D);const H=document.createElement("label");H.className="text-enhancer-label",H.textContent="Additional Instructions (optional):",H.htmlFor="text-enhancer-instructions";const F=document.createElement("textarea");F.id="text-enhancer-instructions",F.className="text-enhancer-textarea",F.placeholder="Add any specific instructions or requirements...",F.rows=2;const Y=document.createElement("div");Y.className="text-enhancer-button-group";const W=document.createElement("button");W.className="text-enhancer-button text-enhancer-button-primary",W.innerHTML="🎨 Apply Tone & Style",W.addEventListener("click",()=>{const a=b.value,r=$.value,i=F.value.trim(),d=M.checked;if(!a&&!r){m("Please select at least one tone or style","error");return}document.querySelector('.text-enhancer-tab[data-tab="custom"]').click();let l="Rewrite the following text";a&&(l+=` in a ${a} tone`),r&&(l+=a?` and ${r} style`:` in a ${r} style`),i&&(l+=`. Additional instructions: ${i}`),d&&(l+=". Include appropriate emojis to emphasize emotions and key points."),u.value=l,h.focus()}),Y.appendChild(W),f.appendChild(L),f.appendChild(b),f.appendChild(R),f.appendChild($),f.appendChild(U),f.appendChild(H),f.appendChild(F),f.appendChild(Y);const _=document.createElement("div");_.className="text-enhancer-button-group";const O=document.createElement("button");O.className="text-enhancer-button text-enhancer-button-secondary",O.textContent="Cancel",O.addEventListener("click",()=>o.remove());const S=document.createElement("button");S.className="text-enhancer-button text-enhancer-button-primary",S.textContent="Generate",S.addEventListener("click",()=>{const a=u.value.trim(),r=h.value.trim();if(!a){m("Please enter a custom prompt","error");return}if(!r){m("Please enter text to enhance","error");return}S.disabled=!0,S.textContent="Generating...",chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:r,context:"general",customPrompt:a},i=>{if(S.disabled=!1,S.textContent="Generate",i&&i.success){let d=!1;w&&P(w)&&(d=X(w,i.enhancedText)),d||q(i.enhancedText),o.remove()}else m(i&&i.error?`Error: ${i.error}`:"Failed to enhance text","error")})}),_.appendChild(O),_.appendChild(S),p.appendChild(_),y.appendChild(p),y.appendChild(N),y.appendChild(x),y.appendChild(f),o.appendChild(e),o.appendChild(v),o.appendChild(y),document.body.appendChild(o),u.focus()}function ae(){const t=document.createElement("div");t.className="text-enhancer-context-popup";const o=document.createElement("div");o.className="text-enhancer-popup-header";const e=document.createElement("h2");e.textContent="Context-Based Enhancement";const n=document.createElement("button");n.className="text-enhancer-close-btn",n.textContent="×",n.addEventListener("click",()=>t.remove()),o.appendChild(e),o.appendChild(n);const c=document.createElement("div");c.className="text-enhancer-content";const g=document.createElement("div");g.className="text-enhancer-section";const C=document.createElement("label");C.textContent="Provide Context:",C.htmlFor="text-enhancer-context-input";const v=document.createElement("textarea");v.id="text-enhancer-context-input",v.className="text-enhancer-textarea",v.placeholder='Describe what you want (e.g., "Write a professional email to schedule a meeting with a client")',v.rows=3,g.appendChild(C),g.appendChild(v);const A=document.createElement("div");A.className="text-enhancer-section";const y=document.createElement("label");y.textContent="Additional Information (optional):",y.htmlFor="text-enhancer-text-input";const p=document.createElement("textarea");p.id="text-enhancer-text-input",p.className="text-enhancer-textarea",p.placeholder="Add any details you want included (e.g., dates, names, specific points)",p.rows=3,A.appendChild(y),A.appendChild(p);const k=document.createElement("div");k.className="text-enhancer-options";const u=document.createElement("div");u.className="text-enhancer-option";const E=document.createElement("input");E.type="checkbox",E.id="text-enhancer-humanize",E.checked=!0;const h=document.createElement("label");h.htmlFor="text-enhancer-humanize",h.textContent="Make it sound natural and human-written",u.appendChild(E),u.appendChild(h);const w=document.createElement("div");w.className="text-enhancer-option";const T=document.createElement("input");T.type="checkbox",T.id="text-enhancer-emoji";const N=document.createElement("label");N.htmlFor="text-enhancer-emoji",N.textContent="Include appropriate emojis",w.appendChild(T),w.appendChild(N),k.appendChild(u),k.appendChild(w);const z=document.createElement("div");z.className="text-enhancer-buttons";const j=document.createElement("button");j.className="text-enhancer-button text-enhancer-cancel-btn",j.textContent="Cancel",j.addEventListener("click",()=>t.remove());const x=document.createElement("button");x.className="text-enhancer-button text-enhancer-generate-btn",x.textContent="Generate",x.addEventListener("click",()=>{const I=v.value.trim(),G=p.value.trim(),f=E.checked,B=T.checked;if(!I){m("Please provide context for what you want to generate","error");return}x.disabled=!0,x.textContent="Generating...";let L=`${I}`;G&&(L+=`

Additional information: ${G}`),f&&(L+=`

Make the response sound natural and human-written, with varied sentence structures and a conversational tone. Avoid repetitive phrases and overly formal language.`),chrome.runtime.sendMessage({action:"enhance-text-with-gemini",text:G||"Generate from context",context:"context-based",customPrompt:L,includeEmojis:B},b=>{if(x.disabled=!1,x.textContent="Generate",b&&b.success){let V=!1;s&&P(s)&&(V=X(s,b.enhancedText)),V||q(b.enhancedText),t.remove()}else m(b&&b.error?`Error: ${b.error}`:"Failed to generate text","error")})}),z.appendChild(j),z.appendChild(x),c.appendChild(g),c.appendChild(A),c.appendChild(k),c.appendChild(z),t.appendChild(o),t.appendChild(c),document.body.appendChild(t),v.focus(),ce()}function ce(){const t="text-enhancer-context-styles";if(document.getElementById(t))return;const o=document.createElement("style");o.id=t,o.textContent=`
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
  `,document.head.appendChild(o)}chrome.runtime.onMessage.addListener((t,o,e)=>(t.action==="enhance-text"?(te(),e({success:!0})):t.action==="show-custom-prompt"?(oe(),e({success:!0})):t.action==="show-context-enhancer"?(ae(),e({success:!0})):t.action==="ping"&&e({status:"content_script_ready"}),!0));console.log("Text-Enhancer (AI-powered) content script loaded");(function(){try{chrome.runtime.sendMessage({action:"content_script_ready"},function(t){chrome.runtime.lastError?console.log("Background script not ready yet:",chrome.runtime.lastError.message):console.log("Connection with background script established")})}catch(t){console.error("Error sending ready message:",t)}})();
})()