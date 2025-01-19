//Mobile Modal

const openMenuBut = document.querySelector('.open-menu-but');
const closeMenuBut = document.querySelector('.close-menu-but');
const mobileNav = document.querySelector('.mobile-nav');

openMenuBut.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
});

closeMenuBut.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
});
