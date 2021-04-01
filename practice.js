/*
// Selecting the elements
const header = document.querySelector('.header');
const allSelector = document.querySelectorAll('.section');
console.log(allSelector);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
// insertAdjacentHTML is the best and preferred one approach over here. To see its implementation you should refer to the bankist app.
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and functionality. <button class="btn btn--close-cookie">Got it!</button>';

// prepend method adds the html component at the first place after the div element.
header.prepend(message);

// append does the opposite of prepend.
// document.querySelector('header').append(message);

// before adds the html component just before the div component.
// header.before(message);

// after does the opposite pf before.
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// Styles
// This is how we do set different CSS property
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.width);

// Computed styles
console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

// Standard attributes
// Standard attributes are those attributes which are gonna be present automatically for their respective tags.
// For standard attribute we can just retrieve their values using this below code. But for non-standard attribute we have to use getAttribute property.
logo.alt = 'Hey';
console.log(logo.alt);
console.log(logo.src);

// Non-standard
// Non-standard are just opposite of standard.
console.log(logo.design);
console.log(logo.getAttribute('designer'));

// Set the new attribute
// A new attribute gets generated dynamically.
logo.setAttribute('company', 'Bankist');

// Classes
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();
*/
