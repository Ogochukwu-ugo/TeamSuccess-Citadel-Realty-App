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

const log = document.getElementById('log');

log.addEventListener('click', () => {
window.location.href = "./login.html";
});

//This leads to detail page

const images = document.getElementsByClassName("featImage");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
        window.location.href = './details.html';
    })
}

//This will cause the button when clicked to navigate to a page where more pictures can be viewd

// const button = document.getElementById('blogBtn');
// blogBtn.addEventListener('click', () => {
//     window.location.assign("./details.html");
// });

// Buy Sell Rent Navigation

const buy = document.getElementById("features");
buy.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById(e.target.getAttribute("herf").substr(1)).scrollIntoView({
        behavior: 'smooth'
    });

});
const sell = document.getElementById("features");
sell.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById(e.target.getAttribute("herf").substr(1)).scrollIntoView({
        behavior: 'smooth'
    });

});

const rent = document.getElementById("features");
rent.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById(e.target.getAttribute("herf").substr(1)).scrollIntoView({
        behavior: 'smooth'
    });

});

// const agent = document.getElementById("agents");
// agent.addEventListener("click", function (e) {
//     e.preventDefault();

//     document.getElementById(e.target.getAttribute("herf").substr(1)).scrollIntoView({
//         behavior: 'smooth'
//     });

// });

const blog = document.getElementById("blog");
blog.addEventListener("click", function (e) {
    e.preventDefault();

    document.getElementById(e.target.getAttribute("herf").substr(1)).scrollIntoView({
        behavior: 'smooth'
    });

});