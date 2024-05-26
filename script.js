### JavaScript (script.js)

Ensure the JavaScript functions are correctly implemented:

```javascript
function toggleHeader() {
    const header = document.getElementById('header');
    if (header.style.display === 'flex') {
        header.style.display = 'none';
    } else {
        header.style.display = 'flex';
    }
}

function getQuote() {
    alert('Get a free quote!');
}

function applyForJob() {
    document.getElementById('application-form').style.display = 'block';
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
    currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(showSlides, 3000);

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});
