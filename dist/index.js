"use strict";var y=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var E=y(function(G,_){
var M=require('@stdlib/math-base-special-floor/dist'),S=128;function j(v,r,u,e){var a,f,q,p,m,c,s,l,w,R,o,i,n;if(v<=0)return 0;if(v===1||u===0)return r[e];if(a=e,v<8){for(o=0,n=0;n<v;n++)o+=r[a],a+=u;return o}if(v<=S){for(f=r[a],q=r[a+u],p=r[a+2*u],m=r[a+3*u],c=r[a+4*u],s=r[a+5*u],l=r[a+6*u],w=r[a+7*u],a+=8*u,R=v%8,n=8;n<v-R;n+=8)f+=r[a],q+=r[a+u],p+=r[a+2*u],m+=r[a+3*u],c+=r[a+4*u],s+=r[a+5*u],l+=r[a+6*u],w+=r[a+7*u],a+=8*u;for(o=f+q+(p+m)+(c+s+(l+w)),n;n<v;n++)o+=r[a],a+=u;return o}return i=M(v/2),i-=i%8,j(i,r,u,a)+j(v-i,r,u,a+i*u)}_.exports=j
});var B=y(function(H,t){
var Z=E();function b(v,r,u){var e,a,f;if(v<=0)return 0;if(v===1||u===0)return r[0];if(u<0?e=(1-v)*u:e=0,v<8){for(a=0,f=0;f<v;f++)a+=r[e],e+=u;return a}return Z(v,r,u,e)}t.exports=b
});var K=y(function(J,I){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),C=B(),h=E();g(C,"ndarray",h);I.exports=C
});var k=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),D=K(),O,L=z(k(__dirname,"./native.js"));A(L)?O=D:O=L;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
