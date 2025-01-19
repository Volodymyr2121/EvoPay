const privacyBurger = document.querySelector('.privacy-burger');
const closeMenuBut = document.querySelector('.close-menu-but');
const mobileNav = document.querySelector('.mobile-nav');

privacyBurger.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
});

closeMenuBut.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
});
