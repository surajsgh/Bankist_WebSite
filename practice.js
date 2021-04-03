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

const h1 = document.querySelector('h1');

// Going downwards
// querySelector or querySelectorAll helps to find the dom tree no matter how deep inside the dom tree.
console.log(h1);
console.log(h1.querySelectorAll('.highlight'));

// Includes everything
console.log(h1.childNodes);

// Includes only html tags
console.log(h1.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going Upwards (Both the lines gives the same result.)
console.log(h1.parentNode);
console.log(h1.parentElement);

// closest helps to find the dom tree no matter how far away from the dom tree.
h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Going sideways
// Includes just html tags
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Includes everything
console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// DOMContentLoaded Event
// This event is passed as soon as the whole html file has been parsed i.e. downloaded and executed and then converted into the dom tree but always remember that JavaScript file needs to be executed to before that event is passed. However, this event doesn't wait for images and other resources to load.
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// Load event
// Unlike DOMContentLoaded, this event doesn't wait for other resources like images or CSS file to get loaded completely.
// This event is fired as soon as the complete page is loaded completely.
window.addEventListener('load', function (e) {
  console.log('The complete page is loaded!', e);
});

// beforeunload
// This event is used to show the prompt asking if the user wants to leave the page.
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
*/
