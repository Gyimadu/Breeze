document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });
});

let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll('.revealable');

let windowHeight = window.innerHeight;

function reveal(){
    for (let i = 0; i < revealableContainers.length; i++) {
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add('active');
        } else {
            revealableContainers[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);