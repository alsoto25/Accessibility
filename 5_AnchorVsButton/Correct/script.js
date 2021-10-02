window.addEventListener('load', () => {
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const popup = document.getElementsByClassName('js-popup')[0];
  const popupOverlay = document.getElementsByClassName('js-popup-overlay')[0];
  const openBtn = Array.from(document.getElementsByClassName('js-popup-open'));
  const closeBtn = Array.from(document.getElementsByClassName('js-popup-close'));

  openBtn.map(btn => btn.addEventListener('click', e => {
    const firstFocusableEl = e.currentTarget.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')[0];

    html.classList.add('no-scroll');
    body.classList.add('no-scroll');
    popup.classList.remove('hidden');
    popupOverlay.classList.remove('hidden');

    addTrapFocus(popup);
    firstFocusableEl.focus();
  }));

  closeBtn.map(btn => btn.addEventListener('click', () => {
    html.classList.remove('no-scroll');
    body.classList.remove('no-scroll');
    popup.classList.add('hidden');
    popupOverlay.classList.add('hidden');

    removeTrapFocus(popup);
    openBtn[0].focus();
  }));
});

// Focus trap functionality
function addTrapFocus(element) {
  element.addEventListener('keydown', focusTrap);
};

function removeTrapFocus(element) {
  element.removeEventListener('keydown', focusTrap);
};

function focusTrap(e) {
  const focusableEls = e.currentTarget.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];
  const KEYCODE_TAB = 9;
  const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

  if (!isTabPressed) {
    return;
  }

  if ( e.shiftKey ) /* shift + tab */ {
    if (document.activeElement === firstFocusableEl) {
      lastFocusableEl.focus();
        e.preventDefault();
      }
    } else /* tab */ {
    if (document.activeElement === lastFocusableEl) {
      firstFocusableEl.focus();
        e.preventDefault();
      }
    }
};
