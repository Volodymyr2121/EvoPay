/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function a(){const c=document.querySelectorAll(".slider-content"),n=document.querySelectorAll(".indicator"),i=document.querySelector(".prev"),s=document.querySelector(".next");let e=1;function t(o){c.forEach(r=>{r.style.display="none"}),n.forEach(r=>{r.classList.remove("active")}),c[o].style.display="block",n[o].classList.add("active")}t(e),s.addEventListener("click",function(){e=(e+1)%c.length,t(e)}),i.addEventListener("click",function(){e=(e-1+c.length)%c.length,t(e)}),n.forEach((o,r)=>{o.addEventListener("click",function(){e=r,t(e)})})}function f(){const c=document.querySelector(".gallery-list-wrapper ul"),n=document.querySelectorAll(".indicatorr"),i=document.querySelector(".prevv"),s=document.querySelector(".nextt");let e=4;const t=o=>{c.style.transform=`translateX(-${o*100}%)`,n.forEach((r,u)=>{r.classList.toggle("active",u===o)})};s.addEventListener("click",()=>{e=(e+1)%n.length,t(e)}),i.addEventListener("click",()=>{e=(e-1+n.length)%n.length,t(e)}),n.forEach((o,r)=>{o.addEventListener("click",()=>{e=r,t(e)})})}const d=document.querySelector(".open-menu-but"),m=document.querySelector(".close-menu-but"),l=document.querySelector(".mobile-nav"),y=document.querySelectorAll(".menu-mobile a");d.addEventListener("click",()=>{l.classList.remove("hidden")});m.addEventListener("click",()=>{l.classList.add("hidden")});y.forEach(c=>{c.addEventListener("click",()=>{l.classList.add("hidden")})});document.addEventListener("click",c=>{const n=l.contains(c.target),i=d.contains(c.target);!n&&!i&&l.classList.add("hidden")});document.addEventListener("DOMContentLoaded",()=>{a()});f();
//# sourceMappingURL=commonHelpers.js.map
