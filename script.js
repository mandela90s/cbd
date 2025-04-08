// Age Verification
function verifyAge(confirmed) {
    const ageGate = document.getElementById('age-verify');
    if(confirmed) {
        ageGate.style.display = 'none';
        localStorage.setItem('ageVerified', 'true');
    } else {
        window.location.href = 'https://www.google.com';
    }
}

// Product Loader
function loadProducts() {
    const container = document.querySelector('.product-container');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

// Cart System
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if(existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href = 'cart.html';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if(!localStorage.getItem('ageVerified')) {
        document.getElementById('age-verify').style.display = 'flex';
    }
    loadProducts();
});
