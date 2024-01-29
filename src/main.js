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
const loadMoreBtn = document.querySelector('loadmoreBtn');

let currentPage = 1;
let perPage = 20;

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    loader.classList.remove('is-hidden');
    galleryContainer.innerHTML = "";
    const keyword = e.currentTarget.elements.search.value.trim();

    if (keyword !== '') {
        try {
            const data = await fetchImages(keyword);
            if (data.hits.length > 0) {
                gallery(data.hits);
              
            } else {
                iziToast.error({
                    title: 'error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    messageColor: 'white',
                    backgroundColor: '#EF4040',
                });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            loader.classList.add('is-hidden');
        }
    }
});

loadMoreBtn.addEventListener('click', onLoadMore);

async function onLoadMore() {
    loader.classList.remove('is-hidden');
    const keyword = form.elements.search.value.trim();
    try {
        const data = await fetchImages(keyword, currentPage);
        if (data.hits.length > 0) {
            gallery(data.hits);
            currentPage += 1;
        } else {
            iziToast.error({
                title: 'error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
                messageColor: 'white',
                backgroundColor: '#EF4040',
            });
            loadMoreBtn.classList.add('is-hidden');
        }
    } catch (error) {
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

const galleryItem = ({ largeImageURL, webformatURL, tags }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" data-test="${largeImageURL}">
        </a>
    </li>`;

const gallery = (hits) => {
    const galleryItemHtml = hits.map(galleryItem).join('');
    galleryContainer.innerHTML = galleryItemHtml;
    modal.refresh();
};




