import{S as h,i as c,a as f}from"./vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const p=new h(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),d=document.querySelector(".gallery"),m=document.getElementById("form"),n=document.querySelector(".loader"),u=document.querySelector("loadmoreBtn");let l=1,L=20;m.addEventListener("submit",async r=>{r.preventDefault(),n.classList.remove("is-hidden"),d.innerHTML="";const e=r.currentTarget.elements.search.value.trim();if(e!=="")try{const a=await g(e);a.hits.length>0?y(a.hits):c.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040"})}catch(a){console.error("Error fetching data:",a)}finally{n.classList.add("is-hidden")}});u.addEventListener("click",w);async function w(){n.classList.remove("is-hidden");const r=m.elements.search.value.trim();try{const e=await g(r,l);e.hits.length>0?(y(e.hits),l+=1):(c.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040"}),u.classList.add("is-hidden"))}catch(e){console.error("Error fetching data:",e)}finally{n.classList.add("is-hidden")}}async function g(r,e){const a="42039867-09e41a1320e593858871044dc",s=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:L});return(await f.get(`https://pixabay.com/api/?${s}`)).data}const b=({largeImageURL:r,webformatURL:e,tags:a})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${r}">
            <img class="gallery-image" src="${e}" alt="${a}" data-test="${r}">
        </a>
    </li>`,y=r=>{const e=r.map(b).join("");d.innerHTML=e,p.refresh()};
//# sourceMappingURL=main-87553ff7.js.map
