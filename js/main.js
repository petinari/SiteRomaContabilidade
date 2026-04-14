document.addEventListener('DOMContentLoaded', function () {

  // === Initialize Lucide Icons ===
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // === Sticky Header ===
  var header = document.getElementById('header');

  function updateHeader() {
    if (window.scrollY > 20) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // === Mobile Menu ===
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  var overlay = document.getElementById('drawerOverlay');

  function openMenu() {
    hamburger.classList.add('active');
    nav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function () {
    nav.classList.contains('active') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  nav.querySelectorAll('.header__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('active')) closeMenu();
  });

  // === Scroll Reveal ===
  var revealSections = document.querySelectorAll('.reveal');
  var revealItems = document.querySelectorAll('.reveal-item');

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        sectionObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  revealSections.forEach(function (el) {
    sectionObserver.observe(el);
  });

  var itemObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Stagger delay based on item index within its parent
        var parent = entry.target.parentElement;
        var siblings = parent.querySelectorAll('.reveal-item');
        var index = Array.prototype.indexOf.call(siblings, entry.target);
        entry.target.style.transitionDelay = (index * 0.1) + 's';
        entry.target.classList.add('revealed');
        itemObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

  revealItems.forEach(function (el) {
    itemObserver.observe(el);
  });
});
