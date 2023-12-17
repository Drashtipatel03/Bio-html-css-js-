function showContactInfo() {
    var contactInfo = document.getElementById('contact-info');
    var btn = document.getElementById('show-info-btn');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
        btn.innerText = 'show detailedbio Info';
       //
    } else {
        contactInfo.style.display = 'none';
        btn.innerText = 'Show Contact Info';
        location.replace("./detailedbio.html");
    }
}