### JavaScript (script.js)
```javascript
// JavaScript for Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

// JavaScript for Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

showSlides();

// JavaScript for Get Quote Button
function getQuote() {
    alert('Get a free quote today!');
}

// JavaScript for Job Application Button
function applyForJob() {
    const form = document.getElementById('application-form');
    form.style.display = 'block';
}
