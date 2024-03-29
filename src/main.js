import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import axios from "axios";

const modal = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captions: true,
    captionsData: "alt",
    captionPosition: 'bottom',
});

const galleryContainer = document.querySelector('.gallery');
const form = document.getElementById('form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
const addImput = document.getElementById('input');
const music = document.querySelector('.music');

let currentPage = 1;
let perPage = 40;
let searchQuery = null;
let maxPage = 0;
loadMoreBtn.addEventListener('click', onLoadMore);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    galleryContainer.innerHTML = "";
    currentPage = 1;
    searchQuery = e.currentTarget.elements.search.value.trim();
    

    if (searchQuery !== '') {
         loader.classList.remove('is-hidden');
        try {
            music.play();
            const data = await fetchImages(searchQuery, currentPage);
            maxPage = Math.ceil(data.totalHits / 40);
            if (data.hits.length > 0) {
                gallery(data.hits);
                loadMoreBtn.classList.remove('is-hidden');

                if (currentPage >= maxPage) {
                    loadMoreBtn.classList.add('is-hidden');
                  
                }
                

            } else {
                iziToast.error({
                    title: 'error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                    maxWidth: 500
                });
                stopAudio();
                loadMoreBtn.classList.add('is-hidden');
                loader.classList.add('is-hidden');
            }

        } catch (error) {
            console.error('Error fetching data:', error);
            stopAudio();
        } 
        addImput.value = '';
     
        
    }
});
function stopAudio() {
    music.pause();
    music.currentTime = 0;
}



async function onLoadMore() {
    loader.classList.remove('is-hidden');
    currentPage += 1;
    try {
        const data = await fetchImages(searchQuery, currentPage);
        gallery(data.hits)

        if (currentPage >= maxPage) {
           
            iziToast.error({
                title: 'error',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
                messageColor: 'white',
                backgroundColor: '#EF4040',
                maxWidth: 500
            });

            loadMoreBtn.classList.add('is-hidden');
        }
        const galleryContainerHeight = galleryContainer.getBoundingClientRect().height;
        window.scrollBy({
            top: galleryContainerHeight,
            behavior: "smooth",
        });
    }
    catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loader.classList.add('is-hidden');
    }
}


async function fetchImages(keyword, currentPage) {
    const key = '42039867-09e41a1320e593858871044dc';
    const params = new URLSearchParams({
        key: key,
        q: keyword,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: currentPage,
        per_page: perPage
    });

    const response = await axios.get(`https://pixabay.com/api/?${params}`);
    return response.data;
}

const galleryItem = ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" data-test="${largeImageURL}">
        </a>
        <div class="image-details">
           
            <div class="info-container">
                <span class="info-label">Likes:</span>
                <span class="info-value">${likes}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Views:</span>
                <span class="info-value">${views}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Comments:</span>
                <span class="info-value">${comments}</span>
            </div>
            <div class="info-container">
                <span class="info-label">Downloads:</span>
                <span class="info-value">${downloads}</span>
            </div>
        </div>
    </li>`;

const gallery = (hits) => {
    const galleryItemHtml = hits.map(galleryItem).join('');
    galleryContainer.insertAdjacentHTML('beforeend', galleryItemHtml);
    modal.refresh();
};




