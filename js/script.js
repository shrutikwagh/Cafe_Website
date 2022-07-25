// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');
// if (bar) {
//     bar.addEventListener('click', () => {
//         nav.classList.add('active');
//     })
// }



const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function() {
    links.classList.toggle("show_nav");
})