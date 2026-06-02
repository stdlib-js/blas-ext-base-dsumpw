"use strict";var w=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var l=w(function(H,O){
var M=require('@stdlib/math-base-special-floor/dist'),S=128;function j(v,r,u,L){var a,f,q,p,i,s,m,c,y,E,n,o,e;if(v<=0)return 0;if(a=L,u===0)return v*r[a];if(v<8){for(n=r[a],a+=u,e=1;e<v;e++)n+=r[a],a+=u;return n}if(v<=S){for(f=r[a],q=r[a+u],p=r[a+2*u],i=r[a+3*u],s=r[a+4*u],m=r[a+5*u],c=r[a+6*u],y=r[a+7*u],a+=8*u,E=v%8,e=8;e<v-E;e+=8)f+=r[a],q+=r[a+u],p+=r[a+2*u],i+=r[a+3*u],s+=r[a+4*u],m+=r[a+5*u],c+=r[a+6*u],y+=r[a+7*u],a+=8*u;for(n=f+q+(p+i)+(s+m+(c+y));e<v;e++)n+=r[a],a+=u;return n}return o=M(v/2),o-=o%8,j(o,r,u,a)+j(v-o,r,u,a+o*u)}O.exports=j
});var _=w(function(J,R){
var Z=require('@stdlib/strided-base-stride2offset/dist'),b=l();function g(v,r,u){return b(v,r,u,Z(v,u))}R.exports=g
});var I=w(function(P,C){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=_(),k=l();h(B,"ndarray",k);C.exports=B
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=I(),t,K=A(z(__dirname,"./native.js"));D(K)?t=F:t=K;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
