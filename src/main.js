import { initializeAboutSlider } from './js/about/about.js';
import { initializeGallerySlider } from './js/gallery/gallery.js';

//MOBILE MENU
const openMenuBut = document.querySelector('.open-menu-but');
const closeMenuBut = document.querySelector('.close-menu-but');
const mobileNav = document.querySelector('.mobile-nav');
const menuLinks = document.querySelectorAll('.menu-mobile a');

openMenuBut.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
});

closeMenuBut.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });
});

document.addEventListener('click', event => {
  const isClickInsideMenu = mobileNav.contains(event.target);
  const isClickOnOpenButton = openMenuBut.contains(event.target);

  if (!isClickInsideMenu && !isClickOnOpenButton) {
    mobileNav.classList.add('hidden');
  }
});

// GALLERY IN ABOUT SECTION
document.addEventListener('DOMContentLoaded', () => {
  initializeAboutSlider();
});

// GALLERY SECTION
initializeGallerySlider();
