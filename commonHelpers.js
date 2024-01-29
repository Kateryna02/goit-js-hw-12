import{S as c,i as d,a as f}from"./assets/vendor-2618a76b.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=new c(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),l=document.querySelector(".gallery"),u=document.getElementById("form"),i=document.querySelector(".loader");document.querySelector("loadmoreBtn");let m=20;u.addEventListener("submit",async o=>{o.preventDefault(),i.classList.remove("is-hidden"),l.innerHTML="";const a=o.currentTarget.elements.search.value.trim();if(a!=="")try{const s=await y(a);s.hits.length>0?h(s.hits):d.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040"})}catch(s){console.error("Error fetching data:",s)}finally{i.classList.add("is-hidden")}});async function y(o,a){const s="42039867-09e41a1320e593858871044dc",n=new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",page:a,per_page:m});return(await f.get(`https://pixabay.com/api/?${n}`)).data}const g=({webformatURL:o,largeImageURL:a,tags:s,likes:n,views:e,comments:t,downloads:r})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${a}">
            <img class="gallery-image" src="${o}" alt="${s}" data-test="${a}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${n}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${e}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${t}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${r}</span>
            </div>
        </div>
    </li>`,h=o=>{const a=o.map(g).join("");l.innerHTML=a,p.refresh()};
//# sourceMappingURL=commonHelpers.js.map
