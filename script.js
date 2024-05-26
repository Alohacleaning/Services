### JavaScript (script.js)
Add JavaScript to toggle the header visibility:

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
