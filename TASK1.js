// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555'; // Darker background on scroll
        } else {
            navbar.style.backgroundColor = '#333'; // Original background
        }
    });
});
