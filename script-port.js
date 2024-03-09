function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        behavior: 'smooth',
        top: section.offsetTop
    });
}

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = event.target.getAttribute('href').slice(1);
        scrollToSection(sectionId);
    });
});


var sidenavbar = document.querySelector(".side-navbar");

function showNavbar() {
    sidenavbar.style.display = "block";
}

function closeNavbar() {
    sidenavbar.style.display = "none";
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}