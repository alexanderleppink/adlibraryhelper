(()=>{"use strict";var e,n={6836:(e,n,o)=>{function t(e){return Object.entries(e).map((([e,n])=>`${e}=${encodeURIComponent(n)}`)).join("&")}var r=o(2492),c=o.n(r);function i(e){return c()({headers:{accept:"*/*","accept-language":"en-DE,en;q=0.9","cache-control":"no-cache","content-type":"application/x-www-form-urlencoded",pragma:"no-cache","sec-ch-ua":'"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"',"sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin"},referrerPolicy:"origin-when-cross-origin",method:"POST",mode:"cors",credentials:"include"},e)}console.info("Initialize Meta Ad Helper!"),function(e){return n=this,o=void 0,c=function*(){return fetch("https://www.facebook.com/api/graphql/",i({headers:{"x-asbd-id":"129477","x-fb-friendly-name":"AdLibraryAdDetailsV2Query"},body:t({doc_id:"6635716889819821",variables:JSON.stringify({adArchiveID:0xfc94a6b15d0d,country:"ALL",source:null,isAdNonPolitical:!0,isAdNotAAAEligible:!1})})})).then((e=>e.json()))},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function a(e){try{s(c.throw(e))}catch(e){t(e)}}function s(n){var o;n.done?e(n.value):(o=n.value,o instanceof r?o:new r((function(e){e(o)}))).then(i,a)}s((c=c.apply(n,o||[])).next())}));var n,o,r,c}().then((e=>console.log(e))),function(e){return n=this,o=void 0,c=function*(){const e=t({__a:"1",lsd:"AVoz0KEv2o4","x-fb-lsd":"AVoz0KEv2o4"});return fetch("https://www.facebook.com/ads/library/async/collation/?collation_group_id=222002310979685",i({headers:{"x-fb-lsd":"AVoz0KEv2o4"},body:e})).then((e=>e.text())).catch((e=>console.log("error",e)))},new((r=void 0)||(r=Promise))((function(e,t){function i(e){try{s(c.next(e))}catch(e){t(e)}}function a(e){try{s(c.throw(e))}catch(e){t(e)}}function s(n){var o;n.done?e(n.value):(o=n.value,o instanceof r?o:new r((function(e){e(o)}))).then(i,a)}s((c=c.apply(n,o||[])).next())}));var n,o,r,c}().then((e=>console.log(e)))}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var c=o[e]={id:e,loaded:!1,exports:{}};return n[e](c,c.exports,t),c.loaded=!0,c.exports}t.m=n,e=[],t.O=(n,o,r,c)=>{if(!o){var i=1/0;for(d=0;d<e.length;d++){for(var[o,r,c]=e[d],a=!0,s=0;s<o.length;s++)(!1&c||i>=c)&&Object.keys(t.O).every((e=>t.O[e](o[s])))?o.splice(s--,1):(a=!1,c<i&&(i=c));if(a){e.splice(d--,1);var l=r();void 0!==l&&(n=l)}}return n}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[o,r,c]},t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={828:0};t.O.j=n=>0===e[n];var n=(n,o)=>{var r,c,[i,a,s]=o,l=0;if(i.some((n=>0!==e[n]))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(s)var d=s(t)}for(n&&n(o);l<i.length;l++)c=i[l],t.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return t.O(d)},o=self.webpackChunkchrome_extension_typescript_starter=self.webpackChunkchrome_extension_typescript_starter||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var r=t.O(void 0,[736],(()=>t(6836)));r=t.O(r)})();