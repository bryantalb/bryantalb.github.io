const menu = document.querySelector('.menu');
const close = document.querySelector('.close-menu');
const nav = document.querySelector('.primary-nav');

menu.addEventListener('click', () => {
  nav.classList.add('open-menu');
});

close.addEventListener('click', () => {
  nav.classList.remove('open-menu');
});
