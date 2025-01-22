import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// const swiper = new Swiper('.gallery-swiper-mobile', {
//   slidesPerView: 1,
//   autoplay: {
//     delay: 2000,
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'bullets',
//     clickable: 'true',
//   },
// });
const bullets = document.querySelectorAll('.custom-bullet');
const swiper = new Swiper('.gallery-swiper-mobile', {
  slidesPerView: 1,
  loop: true,
  on: {
    slideChange: function () {
      updatePagination(swiper.realIndex); // Real index accounts for looping
    },
  },
});
function updatePagination(activeIndex) {
  bullets.forEach((bullet, index) => {
    if (index === activeIndex) {
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });
}
// const swiperDesktop = new Swiper('.swiper', {
//   loop: true,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
