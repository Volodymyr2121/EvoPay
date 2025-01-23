import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper-user-reviews', {
  slidesPerView: 1.2,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  initialSlide: 2,
});
