/* #Header
    ======================================================= */

// Scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('header-dark');
  } else {
    header.classList.remove('header-dark');
  }
});

if (window.scrollY > 50) {
  header.classList.add('header-dark');
} else {
  header.classList.remove('header-dark');
}

// Hamburger
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

/* #Collapse
    ======================================================= */
const collapsibles = document.querySelectorAll('.collapsible');

if (collapsibles) {
  collapsibles.forEach((collapsible) => {
    collapsible.addEventListener('click', (e) => {
      if (e.target.closest('.collapse-toggler')) {
        collapsible.classList.toggle('show');
      }
    });
  });
}

/* #Stories Slider
    ======================================================= */
new Swiper('.stories .swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.stories .swiper-button-next',
    prevEl: '.stories .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 2
    }
  }
});

/* #Our Blog Slider
    ======================================================= */
new Swiper('.our-blog .swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.our-blog .swiper-button-next',
    prevEl: '.our-blog .swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1.4
    },
    1024: {
      slidesPerView: 3.2
    }
  }
});