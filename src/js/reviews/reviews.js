import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1.5,
  spaceBetween: 16,
  loop: true,
  centeredSlides: true,
  initialSlide: 2,
  simulateTouch: true,
  touchEventsTarget: '.swiper-wrapper',
  touchReleaseOnEdges: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
