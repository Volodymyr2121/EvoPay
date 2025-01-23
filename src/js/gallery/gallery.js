export function initializeGallerySlider() {
  const galleryList = document.querySelector('.gallery-list-wrapper ul');
  const indicators = document.querySelectorAll('.indicatorr');
  const prevButton = document.querySelector('.prevv');
  const nextButton = document.querySelector('.nextt');
  let currentIndex = 4;

  const updateSlider = index => {
    galleryList.style.transform = `translateX(-${index * 100}%)`; // Переміщення списку
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index); // Активний індикатор
    });
  };

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % indicators.length;
    updateSlider(currentIndex);
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
    updateSlider(currentIndex);
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });
}
