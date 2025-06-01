/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(T||(T={}));var w;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(w||(w={}));var N;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(N||(N={}));var v;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(v||(v={}));var A;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(A||(A={}));var M;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(M||(M={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class P extends g{constructor(t,n){super(t),this.response=n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="https://generativelanguage.googleapis.com",D="v1",F="0.2.1",U="genai-js";var l;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(l||(l={}));class m{constructor(t,n,s,i){this.model=t,this.task=n,this.apiKey=s,this.stream=i}toString(){let t=`${K}/${D}/${this.model}:${this.task}`;return this.stream&&(t+="?alt=sse"),t}}function $(){return`${U}/${F}`}async function p(e,t,n){let s;try{if(s=await fetch(e.toString(),Object.assign(Object.assign({},B(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":$(),"x-goog-api-key":e.apiKey},body:t})),!s.ok){let i="";try{const r=await s.json();i=r.error.message,r.error.details&&(i+=` ${JSON.stringify(r.error.details)}`)}catch{}throw new Error(`[${s.status} ${s.statusText}] ${i}`)}}catch(i){const r=new g(`Error fetching from ${e.toString()}: ${i.message}`);throw r.stack=i.stack,r}return s}function B(e){const t={};if((e==null?void 0:e.timeout)>=0){const n=new AbortController,s=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=s}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),x(e.candidates[0]))throw new P(`${y(e)}`,e);return Y(e)}else if(e.promptFeedback)throw new P(`Text not available. ${y(e)}`,e);return""},e}function Y(e){var t,n,s,i;return!((i=(s=(n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0?void 0:n.parts)===null||s===void 0?void 0:s[0])===null||i===void 0)&&i.text?e.candidates[0].content.parts[0].text:""}const j=[A.RECITATION,A.SAFETY];function x(e){return!!e.finishReason&&j.includes(e.finishReason)}function y(e){var t,n,s;let i="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)i+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(i+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((s=e.candidates)===null||s===void 0)&&s[0]){const r=e.candidates[0];x(r)&&(i+=`Candidate was blocked due to ${r.finishReason}`,r.finishMessage&&(i+=`: ${r.finishMessage}`))}return i}function E(e){return this instanceof E?(this.v=e,this):new E(e)}function q(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(e,t||[]),i,r=[];return i={},a("next"),a("throw"),a("return"),i[Symbol.asyncIterator]=function(){return this},i;function a(d){s[d]&&(i[d]=function(h){return new Promise(function(O,H){r.push([d,h,O,H])>1||o(d,h)})})}function o(d,h){try{c(s[d](h))}catch(O){_(r[0][3],O)}}function c(d){d.value instanceof E?Promise.resolve(d.value.v).then(u,I):_(r[0][2],d)}function u(d){o("next",d)}function I(d){o("throw",d)}function _(d,h){d(h),r.shift(),r.length&&o(r[0][0],r[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function J(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=z(t),[s,i]=n.tee();return{stream:W(s),response:V(i)}}async function V(e){const t=[],n=e.getReader();for(;;){const{done:s,value:i}=await n.read();if(s)return R(X(t));t.push(i)}}function W(e){return q(this,arguments,function*(){const n=e.getReader();for(;;){const{value:s,done:i}=yield E(n.read());if(i)break;yield yield E(R(s))}})}function z(e){const t=e.getReader();return new ReadableStream({start(s){let i="";return r();function r(){return t.read().then(({value:a,done:o})=>{if(o){if(i.trim()){s.error(new g("Failed to parse stream"));return}s.close();return}i+=a;let c=i.match(b),u;for(;c;){try{u=JSON.parse(c[1])}catch{s.error(new g(`Error parsing JSON response: "${c[1]}"`));return}s.enqueue(u),i=i.substring(c[0].length),c=i.match(b)}return r()})}}})}function X(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const s of e)if(s.candidates)for(const i of s.candidates){const r=i.index;if(n.candidates||(n.candidates=[]),n.candidates[r]||(n.candidates[r]={index:i.index}),n.candidates[r].citationMetadata=i.citationMetadata,n.candidates[r].finishReason=i.finishReason,n.candidates[r].finishMessage=i.finishMessage,n.candidates[r].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[r].content||(n.candidates[r].content={role:i.content.role||"user",parts:[{text:""}]});for(const a of i.content.parts)a.text&&(n.candidates[r].content.parts[0].text+=a.text)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L(e,t,n,s){const i=new m(t,l.STREAM_GENERATE_CONTENT,e,!0),r=await p(i,JSON.stringify(n),s);return J(r)}async function k(e,t,n,s){const i=new m(t,l.GENERATE_CONTENT,e,!1),a=await(await p(i,JSON.stringify(n),s)).json();return{response:R(a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,t){let n=[];if(typeof e=="string")n=[{text:e}];else for(const s of e)typeof s=="string"?n.push({text:s}):n.push(s);return{role:t,parts:n}}function C(e){return e.contents?e:{contents:[f(e,"user")]}}function Q(e){return typeof e=="string"||Array.isArray(e)?{content:f(e,"user")}:e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="SILENT_ERROR";class Z{constructor(t,n,s,i){this.model=n,this.params=s,this.requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,s!=null&&s.history&&(this._history=s.history.map(r=>{if(!r.role)throw new Error("Missing role for history item: "+JSON.stringify(r));return f(r.parts,r.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var n,s;await this._sendPromise;const i=f(t,"user"),r={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,i]};let a;return this._sendPromise=this._sendPromise.then(()=>k(this._apiKey,this.model,r,this.requestOptions)).then(o=>{var c;if(o.response.candidates&&o.response.candidates.length>0){this._history.push(i);const u=Object.assign({parts:[],role:"model"},(c=o.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(u)}else{const u=y(o.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}a=o}),await this._sendPromise,a}async sendMessageStream(t){var n,s;await this._sendPromise;const i=f(t,"user"),r={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,contents:[...this._history,i]},a=L(this._apiKey,this.model,r,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(o=>{throw new Error(G)}).then(o=>o.response).then(o=>{if(o.candidates&&o.candidates.length>0){this._history.push(i);const c=Object.assign({},o.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=y(o);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(o=>{o.message!==G&&console.error(o)}),a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n,s){const i=new m(t,l.COUNT_TOKENS,e,!1);return(await p(i,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),s)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(e,t,n,s){const i=new m(t,l.EMBED_CONTENT,e,!1);return(await p(i,JSON.stringify(n),s)).json()}async function ne(e,t,n,s){const i=new m(t,l.BATCH_EMBED_CONTENTS,e,!1),r=n.requests.map(o=>Object.assign(Object.assign({},o),{model:t}));return(await p(i,JSON.stringify({requests:r}),s)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,n,s){this.apiKey=t,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.requestOptions=s||{}}async generateContent(t){const n=C(t);return k(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}async generateContentStream(t){const n=C(t);return L(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}startChat(t){return new Z(this.apiKey,this.model,t,this.requestOptions)}async countTokens(t){const n=C(t);return ee(this.apiKey,this.model,n)}async embedContent(t){const n=Q(t);return te(this.apiKey,this.model,n)}async batchEmbedContents(t){return ne(this.apiKey,this.model,t,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new g("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new se(this.apiKey,t,n)}}let S=null;function re(e){try{return S=new ie(e),!0}catch(t){return console.error("Failed to initialize Gemini API:",t),!1}}function oe(e,t){const n=`Enhance the following text to make it more ${t==="general"?"clear, professional, and engaging":""}.`;let s="";switch(t){case"email":s="This is for an email. Make it professional, clear, and concise while maintaining a friendly tone.";break;case"social":s="This is for social media. Make it engaging, conversational, and attention-grabbing while keeping it authentic.";break;case"professional":s="This is for a professional context. Make it formal, well-structured, and precise while demonstrating expertise.";break;case"academic":s="This is for an academic context. Make it scholarly, well-reasoned, and properly structured with appropriate terminology.";break;case"romantic":s="This is for a romantic conversation. Make it warm, thoughtful, and emotionally engaging while keeping it authentic.";break;default:s="Improve the clarity, grammar, and overall quality while maintaining the original meaning and intent."}return`${n}

${s}

Original text:
"${e}"

Enhanced text (maintain similar length, don't add unnecessary information):`}async function ae(e,t,n="general"){try{if(!e||e.trim()==="")throw new Error("API key is missing or empty. Please add your Gemini API key in the extension settings.");if(!e.match(/^[A-Za-z0-9_-]+$/))throw new Error("Invalid API key format. Please check your API key in the extension settings.");if(!S&&!re(e))throw new Error("Failed to initialize Gemini API");const s=oe(t,n),i=S.getGenerativeModel({model:"gemini-2.0-flash"}),r={temperature:.7,topK:40,topP:.95,maxOutputTokens:1024};console.log("Sending request to Gemini API with prompt:",s);const a=new Promise((_,d)=>{setTimeout(()=>d(new Error("Request timed out after 30 seconds")),3e4)}),o=i.generateContent({contents:[{role:"user",parts:[{text:s}]}],generationConfig:r});return(await(await Promise.race([o,a])).response).text().trim()}catch(s){throw console.error("Error in enhanceTextWithGemini:",s),s.message.includes("Failed to fetch")?new Error("Network error: Could not connect to Gemini API. Please check your internet connection and ensure your API key has proper permissions."):s.message.includes("invalid API key")?new Error("Invalid API key: The API key provided is not valid. Please check your API key in the extension settings."):s}}chrome.commands.onCommand.addListener(e=>{e==="enhance-text"&&chrome.tabs.query({active:!0,currentWindow:!0},t=>{t[0]&&chrome.tabs.sendMessage(t[0].id,{action:"enhance-text"})})});chrome.runtime.onMessage.addListener((e,t,n)=>{if(e.action==="enhance-text-with-gemini")return chrome.storage.sync.get(["geminiApiKey"],async s=>{try{const i=s.geminiApiKey;if(!i)throw new Error("Gemini API key not found. Please set it in the extension popup.");const r=await ae(i,e.text,e.context);n({success:!0,enhancedText:r})}catch(i){console.error("Error enhancing text:",i),n({success:!1,error:i.message})}}),!0});
