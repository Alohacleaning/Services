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
}

/* Header */
header {
    background: #f8b400;
    color: #fff;
    padding: 20px 0;
    position: relative;
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
}

header nav ul li {
    display: inline-block;
    margin: 0 15px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
}

#toggleButton {
    display: none;
}

/* Banner Section */
.banner {
    background: url('cleaning-banner1.jpg') no-repeat center center/cover;
    color: #fff;
    text-align: center;
    padding: 100px 20px;
}

.banner h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
}

#quoteButton {
    background: #fff;
    color: #f8b400;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#quoteButton:hover {
    background: #f8b400;
    color: #fff;
}

/* About Section */
#about {
    padding: 50px 20px;
    background: #f4f4f4;
    text-align: center;
}

#about .team {
    margin-top: 20px;
}

#about .team img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
}

/* Services Section */
#services {
    padding: 50px 20px;
}

#services .service-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#services .service {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    flex: 1 1 calc(33% - 40px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#services .service h3 {
    color: #f8b400;
    margin-bottom: 15px;
}

/* Testimonials Section */
#testimonials {
    padding: 50px 20px;
    background: #f4f4f4;
    text-align: center;
}

#testimonials .testimonial {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px auto;
    max-width: 600px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Careers Section */
#careers {
    padding: 50px 20px;
}

#careers .job-listings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

#careers .job {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    flex: 1 1 calc(33% - 40px);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#careers .job button {
    background: #f8b400;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#careers .job button:hover {
    background: #333;
}

/* Contact Section */
#contact {
    padding: 50px 20px;
    text-align: center;
}

#contact form {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

#contact form label {
    display: block;
    margin-bottom: 5px;
}

#contact form input, 
#contact form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

#contact form button {
    background: #f8b400;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#contact form button:hover {
    background: #333;
}

/* Footer */
footer {
    background: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
}

footer ul {
    list-style: none;
    padding: 0;
}

footer ul li {
    display: inline-block;
    margin: 0 10px;
}

footer ul li a {
    color: #fff;
    text-decoration: none;
}

footer .social-media a {
    display: inline-block;
    margin: 0 10px;
    color: #f8b400;
    text-decoration: none;
}

/* Responsive Design */
@media (max-width: 768px) {
    header nav ul {
        display: none;
    }

    #toggleButton {
        display: block;
        background: #f8b400;
        color: #fff;
        border: none;
        padding: 10px;
        font-size: 24px;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
    }

    header nav ul.active {
        display: block;
        text-align: center;
    }

    .service-list, .job-listings {
        flex-direction: column;
    }

    .service, .job {
        flex: 1 1 100%;
    }
}
