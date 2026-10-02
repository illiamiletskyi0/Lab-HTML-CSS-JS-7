(function () {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const panel = document.getElementById('mobile-menu');

  if (!toggle || !panel) {
    return;
  }

  function isOpen() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  function openMenu() {
    panel.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu(returnFocus) {
    panel.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');

    if (returnFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener('click', function () {
    if (isOpen()) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isOpen()) {
      closeMenu(true);
    }
  });

  panel.addEventListener('click', function (event) {
    if (event.target.closest('a') && isOpen()) {
      closeMenu(false);
    }
  });

  const desktop = window.matchMedia('(min-width: 64rem)');

  desktop.addEventListener('change', function (event) {
    if (event.matches && isOpen()) {
      closeMenu(false);
    }
  });
})();
