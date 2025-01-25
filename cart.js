 // from here Shopping cart functionality

// Array to hold cart items
let cart = [];

// Add event listeners to "Add to Cart" buttons
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        
        // Get the product details
        let productItem = this.closest('.product-item');
        let productName = productItem.querySelector('h3').innerText;
        let productPrice = productItem.querySelector('p').innerText;
        let productImage = productItem.querySelector('img').src;

        // Create a cart item object
        let cartItem = {
            name: productName,
            price: productPrice,
            image: productImage
        };

        // Add the item to the cart
        cart.push(cartItem);

        // Display the cart contents
        displayCart();
    });
});

// and this Function to display cart contents
function displayCart() {
    let cartContent = document.querySelector('#cart-content');
    cartContent.innerHTML = '';

    cart.forEach((item, index) => {
        cartContent.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="50">
                <span>${item.name}</span>
                <span>${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// this show you the Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Array to hold cart items
let cart = [];

// Function to add item to cart
function addToCart(productId) {
    // Find the product details using the productId
    const productItem = document.getElementById(productId);
    const productName = productItem.querySelector('h3').innerText;
    const productPrice = productItem.querySelector('p').innerText;
    const productImage = productItem.querySelector('img').src;

    // Create a cart item object
    let cartItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    // Add the item to the cart
    cart.push(cartItem);

    // Display the cart contents
    displayCart();
}

// Function to display cart contents
function displayCart() {
    let cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = '';

    cart.forEach((item, index) => {
        cartContent.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="50">
                <span>${item.name}</span>
                <span>${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Display cart on page load
document.addEventListener('DOMContentLoaded', displayCart);

// Array to hold cart items
let cart = [];

// Function to add item to cart
function addToCart(productId) {
    const productItem = document.getElementById(productId);
    const productName = productItem.querySelector('h3').innerText;
    const productPrice = productItem.querySelector('p').innerText;
    const productImage = productItem.querySelector('img').src;

    let cartItem = {
        name: productName,
        price: productPrice,
        image: productImage
    };

    cart.push(cartItem);
    displayCart();
    alert('Product ' + productName + ' added to cart!');
}

// Function to display cart contents
function displayCart() {
    let cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = '';

    cart.forEach((item, index) => {
        cartContent.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" width="50">
                <span>${item.name}</span>
                <span>${item.price}</span>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

// Display cart on page load
document.addEventListener('DOMContentLoaded', displayCart);
