import{S as v,i as h,a as L}from"./assets/vendor-2618a76b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const b=new v(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),p=document.querySelector(".gallery"),w=document.getElementById("form"),d=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),E=document.getElementById("input"),u=document.querySelector(".music");let n=1,S=40,c=null,m=0;l.addEventListener("click",$);w.addEventListener("submit",async s=>{if(s.preventDefault(),p.innerHTML="",n=1,c=s.currentTarget.elements.search.value.trim(),c!==""){d.classList.remove("is-hidden");try{u.play();const e=await g(c,n);m=Math.ceil(e.totalHits/40),e.hits.length>0?(y(e.hits),l.classList.remove("is-hidden"),n>=m&&l.classList.add("is-hidden")):(h.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),f(),l.classList.add("is-hidden"),d.classList.add("is-hidden"))}catch(e){console.error("Error fetching data:",e),f()}E.value=""}});function f(){u.pause(),u.currentTime=0}async function $(){d.classList.remove("is-hidden"),n+=1;try{const s=await g(c,n);y(s.hits),n>=m&&(h.error({title:"error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),l.classList.add("is-hidden"));const e=p.getBoundingClientRect().height;window.scrollBy({top:e,behavior:"smooth"})}catch(s){console.error("Error fetching data:",s)}finally{d.classList.add("is-hidden")}}async function g(s,e){const r="42039867-09e41a1320e593858871044dc",o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:S});return(await L.get(`https://pixabay.com/api/?${o}`)).data}const C=({webformatURL:s,largeImageURL:e,tags:r,likes:o,views:t,comments:a,downloads:i})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${e}">
            <img class="gallery-image" src="${s}" alt="${r}" data-test="${e}">
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
    </li>`,y=s=>{const e=s.map(C).join("");p.insertAdjacentHTML("beforeend",e),b.refresh()};
//# sourceMappingURL=commonHelpers.js.map
