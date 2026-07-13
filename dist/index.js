"use strict";var w=function(v,r){return function(){try{return r||v((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var l=w(function(H,O){
var M=require('@stdlib/math-base-special-floor/dist'),S=128;function j(v,r,a,L){var u,f,q,p,i,s,m,c,y,E,n,o,e;if(v<=0)return 0;if(u=L,a===0)return v*r[u];if(v<8){for(n=r[u],u+=a,e=1;e<v;e++)n+=r[u],u+=a;return n}if(v<=S){for(f=r[u],q=r[u+a],p=r[u+2*a],i=r[u+3*a],s=r[u+4*a],m=r[u+5*a],c=r[u+6*a],y=r[u+7*a],u+=8*a,E=v%8,e=8;e<v-E;e+=8)f+=r[u],q+=r[u+a],p+=r[u+2*a],i+=r[u+3*a],s+=r[u+4*a],m+=r[u+5*a],c+=r[u+6*a],y+=r[u+7*a],u+=8*a;for(n=f+q+(p+i)+(s+m+(c+y));e<v;e++)n+=r[u],u+=a;return n}return o=M(v/2),o-=o%8,j(o,r,a,u)+j(v-o,r,a,u+o*a)}O.exports=j
});var _=w(function(J,R){
var Z=require('@stdlib/strided-base-stride2offset/dist'),b=l();function g(v,r,a){return b(v,r,a,Z(v,a))}R.exports=g
});var I=w(function(P,C){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=_(),k=l();h(B,"ndarray",k);C.exports=B
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=I(),t,K=A(z(__dirname,"./native.js"));D(K)?t=F:t=K;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
