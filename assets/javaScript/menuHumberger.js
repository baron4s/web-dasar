const humbergerMenu = document.querySelector('.humberger');
const menuNav = document.querySelector('.menu-list');
humbergerMenu.addEventListener('click', function () {
  menuNav.classList.toggle('active');
  humbergerMenu.classList.toggle('change');
});
