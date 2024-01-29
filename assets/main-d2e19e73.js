import{S as c,i as d}from"./vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const f=new c(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),i=document.querySelector(".gallery"),u=({webformatURL:o,largeImageURL:s,tags:r,likes:t,views:e,comments:n,downloads:a})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${r}" data-test="${s}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${t}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${e}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${n}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${a}</span>
            </div>
        </div>
    </li>`,m=o=>{console.log(o);const s=o.map(u).join("");i.innerHTML=s,f.refresh()},p=document.getElementById("form"),l=document.querySelector(".loader");p.addEventListener("submit",g);function g(o){o.preventDefault(),l.classList.remove("is-hidden"),i.innerHTML="";const s=o.currentTarget.elements.search.value.trim();s!==""&&y(s)}function y(o){const s="42039867-09e41a1320e593858871044dc",t=`https://pixabay.com/api/?${new URLSearchParams({key:s,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;return fetch(t).then(e=>e.json()).then(e=>{console.log(e.hits),e.hits.length>0?m(e.hits):d.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040"})}).catch(e=>{console.error("Error fetching data:",e)}).finally(()=>{l.classList.add("is-hidden")})}
//# sourceMappingURL=main-d2e19e73.js.map
