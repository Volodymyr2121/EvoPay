export function initializeAboutSlider() {
  const slides = document.querySelectorAll('.slider-content');
  const indicators = document.querySelectorAll('.indicator');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const sliderImages = document.querySelectorAll('.slider-image');

  let currentSlide = 1;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.style.display = 'none';
    });
    indicators.forEach(indicator => {
      indicator.classList.remove('active');
    });
    slides[index].style.display = 'block';
    indicators[index].classList.add('active');
  }

  showSlide(currentSlide);

  nextButton.addEventListener('click', function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevButton.addEventListener('click', function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function () {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
}
