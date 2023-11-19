const links = document.querySelectorAll('a');
const menuBtn = document.querySelector('.menu');

let menuOpen = false;

let menuSrc = './public/menu.svg';
let xSrc = './public/x.svg';

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.src = xSrc;
      menuOpen = true;
    } else {
      menuBtn.src = menuSrc;
      menuOpen = false;
    }
});

links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
});
