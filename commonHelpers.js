import{S as g,i as f,a as y}from"./assets/vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();const v=new g(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),m=document.querySelector(".gallery"),L=document.getElementById("form"),d=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),b=document.getElementById("input");let r=1,w=40,c=null,u=0;l.addEventListener("click",E);L.addEventListener("submit",async s=>{if(s.preventDefault(),m.innerHTML="",r=1,c=s.currentTarget.elements.search.value.trim(),c!==""){d.classList.remove("is-hidden");try{const e=await p(c,r);u=Math.ceil(e.totalHits/40),e.hits.length>0?(h(e.hits),l.classList.remove("is-hidden"),r>=u&&l.classList.add("is-hidden")):(f.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),l.classList.add("is-hidden"),d.classList.add("is-hidden"))}catch(e){console.error("Error fetching data:",e)}b.value=""}});async function E(){d.classList.remove("is-hidden"),r+=1;try{const s=await p(c,r);h(s.hits),r>=u&&(f.error({title:"error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),l.classList.add("is-hidden"));const e=m.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})}catch(s){console.error("Error fetching data:",s)}finally{d.classList.add("is-hidden")}}async function p(s,e){const n="42039867-09e41a1320e593858871044dc",o=new URLSearchParams({key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:w});return(await y.get(`https://pixabay.com/api/?${o}`)).data}const $=({webformatURL:s,largeImageURL:e,tags:n,likes:o,views:t,comments:a,downloads:i})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${s}" alt="${n}" data-test="${e}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${o}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${t}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${a}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${i}</span>
            </div>
        </div>
    </li>`,h=s=>{const e=s.map($).join("");m.insertAdjacentHTML("beforeend",e),v.refresh()};
//# sourceMappingURL=commonHelpers.js.map
