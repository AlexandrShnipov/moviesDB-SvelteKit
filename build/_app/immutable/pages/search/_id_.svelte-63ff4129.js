import{S as m,i as g,s as v,x as p,y as $,z as y,r as c,p as u,C as M,e as b,c as k,a as x,d as h,b as q,g as w,q as C,U as S,o as U}from"../../chunks/index-8a424401.js";import{M as z}from"../../chunks/MovieCard-7230cdc7.js";function d(l,a,s){const t=l.slice();return t[1]=a[s],t}function _(l){let a,s;return a=new z({props:{movie:l[1]}}),{c(){p(a.$$.fragment)},l(t){$(a.$$.fragment,t)},m(t,e){y(a,t,e),s=!0},p(t,e){const i={};e&1&&(i.movie=t[1]),a.$set(i)},i(t){s||(c(a.$$.fragment,t),s=!0)},o(t){u(a.$$.fragment,t),s=!1},d(t){M(a,t)}}}function B(l){let a,s,t=l[0],e=[];for(let o=0;o<t.length;o+=1)e[o]=_(d(l,t,o));const i=o=>u(e[o],1,1,()=>{e[o]=null});return{c(){a=b("div");for(let o=0;o<e.length;o+=1)e[o].c();this.h()},l(o){a=k(o,"DIV",{class:!0});var r=x(a);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(h),this.h()},h(){q(a,"class","search-movies svelte-z659si")},m(o,r){w(o,a,r);for(let n=0;n<e.length;n+=1)e[n].m(a,null);s=!0},p(o,[r]){if(r&1){t=o[0];let n;for(n=0;n<t.length;n+=1){const f=d(o,t,n);e[n]?(e[n].p(f,r),c(e[n],1)):(e[n]=_(f),e[n].c(),c(e[n],1),e[n].m(a,null))}for(U(),n=t.length;n<e.length;n+=1)i(n);C()}},i(o){if(!s){for(let r=0;r<t.length;r+=1)c(e[r]);s=!0}},o(o){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)u(e[r]);s=!1},d(o){o&&h(a),S(e,o)}}}async function I({fetch:l,params:a}){const s=await l(`https://api.themoviedb.org/3/search/movie?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&query=${a.id}&page=1&include_adult=false`),t=await s.json();return console.log(t),s.ok?{props:{searchedMovie:t.results}}:"no"}function D(l,a,s){let{searchedMovie:t}=a;return l.$$set=e=>{"searchedMovie"in e&&s(0,t=e.searchedMovie)},[t]}class V extends m{constructor(a){super(),g(this,a,D,B,v,{searchedMovie:0})}}export{V as default,I as load};
