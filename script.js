// Add this to your JS file or inside a <script> tag

// document.addEventListener('DOMContentLoaded', function() {
//     window.addEventListener('scroll', function() {
//         const navbar = document.querySelector('.navbar');
//         if (window.scrollY > 20) {
//             navbar.classList.add('Sticky');
//         } else {
//             navbar.classList.remove('Sticky');
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const navbar = this.document.querySelector('.navbar');
        if (this.window.scrollY > 20) {
            navbar.classList.add('Sticky')
        }else {
            navbar.classList.remove('Sticky')
        }
    })
});

const navMenu = document.querySelectorAll('#nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-view")
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navMenu.forEach(link => {
    link.addEventListener('click', () => menuOpenButton.click());
});