import { initializeAboutSlider } from './js/about/about.js';

//MOBILE MENU
const openMenuBut = document.querySelector('.open-menu-but');
const closeMenuBut = document.querySelector('.close-menu-but');
const mobileNav = document.querySelector('.mobile-nav');

openMenuBut.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
});

closeMenuBut.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
});

// GALLERY IN ABOUT SECTION
document.addEventListener('DOMContentLoaded', () => {
  initializeAboutSlider();
});
