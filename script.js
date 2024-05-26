### Complete JavaScript (`script.js`)

```javascript
// Toggle the header navigation for mobile devices
function toggleHeader() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('show');
}

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName('slides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Display the job application form
function applyForJob() {
    const form = document.getElementById('application-form');
    form.style.display = 'block';
}

// Dummy function for the "Get a Free Quote" button
function getQuote() {
    alert('Thank you for your interest! Please contact us via phone or email for a free quote.');
}
