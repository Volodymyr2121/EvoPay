import Swiper from 'swiper/bundle';

const openMenuBut = document.querySelector('.open-menu-but');
const closeMenuBut = document.querySelector('.close-menu-but');
const mobileNav = document.querySelector('.mobile-nav');

openMenuBut.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
});

closeMenuBut.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
});

// document.addEventListener('DOMContentLoaded', function () {
//   const swiper = new Swiper('.swiper', {
//     loop: true, // для безкінечного циклу
//     navigation: {
//       nextEl: '.slider-button.next',
//       prevEl: '.slider-button.prev',
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//   });

//   // Додаткові обробники подій для кнопок навігації та пагінації
//   swiper.on('slideChange', function () {
//     const nextButton = document.querySelector('.slider-button.next');
//     const prevButton = document.querySelector('.slider-button.prev');

//     // Оновлення пагінації
//     const paginationBullets = document.querySelectorAll(
//       '.swiper-pagination-bullet'
//     );
//     paginationBullets.forEach(bullet =>
//       bullet.classList.remove('swiper-pagination-bullet-active')
//     );
//     paginationBullets[swiper.realIndex].classList.add(
//       'swiper-pagination-bullet-active'
//     );
//   });

//   // Ініціалізація для початкового стану пагінації
//   const paginationBullets = document.querySelectorAll(
//     '.swiper-pagination-bullet'
//   );
//   if (paginationBullets.length > 0) {
//     paginationBullets[swiper.realIndex].classList.add(
//       'swiper-pagination-bullet-active'
//     );
//   }
// });

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true, // Для безкінечного циклу
    navigation: {
      nextEl: '.slider-button.next',
      prevEl: '.slider-button.prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
