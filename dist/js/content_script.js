(()=>{"use strict";var e,n={6724:(e,n,t)=>{var r=t(2492),o=t.n(r);function i(e){return n=this,t=void 0,i=function*(){const n=(t={doc_id:"6635716889819821",variables:JSON.stringify({adArchiveID:e,country:"ALL",source:null,isAdNonPolitical:!0,isAdNotAAAEligible:!1})},Object.entries(t).map((([e,n])=>`${e}=${encodeURIComponent(n)}`)).join("&"));var t,r,i;return fetch("https://www.facebook.com/api/graphql/",(r={body:n},o()({headers:(i=(null==r?void 0:r.body)||"",{accept:"*/*","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded","User-Agent":"PostmanRuntime/7.36.1","Content-Length":`${new Blob([i]).size}`,"sec-fetch-site":"same-origin"}),method:"POST"},r))).then((e=>e.text().then((n=>{try{return JSON.parse(n).data.ad_library_main.ad_details.aaa_info.eu_total_reach}catch(t){return console.error("Error parsing response",t,n,e.status),null}})))).catch((e=>(console.error("Request failed",e),null)))},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{l(i.next(e))}catch(e){o(e)}}function c(e){try{l(i.throw(e))}catch(e){o(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}l((i=i.apply(n,t||[])).next())}));var n,t,r,i}var a=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function c(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}l((r=r.apply(e,n||[])).next())}))};console.info("Initialize Meta Ad Helper!"),function(e,n,{timeout:t=0,throwOnError:r=!0}={}){return a(this,void 0,void 0,(function*(){for(let o=0;o<e;o++)console.info("test run",o),yield Promise.all(Array(n).fill(0).map(((e,n)=>a(this,void 0,void 0,(function*(){return i(0xfc94a6b15d0d).then((e=>{if(null===e){if(r)throw new Error("res is null");console.warn("res is null")}}))}))))),yield new Promise((e=>setTimeout(e,t)))}))}(1e3,1).then((()=>{console.info("Reach load done!")}))}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,loaded:!1,exports:{}};return n[e](i,i.exports,r),i.loaded=!0,i.exports}r.m=n,e=[],r.O=(n,t,o,i)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,o,i]=e[u],c=!0,l=0;l<t.length;l++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](t[l])))?t.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={828:0};r.O.j=n=>0===e[n];var n=(n,t)=>{var o,i,[a,c,l]=t,s=0;if(a.some((n=>0!==e[n]))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(l)var u=l(r)}for(n&&n(t);s<a.length;s++)i=a[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},t=self.webpackChunkchrome_extension_typescript_starter=self.webpackChunkchrome_extension_typescript_starter||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var o=r.O(void 0,[736],(()=>r(6724)));o=r.O(o)})();