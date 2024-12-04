document.getElementById('scroll-left').addEventListener('click', () => {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: -224, behavior: 'smooth' });
});

document.getElementById('scroll-right').addEventListener('click', () => {
    const container = document.querySelector('.card-container');
    container.scrollBy({ left: 224, behavior: 'smooth' });
});

document.getElementById('scroll-left-2').addEventListener('click', () => {
    const container = document.querySelector('.card-container-2');
    container.scrollBy({ left: -224, behavior: 'smooth' });
});

document.getElementById('scroll-right-2').addEventListener('click', () => {
    const container = document.querySelector('.card-container-2');
    container.scrollBy({ left: 224, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-primary');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', event => {
            const card = event.target.closest('.card');
            const title = card.querySelector('.card-title').textContent;
            const price = card.querySelector('.card-text').textContent;
            const imgSrc = card.querySelector('img').src;

            const product = { title, price, imgSrc, quantity: 1 };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const existingProduct = cart.find(item => item.title === product.title);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem('cart', JSON.stringify(cart));

            alert('Товар добавлен в корзину!');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-primary');
    const cartCounter = document.getElementById('cart-counter');

    let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount += 1;
            cartCounter.textContent = cartCount;
            localStorage.setItem('cartCount', cartCount);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartCounter = document.getElementById('cart-counter');

    const cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
    cartCounter.textContent = cartCount;

    window.addEventListener('storage', () => {
        const updatedCount = parseInt(localStorage.getItem('cartCount')) || 0;
        cartCounter.textContent = updatedCount;
    });
});