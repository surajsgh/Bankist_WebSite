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
