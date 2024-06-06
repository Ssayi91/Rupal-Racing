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

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'flex') {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'flex';
    }
}
let cart = [];

function addToCart(serviceName, servicePrice) {
    const cartItem = cart.find(item => item.name === serviceName);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ name: serviceName, price: servicePrice, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(serviceName) {
    cart = cart.filter(item => item.name !== serviceName);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-from-cart');
        removeButton.onclick = () => removeFromCart(item.name);
        
        li.appendChild(removeButton);
        cartItemsContainer.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotalContainer.textContent = total.toFixed(2);
}

function displayContactNumber() {
    const contactNumber = document.getElementById('contact-number');
    contactNumber.style.display = 'block';
}

function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    
    displayContactNumber();
    const orderNotification = document.getElementById('order-notification');
    orderNotification.style.display = 'block';
}
document.querySelector('.footer-carousel').addEventListener('mouseover', () => {
    document.querySelector('.carousel-slide').style.animationPlayState = 'paused';
});

document.querySelector('.footer-carousel').addEventListener('mouseout', () => {
    document.querySelector('.carousel-slide').style.animationPlayState = 'running';
});
