(()=>{"use strict";var e,n={6836:(e,n,t)=>{function o(e){return Object.entries(e).map((([e,n])=>`${e}=${encodeURIComponent(n)}`)).join("&")}var r=t(2492),c=t.n(r);function i(e){return c()({headers:{accept:"*/*","accept-language":"en-DE,en;q=0.9","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded",pragma:"no-cache","sec-ch-ua":'"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"},referrerPolicy:"origin-when-cross-origin",method:"POST",mode:"cors",credentials:"include"},e)}console.info("Initialize Meta Ad Helper!"),function(e){return n=this,t=void 0,c=function*(){return fetch("https://www.facebook.com/api/graphql/",i({headers:{"x-asbd-id":"129477","x-fb-friendly-name":"AdLibraryAdDetailsV2Query"},body:o({doc_id:"6635716889819821",variables:JSON.stringify({adArchiveID:0xfc94a6b15d0d,country:"ALL",source:null,isAdNonPolitical:!0,isAdNotAAAEligible:!1})})})).then((e=>e.json()))},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{s(c.next(e))}catch(e){o(e)}}function a(e){try{s(c.throw(e))}catch(e){o(e)}}function s(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}s((c=c.apply(n,t||[])).next())}));var n,t,r,c}().then((e=>console.log(e))),function(e){return n=this,t=void 0,c=function*(){const e=o({__a:"1",lsd:"1"});return fetch("https://www.facebook.com/ads/library/async/collation/?collation_group_id=222002310979685",i({headers:{"x-fb-lsd":"1"},body:e})).then((e=>e.text())).catch((e=>console.log("error",e)))},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{s(c.next(e))}catch(e){o(e)}}function a(e){try{s(c.throw(e))}catch(e){o(e)}}function s(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,a)}s((c=c.apply(n,t||[])).next())}));var n,t,r,c}().then((e=>console.log(e)))}},t={};function o(e){var r=t[e];if(void 0!==r)return r.exports;var c=t[e]={id:e,loaded:!1,exports:{}};return n[e](c,c.exports,o),c.loaded=!0,c.exports}o.m=n,e=[],o.O=(n,t,r,c)=>{if(!t){var i=1/0;for(d=0;d<e.length;d++){for(var[t,r,c]=e[d],a=!0,s=0;s<t.length;s++)(!1&c||i>=c)&&Object.keys(o.O).every((e=>o.O[e](t[s])))?t.splice(s--,1):(a=!1,c<i&&(i=c));if(a){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[t,r,c]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={828:0};o.O.j=n=>0===e[n];var n=(n,t)=>{var r,c,[i,a,s]=t,l=0;if(i.some((n=>0!==e[n]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var d=s(o)}for(n&&n(t);l<i.length;l++)c=i[l],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(d)},t=self.webpackChunkchrome_extension_typescript_starter=self.webpackChunkchrome_extension_typescript_starter||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})();var r=o.O(void 0,[736],(()=>o(6836)));r=o.O(r)})();