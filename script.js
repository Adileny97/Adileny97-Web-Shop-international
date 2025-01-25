document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Example of dynamic content loading for Shop page
    if (window.location.pathname.includes('shop.html')) {
        fetch('/shop-content.html')
            .then(response => response.text())
            .then(data => {
                document.querySelector('.collection-grid').innerHTML = data;
            });
    }
});
// Lightbox functionality for gallery
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    lightbox.style.display = 'none';
});
