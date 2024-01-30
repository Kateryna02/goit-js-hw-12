import{S as y,i as f,a as v}from"./assets/vendor-2618a76b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const L=new y(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),m=document.querySelector(".gallery"),b=document.getElementById("form"),d=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),w=document.getElementById("input"),u=document.querySelector(".music");let c=1,E=40,i=null;l.addEventListener("click",S);b.addEventListener("submit",async s=>{if(s.preventDefault(),d.classList.remove("is-hidden"),m.innerHTML="",c=1,i=s.currentTarget.elements.search.value.trim(),i!==""){try{u.play();const t=await h(i,c);t.hits.length>0?(g(t.hits),l.classList.remove("is-hidden")):(l.classList.add("is-hidden"),f.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),p())}catch(t){console.error("Error fetching data:",t),p()}finally{}w.value=""}});function p(){u.pause(),u.currentTime=0}async function S(){d.classList.remove("is-hidden"),c+=1;try{const s=await h(i,c);s.hits.length>0?g(s.hits):(f.error({title:"error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),l.classList.add("is-hidden"));const t=m.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}catch(s){console.error("Error fetching data:",s)}finally{d.classList.add("is-hidden")}}async function h(s,t){const n="42039867-09e41a1320e593858871044dc",o=new URLSearchParams({key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:E});return(await v.get(`https://pixabay.com/api/?${o}`)).data}const $=({webformatURL:s,largeImageURL:t,tags:n,likes:o,views:e,comments:a,downloads:r})=>`
    <li class="gallery-item">
        <a class="gallery-link" href="${t}">
            <img class="gallery-image" src="${s}" alt="${n}" data-test="${t}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${o}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${e}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${a}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${r}</span>
            </div>
        </div>
    </li>`,g=s=>{const t=s.map($).join("");m.insertAdjacentHTML("beforeend",t),L.refresh()};
//# sourceMappingURL=commonHelpers.js.map
