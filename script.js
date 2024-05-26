### JavaScript (script.js)
```javascript
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

function toggleMenu() {
    let nav = document.getElementById("nav");
    let navLinks = nav.getElementsByClassName("nav-links")[0];
    navLinks.classList.toggle("show");
}

function getQuote() {
    alert("Please contact us at +1 (480) 343-7488 or email alohacleanigco.ky@gmail.com for a free quote.");
}

function applyForJob() {
    document.getElementById("application-form").style.display = "block";
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert("Thank you for your message/application. We will get back to you shortly.");
        form.reset();
    });
});
