import{S as ct,i as ut,s as lt,F as mu,k as K,l as G,m as B,h as A,n as M,b as ye,G as yu,H as vu,I as wu,g as L,d as z,L as Tt,y as Be,z as $e,A as qe,M as Mo,N as xo,B as je,O as xn,P as Lo,Q as Po,E as X,D as N,K as Fo,q as ue,r as le,u as Ae,a as pt,c as mt,C as mi,v as Qt,f as Wt,T as Tr,w as Pt,U as Ft,V as Vt,W as Eu,X as Tu,e as yi}from"../chunks/index.e0a09590.js";import{I as Vo}from"../chunks/IconBase.1330d312.js";/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */const Uo=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Iu=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Bo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,l=i>>2,d=(i&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(h=64)),s.push(n[l],n[d],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Uo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Iu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||d==null)throw new bu;const h=i<<2|a>>4;if(s.push(h),u!==64){const g=a<<4&240|u>>2;if(s.push(g),d!==64){const f=u<<6&192|d;s.push(f)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cu=function(t){const e=Uo(t);return Bo.encodeByteArray(e,!0)},Ln=function(t){return Cu(t).replace(/\./g,"")},Su=function(t){try{return Bo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function _u(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Au=()=>_u().__FIREBASE_DEFAULTS__,Du=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ku=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Su(t[1]);return e&&JSON.parse(e)},$o=()=>{try{return Au()||Du()||ku()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nu=t=>{var e,n;return(n=(e=$o())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ru=t=>{const e=Nu(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Ou=()=>{var t;return(t=$o())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Mu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function xu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Ln(JSON.stringify(n)),Ln(JSON.stringify(o)),a].join(".")}function Lu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qo(){try{return typeof indexedDB=="object"}catch{return!1}}function jo(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Pu(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const Fu="FirebaseError";class Ke extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Fu,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Vu(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Ke(r,a,s)}}function Vu(t,e){return t.replace(Uu,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Uu=/\{\$([^}]+)}/g;function Pn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(vi(i)&&vi(o)){if(!Pn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function vi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Bu=1e3,$u=2,qu=4*60*60*1e3,ju=.5;function wi(t,e=Bu,n=$u){const s=e*Math.pow(n,t),r=Math.round(ju*s*(Math.random()-.5)*2);return Math.min(qu,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Ir(t){return t&&t._delegate?t._delegate:t}class De{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Ku{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Mu;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zu(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qe){return this.instances.has(e)}getOptions(e=Qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gu(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qe){return this.component?this.component.multipleInstances?e:Qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gu(t){return t===Qe?void 0:t}function zu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Hu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ku(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var R;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(R||(R={}));const Qu={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},Wu=R.INFO,Yu={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Xu=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Yu[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class br{constructor(e){this.name=e,this._logLevel=Wu,this._logHandler=Xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const Ju=(t,e)=>e.some(n=>t instanceof n);let Ei,Ti;function Zu(){return Ei||(Ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function el(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ko=new WeakMap,Ks=new WeakMap,Go=new WeakMap,_s=new WeakMap,Cr=new WeakMap;function tl(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xe(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ko.set(n,t)}).catch(()=>{}),Cr.set(e,t),e}function nl(t){if(Ks.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ks.set(t,e)}let Gs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ks.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Go.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sl(t){Gs=t(Gs)}function rl(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(As(this),e,...n);return Go.set(s,e.sort?e.sort():[e]),xe(s)}:el().includes(t)?function(...e){return t.apply(As(this),e),xe(Ko.get(this))}:function(...e){return xe(t.apply(As(this),e))}}function il(t){return typeof t=="function"?rl(t):(t instanceof IDBTransaction&&nl(t),Ju(t,Zu())?new Proxy(t,Gs):t)}function xe(t){if(t instanceof IDBRequest)return tl(t);if(_s.has(t))return _s.get(t);const e=il(t);return e!==t&&(_s.set(t,e),Cr.set(e,t)),e}const As=t=>Cr.get(t);function zo(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=xe(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xe(o.result),c.oldVersion,c.newVersion,xe(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const ol=["get","getKey","getAll","getAllKeys","count"],al=["put","add","delete","clear"],Ds=new Map;function Ii(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ds.get(e))return Ds.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=al.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||ol.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return Ds.set(e,i),i}sl(t=>({...t,get:(e,n,s)=>Ii(e,n)||t.get(e,n,s),has:(e,n)=>!!Ii(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
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
 */class cl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ul(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ul(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zs="@firebase/app",bi="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const st=new br("@firebase/app"),ll="@firebase/app-compat",hl="@firebase/analytics-compat",dl="@firebase/analytics",fl="@firebase/app-check-compat",gl="@firebase/app-check",pl="@firebase/auth",ml="@firebase/auth-compat",yl="@firebase/database",vl="@firebase/database-compat",wl="@firebase/functions",El="@firebase/functions-compat",Tl="@firebase/installations",Il="@firebase/installations-compat",bl="@firebase/messaging",Cl="@firebase/messaging-compat",Sl="@firebase/performance",_l="@firebase/performance-compat",Al="@firebase/remote-config",Dl="@firebase/remote-config-compat",kl="@firebase/storage",Nl="@firebase/storage-compat",Rl="@firebase/firestore",Ol="@firebase/firestore-compat",Ml="firebase",xl="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Hs="[DEFAULT]",Ll={[zs]:"fire-core",[ll]:"fire-core-compat",[dl]:"fire-analytics",[hl]:"fire-analytics-compat",[gl]:"fire-app-check",[fl]:"fire-app-check-compat",[pl]:"fire-auth",[ml]:"fire-auth-compat",[yl]:"fire-rtdb",[vl]:"fire-rtdb-compat",[wl]:"fire-fn",[El]:"fire-fn-compat",[Tl]:"fire-iid",[Il]:"fire-iid-compat",[bl]:"fire-fcm",[Cl]:"fire-fcm-compat",[Sl]:"fire-perf",[_l]:"fire-perf-compat",[Al]:"fire-rc",[Dl]:"fire-rc-compat",[kl]:"fire-gcs",[Nl]:"fire-gcs-compat",[Rl]:"fire-fst",[Ol]:"fire-fst-compat","fire-js":"fire-js",[Ml]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Fn=new Map,Qs=new Map;function Pl(t,e){try{t.container.addComponent(e)}catch(n){st.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pe(t){const e=t.name;if(Qs.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;Qs.set(e,t);for(const n of Fn.values())Pl(n,t);return!0}function an(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Fl={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Le=new Jn("app","Firebase",Fl);/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Vl{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new De("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Le.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Ul=xl;function Ho(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hs,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Le.create("bad-app-name",{appName:String(r)});if(n||(n=Ou()),!n)throw Le.create("no-options");const i=Fn.get(r);if(i){if(Pn(n,i.options)&&Pn(s,i.config))return i;throw Le.create("duplicate-app",{appName:r})}const o=new Hu(r);for(const c of Qs.values())o.addComponent(c);const a=new Vl(n,s,o);return Fn.set(r,a),a}function Qo(t=Hs){const e=Fn.get(t);if(!e&&t===Hs)return Ho();if(!e)throw Le.create("no-app",{appName:t});return e}function Ie(t,e,n){var s;let r=(s=Ll[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(a.join(" "));return}Pe(new De(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Bl="firebase-heartbeat-database",$l=1,Yt="firebase-heartbeat-store";let ks=null;function Wo(){return ks||(ks=zo(Bl,$l,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Yt)}}}).catch(t=>{throw Le.create("idb-open",{originalErrorMessage:t.message})})),ks}async function ql(t){try{return(await Wo()).transaction(Yt).objectStore(Yt).get(Yo(t))}catch(e){if(e instanceof Ke)st.warn(e.message);else{const n=Le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(n.message)}}}async function Ci(t,e){try{const s=(await Wo()).transaction(Yt,"readwrite");return await s.objectStore(Yt).put(e,Yo(t)),s.done}catch(n){if(n instanceof Ke)st.warn(n.message);else{const s=Le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});st.warn(s.message)}}}function Yo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const jl=1024,Kl=30*24*60*60*1e3;class Gl{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Si();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Kl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Si(),{heartbeatsToSend:n,unsentEntries:s}=zl(this._heartbeatsCache.heartbeats),r=Ln(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Si(){return new Date().toISOString().substring(0,10)}function zl(t,e=jl){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),_i(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),_i(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Hl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qo()?jo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ql(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Ci(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _i(t){return Ln(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Ql(t){Pe(new De("platform-logger",e=>new cl(e),"PRIVATE")),Pe(new De("heartbeat",e=>new Gl(e),"PRIVATE")),Ie(zs,bi,t),Ie(zs,bi,"esm2017"),Ie("fire-js","")}Ql("");var Wl="firebase",Yl="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
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
 */Ie(Wl,Yl,"app");const Xo="@firebase/installations",Sr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Jo=1e4,Zo=`w:${Sr}`,ea="FIS_v2",Xl="https://firebaseinstallations.googleapis.com/v1",Jl=60*60*1e3,Zl="installations",eh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const th={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},rt=new Jn(Zl,eh,th);function ta(t){return t instanceof Ke&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function na({projectId:t}){return`${Xl}/projects/${t}/installations`}function sa(t){return{token:t.token,requestStatus:2,expiresIn:sh(t.expiresIn),creationTime:Date.now()}}async function ra(t,e){const s=(await e.json()).error;return rt.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function ia({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function nh(t,{refreshToken:e}){const n=ia(t);return n.append("Authorization",rh(e)),n}async function oa(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sh(t){return Number(t.replace("s","000"))}function rh(t){return`${ea} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function ih({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=na(t),r=ia(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={fid:n,authVersion:ea,appId:t.appId,sdkVersion:Zo},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await oa(()=>fetch(s,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:sa(u.authToken)}}else throw await ra("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function aa(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function oh(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ah=/^[cdef][\w-]{21}$/,Ws="";function ch(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uh(t);return ah.test(n)?n:Ws}catch{return Ws}}function uh(t){return oh(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Zn(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const ca=new Map;function ua(t,e){const n=Zn(t);la(n,e),lh(n,e)}function la(t,e){const n=ca.get(t);if(n)for(const s of n)s(e)}function lh(t,e){const n=hh();n&&n.postMessage({key:t,fid:e}),dh()}let We=null;function hh(){return!We&&"BroadcastChannel"in self&&(We=new BroadcastChannel("[Firebase] FID Change"),We.onmessage=t=>{la(t.data.key,t.data.fid)}),We}function dh(){ca.size===0&&We&&(We.close(),We=null)}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const fh="firebase-installations-database",gh=1,it="firebase-installations-store";let Ns=null;function _r(){return Ns||(Ns=zo(fh,gh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(it)}}})),Ns}async function Vn(t,e){const n=Zn(t),r=(await _r()).transaction(it,"readwrite"),i=r.objectStore(it),o=await i.get(n);return await i.put(e,n),await r.done,(!o||o.fid!==e.fid)&&ua(t,e.fid),e}async function ha(t){const e=Zn(t),s=(await _r()).transaction(it,"readwrite");await s.objectStore(it).delete(e),await s.done}async function es(t,e){const n=Zn(t),r=(await _r()).transaction(it,"readwrite"),i=r.objectStore(it),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await r.done,a&&(!o||o.fid!==a.fid)&&ua(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Ar(t){let e;const n=await es(t.appConfig,s=>{const r=ph(s),i=mh(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Ws?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ph(t){const e=t||{fid:ch(),registrationStatus:0};return da(e)}function mh(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(rt.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=yh(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vh(t)}:{installationEntry:e}}async function yh(t,e){try{const n=await ih(t,e);return Vn(t.appConfig,n)}catch(n){throw ta(n)&&n.customData.serverCode===409?await ha(t.appConfig):await Vn(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vh(t){let e=await Ai(t.appConfig);for(;e.registrationStatus===1;)await aa(100),e=await Ai(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Ar(t);return s||n}return e}function Ai(t){return es(t,e=>{if(!e)throw rt.create("installation-not-found");return da(e)})}function da(t){return wh(t)?{fid:t.fid,registrationStatus:0}:t}function wh(t){return t.registrationStatus===1&&t.registrationTime+Jo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Eh({appConfig:t,heartbeatServiceProvider:e},n){const s=Th(t,n),r=nh(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const o={installation:{sdkVersion:Zo,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},c=await oa(()=>fetch(s,a));if(c.ok){const u=await c.json();return sa(u)}else throw await ra("Generate Auth Token",c)}function Th(t,{fid:e}){return`${na(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Dr(t,e=!1){let n;const s=await es(t.appConfig,i=>{if(!fa(i))throw rt.create("not-registered");const o=i.authToken;if(!e&&Ch(o))return i;if(o.requestStatus===1)return n=Ih(t,e),i;{if(!navigator.onLine)throw rt.create("app-offline");const a=_h(i);return n=bh(t,a),a}});return n?await n:s.authToken}async function Ih(t,e){let n=await Di(t.appConfig);for(;n.authToken.requestStatus===1;)await aa(100),n=await Di(t.appConfig);const s=n.authToken;return s.requestStatus===0?Dr(t,e):s}function Di(t){return es(t,e=>{if(!fa(e))throw rt.create("not-registered");const n=e.authToken;return Ah(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bh(t,e){try{const n=await Eh(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Vn(t.appConfig,s),n}catch(n){if(ta(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ha(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vn(t.appConfig,s)}throw n}}function fa(t){return t!==void 0&&t.registrationStatus===2}function Ch(t){return t.requestStatus===2&&!Sh(t)}function Sh(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Jl}function _h(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ah(t){return t.requestStatus===1&&t.requestTime+Jo<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function Dh(t){const e=t,{installationEntry:n,registrationPromise:s}=await Ar(e);return s?s.catch(console.error):Dr(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
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
 */async function kh(t,e=!1){const n=t;return await Nh(n),(await Dr(n,e)).token}async function Nh(t){const{registrationPromise:e}=await Ar(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */function Rh(t){if(!t||!t.options)throw Rs("App Configuration");if(!t.name)throw Rs("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Rs(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Rs(t){return rt.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const ga="installations",Oh="installations-internal",Mh=t=>{const e=t.getProvider("app").getImmediate(),n=Rh(e),s=an(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},xh=t=>{const e=t.getProvider("app").getImmediate(),n=an(e,ga).getImmediate();return{getId:()=>Dh(n),getToken:r=>kh(n,r)}};function Lh(){Pe(new De(ga,Mh,"PUBLIC")),Pe(new De(Oh,xh,"PRIVATE"))}Lh();Ie(Xo,Sr);Ie(Xo,Sr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Un="analytics",Ph="firebase_id",Fh="origin",Vh=60*1e3,Uh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",pa="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
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
 */const pe=new br("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
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
 */function ma(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Bh(t,e){const n=document.createElement("script");n.src=`${pa}?l=${t}&id=${e}`,n.async=!0,document.head.appendChild(n)}function $h(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function qh(t,e,n,s,r,i){const o=s[r];try{if(o)await e[o];else{const c=(await ma(n)).find(u=>u.measurementId===r);c&&await e[c.appId]}}catch(a){pe.error(a)}t("config",r,i)}async function jh(t,e,n,s,r){try{let i=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await ma(n);for(const c of o){const u=a.find(d=>d.measurementId===c),l=u&&e[u.appId];if(l)i.push(l);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",s,r||{})}catch(i){pe.error(i)}}function Kh(t,e,n,s){async function r(i,o,a){try{i==="event"?await jh(t,e,n,o,a):i==="config"?await qh(t,e,n,s,o,a):i==="consent"?t("consent","update",a):t("set",o)}catch(c){pe.error(c)}}return r}function Gh(t,e,n,s,r){let i=function(...o){window[s].push(arguments)};return window[r]&&typeof window[r]=="function"&&(i=window[r]),window[r]=Kh(i,t,e,n),{gtagCore:i,wrappedGtag:window[r]}}function zh(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(pa)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2019 Google LLC
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
 */const Hh={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},we=new Jn("analytics","Analytics",Hh);/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Qh=30,Wh=1e3;class Yh{constructor(e={},n=Wh){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ya=new Yh;function Xh(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Jh(t){var e;const{appId:n,apiKey:s}=t,r={method:"GET",headers:Xh(s)},i=Uh.replace("{app-id}",n),o=await fetch(i,r);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw we.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Zh(t,e=ya,n){const{appId:s,apiKey:r,measurementId:i}=t.options;if(!s)throw we.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:s};throw we.create("no-api-key")}const o=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new nd;return setTimeout(async()=>{a.abort()},n!==void 0?n:Vh),va({appId:s,apiKey:r,measurementId:i},o,a,e)}async function va(t,{throttleEndTimeMillis:e,backoffCount:n},s,r=ya){var i;const{appId:o,measurementId:a}=t;try{await ed(s,e)}catch(c){if(a)return pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Jh(t);return r.deleteThrottleMetadata(o),c}catch(c){const u=c;if(!td(u)){if(r.deleteThrottleMetadata(o),a)return pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw c}const l=Number((i=u==null?void 0:u.customData)===null||i===void 0?void 0:i.httpStatus)===503?wi(n,r.intervalMillis,Qh):wi(n,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(o,d),pe.debug(`Calling attemptFetch again in ${l} millis`),va(t,d,s,r)}}function ed(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(we.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function td(t){if(!(t instanceof Ke)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class nd{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function sd(t,e,n,s,r){if(r&&r.global){t("event",n,s);return}else{const i=await e,o=Object.assign(Object.assign({},s),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */async function rd(){if(qo())try{await jo()}catch(t){return pe.warn(we.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pe.warn(we.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function id(t,e,n,s,r,i,o){var a;const c=Zh(t);c.then(g=>{n[g.measurementId]=g.appId,t.options.measurementId&&g.measurementId!==t.options.measurementId&&pe.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>pe.error(g)),e.push(c);const u=rd().then(g=>{if(g)return s.getId()}),[l,d]=await Promise.all([c,u]);zh(i)||Bh(i,l.measurementId),r("js",new Date);const h=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return h[Fh]="firebase",h.update=!0,d!=null&&(h[Ph]=d),r("config",l.measurementId,h),l.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class od{constructor(e){this.app=e}_delete(){return delete qt[this.app.options.appId],Promise.resolve()}}let qt={},ki=[];const Ni={};let Os="dataLayer",ad="gtag",Ri,wa,Oi=!1;function cd(){const t=[];if(Lu()&&t.push("This is a browser extension environment."),Pu()||t.push("Cookies are not available."),t.length>0){const e=t.map((s,r)=>`(${r+1}) ${s}`).join(" "),n=we.create("invalid-analytics-context",{errorInfo:e});pe.warn(n.message)}}function ud(t,e,n){cd();const s=t.options.appId;if(!s)throw we.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw we.create("no-api-key");if(qt[s]!=null)throw we.create("already-exists",{id:s});if(!Oi){$h(Os);const{wrappedGtag:i,gtagCore:o}=Gh(qt,ki,Ni,Os,ad);wa=i,Ri=o,Oi=!0}return qt[s]=id(t,ki,Ni,e,Ri,Os,n),new od(t)}function ld(t=Qo()){t=Ir(t);const e=an(t,Un);return e.isInitialized()?e.getImmediate():hd(t)}function hd(t,e={}){const n=an(t,Un);if(n.isInitialized()){const r=n.getImmediate();if(Pn(e,n.getOptions()))return r;throw we.create("already-initialized")}return n.initialize({options:e})}function dd(t,e,n,s){t=Ir(t),sd(wa,qt[t.app.options.appId],e,n,s).catch(r=>pe.error(r))}const Mi="@firebase/analytics",xi="0.9.4";function fd(){Pe(new De(Un,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return ud(s,r,n)},"PUBLIC")),Pe(new De("analytics-internal",t,"PRIVATE")),Ie(Mi,xi),Ie(Mi,xi,"esm2017");function t(e){try{const n=e.getProvider(Un).getImmediate();return{logEvent:(s,r,i)=>dd(n,s,r,i)}}catch(n){throw we.create("interop-component-reg-failed",{reason:n})}}}fd();var gd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},w,kr=kr||{},b=gd||self;function Bn(){}function ts(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function cn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pd(t){return Object.prototype.hasOwnProperty.call(t,Ms)&&t[Ms]||(t[Ms]=++md)}var Ms="closure_uid_"+(1e9*Math.random()>>>0),md=0;function yd(t,e,n){return t.call.apply(t.bind,arguments)}function vd(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function oe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?oe=yd:oe=vd,oe.apply(null,arguments)}function Cn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function ne(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function Ge(){this.s=this.s,this.o=this.o}var wd=0;Ge.prototype.s=!1;Ge.prototype.na=function(){!this.s&&(this.s=!0,this.M(),wd!=0)&&pd(this)};Ge.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ea=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Nr(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Li(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ts(s)){const r=t.length||0,i=s.length||0;t.length=r+i;for(let o=0;o<i;o++)t[r+o]=s[o]}else t.push(s)}}function ae(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var Ed=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",Bn,e),b.removeEventListener("test",Bn,e)}catch{}return t}();function $n(t){return/^[\s\xa0]*$/.test(t)}var Pi=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function xs(t,e){return t<e?-1:t>e?1:0}function ns(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function Ee(t){return ns().indexOf(t)!=-1}function Rr(t){return Rr[" "](t),t}Rr[" "]=Bn;function Td(t){var e=Cd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Id=Ee("Opera"),It=Ee("Trident")||Ee("MSIE"),Ta=Ee("Edge"),Ys=Ta||It,Ia=Ee("Gecko")&&!(ns().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge"))&&!(Ee("Trident")||Ee("MSIE"))&&!Ee("Edge"),bd=ns().toLowerCase().indexOf("webkit")!=-1&&!Ee("Edge");function ba(){var t=b.document;return t?t.documentMode:void 0}var qn;e:{var Ls="",Ps=function(){var t=ns();if(Ia)return/rv:([^\);]+)(\)|;)/.exec(t);if(Ta)return/Edge\/([\d\.]+)/.exec(t);if(It)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(bd)return/WebKit\/(\S+)/.exec(t);if(Id)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ps&&(Ls=Ps?Ps[1]:""),It){var Fs=ba();if(Fs!=null&&Fs>parseFloat(Ls)){qn=String(Fs);break e}}qn=Ls}var Cd={};function Sd(){return Td(function(){let t=0;const e=Pi(String(qn)).split("."),n=Pi("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;t=xs(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||xs(r[2].length==0,i[2].length==0)||xs(r[2],i[2]),r=r[3],i=i[3]}while(t==0)}return 0<=t})}var Xs;if(b.document&&It){var Fi=ba();Xs=Fi||parseInt(qn,10)||void 0}else Xs=void 0;var _d=Xs;function Xt(t,e){if(ae.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ia){e:{try{Rr(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ad[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xt.X.h.call(this)}}ne(Xt,ae);var Ad={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),Dd=0;function kd(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++Dd,this.ba=this.ea=!1}function ss(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Or(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Ca(t){const e={};for(const n in t)e[n]=t[n];return e}const Vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(t,e){let n,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(n in s)t[n]=s[n];for(let i=0;i<Vi.length;i++)n=Vi[i],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function rs(t){this.src=t,this.g={},this.h=0}rs.prototype.add=function(t,e,n,s,r){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Zs(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new kd(e,this.src,i,!!s,r),e.ea=n,t.push(e)),e};function Js(t,e){var n=e.type;if(n in t.g){var s=t.g[n],r=Ea(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ss(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Zs(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),Vs={};function _a(t,e,n,s,r){if(s&&s.once)return Da(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)_a(t,e[i],n,s,r);return null}return n=Pr(n),t&&t[un]?t.N(e,n,cn(s)?!!s.capture:!!s,r):Aa(t,e,n,!1,s,r)}function Aa(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=cn(r)?!!r.capture:!!r,a=Lr(t);if(a||(t[Mr]=a=new rs(t)),n=a.add(e,n,s,o,i),n.proxy)return n;if(s=Nd(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)Ed||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Na(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Nd(){function t(n){return e.call(t.src,t.listener,n)}const e=Rd;return t}function Da(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Da(t,e[i],n,s,r);return null}return n=Pr(n),t&&t[un]?t.O(e,n,cn(s)?!!s.capture:!!s,r):Aa(t,e,n,!0,s,r)}function ka(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)ka(t,e[i],n,s,r);else s=cn(s)?!!s.capture:!!s,n=Pr(n),t&&t[un]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Zs(i,n,s,r),-1<n&&(ss(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Lr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Zs(e,n,s,r)),(n=-1<t?e[t]:null)&&xr(n))}function xr(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[un])Js(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Na(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Lr(e))?(Js(n,t),n.h==0&&(n.src=null,e[Mr]=null)):ss(t)}}}function Na(t){return t in Vs?Vs[t]:Vs[t]="on"+t}function Rd(t,e){if(t.ba)t=!0;else{e=new Xt(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&xr(t),t=n.call(s,e)}return t}function Lr(t){return t=t[Mr],t instanceof rs?t:null}var Us="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pr(t){return typeof t=="function"?t:(t[Us]||(t[Us]=function(e){return t.handleEvent(e)}),t[Us])}function J(){Ge.call(this),this.i=new rs(this),this.P=this,this.I=null}ne(J,Ge);J.prototype[un]=!0;J.prototype.removeEventListener=function(t,e,n,s){ka(this,t,e,n,s)};function ee(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new ae(e,t);else if(e instanceof ae)e.target=e.target||t;else{var r=e;e=new ae(s,t),Sa(e,r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Sn(o,s,!0,e)&&r}if(o=e.g=t,r=Sn(o,s,!0,e)&&r,r=Sn(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)o=e.g=n[i],r=Sn(o,s,!1,e)&&r}J.prototype.M=function(){if(J.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)ss(n[s]);delete t.g[e],t.h--}}this.I=null};J.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};J.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Sn(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Js(t.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var Fr=b.JSON.stringify;function Od(){var t=Ma;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Md{constructor(){this.h=this.g=null}add(e,n){const s=Ra.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Ra=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new xd,t=>t.reset());class xd{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ld(t){b.setTimeout(()=>{throw t},0)}function Oa(t,e){er||Pd(),tr||(er(),tr=!0),Ma.add(t,e)}var er;function Pd(){var t=b.Promise.resolve(void 0);er=function(){t.then(Fd)}}var tr=!1,Ma=new Md;function Fd(){for(var t;t=Od();){try{t.h.call(t.g)}catch(n){Ld(n)}var e=Ra;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}tr=!1}function is(t,e){J.call(this),this.h=t||1,this.g=e||b,this.j=oe(this.lb,this),this.l=Date.now()}ne(is,J);w=is.prototype;w.ca=!1;w.R=null;w.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ee(this,"tick"),this.ca&&(Vr(this),this.start()))}};w.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Vr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}w.M=function(){is.X.M.call(this),Vr(this),delete this.g};function Ur(t,e,n){if(typeof t=="function")n&&(t=oe(t,n));else if(t&&typeof t.handleEvent=="function")t=oe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function xa(t){t.g=Ur(()=>{t.g=null,t.i&&(t.i=!1,xa(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Vd extends Ge{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:xa(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){Ge.call(this),this.h=t,this.g={}}ne(Jt,Ge);var Ui=[];function La(t,e,n,s){Array.isArray(n)||(n&&(Ui[0]=n.toString()),n=Ui);for(var r=0;r<n.length;r++){var i=_a(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Pa(t){Or(t.g,function(e,n){this.g.hasOwnProperty(n)&&xr(e)},t),t.g={}}Jt.prototype.M=function(){Jt.X.M.call(this),Pa(this)};Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function os(){this.g=!0}os.prototype.Aa=function(){this.g=!1};function Ud(t,e,n,s,r,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var d=l.split("_");o=2<=d.length&&d[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Bd(t,e,n,s,r,i,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+n+`
`+i+" "+o})}function gt(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qd(t,n)+(s?" "+s:"")})}function $d(t,e){t.info(function(){return"TIMEOUT: "+e})}os.prototype.info=function(){};function qd(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Fr(n)}catch{return e}}var ht={},Bi=null;function as(){return Bi=Bi||new J}ht.Pa="serverreachability";function Fa(t){ae.call(this,ht.Pa,t)}ne(Fa,ae);function Zt(t){const e=as();ee(e,new Fa(e))}ht.STAT_EVENT="statevent";function Va(t,e){ae.call(this,ht.STAT_EVENT,t),this.stat=e}ne(Va,ae);function he(t){const e=as();ee(e,new Va(e,t))}ht.Qa="timingevent";function Ua(t,e){ae.call(this,ht.Qa,t),this.size=e}ne(Ua,ae);function ln(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var cs={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ba={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Br(){}Br.prototype.h=null;function $i(t){return t.h||(t.h=t.i())}function $a(){}var hn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function $r(){ae.call(this,"d")}ne($r,ae);function qr(){ae.call(this,"c")}ne(qr,ae);var nr;function us(){}ne(us,Br);us.prototype.g=function(){return new XMLHttpRequest};us.prototype.i=function(){return{}};nr=new us;function dn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Jt(this),this.O=jd,t=Ys?125:void 0,this.T=new is(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new qa}function qa(){this.i=null,this.g="",this.h=!1}var jd=45e3,sr={},jn={};w=dn.prototype;w.setTimeout=function(t){this.O=t};function rr(t,e,n){t.K=1,t.v=hs(ke(e)),t.s=n,t.P=!0,ja(t,null)}function ja(t,e){t.F=Date.now(),fn(t),t.A=ke(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Xa(n.i,"t",s),t.C=0,n=t.l.H,t.h=new qa,t.g=vc(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Vd(oe(t.La,t,t.g),t.N)),La(t.S,t.g,"readystatechange",t.ib),e=t.H?Ca(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zt(),Ud(t.j,t.u,t.A,t.m,t.U,t.s)}w.ib=function(t){t=t.target;const e=this.L;e&&_e(t)==3?e.l():this.La(t)};w.La=function(t){try{if(t==this.g)e:{const l=_e(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(l!=3||Ys||this.g&&(this.h.h||this.g.fa()||Gi(this.g)))){this.I||l!=4||e==7||(e==8||0>=d?Zt(3):Zt(2)),ls(this);var n=this.g.aa();this.Y=n;t:if(Ka(this)){var s=Gi(this.g);t="";var r=s.length,i=_e(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ye(this),jt(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Bd(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$n(a)){var u=a;break t}}u=null}if(n=u)gt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ir(this,n);else{this.i=!1,this.o=3,he(12),Ye(this),jt(this);break e}}this.P?(Ga(this,l,o),Ys&&this.i&&l==3&&(La(this.S,this.T,"tick",this.hb),this.T.start())):(gt(this.j,this.m,o,null),ir(this,o)),l==4&&Ye(this),this.i&&!this.I&&(l==4?gc(this.l,this):(this.i=!1,fn(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,he(12)):(this.o=0,he(13)),Ye(this),jt(this)}}}catch{}finally{}};function Ka(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ga(t,e,n){let s=!0,r;for(;!t.I&&t.C<n.length;)if(r=Kd(t,n),r==jn){e==4&&(t.o=4,he(14),s=!1),gt(t.j,t.m,null,"[Incomplete Response]");break}else if(r==sr){t.o=4,he(15),gt(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gt(t.j,t.m,r,null),ir(t,r);Ka(t)&&r!=jn&&r!=sr&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,he(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wr(e),e.K=!0,he(11))):(gt(t.j,t.m,n,"[Invalid Chunked Response]"),Ye(t),jt(t))}w.hb=function(){if(this.g){var t=_e(this.g),e=this.g.fa();this.C<e.length&&(ls(this),Ga(this,t,e),this.i&&t!=4&&fn(this))}};function Kd(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?jn:(n=Number(e.substring(n,s)),isNaN(n)?sr:(s+=1,s+n>e.length?jn:(e=e.substr(s,n),t.C=s+n,e)))}w.cancel=function(){this.I=!0,Ye(this)};function fn(t){t.V=Date.now()+t.O,za(t,t.O)}function za(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ln(oe(t.gb,t),e)}function ls(t){t.B&&(b.clearTimeout(t.B),t.B=null)}w.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?($d(this.j,this.A),this.K!=2&&(Zt(),he(17)),Ye(this),this.o=2,jt(this)):za(this,this.V-t)};function jt(t){t.l.G==0||t.I||gc(t.l,t)}function Ye(t){ls(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Vr(t.T),Pa(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function ir(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||or(n.h,t))){if(!t.J&&or(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)zn(n),gs(n);else break e;Qr(n),he(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ln(oe(n.cb,n),6e3));if(1>=ec(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xe(n,11)}else if((t.J||n.g==t)&&zn(n),!$n(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const l=u[3];l!=null&&(n.ma=l,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const f=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(f){var i=s.h;i.g||f.indexOf("spdy")==-1&&f.indexOf("quic")==-1&&f.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(jr(i,i.h),i.h=null))}if(s.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(s.za=v,x(s.F,s.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=yc(s,s.H?s.ka:null,s.V),o.J){tc(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ls(a),fn(a)),s.g=o}else dc(s);0<n.i.length&&ps(n)}else u[0]!="stop"&&u[0]!="close"||Xe(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xe(n,7):Hr(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Zt(4)}catch{}}function Gd(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ts(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function zd(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ts(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Ha(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ts(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zd(t),s=Gd(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}var Qa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hd(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ze(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ze){this.h=e!==void 0?e:t.h,Kn(this,t.j),this.s=t.s,this.g=t.g,Gn(this,t.m),this.l=t.l,e=t.i;var n=new en;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qi(this,n),this.o=t.o}else t&&(n=String(t).match(Qa))?(this.h=!!e,Kn(this,n[1]||"",!0),this.s=Ut(n[2]||""),this.g=Ut(n[3]||"",!0),Gn(this,n[4]),this.l=Ut(n[5]||"",!0),qi(this,n[6]||"",!0),this.o=Ut(n[7]||"")):(this.h=!!e,this.i=new en(null,this.h))}Ze.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bt(e,ji,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Bt(e,ji,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Bt(n,n.charAt(0)=="/"?Yd:Wd,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bt(n,Jd)),t.join("")};function ke(t){return new Ze(t)}function Kn(t,e,n){t.j=n?Ut(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qi(t,e,n){e instanceof en?(t.i=e,Zd(t.i,t.h)):(n||(e=Bt(e,Xd)),t.i=new en(e,t.h))}function x(t,e,n){t.i.set(e,n)}function hs(t){return x(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ut(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Qd),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qd(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ji=/[#\/\?@]/g,Wd=/[#\?:]/g,Yd=/[#\?]/g,Xd=/[#\?@]/g,Jd=/#/g;function en(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ze(t){t.g||(t.g=new Map,t.h=0,t.i&&Hd(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}w=en.prototype;w.add=function(t,e){ze(this),this.i=null,t=kt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Wa(t,e){ze(t),e=kt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ya(t,e){return ze(t),e=kt(t,e),t.g.has(e)}w.forEach=function(t,e){ze(this),this.g.forEach(function(n,s){n.forEach(function(r){t.call(e,r,s,this)},this)},this)};w.oa=function(){ze(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let i=0;i<r.length;i++)n.push(e[s])}return n};w.W=function(t){ze(this);let e=[];if(typeof t=="string")Ya(this,t)&&(e=e.concat(this.g.get(kt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};w.set=function(t,e){return ze(this),this.i=null,t=kt(this,t),Ya(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};w.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Xa(t,e,n){Wa(t,e),0<n.length&&(t.i=null,t.g.set(kt(t,e),Nr(n)),t.h+=n.length)}w.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function kt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Zd(t,e){e&&!t.j&&(ze(t),t.i=null,t.g.forEach(function(n,s){var r=s.toLowerCase();s!=r&&(Wa(this,s),Xa(this,r,n))},t)),t.j=e}var ef=class{constructor(e,n){this.h=e,this.g=n}};function Ja(t){this.l=t||tf,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var tf=10;function Za(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ec(t){return t.h?1:t.g?t.g.size:0}function or(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function jr(t,e){t.g?t.g.add(e):t.h=e}function tc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ja.prototype.cancel=function(){if(this.i=nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function nc(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Nr(t.i)}function Kr(){}Kr.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};Kr.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function nf(){this.g=new Kr}function sf(t,e,n){const s=n||"";try{Ha(t,function(r,i){let o=r;cn(r)&&(o=Fr(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function rf(t,e){const n=new os;if(b.Image){const s=new Image;s.onload=Cn(_n,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Cn(_n,n,s,"TestLoadImage: error",!1,e),s.onabort=Cn(_n,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Cn(_n,n,s,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function _n(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gn(t){this.l=t.ac||null,this.j=t.jb||!1}ne(gn,Br);gn.prototype.g=function(){return new ds(this.l,this.j)};gn.prototype.i=function(t){return function(){return t}}({});function ds(t,e){J.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Gr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ne(ds,J);var Gr=0;w=ds.prototype;w.open=function(t,e){if(this.readyState!=Gr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,tn(this)};w.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};w.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=Gr};w.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sc(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function sc(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}w.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?pn(this):tn(this),this.readyState==3&&sc(this)}};w.Va=function(t){this.g&&(this.response=this.responseText=t,pn(this))};w.Ua=function(t){this.g&&(this.response=t,pn(this))};w.ga=function(){this.g&&pn(this)};function pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,tn(t)}w.setRequestHeader=function(t,e){this.v.append(t,e)};w.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};w.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function tn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var of=b.JSON.parse;function U(t){J.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rc,this.K=this.L=!1}ne(U,J);var rc="",af=/^https?$/i,cf=["POST","PUT"];w=U.prototype;w.Ka=function(t){this.L=t};w.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():nr.g(),this.C=this.u?$i(this.u):$i(nr),this.g.onreadystatechange=oe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){Ki(this,i);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())n.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=b.FormData&&t instanceof b.FormData,!(0<=Ea(cf,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ac(this),0<this.B&&((this.K=uf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=oe(this.qa,this)):this.A=Ur(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Ki(this,i)}};function uf(t){return It&&Sd()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}w.qa=function(){typeof kr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ee(this,"timeout"),this.abort(8))};function Ki(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ic(t),fs(t)}function ic(t){t.D||(t.D=!0,ee(t,"complete"),ee(t,"error"))}w.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ee(this,"complete"),ee(this,"abort"),fs(this))};w.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fs(this,!0)),U.X.M.call(this)};w.Ha=function(){this.s||(this.F||this.v||this.l?oc(this):this.fb())};w.fb=function(){oc(this)};function oc(t){if(t.h&&typeof kr<"u"&&(!t.C[1]||_e(t)!=4||t.aa()!=2)){if(t.v&&_e(t)==4)Ur(t.Ha,0,t);else if(ee(t,"readystatechange"),_e(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var r=String(t.H).match(Qa)[1]||null;if(!r&&b.self&&b.self.location){var i=b.self.location.protocol;r=i.substr(0,i.length-1)}s=!af.test(r?r.toLowerCase():"")}n=s}if(n)ee(t,"complete"),ee(t,"success");else{t.m=6;try{var o=2<_e(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",ic(t)}}finally{fs(t)}}}}function fs(t,e){if(t.g){ac(t);const n=t.g,s=t.C[0]?Bn:null;t.g=null,t.C=null,e||ee(t,"ready");try{n.onreadystatechange=s}catch{}}}function ac(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function _e(t){return t.g?t.g.readyState:0}w.aa=function(){try{return 2<_e(this)?this.g.status:-1}catch{return-1}};w.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};w.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),of(e)}};function Gi(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case rc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}w.Ea=function(){return this.m};w.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function cc(t){let e="";return Or(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function zr(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=cc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):x(t,e,n))}function Lt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function uc(t){this.Ca=0,this.i=[],this.j=new os,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Lt("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Lt("baseRetryDelayMs",5e3,t),this.bb=Lt("retryDelaySeedMs",1e4,t),this.$a=Lt("forwardChannelMaxRetries",2,t),this.ta=Lt("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ja(t&&t.concurrentRequestLimit),this.Fa=new nf,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}w=uc.prototype;w.ma=8;w.G=1;function Hr(t){if(lc(t),t.G==3){var e=t.U++,n=ke(t.F);x(n,"SID",t.I),x(n,"RID",e),x(n,"TYPE","terminate"),mn(t,n),e=new dn(t,t.j,e,void 0),e.K=2,e.v=hs(ke(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=vc(e.l,null),e.g.da(e.v)),e.F=Date.now(),fn(e)}mc(t)}function gs(t){t.g&&(Wr(t),t.g.cancel(),t.g=null)}function lc(t){gs(t),t.u&&(b.clearTimeout(t.u),t.u=null),zn(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function ps(t){Za(t.h)||t.m||(t.m=!0,Oa(t.Ja,t),t.C=0)}function lf(t,e){return ec(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ln(oe(t.Ja,t,e),pc(t,t.C)),t.C++,!0)}w.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new dn(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Ca(i),Sa(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=hc(this,r,e),n=ke(this.F),x(n,"RID",t),x(n,"CVER",22),this.D&&x(n,"X-HTTP-Session-Id",this.D),mn(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(cc(i)))+"&"+e:this.o&&zr(n,this.o,i)),jr(this.h,r),this.Ya&&x(n,"TYPE","init"),this.O?(x(n,"$req",e),x(n,"SID","null"),r.Z=!0,rr(r,n,null)):rr(r,n,e),this.G=2}}else this.G==3&&(t?zi(this,t):this.i.length==0||Za(this.h)||zi(this))};function zi(t,e){var n;e?n=e.m:n=t.U++;const s=ke(t.F);x(s,"SID",t.I),x(s,"RID",n),x(s,"AID",t.T),mn(t,s),t.o&&t.s&&zr(s,t.o,t.s),n=new dn(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=hc(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),jr(t.h,n),rr(n,s,e)}function mn(t,e){t.ia&&Or(t.ia,function(n,s){x(e,s,n)}),t.l&&Ha({},function(n,s){x(e,s,n)})}function hc(t,e,n){n=Math.min(t.i.length,n);var s=t.l?oe(t.l.Ra,t.l,t):null;e:{var r=t.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{sf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function dc(t){t.g||t.u||(t.Z=1,Oa(t.Ia,t),t.A=0)}function Qr(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ln(oe(t.Ia,t),pc(t,t.A)),t.A++,!0)}w.Ia=function(){if(this.u=null,fc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ln(oe(this.eb,this),t)}};w.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,he(10),gs(this),fc(this))};function Wr(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function fc(t){t.g=new dn(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ke(t.sa);x(e,"RID","rpc"),x(e,"SID",t.I),x(e,"CI",t.L?"0":"1"),x(e,"AID",t.T),x(e,"TYPE","xmlhttp"),mn(t,e),t.o&&t.s&&zr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=hs(ke(e)),n.s=null,n.P=!0,ja(n,t)}w.cb=function(){this.v!=null&&(this.v=null,gs(this),Qr(this),he(19))};function zn(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function gc(t,e){var n=null;if(t.g==e){zn(t),Wr(t),t.g=null;var s=2}else if(or(t.h,e))n=e.D,tc(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;s=as(),ee(s,new Ua(s,n)),ps(t)}else dc(t);else if(r=e.o,r==3||r==0&&0<t.pa||!(s==1&&lf(t,e)||s==2&&Qr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:Xe(t,5);break;case 4:Xe(t,10);break;case 3:Xe(t,6);break;default:Xe(t,2)}}}function pc(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xe(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=oe(t.kb,t);n||(n=new Ze("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Kn(n,"https"),hs(n)),rf(n.toString(),s)}else he(2);t.G=0,t.l&&t.l.va(e),mc(t),lc(t)}w.kb=function(t){t?(this.j.info("Successfully pinged google.com"),he(2)):(this.j.info("Failed to ping google.com"),he(1))};function mc(t){if(t.G=0,t.la=[],t.l){const e=nc(t.h);(e.length!=0||t.i.length!=0)&&(Li(t.la,e),Li(t.la,t.i),t.h.i.length=0,Nr(t.i),t.i.length=0),t.l.ua()}}function yc(t,e,n){var s=n instanceof Ze?ke(n):new Ze(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Gn(s,s.m);else{var r=b.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Ze(null,void 0);s&&Kn(i,s),e&&(i.g=e),r&&Gn(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&x(s,n,e),x(s,"VER",t.ma),mn(t,s),s}function vc(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new U(new gn({jb:!0})):new U(t.ra),e.Ka(t.H),e}function wc(){}w=wc.prototype;w.xa=function(){};w.wa=function(){};w.va=function(){};w.ua=function(){};w.Ra=function(){};function Hn(){if(It&&!(10<=Number(_d)))throw Error("Environmental error: no available transport.")}Hn.prototype.g=function(t,e){return new me(t,e)};function me(t,e){J.call(this),this.g=new uc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!$n(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!$n(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Nt(this)}ne(me,J);me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;he(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=yc(t,null,t.V),ps(t)};me.prototype.close=function(){Hr(this.g)};me.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fr(t),t=n);e.i.push(new ef(e.ab++,t)),e.G==3&&ps(e)};me.prototype.M=function(){this.g.l=null,delete this.j,Hr(this.g),delete this.g,me.X.M.call(this)};function Ec(t){$r.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ne(Ec,$r);function Tc(){qr.call(this),this.status=1}ne(Tc,qr);function Nt(t){this.g=t}ne(Nt,wc);Nt.prototype.xa=function(){ee(this.g,"a")};Nt.prototype.wa=function(t){ee(this.g,new Ec(t))};Nt.prototype.va=function(t){ee(this.g,new Tc)};Nt.prototype.ua=function(){ee(this.g,"b")};Hn.prototype.createWebChannel=Hn.prototype.g;me.prototype.send=me.prototype.u;me.prototype.open=me.prototype.m;me.prototype.close=me.prototype.close;cs.NO_ERROR=0;cs.TIMEOUT=8;cs.HTTP_ERROR=6;Ba.COMPLETE="complete";$a.EventType=hn;hn.OPEN="a";hn.CLOSE="b";hn.ERROR="c";hn.MESSAGE="d";J.prototype.listen=J.prototype.N;U.prototype.listenOnce=U.prototype.O;U.prototype.getLastError=U.prototype.Oa;U.prototype.getLastErrorCode=U.prototype.Ea;U.prototype.getStatus=U.prototype.aa;U.prototype.getResponseJson=U.prototype.Sa;U.prototype.getResponseText=U.prototype.fa;U.prototype.send=U.prototype.da;U.prototype.setWithCredentials=U.prototype.Ka;var hf=function(){return new Hn},df=function(){return as()},Bs=cs,ff=Ba,gf=ht,Hi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},pf=gn,An=$a,mf=U;const Qi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
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
 */let Rt="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
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
 */const ot=new br("@firebase/firestore");function Wi(){return ot.logLevel}function E(t,...e){if(ot.logLevel<=R.DEBUG){const n=e.map(Yr);ot.debug(`Firestore (${Rt}): ${t}`,...n)}}function Ne(t,...e){if(ot.logLevel<=R.ERROR){const n=e.map(Yr);ot.error(`Firestore (${Rt}): ${t}`,...n)}}function ar(t,...e){if(ot.logLevel<=R.WARN){const n=e.map(Yr);ot.warn(`Firestore (${Rt}): ${t}`,...n)}}function Yr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
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
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function S(t="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+t;throw Ne(e),new Error(e)}function H(t,e){t||S()}function k(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Ke{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class et{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ic{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(re.UNAUTHENTICATED))}shutdown(){}}class vf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wf{constructor(e){this.t=e,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new et;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new et,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{E("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(E("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new et)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(E("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(H(typeof s.accessToken=="string"),new Ic(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return H(e===null||typeof e=="string"),new re(e)}}class Ef{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r,this.type="FirstParty",this.user=re.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(H(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Tf{constructor(e,n,s,r){this.h=e,this.l=n,this.m=s,this.g=r}getToken(){return Promise.resolve(new Ef(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class If{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=i=>{i.error!=null&&E("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,E("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{E("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):E("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(H(typeof n.token=="string"),this.A=n.token,new If(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Cf(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Sf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Cf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function O(t,e){return t<e?-1:t>e?1:0}function bt(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new I(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new I(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new fe(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?O(this.nanoseconds,e.nanoseconds):O(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class C{constructor(e){this.timestamp=e}static fromTimestamp(e){return new C(e)}static min(){return new C(new fe(0,0))}static max(){return new C(new fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nn{constructor(e,n,s){n===void 0?n=0:n>e.length&&S(),s===void 0?s=e.length-n:s>e.length-n&&S(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class V extends nn{construct(e,n,s){return new V(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new I(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new V(n)}static emptyPath(){return new V([])}}const _f=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class de extends nn{construct(e,n,s){return new de(e,n,s)}static isValidIdentifier(e){return _f.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),de.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new de(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new I(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new I(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new I(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new I(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new de(n)}static emptyPath(){return new de([])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class T{constructor(e){this.path=e}static fromPath(e){return new T(V.fromString(e))}static fromName(e){return new T(V.fromString(e).popFirst(5))}static empty(){return new T(V.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&V.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return V.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new T(new V(e.slice()))}}function Af(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=C.fromTimestamp(s===1e9?new fe(n+1,0):new fe(n,s));return new Fe(r,T.empty(),e)}function Df(t){return new Fe(t.readTime,t.key,-1)}class Fe{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Fe(C.min(),T.empty(),-1)}static max(){return new Fe(C.max(),T.empty(),-1)}}function kf(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=T.comparator(t.documentKey,e.documentKey),n!==0?n:O(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Nf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function Xr(t){if(t.code!==m.FAILED_PRECONDITION||t.message!==Nf)throw t;E("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):p.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):p.reject(n)}static resolve(e){return new p((n,s)=>{n(e)})}static reject(e){return new p((n,s)=>{s(e)})}static waitFor(e){return new p((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=p.resolve(!1);for(const s of e)n=n.next(r=>r?p.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new p((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,n){return new p((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function yn(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Jr{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Jr.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Of{constructor(e,n,s,r,i,o,a,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class sn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function Yi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ms(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function ys(t){return t==null}function cr(t){return t===0&&1/t==-1/0}/**
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
 */class xf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class ce{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new xf("Invalid base64 string: "+r):r}}(e);return new ce(n)}static fromUint8Array(e){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ce(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return O(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ce.EMPTY_BYTE_STRING=new ce("");const Lf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ve(t){if(H(!!t),typeof t=="string"){let e=0;const n=Lf.exec(t);if(H(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:j(t.seconds),nanos:j(t.nanos)}}function j(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ct(t){return typeof t=="string"?ce.fromBase64String(t):ce.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function bc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cc(t){const e=t.mapValue.fields.__previous_value__;return bc(e)?Cc(e):e}function rn(t){const e=Ve(t.mapValue.fields.__local_write_time__.timestampValue);return new fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const Dn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function at(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?bc(t)?4:Pf(t)?9007199254740991:10:S()}function be(t,e){if(t===e)return!0;const n=at(t);if(n!==at(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rn(t).isEqual(rn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ve(s.timestampValue),o=Ve(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,r){return Ct(s.bytesValue).isEqual(Ct(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,r){return j(s.geoPointValue.latitude)===j(r.geoPointValue.latitude)&&j(s.geoPointValue.longitude)===j(r.geoPointValue.longitude)}(t,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return j(s.integerValue)===j(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=j(s.doubleValue),o=j(r.doubleValue);return i===o?cr(i)===cr(o):isNaN(i)&&isNaN(o)}return!1}(t,e);case 9:return bt(t.arrayValue.values||[],e.arrayValue.values||[],be);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Yi(i)!==Yi(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!be(i[a],o[a])))return!1;return!0}(t,e);default:return S()}}function on(t,e){return(t.values||[]).find(n=>be(n,e))!==void 0}function St(t,e){if(t===e)return 0;const n=at(t),s=at(e);if(n!==s)return O(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(t.booleanValue,e.booleanValue);case 2:return function(r,i){const o=j(r.integerValue||r.doubleValue),a=j(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Xi(t.timestampValue,e.timestampValue);case 4:return Xi(rn(t),rn(e));case 5:return O(t.stringValue,e.stringValue);case 6:return function(r,i){const o=Ct(r),a=Ct(i);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=O(o[c],a[c]);if(u!==0)return u}return O(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,i){const o=O(j(r.latitude),j(i.latitude));return o!==0?o:O(j(r.longitude),j(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=St(o[c],a[c]);if(u)return u}return O(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Dn.mapValue&&i===Dn.mapValue)return 0;if(r===Dn.mapValue)return 1;if(i===Dn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const d=O(a[l],u[l]);if(d!==0)return d;const h=St(o[a[l]],c[u[l]]);if(h!==0)return h}return O(a.length,u.length)}(t.mapValue,e.mapValue);default:throw S()}}function Xi(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return O(t,e);const n=Ve(t),s=Ve(e),r=O(n.seconds,s.seconds);return r!==0?r:O(n.nanos,s.nanos)}function _t(t){return ur(t)}function ur(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const r=Ve(s);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ct(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,T.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=ur(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${ur(s.fields[a])}`;return i+"}"}(t.mapValue):S();var e,n}function lr(t){return!!t&&"integerValue"in t}function Zr(t){return!!t&&"arrayValue"in t}function Ji(t){return!!t&&"nullValue"in t}function Zi(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $s(t){return!!t&&"mapValue"in t}function Kt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ms(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Kt(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Pf(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Qn{constructor(e,n){this.position=e,this.inclusive=n}}function eo(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=T.comparator(T.fromName(o.referenceValue),n.key):s=St(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function to(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!be(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Sc{}class Q extends Sc{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new Vf(e,n,s):n==="array-contains"?new $f(e,s):n==="in"?new qf(e,s):n==="not-in"?new jf(e,s):n==="array-contains-any"?new Kf(e,s):new Q(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new Uf(e,s):new Bf(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(St(n,this.value)):n!==null&&at(this.value)===at(n)&&this.matchesComparison(St(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ce extends Sc{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Ce(e,n)}matches(e){return _c(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function _c(t){return t.op==="and"}function Ac(t){return Ff(t)&&_c(t)}function Ff(t){for(const e of t.filters)if(e instanceof Ce)return!1;return!0}function hr(t){if(t instanceof Q)return t.field.canonicalString()+t.op.toString()+_t(t.value);if(Ac(t))return t.filters.map(e=>hr(e)).join(",");{const e=t.filters.map(n=>hr(n)).join(",");return`${t.op}(${e})`}}function Dc(t,e){return t instanceof Q?function(n,s){return s instanceof Q&&n.op===s.op&&n.field.isEqual(s.field)&&be(n.value,s.value)}(t,e):t instanceof Ce?function(n,s){return s instanceof Ce&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((r,i,o)=>r&&Dc(i,s.filters[o]),!0):!1}(t,e):void S()}function kc(t){return t instanceof Q?function(e){return`${e.field.canonicalString()} ${e.op} ${_t(e.value)}`}(t):t instanceof Ce?function(e){return e.op.toString()+" {"+e.getFilters().map(kc).join(" ,")+"}"}(t):"Filter"}class Vf extends Q{constructor(e,n,s){super(e,n,s),this.key=T.fromName(s.referenceValue)}matches(e){const n=T.comparator(e.key,this.key);return this.matchesComparison(n)}}class Uf extends Q{constructor(e,n){super(e,"in",n),this.keys=Nc("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bf extends Q{constructor(e,n){super(e,"not-in",n),this.keys=Nc("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nc(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>T.fromName(s.referenceValue))}class $f extends Q{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zr(n)&&on(n.arrayValue,this.value)}}class qf extends Q{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&on(this.value.arrayValue,n)}}class jf extends Q{constructor(e,n){super(e,"not-in",n)}matches(e){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!on(this.value.arrayValue,n)}}class Kf extends Q{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>on(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Gt{constructor(e,n="asc"){this.field=e,this.dir=n}}function Gf(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class te{constructor(e,n){this.comparator=e,this.root=n||Z.EMPTY}insert(e,n){return new te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Z.BLACK,null,null))}remove(e){return new te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Z.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kn(this.root,e,this.comparator,!1)}getReverseIterator(){return new kn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kn(this.root,e,this.comparator,!0)}}class kn{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Z{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Z.RED,this.left=r??Z.EMPTY,this.right=i??Z.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Z(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Z.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Z.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}Z.EMPTY=null,Z.RED=!0,Z.BLACK=!1;Z.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Z(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class W{constructor(e){this.comparator=e,this.data=new te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new no(this.data.getIterator())}getIteratorFrom(e){return new no(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof W)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new W(this.comparator);return n.data=e,n}}class no{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Me{constructor(e){this.fields=e,e.sort(de.comparator)}static empty(){return new Me([])}unionWith(e){let n=new W(de.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Me(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return bt(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!$s(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kt(n)}setAll(e){let n=de.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Kt(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());$s(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return be(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];$s(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){ms(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Te(Kt(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ie{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ie(e,0,C.min(),C.min(),C.min(),Te.empty(),0)}static newFoundDocument(e,n,s,r){return new ie(e,1,n,C.min(),s,r,0)}static newNoDocument(e,n){return new ie(e,2,n,C.min(),C.min(),Te.empty(),0)}static newUnknownDocument(e,n){return new ie(e,3,n,C.min(),C.min(),Te.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(C.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=C.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class zf{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function so(t,e=null,n=[],s=[],r=null,i=null,o=null){return new zf(t,e,n,s,r,i,o)}function ei(t){const e=k(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>hr(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ys(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_t(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_t(s)).join(",")),e._t=n}return e._t}function ti(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Gf(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Dc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!to(t.startAt,e.startAt)&&to(t.endAt,e.endAt)}function dr(t){return T.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class vs{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Hf(t,e,n,s,r,i,o,a){return new vs(t,e,n,s,r,i,o,a)}function Rc(t){return new vs(t)}function ro(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Qf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wf(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Yf(t){return t.collectionGroup!==null}function yt(t){const e=k(t);if(e.wt===null){e.wt=[];const n=Wf(e),s=Qf(e);if(n!==null&&s===null)n.isKeyField()||e.wt.push(new Gt(n)),e.wt.push(new Gt(de.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Gt(de.keyField(),i))}}}return e.wt}function Re(t){const e=k(t);if(!e.gt)if(e.limitType==="F")e.gt=so(e.path,e.collectionGroup,yt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const i of yt(e)){const o=i.dir==="desc"?"asc":"desc";n.push(new Gt(i.field,o))}const s=e.endAt?new Qn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qn(e.startAt.position,e.startAt.inclusive):null;e.gt=so(e.path,e.collectionGroup,n,e.filters,e.limit,s,r)}return e.gt}function fr(t,e,n){return new vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ws(t,e){return ti(Re(t),Re(e))&&t.limitType===e.limitType}function Oc(t){return`${ei(Re(t))}|lt:${t.limitType}`}function gr(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>kc(s)).join(", ")}]`),ys(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>_t(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>_t(s)).join(",")),`Target(${n})`}(Re(t))}; limitType=${t.limitType})`}function Es(t,e){return e.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):T.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(t,e)&&function(n,s){for(const r of yt(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=eo(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,yt(n),s)||n.endAt&&!function(r,i,o){const a=eo(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,yt(n),s))}(t,e)}function Xf(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Mc(t){return(e,n)=>{let s=!1;for(const r of yt(t)){const i=Jf(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jf(t,e,n){const s=t.field.isKeyField()?T.comparator(e.key,n.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?St(a,c):S()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Zf(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(e)?"-0":e}}function eg(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Ts{constructor(){this._=void 0}}function tg(t,e,n){return t instanceof pr?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,e):t instanceof Wn?xc(t,e):t instanceof Yn?Lc(t,e):function(s,r){const i=sg(s,r),o=io(i)+io(s.It);return lr(i)&&lr(s.It)?eg(o):Zf(s.Tt,o)}(t,e)}function ng(t,e,n){return t instanceof Wn?xc(t,e):t instanceof Yn?Lc(t,e):n}function sg(t,e){return t instanceof mr?lr(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class pr extends Ts{}class Wn extends Ts{constructor(e){super(),this.elements=e}}function xc(t,e){const n=Pc(e);for(const s of t.elements)n.some(r=>be(r,s))||n.push(s);return{arrayValue:{values:n}}}class Yn extends Ts{constructor(e){super(),this.elements=e}}function Lc(t,e){let n=Pc(e);for(const s of t.elements)n=n.filter(r=>!be(r,s));return{arrayValue:{values:n}}}class mr extends Ts{constructor(e,n){super(),this.Tt=e,this.It=n}}function io(t){return j(t.integerValue||t.doubleValue)}function Pc(t){return Zr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function rg(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Wn&&s instanceof Wn||n instanceof Yn&&s instanceof Yn?bt(n.elements,s.elements,be):n instanceof mr&&s instanceof mr?be(n.It,s.It):n instanceof pr&&s instanceof pr}(t.transform,e.transform)}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rn(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ni{}function Fc(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new og(t.key,tt.none()):new si(t.key,t.data,tt.none());{const n=t.data,s=Te.empty();let r=new W(de.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Is(t.key,s,new Me(r.toArray()),tt.none())}}function ig(t,e,n){t instanceof si?function(s,r,i){const o=s.value.clone(),a=ao(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Is?function(s,r,i){if(!Rn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=ao(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Vc(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function zt(t,e,n,s){return t instanceof si?function(r,i,o,a){if(!Rn(r.precondition,i))return o;const c=r.value.clone(),u=co(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof Is?function(r,i,o,a){if(!Rn(r.precondition,i))return o;const c=co(r.fieldTransforms,a,i),u=i.data;return u.setAll(Vc(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(t,e,n,s):function(r,i,o){return Rn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(t,e,n)}function oo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&bt(n,s,(r,i)=>rg(r,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class si extends ni{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Is extends ni{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vc(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ao(t,e,n){const s=new Map;H(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,ng(o,a,n[r]))}return s}function co(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,tg(i,o,e))}return s}class og extends ni{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ag{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */var q,_;function Uc(t){if(t===void 0)return Ne("GRPC error has no .code"),m.UNKNOWN;switch(t){case q.OK:return m.OK;case q.CANCELLED:return m.CANCELLED;case q.UNKNOWN:return m.UNKNOWN;case q.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case q.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case q.INTERNAL:return m.INTERNAL;case q.UNAVAILABLE:return m.UNAVAILABLE;case q.UNAUTHENTICATED:return m.UNAUTHENTICATED;case q.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case q.NOT_FOUND:return m.NOT_FOUND;case q.ALREADY_EXISTS:return m.ALREADY_EXISTS;case q.PERMISSION_DENIED:return m.PERMISSION_DENIED;case q.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case q.ABORTED:return m.ABORTED;case q.OUT_OF_RANGE:return m.OUT_OF_RANGE;case q.UNIMPLEMENTED:return m.UNIMPLEMENTED;case q.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(_=q||(q={}))[_.OK=0]="OK",_[_.CANCELLED=1]="CANCELLED",_[_.UNKNOWN=2]="UNKNOWN",_[_.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_[_.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_[_.NOT_FOUND=5]="NOT_FOUND",_[_.ALREADY_EXISTS=6]="ALREADY_EXISTS",_[_.PERMISSION_DENIED=7]="PERMISSION_DENIED",_[_.UNAUTHENTICATED=16]="UNAUTHENTICATED",_[_.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_[_.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_[_.ABORTED=10]="ABORTED",_[_.OUT_OF_RANGE=11]="OUT_OF_RANGE",_[_.UNIMPLEMENTED=12]="UNIMPLEMENTED",_[_.INTERNAL=13]="INTERNAL",_[_.UNAVAILABLE=14]="UNAVAILABLE",_[_.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Ot{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Mf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const cg=new te(T.comparator);function Ue(){return cg}const Bc=new te(T.comparator);function $t(...t){let e=Bc;for(const n of t)e=e.insert(n.key,n);return e}function ug(t){let e=Bc;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Je(){return Ht()}function $c(){return Ht()}function Ht(){return new Ot(t=>t.toString(),(t,e)=>t.isEqual(e))}const lg=new W(T.comparator);function D(...t){let e=lg;for(const n of t)e=e.add(n);return e}const hg=new W(O);function qc(){return hg}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class bs{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,vn.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new bs(C.min(),r,qc(),Ue(),D())}}class vn{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new vn(s,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class On{constructor(e,n,s,r){this.Et=e,this.removedTargetIds=n,this.key=s,this.At=r}}class jc{constructor(e,n){this.targetId=e,this.Rt=n}}class Kc{constructor(e,n,s=ce.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class uo{constructor(){this.bt=0,this.vt=ho(),this.Pt=ce.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=D(),n=D(),s=D();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:S()}}),new vn(this.Pt,this.Vt,e,n,s)}kt(){this.St=!1,this.vt=ho()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class dg{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Ue(),this.Kt=lo(),this.Gt=new W(O)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const s=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),s.xt(e.resumeToken));break;default:S()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((s,r)=>{this.Jt(r)&&n(r)})}Zt(e){const n=e.targetId,s=e.Rt.count,r=this.Xt(n);if(r){const i=r.target;if(dr(i))if(s===0){const o=new T(i.path);this.zt(n,o,ie.newNoDocument(o,C.min()))}else H(s===1);else this.te(n)!==s&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&dr(a.target)){const c=new T(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,ie.newNoDocument(c,e))}i.Ct&&(n.set(o,i.Nt()),i.kt())}});let s=D();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new bs(e,n,this.Gt,this.Ut,s);return this.Ut=Ue(),this.Kt=lo(),this.Gt=new W(O),r}jt(e,n){if(!this.Jt(e))return;const s=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,s),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,n)?r.Ot(n,1):r.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),s&&(this.Ut=this.Ut.insert(n,s))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new uo,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new W(O),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||E("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new uo),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function lo(){return new te(T.comparator)}function ho(){return new te(T.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */const fg=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gg=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),pg=(()=>({and:"AND",or:"OR"}))();class mg{constructor(e,n){this.databaseId=e,this.yt=n}}function yg(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vg(t,e){return t.yt?e.toBase64():e.toUint8Array()}function vt(t){return H(!!t),C.fromTimestamp(function(e){const n=Ve(e);return new fe(n.seconds,n.nanos)}(t))}function wg(t,e){return function(n){return new V(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Gc(t){const e=V.fromString(t);return H(Wc(e)),e}function qs(t,e){const n=Gc(e);if(n.get(1)!==t.databaseId.projectId)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new T(zc(n))}function yr(t,e){return wg(t.databaseId,e)}function Eg(t){const e=Gc(t);return e.length===4?V.emptyPath():zc(e)}function fo(t){return new V(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zc(t){return H(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Tg(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.yt?(H(u===void 0||typeof u=="string"),ce.fromBase64String(u||"")):(H(u===void 0||u instanceof Uint8Array),ce.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?m.UNKNOWN:Uc(c.code);return new I(u,c.message||"")}(o);n=new Kc(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=qs(t,s.document.name),i=vt(s.document.updateTime),o=s.document.createTime?vt(s.document.createTime):C.min(),a=new Te({mapValue:{fields:s.document.fields}}),c=ie.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];n=new On(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=qs(t,s.document),i=s.readTime?vt(s.readTime):C.min(),o=ie.newNoDocument(r,i),a=s.removedTargetIds||[];n=new On([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=qs(t,s.document),i=s.removedTargetIds||[];n=new On([],i,r,null)}else{if(!("filter"in e))return S();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ag(r),o=s.targetId;n=new jc(o,i)}}return n}function Ig(t,e){return{documents:[yr(t,e.path)]}}function bg(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=yr(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=yr(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Qc(Ce.create(c,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:dt(l.field),direction:_g(l.dir)}}(u))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||ys(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function Cg(t){let e=Eg(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){H(s===1);const l=n.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];n.where&&(i=function(l){const d=Hc(l);return d instanceof Ce&&Ac(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(l=>function(d){return new Gt(ft(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(l)));let a=null;n.limit&&(a=function(l){let d;return d=typeof l=="object"?l.value:l,ys(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(l){const d=!!l.before,h=l.values||[];return new Qn(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(l){const d=!l.before,h=l.values||[];return new Qn(h,d)}(n.endAt)),Hf(e,r,o,i,a,"F",c,u)}function Sg(t,e){const n=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return S()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hc(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ft(e.unaryFilter.field);return Q.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ft(e.unaryFilter.field);return Q.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ft(e.unaryFilter.field);return Q.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ft(e.unaryFilter.field);return Q.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(t):t.fieldFilter!==void 0?function(e){return Q.create(ft(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ce.create(e.compositeFilter.filters.map(n=>Hc(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(t):S()}function _g(t){return fg[t]}function Ag(t){return gg[t]}function Dg(t){return pg[t]}function dt(t){return{fieldPath:t.canonicalString()}}function ft(t){return de.fromServerFormat(t.fieldPath)}function Qc(t){return t instanceof Q?function(e){if(e.op==="=="){if(Zi(e.value))return{unaryFilter:{field:dt(e.field),op:"IS_NAN"}};if(Ji(e.value))return{unaryFilter:{field:dt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Zi(e.value))return{unaryFilter:{field:dt(e.field),op:"IS_NOT_NAN"}};if(Ji(e.value))return{unaryFilter:{field:dt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dt(e.field),op:Ag(e.op),value:e.value}}}(t):t instanceof Ce?function(e){const n=e.getFilters().map(s=>Qc(s));return n.length===1?n[0]:{compositeFilter:{op:Dg(e.op),filters:n}}}(t):S()}function Wc(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class kg{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&ig(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=zt(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=zt(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=$c();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=Fc(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(C.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),D())}isEqual(e){return this.batchId===e.batchId&&bt(this.mutations,e.mutations,(n,s)=>oo(n,s))&&bt(this.baseMutations,e.baseMutations,(n,s)=>oo(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ng{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class nt{constructor(e,n,s,r,i=C.min(),o=C.min(),a=ce.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new nt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Rg{constructor(e){this.oe=e}}function Og(t){const e=Cg({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fr(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class Mg{constructor(){this.Ze=new xg}addToCollectionParentIndex(e,n){return this.Ze.add(n),p.resolve()}getCollectionParents(e,n){return p.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return p.resolve()}deleteFieldIndex(e,n){return p.resolve()}getDocumentsMatchingTarget(e,n){return p.resolve(null)}getIndexType(e,n){return p.resolve(0)}getFieldIndexes(e,n){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,n){return p.resolve(Fe.min())}getMinOffsetFromCollectionGroup(e,n){return p.resolve(Fe.min())}updateCollectionGroup(e,n,s){return p.resolve()}updateIndexEntries(e,n){return p.resolve()}}class xg{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new W(V.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new W(V.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class At{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new At(0)}static Sn(){return new At(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lg{constructor(){this.changes=new Ot(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?p.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
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
 *//**
 * @license
 * Copyright 2022 Google LLC
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
 */class Pg{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Fg{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&zt(s.mutation,r,Me.empty(),fe.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,D()).next(()=>s))}getLocalViewOfDocuments(e,n,s=D()){const r=Je();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=$t();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Je();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,D()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=Ue();const o=Ht(),a=Ht();return n.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof Is)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),zt(l.mutation,u,l.mutation.getFieldMask(),fe.now())):o.set(u.key,Me.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var d;return a.set(u,new Pg(l,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Ht();let r=new te((o,a)=>o-a),i=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=s.get(c)||Me.empty();l=a.applyToLocalView(u,l),s.set(c,l);const d=(r.get(a.batchId)||D()).add(c);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,d=$c();l.forEach(h=>{if(!i.has(h)){const g=Fc(n.get(h),s.get(h));g!==null&&d.set(h,g),i=i.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(r){return T.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yf(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):p.resolve(Je());let a=-1,c=i;return o.next(u=>p.forEach(u,(l,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(h=>{c=c.insert(l,h)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,D())).next(l=>({batchId:a,changes:ug(l)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new T(n)).next(s=>{let r=$t();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const r=n.collectionGroup;let i=$t();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(u,l){return new vs(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,d)=>{i=i.insert(l,d)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ie.newInvalidDocument(u)))});let o=$t();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&zt(u.mutation,c,Me.empty(),fe.now()),Es(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Vg{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return p.resolve(this.es.get(n))}saveBundleMetadata(e,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:vt(s.createTime)}),p.resolve()}getNamedQuery(e,n){return p.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(s){return{name:s.name,query:Og(s.bundledQuery),readTime:vt(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
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
 */class Ug{constructor(){this.overlays=new te(T.comparator),this.ss=new Map}getOverlay(e,n){return p.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Je();return p.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ce(e,n,i)}),p.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),p.resolve()}getOverlaysForCollection(e,n,s){const r=Je(),i=n.length+1,o=new T(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new te((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Je(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Je(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return p.resolve(a)}ce(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Ng(n,s));let i=this.ss.get(n);i===void 0&&(i=D(),this.ss.set(n,i)),this.ss.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class ri{constructor(){this.rs=new W(Y.os),this.us=new W(Y.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const s=new Y(e,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.ls(new Y(e,n))}fs(e,n){e.forEach(s=>this.removeReference(s,n))}ds(e){const n=new T(new V([])),s=new Y(n,e),r=new Y(n,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new T(new V([])),s=new Y(n,e),r=new Y(n,e+1);let i=D();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Y(e,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Y{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return T.comparator(e.key,n.key)||O(e.gs,n.gs)}static cs(e,n){return O(e.gs,n.gs)||T.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Bg{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new W(Y.os)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kg(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new Y(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,n){return p.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Ts(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Y(n,0),r=new Y(n,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new W(O);return n.forEach(r=>{const i=new Y(r,0),o=new Y(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),p.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;T.isDocumentKey(i)||(i=i.child(""));const o=new Y(new T(i),0);let a=new W(O);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),p.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){H(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return p.forEach(n.mutations,r=>{const i=new Y(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,n){const s=new Y(n,0),r=this.ps.firstAfterOrEqual(s);return p.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class $g{constructor(e){this.Rs=e,this.docs=new te(T.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return p.resolve(s?s.document.mutableCopy():ie.newInvalidDocument(n))}getEntries(e,n){let s=Ue();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():ie.newInvalidDocument(r))}),p.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Ue();const o=n.path,a=new T(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||kf(Df(l),s)<=0||(r.has(l.key)||Es(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(e,n,s,r){S()}bs(e,n){return p.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new qg(this)}getSize(e){return p.resolve(this.size)}}class qg extends Lg{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),p.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class jg{constructor(e){this.persistence=e,this.vs=new Ot(n=>ei(n),ti),this.lastRemoteSnapshotVersion=C.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ri,this.targetCount=0,this.Ss=At.Vn()}forEachTarget(e,n){return this.vs.forEach((s,r)=>n(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),p.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new At(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,p.resolve()}updateTargetData(e,n){return this.xn(n),p.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,n){const s=this.vs.get(n)||null;return p.resolve(s)}addMatchingKeys(e,n,s){return this.Vs.hs(n,s),p.resolve()}removeMatchingKeys(e,n,s){this.Vs.fs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),p.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Vs.ws(n);return p.resolve(s)}containsKey(e,n){return p.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Kg{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Jr(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new jg(this),this.indexManager=new Mg,this.remoteDocumentCache=function(s){return new $g(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Rg(n),this.Os=new Vg(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Ug,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ds[e.toKey()];return s||(s=new Bg(n,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,s){E("MemoryPersistence","Starting transaction:",e);const r=new Gg(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,n){return p.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,n)))}}class Gg extends Rf{constructor(e){super(),this.currentSequenceNumber=e}}class ii{constructor(e){this.persistence=e,this.Bs=new ri,this.Ls=null}static qs(e){return new ii(e)}get Us(){if(this.Ls)return this.Ls;throw S()}addReference(e,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),p.resolve()}removeReference(e,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),p.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Us,s=>{const r=T.fromPath(s);return this.Ks(e,r).next(i=>{i||n.removeEntry(r,C.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return p.or([()=>p.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class oi{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Ci=s,this.xi=r}static Ni(e,n){let s=D(),r=D();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new oi(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class zg{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,s,r){return this.Mi(e,n).next(i=>i||this.Fi(e,n,r,s)).next(i=>i||this.$i(e,n))}Mi(e,n){if(ro(n))return p.resolve(null);let s=Re(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=fr(n,null,"F"),s=Re(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=D(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Bi(n,a);return this.Li(n,u,o,c.readTime)?this.Mi(e,fr(n,null,"F")):this.qi(e,u,n,c)}))})))}Fi(e,n,s,r){return ro(n)||r.isEqual(C.min())?this.$i(e,n):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(n,i);return this.Li(n,o,s,r)?this.$i(e,n):(Wi()<=R.DEBUG&&E("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),gr(n)),this.qi(e,o,n,Af(r,-1)))})}Bi(e,n){let s=new W(Mc(e));return n.forEach((r,i)=>{Es(e,i)&&(s=s.add(i))}),s}Li(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,n){return Wi()<=R.DEBUG&&E("QueryEngine","Using full collection scan to execute query:",gr(n)),this.Oi.getDocumentsMatchingQuery(e,n,Fe.min())}qi(e,n,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Hg{constructor(e,n,s,r){this.persistence=e,this.Ui=n,this.Tt=r,this.Ki=new te(O),this.Gi=new Ot(i=>ei(i),ti),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fg(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function Qg(t,e,n,s){return new Hg(t,e,n,s)}async function Yc(t,e){const n=k(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.zi(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=D();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Xc(t){const e=k(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function Wg(t,e){const n=k(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const a=[];e.targetChanges.forEach((l,d)=>{const h=r.get(d);if(!h)return;a.push(n.Ns.removeMatchingKeys(i,l.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(i,l.addedDocuments,d)));let g=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(d)?g=g.withResumeToken(ce.EMPTY_BYTE_STRING,C.min()).withLastLimboFreeSnapshotVersion(C.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(d,g),function(f,v,y){return f.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:y.addedDocuments.size+y.modifiedDocuments.size+y.removedDocuments.size>0}(h,g,l)&&a.push(n.Ns.updateTargetData(i,g))});let c=Ue(),u=D();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Yg(i,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(C.min())){const l=n.Ns.getLastRemoteSnapshotVersion(i).next(d=>n.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.Ki=r,i))}function Yg(t,e,n){let s=D(),r=D();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Ue();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(C.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):E("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function Xg(t,e){const n=k(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ns.getTargetData(s,e).next(i=>i?(r=i,p.resolve(r)):n.Ns.allocateTargetId(s).next(o=>(r=new nt(e,o,0,s.currentSequenceNumber),n.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(s.targetId,s),n.Gi.set(e,s.targetId)),s})}async function vr(t,e,n){const s=k(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!yn(o))throw o;E("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function go(t,e,n){const s=k(t);let r=C.min(),i=D();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=k(a),d=l.Gi.get(u);return d!==void 0?p.resolve(l.Ki.get(d)):l.Ns.getTargetData(c,u)}(s,o,Re(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,n?r:C.min(),n?i:D())).next(a=>(Jg(s,Xf(e),a),{documents:a,Yi:i})))}function Jg(t,e,n){let s=t.Qi.get(e)||C.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Qi.set(e,s)}class po{constructor(){this.activeTargetIds=qc()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zg{constructor(){this.Ur=new po,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,s){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new po,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class ep{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
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
 */class mo{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){E("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){E("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */const tp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
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
 */class np{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class sp extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,s,r,i){const o=this.fo(e,n);E("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(E("RestConnection","Received: ",c),c),c=>{throw ar("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,n,s,r,i,o){return this.lo(e,n,s,r,i)}_o(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,n){const s=tp[e];return`${this.co}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,s,r){return new Promise((i,o)=>{const a=new mf;a.setWithCredentials(!0),a.listenOnce(ff.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Bs.NO_ERROR:const u=a.getResponseJson();E("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Bs.TIMEOUT:E("Connection",'RPC "'+e+'" timed out'),o(new I(m.DEADLINE_EXCEEDED,"Request time out"));break;case Bs.HTTP_ERROR:const l=a.getStatus();if(E("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const h=d==null?void 0:d.error;if(h&&h.status&&h.message){const g=function(f){const v=f.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(v)>=0?v:m.UNKNOWN}(h.status);o(new I(g,h.message))}else o(new I(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new I(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{E("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(n,"POST",c,s,15)})}yo(e,n,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=hf(),o=df(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new pf({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=r.join("");E("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,d=!1;const h=new np({Yr:f=>{d?E("Connection","Not sending because WebChannel is closed:",f):(l||(E("Connection","Opening WebChannel transport."),u.open(),l=!0),E("Connection","WebChannel sending:",f),u.send(f))},Zr:()=>u.close()}),g=(f,v,y)=>{f.listen(v,F=>{try{y(F)}catch(se){setTimeout(()=>{throw se},0)}})};return g(u,An.EventType.OPEN,()=>{d||E("Connection","WebChannel transport opened.")}),g(u,An.EventType.CLOSE,()=>{d||(d=!0,E("Connection","WebChannel transport closed"),h.oo())}),g(u,An.EventType.ERROR,f=>{d||(d=!0,ar("Connection","WebChannel transport errored:",f),h.oo(new I(m.UNAVAILABLE,"The operation could not be completed")))}),g(u,An.EventType.MESSAGE,f=>{var v;if(!d){const y=f.data[0];H(!!y);const F=y,se=F.error||((v=F[0])===null||v===void 0?void 0:v.error);if(se){E("Connection","WebChannel received error:",se);const He=se.status;let Se=function(Tn){const P=q[Tn];if(P!==void 0)return Uc(P)}(He),ve=se.message;Se===void 0&&(Se=m.INTERNAL,ve="Unknown error status: "+He+" with message "+se.message),d=!0,h.oo(new I(Se,ve)),u.close()}else E("Connection","WebChannel received:",y),h.uo(y)}}),g(o,gf.STAT_EVENT,f=>{f.stat===Hi.PROXY?E("Connection","Detected buffering proxy"):f.stat===Hi.NOPROXY&&E("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.ro()},0),h}}function js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function Jc(t){return new mg(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Zc{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=n,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,n-s);r>0&&E("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class rp{constructor(e,n,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Zc(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Ne(n.toString()),Ne("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===n&&this.jo(s,r)},s=>{e(()=>{const r=new I(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,n){const s=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return E("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(E("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ip extends rp{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.Tt=i}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=Tg(this.Tt,e),s=function(r){if(!("targetChange"in r))return C.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?C.min():i.readTime?vt(i.readTime):C.min()}(e);return this.listener.Ho(n,s)}Jo(e){const n={};n.database=fo(this.Tt),n.addTarget=function(r,i){let o;const a=i.target;return o=dr(a)?{documents:Ig(r,a)}:{query:bg(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=vg(r,i.resumeToken):i.snapshotVersion.compareTo(C.min())>0&&(o.readTime=yg(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Sg(this.Tt,e);s&&(n.labels=s),this.qo(n)}Yo(e){const n={};n.database=fo(this.Tt),n.removeTarget=e,this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class op extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new I(m.UNKNOWN,r.toString())})}mo(e,n,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(m.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class ap{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Ne(n),this.cu=!1):E("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class cp{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{En(this)&&(E("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=k(a);c.mu.add(4),await wn(c),c.pu.set("Unknown"),c.mu.delete(4),await Cs(c)}(this))})}),this.pu=new ap(s,r)}}async function Cs(t){if(En(t))for(const e of t.gu)await e(!0)}async function wn(t){for(const e of t.gu)await e(!1)}function eu(t,e){const n=k(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),ui(n)?ci(n):Mt(n).Mo()&&ai(n,e))}function tu(t,e){const n=k(t),s=Mt(n);n.wu.delete(e),s.Mo()&&nu(n,e),n.wu.size===0&&(s.Mo()?s.Bo():En(n)&&n.pu.set("Unknown"))}function ai(t,e){t.Iu.Ft(e.targetId),Mt(t).Jo(e)}function nu(t,e){t.Iu.Ft(e),Mt(t).Yo(e)}function ci(t){t.Iu=new dg({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Mt(t).start(),t.pu.au()}function ui(t){return En(t)&&!Mt(t).Oo()&&t.wu.size>0}function En(t){return k(t).mu.size===0}function su(t){t.Iu=void 0}async function up(t){t.wu.forEach((e,n)=>{ai(t,e)})}async function lp(t,e){su(t),ui(t)?(t.pu.fu(e),ci(t)):t.pu.set("Unknown")}async function hp(t,e,n){if(t.pu.set("Online"),e instanceof Kc&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(t,e)}catch(s){E("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await yo(t,s)}else if(e instanceof On?t.Iu.Qt(e):e instanceof jc?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(C.min()))try{const s=await Xc(t.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(ce.EMPTY_BYTE_STRING,c.snapshotVersion)),nu(r,a);const u=new nt(c.target,a,1,c.sequenceNumber);ai(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){E("RemoteStore","Failed to raise snapshot:",s),await yo(t,s)}}async function yo(t,e,n){if(!yn(e))throw e;t.mu.add(1),await wn(t),t.pu.set("Offline"),n||(n=()=>Xc(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{E("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Cs(t)})}async function vo(t,e){const n=k(t);n.asyncQueue.verifyOperationInProgress(),E("RemoteStore","RemoteStore received new credentials");const s=En(n);n.mu.add(3),await wn(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Cs(n)}async function dp(t,e){const n=k(t);e?(n.mu.delete(2),await Cs(n)):e||(n.mu.add(2),await wn(n),n.pu.set("Unknown"))}function Mt(t){return t.Tu||(t.Tu=function(e,n,s){const r=k(e);return r.ru(),new ip(n,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(t.datastore,t.asyncQueue,{Xr:up.bind(null,t),no:lp.bind(null,t),Ho:hp.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),ui(t)?ci(t):t.pu.set("Unknown")):(await t.Tu.stop(),su(t))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class li{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new et,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new li(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(Ne("AsyncQueue",`${e}: ${t}`),yn(t))return new I(m.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wt{constructor(e){this.comparator=e?(n,s)=>e(n,s)||T.comparator(n.key,s.key):(n,s)=>T.comparator(n.key,s.key),this.keyedMap=$t(),this.sortedSet=new te(this.comparator)}static emptySet(e){return new wt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new wt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class wo{constructor(){this.Au=new te(T.comparator)}track(e){const n=e.doc.key,s=this.Au.get(n);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(n,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(n):e.type===1&&s.type===2?this.Au=this.Au.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):S():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,s)=>{e.push(s)}),e}}class Dt{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Dt(e,n,wt.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ws(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class fp{constructor(){this.bu=void 0,this.listeners=[]}}class gp{constructor(){this.queries=new Ot(e=>Oc(e),ws),this.onlineState="Unknown",this.vu=new Set}}async function pp(t,e){const n=k(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new fp),r)try{i.bu=await n.onListen(s)}catch(o){const a=ru(o,`Initialization of query '${gr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&hi(n)}async function mp(t,e){const n=k(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function yp(t,e){const n=k(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&hi(n)}function vp(t,e,n){const s=k(t),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(e)}function hi(t){t.vu.forEach(e=>{e.next()})}class wp{constructor(e,n,s){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Dt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=Dt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class iu{constructor(e){this.key=e}}class ou{constructor(e){this.key=e}}class Ep{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=D(),this.mutatedKeys=D(),this.ju=Mc(e),this.zu=new wt(this.ju)}get Wu(){return this.Ku}Hu(e,n){const s=n?n.Ju:new wo,r=n?n.zu:this.zu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,d)=>{const h=r.get(l),g=Es(this.query,d)?d:null,f=!!h&&this.mutatedKeys.has(h.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;h&&g?h.data.isEqual(g.data)?f!==v&&(s.track({type:3,doc:g}),y=!0):this.Yu(h,g)||(s.track({type:2,doc:g}),y=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!h&&g?(s.track({type:0,doc:g}),y=!0):h&&!g&&(s.track({type:1,doc:h}),y=!0,(c||u)&&(a=!0)),y&&(g?(o=o.add(g),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((u,l)=>function(d,h){const g=f=>{switch(f){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return g(d)-g(h)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new Dt(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new wo,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=D(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const n=[];return e.forEach(s=>{this.Qu.has(s)||n.push(new ou(s))}),this.Qu.forEach(s=>{e.has(s)||n.push(new iu(s))}),n}nc(e){this.Ku=e.Yi,this.Qu=D();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return Dt.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Tp{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class Ip{constructor(e){this.key=e,this.ic=!1}}class bp{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Ot(a=>Oc(a),ws),this.uc=new Map,this.cc=new Set,this.ac=new te(T.comparator),this.hc=new Map,this.lc=new ri,this.fc={},this.dc=new Map,this._c=At.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Cp(t,e){const n=Rp(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await Xg(n.localStore,Re(e));n.isPrimaryClient&&eu(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Sp(n,e,s,a==="current",o.resumeToken)}return r}async function Sp(t,e,n,s,r){t.mc=(d,h,g)=>async function(f,v,y,F){let se=v.view.Hu(y);se.Li&&(se=await go(f.localStore,v.query,!1).then(({documents:ve})=>v.view.Hu(ve,se)));const He=F&&F.targetChanges.get(v.targetId),Se=v.view.applyChanges(se,f.isPrimaryClient,He);return To(f,v.targetId,Se.tc),Se.snapshot}(t,d,h,g);const i=await go(t.localStore,e,!0),o=new Ep(e,i.Yi),a=o.Hu(i.documents),c=vn.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);To(t,n,u.tc);const l=new Tp(e,n,o);return t.oc.set(e,l),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function _p(t,e){const n=k(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter(i=>!ws(i,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),tu(n.remoteStore,s.targetId),wr(n,s.targetId)}).catch(Xr)):(wr(n,s.targetId),await vr(n.localStore,s.targetId,!0))}async function au(t,e){const n=k(t);try{const s=await Wg(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.hc.get(i);o&&(H(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?H(o.ic):r.removedDocuments.size>0&&(H(o.ic),o.ic=!1))}),await uu(n,s,e)}catch(s){await Xr(s)}}function Eo(t,e,n){const s=k(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=k(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const d of l.listeners)d.Pu(o)&&(c=!0)}),c&&hi(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Ap(t,e,n){const s=k(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new te(T.comparator);o=o.insert(i,ie.newNoDocument(i,C.min()));const a=D().add(i),c=new bs(C.min(),new Map,new W(O),o,a);await au(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),di(s)}else await vr(s.localStore,e,!1).then(()=>wr(s,e,n)).catch(Xr)}function wr(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(s=>{t.lc.containsKey(s)||cu(t,s)})}function cu(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(tu(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),di(t))}function To(t,e,n){for(const s of n)s instanceof iu?(t.lc.addReference(s.key,e),Dp(t,s)):s instanceof ou?(E("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||cu(t,s.key)):S()}function Dp(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(E("SyncEngine","New document in limbo: "+n),t.cc.add(s),di(t))}function di(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new T(V.fromString(e)),s=t._c.next();t.hc.set(s,new Ip(n)),t.ac=t.ac.insert(n,s),eu(t.remoteStore,new nt(Re(Rc(n.path)),s,2,Jr.at))}}async function uu(t,e,n){const s=k(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,n).then(u=>{if((u||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=oi.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=k(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,d=>p.forEach(d.Ci,h=>u.persistence.referenceDelegate.addReference(l,d.targetId,h)).next(()=>p.forEach(d.xi,h=>u.persistence.referenceDelegate.removeReference(l,d.targetId,h)))))}catch(l){if(!yn(l))throw l;E("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const d=l.targetId;if(!l.fromCache){const h=u.Ki.get(d),g=h.snapshotVersion,f=h.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(d,f)}}}(s.localStore,i))}async function kp(t,e){const n=k(t);if(!n.currentUser.isEqual(e)){E("SyncEngine","User change. New user:",e.toKey());const s=await Yc(n.localStore,e);n.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new I(m.CANCELLED,i))})}),r.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await uu(n,s.Wi)}}function Np(t,e){const n=k(t),s=n.hc.get(e);if(s&&s.ic)return D().add(s.key);{let r=D();const i=n.uc.get(e);if(!i)return r;for(const o of i){const a=n.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function Rp(t){const e=k(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=au.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Np.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ap.bind(null,e),e.rc.Ho=yp.bind(null,e.eventManager),e.rc.gc=vp.bind(null,e.eventManager),e}class Op{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Jc(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return Qg(this.persistence,new zg,e.initialUser,this.Tt)}Tc(e){return new Kg(ii.qs,this.Tt)}Ic(e){return new Zg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mp{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Eo(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=kp.bind(null,this.syncEngine),await dp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gp}createDatastore(e){const n=Jc(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new sp(r));var r;return function(i,o,a,c){return new op(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Eo(this.syncEngine,a,0),o=mo.C()?new mo:new ep,new cp(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(e,n){return function(s,r,i,o,a,c,u){const l=new bp(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=k(e);E("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await wn(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 *//**
 * @license
 * Copyright 2017 Google LLC
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
 */class xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):Ne("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Lp{constructor(e,n,s,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=re.UNAUTHENTICATED,this.clientId=Sf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{E("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(E("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new et;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ru(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Pp(t,e){t.asyncQueue.verifyOperationInProgress(),E("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Yc(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Fp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Vp(t);E("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(r=>vo(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>vo(e.remoteStore,i)),t.onlineComponents=e}async function Vp(t){return t.offlineComponents||(E("FirestoreClient","Using default OfflineComponentProvider"),await Pp(t,new Op)),t.offlineComponents}async function Up(t){return t.onlineComponents||(E("FirestoreClient","Using default OnlineComponentProvider"),await Fp(t,new Mp)),t.onlineComponents}async function Bp(t){const e=await Up(t),n=e.eventManager;return n.onListen=Cp.bind(null,e.syncEngine),n.onUnlisten=_p.bind(null,e.syncEngine),n}function $p(t,e,n={}){const s=new et;return t.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new xp({next:d=>{i.enqueueAndForget(()=>mp(r,l)),d.fromCache&&a.source==="server"?c.reject(new I(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),l=new wp(o,u,{includeMetadataChanges:!0,Ou:!0});return pp(r,l)}(await Bp(t),t.asyncQueue,e,n,s)),s.promise}const Io=new Map;/**
 * @license
 * Copyright 2017 Google LLC
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
 */function qp(t,e,n){if(!n)throw new I(m.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jp(t,e,n,s){if(e===!0&&s===!0)throw new I(m.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bo(t){if(T.isDocumentKey(t))throw new I(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":S()}function Er(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kp(t);throw new I(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Co{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new I(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new I(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,jp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fi{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Co({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new I(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Co(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new yf;switch(n.type){case"gapi":const s=n.client;return new Tf(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new I(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Io.get(e);n&&(E("ComponentProvider","Removing Datastore"),Io.delete(e),n.terminate())}(this),Promise.resolve()}}function Gp(t,e,n,s={}){var r;const i=(t=Er(t,fi))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ar("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=re.MOCK_USER;else{o=xu(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new I(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new re(c)}t._authCredentials=new vf(new Ic(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class xt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xt(this.firestore,e,this._key)}}class Ss{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ss(this.firestore,e,this._query)}}class Et extends Ss{constructor(e,n,s){super(e,n,Rc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xt(this.firestore,null,new T(e))}withConverter(e){return new Et(this.firestore,e,this._path)}}function zp(t,e,...n){if(t=Ir(t),qp("collection","path",e),t instanceof fi){const s=V.fromString(e,...n);return bo(s),new Et(t,null,s)}{if(!(t instanceof xt||t instanceof Et))throw new I(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(V.fromString(e,...n));return bo(s),new Et(t.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Hp{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Zc(this,"async_queue_retry"),this.Hc=()=>{const n=js();n&&E("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=js();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=js();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new et;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!yn(e))throw e;E("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw Ne("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(e,n,s){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const r=li.createAndSchedule(this,e,n,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&S()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class lu extends fi{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Hp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hu(this),this._firestoreClient.terminate()}}function Qp(t,e){const n=typeof t=="object"?t:Qo(),s=typeof t=="string"?t:e||"(default)",r=an(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Ru("firestore");i&&Gp(r,...i)}return r}function Wp(t){return t._firestoreClient||hu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hu(t){var e;const n=t._freezeSettings(),s=function(r,i,o,a){return new Of(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Lp(t._authCredentials,t._appCheckCredentials,t._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(ce.fromBase64String(e))}catch(n){throw new I(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class du{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new I(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new de(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
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
 */class Yp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new I(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new I(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return O(this._lat,e._lat)||O(this._long,e._long)}}const Xp=new RegExp("[~\\*/\\[\\]]");function Jp(t,e,n){if(e.search(Xp)>=0)throw So(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new du(...e.split("."))._internalPath}catch{throw So(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function So(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new I(m.INVALID_ARGUMENT,a+t+c)}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class fu{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gu("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zp extends fu{data(){return super.data()}}function gu(t,e){return typeof e=="string"?Jp(t,e):e instanceof du?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
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
 */function em(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new I(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tm{convertValue(e,n="none"){switch(at(e)){case 0:return null;case 1:return e.booleanValue;case 2:return j(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ct(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw S()}}convertObject(e,n){const s={};return ms(e.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(e){return new Yp(j(e.latitude),j(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Cc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(rn(e));default:return null}}convertTimestamp(e){const n=Ve(e);return new fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=V.fromString(e);H(Wc(s));const r=new sn(s.get(1),s.get(3)),i=new T(s.popFirst(5));return r.isEqual(n)||Ne(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
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
 */class Nn{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nm extends fu{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Mn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(gu("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Mn extends nm{data(e={}){return super.data(e)}}class sm{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Nn(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Mn(this._firestore,this._userDataWriter,s.key,s,new Nn(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new I(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Mn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Nn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Mn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Nn(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:rm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rm(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}class im extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xt(this.firestore,null,n)}}function om(t){t=Er(t,Ss);const e=Er(t.firestore,lu),n=Wp(e),s=new im(e);return em(t._query),$p(n,t._query).then(r=>new sm(e,s,t,r))}(function(t,e=!0){(function(n){Rt=n})(Ul),Pe(new De("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new lu(new wf(n.getProvider("auth-internal")),new bf(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new I(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Ie(Qi,"3.8.4",t),Ie(Qi,"3.8.4","esm2017")})();const am={apiKey:"AIzaSyDKA1b2-tgxprfN_YIHVpbfHz3Mxc4zwcc",authDomain:"fricapsule.firebaseapp.com",projectId:"fricapsule",storageBucket:"fricapsule.appspot.com",messagingSenderId:"247271689152",appId:"1:247271689152:web:25ef71545c190006ea5625",measurementId:"G-6H9EJ6KX9N"},pu=Ho(am);ld(pu);const cm=Qp(pu);function um(t){let e,n;const s=t[1].default,r=mu(s,t,t[0],null);return{c(){e=K("div"),r&&r.c(),this.h()},l(i){e=G(i,"DIV",{class:!0});var o=B(e);r&&r.l(o),o.forEach(A),this.h()},h(){M(e,"class","px-5 py-3 mx-3 xl:mx-0 bg-gradient-to-b from-white to-slate-50 rounded-md drop-shadow-lg")},m(i,o){ye(i,e,o),r&&r.m(e,null),n=!0},p(i,[o]){r&&r.p&&(!n||o&1)&&yu(r,s,i,i[0],n?wu(s,i[0],o,null):vu(i[0]),null)},i(i){n||(L(r,i),n=!0)},o(i){z(r,i),n=!1},d(i){i&&A(e),r&&r.d(i)}}}function lm(t,e,n){let{$$slots:s={},$$scope:r}=e;return t.$$set=i=>{"$$scope"in i&&n(0,r=i.$$scope)},[r,s]}class hm extends ct{constructor(e){super(),ut(this,e,lm,um,lt,{})}}function dm(t){let e;return{c(){e=Lo("path"),this.h()},l(n){e=Po(n,"path",{d:!0}),B(e).forEach(A),this.h()},h(){M(e,"d","M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z")},m(n,s){ye(n,e,s)},p:X,d(n){n&&A(e)}}}function fm(t){let e,n;const s=[{viewBox:"0 0 512 512"},t[0]];let r={$$slots:{default:[dm]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=Tt(r,s[i]);return e=new Vo({props:r}),{c(){Be(e.$$.fragment)},l(i){$e(e.$$.fragment,i)},m(i,o){qe(e,i,o),n=!0},p(i,[o]){const a=o&1?Mo(s,[s[0],xo(i[0])]):{};o&2&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(L(e.$$.fragment,i),n=!0)},o(i){z(e.$$.fragment,i),n=!1},d(i){je(e,i)}}}function gm(t,e,n){return t.$$set=s=>{n(0,e=Tt(Tt({},e),xn(s)))},e=xn(e),[e]}class pm extends ct{constructor(e){super(),ut(this,e,gm,fm,lt,{})}}function mm(t){let e;return{c(){e=Lo("path"),this.h()},l(n){e=Po(n,"path",{d:!0}),B(e).forEach(A),this.h()},h(){M(e,"d","M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z")},m(n,s){ye(n,e,s)},p:X,d(n){n&&A(e)}}}function ym(t){let e,n;const s=[{viewBox:"0 0 512 512"},t[0]];let r={$$slots:{default:[mm]},$$scope:{ctx:t}};for(let i=0;i<s.length;i+=1)r=Tt(r,s[i]);return e=new Vo({props:r}),{c(){Be(e.$$.fragment)},l(i){$e(e.$$.fragment,i)},m(i,o){qe(e,i,o),n=!0},p(i,[o]){const a=o&1?Mo(s,[s[0],xo(i[0])]):{};o&2&&(a.$$scope={dirty:o,ctx:i}),e.$set(a)},i(i){n||(L(e.$$.fragment,i),n=!0)},o(i){z(e.$$.fragment,i),n=!1},d(i){je(e,i)}}}function vm(t,e,n){return t.$$set=s=>{n(0,e=Tt(Tt({},e),xn(s)))},e=xn(e),[e]}class wm extends ct{constructor(e){super(),ut(this,e,vm,ym,lt,{})}}function Em(t){let e,n;return{c(){e=K("p"),n=ue(t[1]),this.h()},l(s){e=G(s,"P",{class:!0});var r=B(e);n=le(r,t[1]),r.forEach(A),this.h()},h(){M(e,"class","bg-slate-200 hover:bg-slate-300 hover:shadow-inner shadow-sm px-3 py-1 rounded-md")},m(s,r){ye(s,e,r),N(e,n)},p(s,r){r&2&&Ae(n,s[1])},d(s){s&&A(e)}}}function Tm(t){let e,n;return{c(){e=K("p"),n=ue(t[1]),this.h()},l(s){e=G(s,"P",{class:!0});var r=B(e);n=le(r,t[1]),r.forEach(A),this.h()},h(){M(e,"class","bg-slate-200 shadow-sm px-3 py-1 rounded-md")},m(s,r){ye(s,e,r),N(e,n)},p(s,r){r&2&&Ae(n,s[1])},d(s){s&&A(e)}}}function Im(t){let e,n;return{c(){e=K("p"),n=ue(t[1]),this.h()},l(s){e=G(s,"P",{class:!0});var r=B(e);n=le(r,t[1]),r.forEach(A),this.h()},h(){M(e,"class","bg-red-300 shadow-inner px-3 py-1 rounded-md")},m(s,r){ye(s,e,r),N(e,n)},p(s,r){r&2&&Ae(n,s[1])},d(s){s&&A(e)}}}function bm(t){let e,n;return{c(){e=K("p"),n=ue(t[1]),this.h()},l(s){e=G(s,"P",{class:!0});var r=B(e);n=le(r,t[1]),r.forEach(A),this.h()},h(){M(e,"class","bg-green-300 shadow-inner px-3 py-1 rounded-md")},m(s,r){ye(s,e,r),N(e,n)},p(s,r){r&2&&Ae(n,s[1])},d(s){s&&A(e)}}}function Cm(t){let e,n,s,r;function i(c,u){return c[2]&&(c[3]||c[0])?bm:!c[2]&&c[3]?Im:c[0]?Tm:Em}let o=i(t),a=o(t);return{c(){e=K("div"),n=K("button"),a.c(),this.h()},l(c){e=G(c,"DIV",{});var u=B(e);n=G(u,"BUTTON",{class:!0});var l=B(n);a.l(l),l.forEach(A),u.forEach(A),this.h()},h(){M(n,"class","w-full text-left px-4 py-1")},m(c,u){ye(c,e,u),N(e,n),a.m(n,null),s||(r=Fo(n,"click",t[4]),s=!0)},p(c,[u]){o===(o=i(c))&&a?a.p(c,u):(a.d(1),a=o(c),a&&(a.c(),a.m(n,null)))},i:X,o:X,d(c){c&&A(e),a.d(),s=!1,r()}}}function Sm(t,e,n){let{name:s}=e,{isCorrect:r}=e,{correctCount:i}=e,{answersSelected:o}=e,{answersCorrect:a}=e,{isUsed:c}=e,{questionsGuessed:u}=e,l=!1;function d(){!c&&!l&&(n(3,l=!0),n(5,o++,o),r&&n(6,a++,a),o>=i&&n(0,c=!0),a>=i&&n(7,u++,u))}return t.$$set=h=>{"name"in h&&n(1,s=h.name),"isCorrect"in h&&n(2,r=h.isCorrect),"correctCount"in h&&n(8,i=h.correctCount),"answersSelected"in h&&n(5,o=h.answersSelected),"answersCorrect"in h&&n(6,a=h.answersCorrect),"isUsed"in h&&n(0,c=h.isUsed),"questionsGuessed"in h&&n(7,u=h.questionsGuessed)},[c,s,r,l,d,o,a,u,i]}class _m extends ct{constructor(e){super(),ut(this,e,Sm,Cm,lt,{name:1,isCorrect:2,correctCount:8,answersSelected:5,answersCorrect:6,isUsed:0,questionsGuessed:7})}}function _o(t,e,n){const s=t.slice();return s[13]=e[n],s}function Ao(t){let e,n,s,r,i,o;function a(h){t[9](h)}function c(h){t[10](h)}function u(h){t[11](h)}function l(h){t[12](h)}let d={name:t[13].answer,isCorrect:t[13].isCorrect,correctCount:t[8]};return t[7]!==void 0&&(d.answersSelected=t[7]),t[5]!==void 0&&(d.answersCorrect=t[5]),t[6]!==void 0&&(d.isUsed=t[6]),t[0]!==void 0&&(d.questionsGuessed=t[0]),e=new _m({props:d}),Pt.push(()=>Ft(e,"answersSelected",a)),Pt.push(()=>Ft(e,"answersCorrect",c)),Pt.push(()=>Ft(e,"isUsed",u)),Pt.push(()=>Ft(e,"questionsGuessed",l)),{c(){Be(e.$$.fragment)},l(h){$e(e.$$.fragment,h)},m(h,g){qe(e,h,g),o=!0},p(h,g){const f={};g&8&&(f.name=h[13].answer),g&8&&(f.isCorrect=h[13].isCorrect),g&256&&(f.correctCount=h[8]),!n&&g&128&&(n=!0,f.answersSelected=h[7],Vt(()=>n=!1)),!s&&g&32&&(s=!0,f.answersCorrect=h[5],Vt(()=>s=!1)),!r&&g&64&&(r=!0,f.isUsed=h[6],Vt(()=>r=!1)),!i&&g&1&&(i=!0,f.questionsGuessed=h[0],Vt(()=>i=!1)),e.$set(f)},i(h){o||(L(e.$$.fragment,h),o=!0)},o(h){z(e.$$.fragment,h),o=!1},d(h){je(e,h)}}}function Am(t){let e,n,s,r,i,o,a,c,u,l,d=t[3],h=[];for(let f=0;f<d.length;f+=1)h[f]=Ao(_o(t,d,f));const g=f=>z(h[f],1,1,()=>{h[f]=null});return{c(){e=K("div"),n=K("p"),s=ue(t[1]),r=ue(". "),i=ue(t[2]),o=pt(),a=K("img"),u=pt();for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=G(f,"DIV",{class:!0});var v=B(e);n=G(v,"P",{class:!0});var y=B(n);s=le(y,t[1]),r=le(y,". "),i=le(y,t[2]),y.forEach(A),o=mt(v),a=G(v,"IMG",{class:!0,src:!0,alt:!0}),u=mt(v);for(let F=0;F<h.length;F+=1)h[F].l(v);v.forEach(A),this.h()},h(){M(n,"class","px-4 font-semibold"),M(a,"class","w-11/12 sm:w-1/2 pl-2 m-1"),mi(a.src,c=t[4])||M(a,"src",c),M(a,"alt",""),M(e,"class","bg-slate-100 rounded-lg shadow-sm my-3 py-2 mx-2 flex flex-col justify-center")},m(f,v){ye(f,e,v),N(e,n),N(n,s),N(n,r),N(n,i),N(e,o),N(e,a),N(e,u);for(let y=0;y<h.length;y+=1)h[y].m(e,null);l=!0},p(f,[v]){if((!l||v&2)&&Ae(s,f[1]),(!l||v&4)&&Ae(i,f[2]),(!l||v&16&&!mi(a.src,c=f[4]))&&M(a,"src",c),v&489){d=f[3];let y;for(y=0;y<d.length;y+=1){const F=_o(f,d,y);h[y]?(h[y].p(F,v),L(h[y],1)):(h[y]=Ao(F),h[y].c(),L(h[y],1),h[y].m(e,null))}for(Qt(),y=d.length;y<h.length;y+=1)g(y);Wt()}},i(f){if(!l){for(let v=0;v<d.length;v+=1)L(h[v]);l=!0}},o(f){h=h.filter(Boolean);for(let v=0;v<h.length;v+=1)z(h[v]);l=!1},d(f){f&&A(e),Tr(h,f)}}}function Dm(t){let e=t.length;if(e==0)return!1;for(;--e;){let n=Math.floor(Math.random()*(e+1)),s=t[e],r=t[n];t[e]=r,t[n]=s}}function km(t,e,n){let{number:s}=e,{name:r=""}=e,{answers:i}=e,{img:o}=e,{questionsGuessed:a}=e,c=0,u=!1,l=0,d=0;i.forEach(y=>{y.isCorrect&&n(8,d++,d)}),Dm(i);function h(y){l=y,n(7,l)}function g(y){c=y,n(5,c)}function f(y){u=y,n(6,u)}function v(y){a=y,n(0,a)}return t.$$set=y=>{"number"in y&&n(1,s=y.number),"name"in y&&n(2,r=y.name),"answers"in y&&n(3,i=y.answers),"img"in y&&n(4,o=y.img),"questionsGuessed"in y&&n(0,a=y.questionsGuessed)},[a,s,r,i,o,c,u,l,d,h,g,f,v]}class Nm extends ct{constructor(e){super(),ut(this,e,km,Am,lt,{number:1,name:2,answers:3,img:4,questionsGuessed:0})}}function Do(t,e,n){const s=t.slice();return s[7]=e[n],s[9]=n,s}function Rm(t){let e,n;return e=new wm({}),{c(){Be(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,r){qe(e,s,r),n=!0},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){je(e,s)}}}function Om(t){let e,n;return e=new pm({}),{c(){Be(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,r){qe(e,s,r),n=!0},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){je(e,s)}}}function ko(t){let e,n,s,r,i,o,a,c,u=t[1],l=[];for(let h=0;h<u.length;h+=1)l[h]=No(Do(t,u,h));const d=h=>z(l[h],1,1,()=>{l[h]=null});return{c(){e=K("div");for(let h=0;h<l.length;h+=1)l[h].c();n=pt(),s=K("p"),r=ue("Tvoje skóre: "),i=ue(t[3]),o=ue("/"),a=ue(t[4]),this.h()},l(h){e=G(h,"DIV",{});var g=B(e);for(let v=0;v<l.length;v+=1)l[v].l(g);n=mt(g),s=G(g,"P",{class:!0});var f=B(s);r=le(f,"Tvoje skóre: "),i=le(f,t[3]),o=le(f,"/"),a=le(f,t[4]),f.forEach(A),g.forEach(A),this.h()},h(){M(s,"class","text-xl text-center py-5 font-bold")},m(h,g){ye(h,e,g);for(let f=0;f<l.length;f+=1)l[f].m(e,null);N(e,n),N(e,s),N(s,r),N(s,i),N(s,o),N(s,a),c=!0},p(h,g){if(g&10){u=h[1];let f;for(f=0;f<u.length;f+=1){const v=Do(h,u,f);l[f]?(l[f].p(v,g),L(l[f],1)):(l[f]=No(v),l[f].c(),L(l[f],1),l[f].m(e,n))}for(Qt(),f=u.length;f<l.length;f+=1)d(f);Wt()}(!c||g&8)&&Ae(i,h[3])},i(h){if(!c){for(let g=0;g<u.length;g+=1)L(l[g]);c=!0}},o(h){l=l.filter(Boolean);for(let g=0;g<l.length;g+=1)z(l[g]);c=!1},d(h){h&&A(e),Tr(l,h)}}}function No(t){let e,n,s;function r(o){t[6](o)}let i={number:t[9]+1,name:t[7].question,answers:t[7].answers,img:t[7].picture};return t[3]!==void 0&&(i.questionsGuessed=t[3]),e=new Nm({props:i}),Pt.push(()=>Ft(e,"questionsGuessed",r)),{c(){Be(e.$$.fragment)},l(o){$e(e.$$.fragment,o)},m(o,a){qe(e,o,a),s=!0},p(o,a){const c={};a&2&&(c.name=o[7].question),a&2&&(c.answers=o[7].answers),a&2&&(c.img=o[7].picture),!n&&a&8&&(n=!0,c.questionsGuessed=o[3],Vt(()=>n=!1)),e.$set(c)},i(o){s||(L(e.$$.fragment,o),s=!0)},o(o){z(e.$$.fragment,o),s=!1},d(o){je(e,o)}}}function Mm(t){let e,n,s,r,i,o,a,c,u,l,d,h,g,f,v,y,F,se,He;const Se=[Om,Rm],ve=[];function Tn($,ge){return $[2]?1:0}g=Tn(t),f=ve[g]=Se[g](t);let P=t[2]&&ko(t);return{c(){e=K("div"),n=K("div"),s=K("p"),r=ue(t[0]),i=pt(),o=K("div"),a=K("p"),c=ue(t[3]),u=ue("/"),l=ue(t[4]),d=pt(),h=K("button"),f.c(),y=pt(),P&&P.c(),this.h()},l($){e=G($,"DIV",{class:!0});var ge=B(e);n=G(ge,"DIV",{class:!0});var Oe=B(n);s=G(Oe,"P",{class:!0});var gi=B(s);r=le(gi,t[0]),gi.forEach(A),i=mt(Oe),o=G(Oe,"DIV",{class:!0});var In=B(o);a=G(In,"P",{class:!0});var bn=B(a);c=le(bn,t[3]),u=le(bn,"/"),l=le(bn,t[4]),bn.forEach(A),d=mt(In),h=G(In,"BUTTON",{class:!0});var pi=B(h);f.l(pi),pi.forEach(A),In.forEach(A),Oe.forEach(A),y=mt(ge),P&&P.l(ge),ge.forEach(A),this.h()},h(){M(s,"class","font-bold text-base sm:text-lg"),M(a,"class","text-md mx-4 font-bold bg-slate-300 px-2 py-1 rounded-md"),M(h,"class","w-6"),M(o,"class","flex items-center"),M(n,"class",v=(t[2]?"sticky top-16":"")+" "+(t[3]>=t[4]?"bg-green-300":"bg-slate-200")+" flex justify-between items-center py-2 px-4 my-2 rounded-md drop-shadow-sm"),M(e,"class","w-full flex flex-col")},m($,ge){ye($,e,ge),N(e,n),N(n,s),N(s,r),N(n,i),N(n,o),N(o,a),N(a,c),N(a,u),N(a,l),N(o,d),N(o,h),ve[g].m(h,null),N(e,y),P&&P.m(e,null),F=!0,se||(He=Fo(h,"click",t[5]),se=!0)},p($,[ge]){(!F||ge&1)&&Ae(r,$[0]),(!F||ge&8)&&Ae(c,$[3]);let Oe=g;g=Tn($),g!==Oe&&(Qt(),z(ve[Oe],1,1,()=>{ve[Oe]=null}),Wt(),f=ve[g],f||(f=ve[g]=Se[g]($),f.c()),L(f,1),f.m(h,null)),(!F||ge&12&&v!==(v=($[2]?"sticky top-16":"")+" "+($[3]>=$[4]?"bg-green-300":"bg-slate-200")+" flex justify-between items-center py-2 px-4 my-2 rounded-md drop-shadow-sm"))&&M(n,"class",v),$[2]?P?(P.p($,ge),ge&4&&L(P,1)):(P=ko($),P.c(),L(P,1),P.m(e,null)):P&&(Qt(),z(P,1,1,()=>{P=null}),Wt())},i($){F||(L(f),L(P),F=!0)},o($){z(f),z(P),F=!1},d($){$&&A(e),ve[g].d(),P&&P.d(),se=!1,He()}}}function xm(t){let e=t.length;if(e==0)return!1;for(;--e;){let n=Math.floor(Math.random()*(e+1)),s=t[e],r=t[n];t[e]=r,t[n]=s}}function Lm(t,e,n){let{name:s=""}=e,{questions:r}=e,i=!1,o=Object.keys(r).length,a=0;function c(){i?n(2,i=!1):(n(2,i=!0),n(3,a=0))}xm(r);function u(l){a=l,n(3,a)}return t.$$set=l=>{"name"in l&&n(0,s=l.name),"questions"in l&&n(1,r=l.questions)},[s,r,i,a,o,c,u]}class Pm extends ct{constructor(e){super(),ut(this,e,Lm,Mm,lt,{name:0,questions:1})}}function Ro(t,e,n){const s=t.slice();return s[3]=e[n],s}function Fm(t){return{c:X,l:X,m:X,p:X,i:X,o:X,d:X}}function Vm(t){let e,n;return e=new hm({props:{$$slots:{default:[Um]},$$scope:{ctx:t}}}),{c(){Be(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,r){qe(e,s,r),n=!0},p(s,r){const i={};r&65&&(i.$$scope={dirty:r,ctx:s}),e.$set(i)},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){je(e,s)}}}function Oo(t){let e,n;return e=new Pm({props:{name:t[3].name,questions:t[3].questions}}),{c(){Be(e.$$.fragment)},l(s){$e(e.$$.fragment,s)},m(s,r){qe(e,s,r),n=!0},p(s,r){const i={};r&1&&(i.name=s[3].name),r&1&&(i.questions=s[3].questions),e.$set(i)},i(s){n||(L(e.$$.fragment,s),n=!0)},o(s){z(e.$$.fragment,s),n=!1},d(s){je(e,s)}}}function Um(t){let e,n,s=t[2][t[0].title],r=[];for(let o=0;o<s.length;o+=1)r[o]=Oo(Ro(t,s,o));const i=o=>z(r[o],1,1,()=>{r[o]=null});return{c(){for(let o=0;o<r.length;o+=1)r[o].c();e=yi()},l(o){for(let a=0;a<r.length;a+=1)r[a].l(o);e=yi()},m(o,a){for(let c=0;c<r.length;c+=1)r[c].m(o,a);ye(o,e,a),n=!0},p(o,a){if(a&3){s=o[2][o[0].title];let c;for(c=0;c<s.length;c+=1){const u=Ro(o,s,c);r[c]?(r[c].p(u,a),L(r[c],1)):(r[c]=Oo(u),r[c].c(),L(r[c],1),r[c].m(e.parentNode,e))}for(Qt(),c=s.length;c<r.length;c+=1)i(c);Wt()}},i(o){if(!n){for(let a=0;a<s.length;a+=1)L(r[a]);n=!0}},o(o){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)z(r[a]);n=!1},d(o){Tr(r,o),o&&A(e)}}}function Bm(t){return{c:X,l:X,m:X,p:X,i:X,o:X,d:X}}function $m(t){let e,n,s,r={ctx:t,current:null,token:null,hasCatch:!1,pending:Bm,then:Vm,catch:Fm,value:2,blocks:[,,,]};return Eu(t[1](),r),{c(){e=K("section"),n=K("div"),r.block.c(),this.h()},l(i){e=G(i,"SECTION",{class:!0});var o=B(e);n=G(o,"DIV",{class:!0});var a=B(n);r.block.l(a),a.forEach(A),o.forEach(A),this.h()},h(){M(n,"class","mt-16 h-full max-w-screen-xl w-full px-2 sm:px-0 mx-auto"),M(e,"class","min-h-screen bg-gradient-to-b from-green-600 via-emerald-600 to-emerald-600 flex flex-col text-zinc-800 font-noto-sans")},m(i,o){ye(i,e,o),N(e,n),r.block.m(n,r.anchor=null),r.mount=()=>n,r.anchor=null,s=!0},p(i,[o]){t=i,Tu(r,t,o)},i(i){s||(L(r.block),s=!0)},o(i){for(let o=0;o<3;o+=1){const a=r.blocks[o];z(a)}s=!1},d(i){i&&A(e),r.block.d(),r.token=null,r=null}}}function qm(t,e,n){let{data:s}=e;async function r(){const i=zp(cm,"subjects"),o=await om(i);let a=[];return o.forEach(c=>{a.push(c.data())}),a[0]}return t.$$set=i=>{"data"in i&&n(0,s=i.data)},[s,r]}class zm extends ct{constructor(e){super(),ut(this,e,qm,$m,lt,{data:0})}}export{zm as default};
