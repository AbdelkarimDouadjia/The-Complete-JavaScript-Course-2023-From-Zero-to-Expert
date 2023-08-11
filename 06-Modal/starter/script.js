'use strict';

// ///////////////////////////////////////
// /* 12 - Project #2: Modal Window */

// // Modal window is a popup window that is displayed on top of the website

// // *Selecting elements
// // we Start by selecting the elements we need to work with every time we start a new project , because that what uselly we do when we work on project like this
// // we need to select the elements that we need to manipulate and store them into a variable so that we can use them later on our code

// // we don't need to create the element because it already exist in the html file ,

// const modal = document.querySelector('.modal');
// const overlay =  document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsShowModal = document.querySelectorAll('.show-modal'); // we use querySelectorAll when we have more than one element that we want to select
// console.log(btnsShowModal);
// // it will return a node list: a list of all the elements that have the class show-modal , and it looks like an array but it's not an array

// // node list is a special type of collection that we can loop over it , but we can't use all the array methods on it

// // node list it work like loop , so we can loop over it and then we can add an event listener to each one of the buttons
// for(let i = 0; i < btnsShowModal.length ; i++) 
//     console.log(btnsShowModal[i].textContent); // and each one of them is an element


// ///////////////////////////////////////
// /* 13 - Working With Classes */
// // event listener and event handler is the same thing , we can use them interchangeably
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsShowModal = document.querySelectorAll('.show-modal'); 
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// const openModal = function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }
// for(let i = 0; i < btnsShowModal.length ; i++)
//     btnsShowModal[i].addEventListener('click',openModal);// => whenever we click on the button it will call the function openModal

// // for(let i = 0; i < btnsShowModal.length ; i++)
// //     btnsShowModal[i].addEventListener('click', function() {
// //         console.log(`button clicked ${i}`);
// //         modal.classList.remove('hidden');// classList is a property that we can use to manipulate classes on an element ,it allow to add or remove classes 
// //         // and it can use multiple classes at the same time for example: modal.classList.add('hidden', 'another-class');

// //         overlay.classList.remove('hidden');

// //         // or we can use style property to manipulate the style of an element
// //         // modal.style.display = 'block'; // we can use this method to manipulate the style of an element , but it's not a good practice to use it because it's not flexible and when we have a lot of properties to change it will be a lot of work to do
// //     });


// // we can use the function closeModal as event handler and make it a callback function , so we can use it in multiple places and by that we can avoid the code duplication and make our code more readable and we use the DRY principle
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// // conclusion: when we want to use the same function in multiple event listeners we can use the function name as a callback function , and pass that function name as an argument to the event listener, whitout the parentheses () because we don't want to call the function right away , we want to call it when the event happens



///////////////////////////////////////
/* 14 - Handling an "Esc" Keypress Event */
// we can use the keydown event to listen to the key that we press on the keyboard

// *keybords events:
// to listen to keyboard events we need to use addEventListener , because keypress event is simple just another type of event 
// Keyboard events are called global events because they do not happen on a specific element , and for global events like keyboard events we uselly listen on the whole document

// There is three types of keyboard events:
// 1- keydown: is fired as soon as we press the key(when we press any key on the keyboard)
// 2- keyup: is fired as soon as we release the key(when we release or lift up the key)
// 3- keypress: is fired continuously as long as we keep pressing the key(when we keep pressing the key)



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


// so this function handler will excute for any keypress that happens
// how we will know which key was pressed? we will use the event object that is automatically passed into the event handler function as an argument , and this object contains a lot of information about the event that happend , and we can use this object to figure out which key was pressed
// so the information about which key was preesed will be stored in the event object.
// and any time that event like this will curs, javascript enfect generate object , and that object will contain all the information about the event that happen , then we access to that object by using the parameter(argument) that we pass to the event handler function
// syntax:
// document.addEventListener('keydown', functionhandler(event object)

document.addEventListener('keydown', function (e) {
  console.log(e); // it will return a keyboard event object => KeyboardEvent {isTrusted: true, key: "Escape", code: "Escape", location: 0, ctrlKey: false, …}
  // we can use the key property to figure out which key was pressed
  console.log(e.key); // it will return the key that was pressed => Escape

  if(e.key === 'Escape' && !modal.classList.contains('hidden')){ // contains method check if the class is present(is it exist) or not(returns true or false)
    closeModal();
  }
});

