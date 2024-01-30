import{S as h,i as m,a as g}from"./assets/vendor-2618a76b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=n(e);fetch(e.href,a)}})();const y=new h(".gallery a",{captionDelay:250,captions:!0,captionsData:"alt",captionPosition:"bottom"}),u=document.querySelector(".gallery"),v=document.getElementById("form"),l=document.querySelector(".loader"),c=document.querySelector(".load-more-btn"),L=document.getElementById("input");let d=1,b=40,i=null;c.addEventListener("click",w);v.addEventListener("submit",async s=>{if(s.preventDefault(),l.classList.remove("is-hidden"),u.innerHTML="",d=1,i=s.currentTarget.elements.search.value.trim(),i!==""){try{const t=await f(i,d);t.hits.length>0?(p(t.hits),c.classList.remove("is-hidden")):(c.classList.add("is-hidden"),m.error({title:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}))}catch(t){console.error("Error fetching data:",t)}finally{l.classList.add("is-hidden")}L.value=""}});async function w(){l.classList.remove("is-hidden"),d+=1;try{const s=await f(i,d);s.hits.length>0?p(s.hits):(m.error({title:"error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",messageColor:"white",backgroundColor:"#EF4040",maxWidth:500}),c.classList.add("is-hidden"));const t=u.getBoundingClientRect().height;window.scrollBy({top:t,behavior:"smooth"})}catch(s){console.error("Error fetching data:",s)}finally{l.classList.add("is-hidden")}}async function f(s,t){const n="42039867-09e41a1320e593858871044dc",o=new URLSearchParams({key:n,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:b});return(await g.get(`https://pixabay.com/api/?${o}`)).data}const E=({webformatURL:s,largeImageURL:t,tags:n,likes:o,views:e,comments:a,downloads:r})=>`
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
    </li>`,p=s=>{const t=s.map(E).join("");u.insertAdjacentHTML("beforeend",t),y.refresh()};
//# sourceMappingURL=commonHelpers.js.map
