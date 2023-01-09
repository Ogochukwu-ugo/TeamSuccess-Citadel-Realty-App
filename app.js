//Calling for active state and navigation
const navbar = document.querySelector('.navbar');
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
        link.setAttribute('aria-current', 'page');
    }
});

//On click navigate to register page

const startBtn = document.getElementById('signUp');

signUp.addEventListener('click', () => {
window.location.href = "./register.html";
});

//This leads to detail page

const button = document.getElementById('blogBtn');
blogBtn.addEventListener('click', () => {
    window.location.assign("./details.html");
});
