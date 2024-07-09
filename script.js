document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const toggleButton = document.getElementById('toggleButton');
    const navMenu = document.querySelector('header nav ul');

    toggleButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Slideshow Functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Initial slide setup
    showSlide(currentSlide);

    // Get a Free Quote Button
    const quoteButton = document.getElementById('quoteButton');
    quoteButton.addEventListener('click', function() {
        alert('Please contact us at +1(502)442-2320 for a free quote.');
    });

    // Apply for Job Button
    const applyButton = document.querySelector('#careers .job button');
    const applicationForm = document.getElementById('application-form');

    applyButton.addEventListener('click', function() {
        applicationForm.style.display = 'block';
    });

    // Submit Job Application Form
    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your application has been submitted. Thank you!');
        applicationForm.style.display = 'none';
        applicationForm.reset();
    });
});
