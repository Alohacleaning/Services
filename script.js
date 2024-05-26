/* Basic Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body and Font Settings */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
}

/* Header */
header {
    background: #f8b400;
    color: #fff;
    padding: 10px 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

header .logo {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

header nav {
    text-align: center;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin: 0 15px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

#toggleButton {
    display: none;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    z-index: 10;
}

#toggleButton:hover {
    color: #fff;
}

/* Banner Section */
.banner {
    position: relative;
    color: #fff;
    text-align: center;
    padding: 100px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 400px;
}

.slideshow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
}

.slides {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    opacity: 0.8;
}

.slides.active {
    display: block;
}

.banner h1 {
    font-size: 36px;
    margin: 0;
    width: 90%;
    z-index: 1;
}

.banner button {
    background-color: #2a9d8f;
    border: none;
    color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    margin-top: 20px;
    z-index: 1;
}

/* Main Content Sections */
section {
    padding: 40px 20px;
}

/* About Section */
#about .team {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#about .team img {
    max-width: 100%;
    height: auto;
}

/* Services Section */
.service-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.service {
    flex: 1 1 calc(33.333% - 20px);
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Testimonials Section */
.testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.testimonial {
    flex: 1 1 calc(50% - 20px);
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Careers Section */
.job-listings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.job {
    flex: 1 1 calc(50% - 20px);
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#application-form {
    display: none;
    margin-top: 20px;
}

#application-form label {
    display: block;
    margin-bottom: 5px;
}

#application-form input,
#application-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}

/* Contact Section */
#contact form label {
    display: block;
    margin-bottom: 5px;
}

#contact form input,
#contact form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
}

/* Footer */
footer {
    background: #264653;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer ul {
    list-style: none;
    padding: 0;
}

footer ul li {
    display: inline;
    margin: 0 10px;
}

footer ul li a {
    color: #fff;
    text-decoration: none;
}

.footer-content .social-media a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
}

/* Media Queries */
@media screen and (max-width: 768px) {
    header nav ul {
        display: none;
        flex-direction: column;
        align-items: center;
        background: #f8b400;
        position: absolute;
        width: 100%;
        top: 80px; /* Adjust as needed based on header height */
        left: 0;
    }

    header nav ul li {
        margin: 15px 0;
    }

    #toggleButton {
        display: block; /* Make the toggle button visible */
    }
}
