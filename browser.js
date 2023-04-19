// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,l=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var f,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(a.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&u&&u.call(e,r,t.set),e};var f=e,c=Math.floor;function p(e,r,t,n){var o,i,u,a,l,f,_,d,b,s,y,v,m;if(e<=0)return 0;if(1===e||0===t)return r[n];if(o=n,e<8){for(y=0,m=0;m<e;m++)y+=r[o],o+=t;return y}if(e<=128){for(i=r[o],u=r[o+t],a=r[o+2*t],l=r[o+3*t],f=r[o+4*t],_=r[o+5*t],d=r[o+6*t],b=r[o+7*t],o+=8*t,s=e%8,m=8;m<e-s;m+=8)i+=r[o],u+=r[o+t],a+=r[o+2*t],l+=r[o+3*t],f+=r[o+4*t],_+=r[o+5*t],d+=r[o+6*t],b+=r[o+7*t],o+=8*t;for(y=i+u+(a+l)+(f+_+(d+b));m<e;m++)y+=r[o],o+=t;return y}return v=c(e/2),p(v-=v%8,r,t,o)+p(e-v,r,t,o+v*t)}function _(e,r,t){var n,o,i;if(e<=0)return 0;if(1===e||0===t)return r[0];if(n=t<0?(1-e)*t:0,e<8){for(o=0,i=0;i<e;i++)o+=r[n],n+=t;return o}return p(e,r,t,n)}return f(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:p}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dsumpw=r();
//# sourceMappingURL=browser.js.map
