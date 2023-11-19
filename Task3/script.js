const links = document.querySelectorAll('a');
const linkWrappers = document.querySelectorAll('.link');
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('nav');

let menuOpen = false;

let menuSrc = './public/menu.svg';
let xSrc = './public/x.svg';

menuBtn.addEventListener('click', () => {
  handleMenu(menuOpen);
});

const handleMenu = (isOpen) => {
  if (window.innerWidth <= 1008) {
    if (!isOpen) {
      menuBtn.src = xSrc;
      menuOpen = true;
      nav.classList.add('open');
    } else {
      menuBtn.src = menuSrc;
      menuOpen = false;
      nav.classList.remove('open');
    }
  }
}

linkWrappers.forEach(linkWrapper => {
  linkWrapper.addEventListener('click', (e) => {
    e.preventDefault();
    handleMenu(menuOpen);
  });
});