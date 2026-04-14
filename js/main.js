document.addEventListener('DOMContentLoaded', function () {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // === Sticky Header Shadow ===
  const header = document.getElementById('header');

  function updateHeaderShadow() {
    if (window.scrollY > 10) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderShadow, { passive: true });

  // === Mobile Menu ===
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  const drawerOverlay = document.getElementById('drawerOverlay');

  function openMenu() {
    hamburger.classList.add('active');
    nav.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    if (nav.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  drawerOverlay.addEventListener('click', closeMenu);

  // Close menu when clicking a nav link
  var navLinks = nav.querySelectorAll('.header__link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });
});
