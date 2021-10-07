window.addEventListener('load', () => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const popup = Array.from(document.getElementsByClassName('js-popup'));
  const openBtn = Array.from(document.getElementsByClassName('js-popup-open'));
  const closeBtn = Array.from(document.getElementsByClassName('js-popup-close'));

  openBtn.map(btn => btn.addEventListener('click', () => {
    // Problem 1: There is no focus switch to the popup
    // Problem 2: There is no focus trap activation inside the popup
    // Problem 3: Screen Reader users are able to leave popup when opened
    popup.map(element => element.classList.remove('hidden'));
    html.classList.add('no-scroll');
    body.classList.add('no-scroll');
  }));

  closeBtn.map(btn => btn.addEventListener('click', () => {
    // Problem 4: When popup is closed, focus is not restored to opening button
    popup.map(element => element.classList.add('hidden'));
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
  }));
});