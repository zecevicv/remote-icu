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

if (window.innerWidth < 1024) {
  document.querySelector('.header-links').style.display = 'none';
  setTimeout(() => {
    document.querySelector('.header-links').style.display = 'flex';
  }, 250);
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
if (document.querySelector('.stories .swiper-container')) {
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
}

/* #Our Blog Slider
    ======================================================= */
if (document.querySelector('.our-blog .swiper-container')) {
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
}

/* #Related Posts Slider
    ======================================================= */
if (document.querySelector('.related-posts .swiper-container')) {
  new Swiper('.related-posts .swiper-container', {
    loop: true,
    pagination: {
      el: '.related-posts .swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 3
      }
    }
  });
}

/* #Mini Blog Slider
    ======================================================= */
if (document.querySelector('.mini-blog-slider .swiper-container')) {
  new Swiper('.mini-blog-slider .swiper-container', {
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.mini-blog-slider .swiper-pagination',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2.5
      }
    }
  });
}

/* #Popup
  ======================================================= */
if (document.querySelector('.popup')) {
  const popupClose = document.querySelector('.popup .popup-close');

  popupClose.addEventListener('click', (e) => {
    popupClose.closest('.popup').classList.remove('show');
  });
}