export function initializeGallerySlider() {
  const galleryList = document.querySelector('.gallery-list-wrapper ul');
  const indicators = document.querySelectorAll('.indicatorr');
  const prevButtons = document.querySelectorAll('.prevv');
  const nextButtons = document.querySelectorAll('.nextt');
  const galleryItems = document.querySelectorAll('.gallery-li');
  let currentIndex = 4;

  const updateSlider = index => {
    galleryList.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('gallery-active', i === index);
    });
    galleryItems.forEach((item, i) => {
      item.classList.toggle('gallery-image-active', i === index);
    });
  };

  nextButtons.forEach(nextButton => {
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % indicators.length;
      updateSlider(currentIndex);
    });
  });

  prevButtons.forEach(prevButton => {
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + indicators.length) % indicators.length;
      updateSlider(currentIndex);
    });
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  updateSlider(currentIndex);
}
