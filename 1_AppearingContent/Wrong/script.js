window.addEventListener('load', () => {
  const slides = Array.from(document.getElementsByClassName('js-slide'));
  const slideButton = Array.from(document.getElementsByClassName('js-switch-button'));

  slideButton.map(btn =>
    btn.addEventListener('click',
      () => {
        slideButton.map(slideBtn => slideBtn.classList.toggle('active'));
        slides.map(slide => slide.classList.toggle('hidden'));
      }));
});