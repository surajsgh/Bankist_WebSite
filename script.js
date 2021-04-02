'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

///////////////////////////////////////////// Modal Window Feature/////////////////////////////////////////////
const openModal = function (e) {
  // We do add e.preventDefault() over here to solve this small bug.
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////Smooth Scrolling Effect/////////////////////////////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // Dimension of setion 1.
  const slCoords = section1.getBoundingClientRect();
  console.log(slCoords);

  // dimension of the button
  console.log(e.target);
  console.log(e.target.getBoundingClientRect());

  // Scrolling dimension of the button
  console.log('Current Scroll (X/Y)', window.pageXOffset, pageYOffset);

  // Dimension of viewport
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   slCoords.left + window.pageXOffset,
  //   slCoords.top + window.pageYOffset
  // );

  // Smooth Scrolling
  // window.scrollTo({
  //   left: slCoords.left + window.pageXOffset,
  //   top: slCoords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern smooth scrolling
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////////////////// Page Navigation //////////////////////////////////////////////////

// We could've used this strategy but we chose not to because this strategy wont't perform efficiently in complex situation.
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// 1. Add event listener to common parent element.
// 2. Determine what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (el) {
  el.preventDefault();
  // console.log(el.target);

  // Matching Strategy
  if (el.target.classList.contains('nav__link')) {
    const id = el.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

/////////////////////////////////////////////Tabbed Component/////////////////////////////////////////////

const tabsContainer = document.querySelector('.operations__tab-container');
const tab = document.querySelectorAll('.operations__tab');
const content = document.querySelectorAll('.operations__content');

// Event Delegation
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard Clause
  if (!clicked) {
    return;
  }

  // Remove active states
  tab.forEach(el => el.classList.remove('operations__tab--active'));
  content.forEach(el => el.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

/////////////////////////////////////////////Menu fade animation/////////////////////////////////////////////

const nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el != link) {
        el.style.opacity = opacity;
      }
      logo.style.opacity = opacity;
    });
  }
};

// Passing args into event handler function
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

/////////////////////////////////////////////Sticky Navigation Bar/////////////////////////////////////////////

// We're gonna achieve the end-result by using intersection observer API.
// Intersection API allows our code to check how our target element intersects the other element or specific viewport.

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   // This is the root element our target element intersect to.
//   // root: null i.e. Viewport
//   root: null,
//   // This is the percentage of intersection at which the observer callback will be called.
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const obsCallback = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
  // Stops the observation and optimise the performance.
  // observer.unobserve(entry.target);
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const headObserver = new IntersectionObserver(obsCallback, obsOptions);
headObserver.observe(header);

///////////////////////////////////////////// Reveal /////////////////////////////////////////////

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) {
    return;
  }
  entry.target.classList.remove('section--hidden');
  // Stops the observation and optimise the performance.
  observer.unobserve(entry.target);
};

const obsRevealOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  obsRevealOptions
);

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////////// Lazy image loading /////////////////////////////////////////////

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) {
    return;
  }

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // Apply the lazy-load functionality.
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////////// Slides /////////////////////////////////////////////

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let currSlide = 0;
const maxSlides = slides.length;

slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';

slides.forEach(
  (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
);

btnRight.addEventListener('click', function () {
  if (currSlide === maxSlides - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slides.forEach(
    (slide, i) =>
      (slide.style.transform = `translateX(${100 * (i - currSlide)}%)`)
  );
});
