const carouselList = document.querySelector('.list');
const items = document.querySelectorAll('.item');
const thumbnails = document.querySelectorAll('.thumbnails img');
let currentIndex = 0;

function updateCarousel(index) {
    const offset = -index * 100;
    carouselList.style.transform = `translateX(${offset}vw)`;
}

function autoRotate() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(index);
    });
});

let autoRotateInterval = setInterval(autoRotate, 3000);

carouselList.addEventListener('mouseover', () => {
    clearInterval(autoRotateInterval);
});

carouselList.addEventListener('mouseout', () => {
    autoRotateInterval = setInterval(autoRotate, 3000);
});
