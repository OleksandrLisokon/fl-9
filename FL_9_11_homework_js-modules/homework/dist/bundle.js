!function(t){var e={};function n(u){if(e[u])return e[u].exports;var r=e[u]={i:u,l:!1,exports:{}};return t[u].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,u){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:u})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),r=n(3);n.n(r);const a=document.querySelector("body"),c=document.createElement("div");c.setAttribute("class","container");const s=document.createElement("div");s.setAttribute("class","calculator");const l=document.createElement("input");l.setAttribute("type","text"),l.setAttribute("class","calculator-screen"),l.setAttribute("value","0"),l.disabled=!0,s.appendChild(l);const o=document.createElement("div");o.setAttribute("class","calculator-keys");const i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("class","operator"),i.setAttribute("value","+");const d=document.createElement("i");d.classList.add("fas","fa-plus"),i.appendChild(d),o.appendChild(i);const p=document.createElement("button");p.setAttribute("type","button"),p.setAttribute("class","operator"),p.setAttribute("value","-");const b=document.createElement("i");b.classList.add("fas","fa-minus"),p.appendChild(b),o.appendChild(p);const m=document.createElement("button");m.setAttribute("type","button"),m.setAttribute("class","operator"),m.setAttribute("value","*");const A=document.createElement("i");A.classList.add("fas","fa-times"),m.appendChild(A),o.appendChild(m);const f=document.createElement("button");f.setAttribute("type","button"),f.setAttribute("class","operator"),f.setAttribute("value","/");const v=document.createElement("i");v.classList.add("fas","fa-divide"),f.appendChild(v),o.appendChild(f);const h=document.createElement("button");h.setAttribute("type","button"),h.setAttribute("class","operator"),h.setAttribute("value","%");const E=document.createElement("i");E.classList.add("fas","fa-percentage"),h.appendChild(E),o.appendChild(h);const C=document.createElement("button");C.setAttribute("type","button"),C.setAttribute("class","operator"),C.setAttribute("value","sqrt");const x=document.createElement("i");x.classList.add("fas","fa-square-root-alt"),C.appendChild(x),o.appendChild(C);const g=document.createElement("button");g.setAttribute("type","button"),g.setAttribute("class","operator"),g.setAttribute("value","sqr");const y=document.createElement("i");y.classList.add("fas","fa-superscript"),g.appendChild(y),o.appendChild(g);const T=document.createElement("button");T.setAttribute("value","7"),T.innerText="7",o.appendChild(T);const q=document.createElement("button");q.setAttribute("value","8"),q.innerText="8",o.appendChild(q);const F=document.createElement("button");F.setAttribute("value","9"),F.innerText="9",o.appendChild(F);const L=document.createElement("button");L.setAttribute("value","4"),L.innerText="4",o.appendChild(L);const O=document.createElement("button");O.setAttribute("value","5"),O.innerText="5",o.appendChild(O);const j=document.createElement("button");j.setAttribute("value","6"),j.innerText="6",o.appendChild(j);const S=document.createElement("button");S.setAttribute("value","1"),S.innerText="1",o.appendChild(S);const _=document.createElement("button");_.setAttribute("value","2"),_.innerText="2",o.appendChild(_);const M=document.createElement("button");M.setAttribute("value","3"),M.innerText="3",o.appendChild(M);const P=document.createElement("button");P.setAttribute("value","0"),P.innerText="0",o.appendChild(P);const k=document.createElement("button");k.setAttribute("value","."),k.setAttribute("class","decimal"),k.innerText=".",o.appendChild(k);const N=document.createElement("button");N.setAttribute("value","all-clear"),N.setAttribute("class","all-clear"),N.innerText="AC",o.appendChild(N);const w=document.createElement("button");w.setAttribute("class","equal-sign"),w.setAttribute("value","=");const D=document.createElement("i");D.classList.add("fas","fa-equals"),w.appendChild(D),o.appendChild(w),s.appendChild(o),c.appendChild(s),a.appendChild(c);const z=document.querySelectorAll("button");Object(u.a)(z)},function(t,e,n){"use strict";e.a=function(t){let e=0,n=0,r=null,a=document.querySelector(".calculator-screen"),c=0;s(e);for(let d=0;d<t.length;d++)t[d].onclick=function(t){let d=this.getAttribute("value");c=a.getAttribute("value"),"all-clear"===d?(s(c="0"),e=0,n=0):"."===d?s(c+="."):l(d)?s("0"===(c=a.getAttribute("value"))?c=d:c+=d):o(d)?(c=a.getAttribute("value"),n=parseFloat(c),r=d,s(c="0")):"sqrt"===d?(c=a.getAttribute("value"),s(e=parseFloat(c)>=0?u.e(parseFloat(c)):"Error"),e=0):"sqr"===d?(c=a.getAttribute("value"),s(e=u.f(parseFloat(c))),e=0):"%"===d?r&&(c=a.getAttribute("value"),s(e=i(n,u.c(n,parseFloat(c)),r)),r=null,n=0,e=0):"="===d&&r&&(c=a.getAttribute("value"),s(e=i(n,parseFloat(c),r)),r=null,n=0,e=0),t.preventDefault()};function s(t){t.toString().substring(0,10),a.setAttribute("value",t)}function l(t){return!isNaN(t)}function o(t){return"/"===t||"*"===t||"+"===t||"-"===t}function i(t,e,n){return t=parseFloat(t),e=parseFloat(e),"+"===n?u.d(t,e):"-"===n?u.b(t,e):"*"===n?u.g(t,e):"/"===n?0!==e?u.a(t,e):"Error":void 0}};var u=n(2)},function(t,e,n){"use strict";e.d=function(t,e){return t+e},e.b=function(t,e){return t-e},e.g=function(t,e){return t*e},e.a=function(t,e){return t/e},e.c=function(t,e){return t/100*e},e.e=function(t){return Math.sqrt(t)},e.f=function(t){return t*t}},function(t,e){}]);