const carouselList = document.querySelector('.list');
const items = document.querySelectorAll('.item');
let currentIndex = 0;

function updateCarousel(index) {
    const offset = -index * 100;
    carouselList.style.transform = `translateX(${offset}vw)`;
}

function autoRotate() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel(currentIndex);
}

let autoRotateInterval = setInterval(autoRotate, 3000);

carouselList.addEventListener('mouseover', () => {
    clearInterval(autoRotateInterval);
});

carouselList.addEventListener('mouseout', () => {
    autoRotateInterval = setInterval(autoRotate, 3000);
});

function showSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(0)';
}

function hideSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.transform = 'translateX(-100%)';
}
