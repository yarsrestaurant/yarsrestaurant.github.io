"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1697],{1697:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),C=m(4862),h=m(6655),K=m(4963);m(4110);const A=new WeakMap,I=(e,t,s,n=0,r=!1)=>{A.has(e)!==s&&(s?F(e,t,n,r):H(e,t))},F=(e,t,s,n=!1)=>{const r=t.parentNode,o=t.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,n&&(o.disabled=!0),r.appendChild(o),A.set(e,o);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${s}px,0) scale(0)`},H=(e,t)=>{const s=A.get(e);s&&(A.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},P="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",T=(e,t,s)=>{const n=e[N];n&&clearTimeout(n),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[N]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&T(t,0,s)},{once:!0})};let g=0;const w="data-ionic-skip-scroll-assist",V=(e,t,s,n,r,o,a,d=!1)=>{const i=o&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){t.hasAttribute(w)?t.removeAttribute(w):J(e,t,s,n,r,i,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},p=e=>{document.activeElement!==e&&(e.setAttribute(w,"true"),e.focus())},J=function(){var e=(0,y.Z)(function*(t,s,n,r,o,a,d=!1){if(!n&&!r)return;const i=((e,t,s)=>{var n;return((e,t,s,n)=>{const r=e.top,o=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,n-s)-50-o,v=i-r,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,r-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e).getBoundingClientRect(),t.getBoundingClientRect(),s,e.ownerDocument.defaultView.innerHeight)})(t,n||r,o);if(n&&Math.abs(i.scrollAmount)<4)return p(s),void(a&&null!==n&&(T(n,g),U(s,n,()=>g=0)));if(I(t,s,!0,i.inputSafeY,d),p(s),(0,h.r)(()=>t.click()),a&&n&&(g=i.scrollPadding,T(n,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),n&&(yield(0,C.c)(n,0,i.scrollAmount,i.scrollDuration)),I(t,s,!1,i.inputSafeY),p(s),a&&U(s,n,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(n){const l=yield(0,C.g)(n);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,n,r,o,a,d){return e.apply(this,arguments)}}(),X=function(){var e=(0,y.Z)(function*(t,s){const n=document,r="ios"===s,o="android"===s,a=t.getNumber("keyboardHeight",290),d=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",r),S=t.getBoolean("inputBlurring",r),u=t.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,W=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(c){yield new Promise(D=>(0,h.c)(c,D));const x=c.shadowRoot||c,L=x.querySelector("input")||x.querySelector("textarea"),b=(0,C.f)(c),j=b?null:c.closest("ion-footer");if(L){if(b&&i&&!l.has(c)){const D=((e,t,s)=>{if(!s||!t)return()=>{};const n=d=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,d)},r=()=>I(e,t,!1),o=()=>n(!0),a=()=>n(!1);return(0,h.a)(s,"ionScrollStart",o),(0,h.a)(s,"ionScrollEnd",a),t.addEventListener("blur",r),()=>{(0,h.b)(s,"ionScrollStart",o),(0,h.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",r)}})(c,L,b);l.set(c,D)}if("date"!==L.type&&"datetime-local"!==L.type&&(b||j)&&d&&!_.has(c)){const D=V(c,L,b,j,a,u,W,o);_.set(c,D)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const d=s.activeElement;if(!d||d.matches(P))return;const i=a.target;i!==d&&(i.matches(P)||i.closest(P)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of v)M(f);n.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),n.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=_.get(f);c&&c(),_.delete(f)}})(f.detail)})});return function(s,n){return e.apply(this,arguments)}}()}}]);