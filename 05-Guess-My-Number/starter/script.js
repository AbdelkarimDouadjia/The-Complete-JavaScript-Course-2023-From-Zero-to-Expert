'use strict';

// ///////////////////////////////////////
// /* 3- Selecting and Manipulating Elements */
// // Select elements
// // querySelector is a method that is available on the document object
// console.log(document.querySelector('.message')
// ); // it returns the whole element => <h1 class="message">Start guessing...</h1>
// // We can also change the text content of the element
// // textContent is a property that returns the text content of an element
// console.log(document.querySelector('.message').textContent); // Start guessing...

// ///////////////////////////////////////
// /* 4- What's the DOM and DOM Manipulation */
// // DOM: Document Object Model
// // Structured representation of HTML documents
// // Allows JavaScript to access HTML elements and styles to manipulate them
// // DOM is not part of JavaScript, it's part of the Web APIs
// // DOM is a very complex API, but we will only use a tiny part of it
// // DOM is a tree structure
// // DOM is generated from an HTML document, but it's not the same thing
// // DOM is stored in the browser's memory
// // DOM methods are available on all DOM elements
// // DOM methods are not part of JavaScript, they are part of the Web APIs

// ///////////////////////////////////////
// /* 5- Selecting and Manipulating Elements */
// // Set the content of the element with textContent property
// document.querySelector('.message').textContent = 'Correct Number! 🎉';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// // Set and read the value of the input element with value property
// // Set the value of the input element
// document.querySelector('.guess').value = 23;
// // Read the value of the input element
// console.log(document.querySelector('.guess').value);

// ///////////////////////////////////////
// /* 6- Handling Click Events */
// // event listener is something that happend on the page for example a mouse click, a keypress, a mouse movement, etc.
// // event listener is to wait for a certain event to happen then react to it

// // The first argument is the type of the event
// // The second argument is the function that will be called as soon as the event happens
// // The function is called the event handler
// // The event handler is not called by us, it's called by the event listener

// // Add an event listener to the check button
// document.querySelector('.check').addEventListener('click', ()=> {// we need to use a function expression here

//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess); // it returns a string because the value of any input from the user is always a string

//     // When there is no input
//     if(!guess) { // if guess is falsy '0' ...ect
//       document.querySelector('.message').textContent = '⛔ No number!';
//     }
// });
// // so the function called as soon as the event happens is called the event handler

// // syntax for the event listener property:
// // addEventListener(name of the event, function that will be called as soon as the event happens)
// // addEventListener is a method that is available on all DOM elements

// ///////////////////////////////////////
// /* 7- Implementing the Game Logic */
// // Implementing the game logic
// // Implementing the highscore
// // Implementing the reset button

// // in this section we add the secretNumber variable and the score variable

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number!';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number! 🎉';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// ///////////////////////////////////////
// /* 8- Manipulating CSS Styles */
// // Manipulating CSS Styles

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.number').textContent = secretNumber;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number!';

//     // When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number! 🎉';
//     // select the body element
//     // We can change the background color of the body element using the style property
//     // style property is a property that use to change the style of an element
//     // style property is a property that is changing the inline style of an element
//     // inline style is a style that is written directly in the HTML document
//     // so we will got : <body style="background-color: rgb(96, 179, 71);">...</body>
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     // when we are always manipulating or changing the style of an element we use the value as a string
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').style.transition = 'all 1s';

//     // When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// ///////////////////////////////////////
// /* 9 - Coding Challenge #1 */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number!';

//     // When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number! 🎉';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').style.transition = 'all 1s';

//     // When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// ///////////////////////////////////////
// /* 10- Implementing Highscores */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No number!';

//     // When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number! 🎉';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').style.transition = 'all 1s';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = score;
//     }

//     // When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }

//     // When guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = ' 📉 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game!';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });

// ///////////////////////////////////////
// /* 11 - Refactoring Our Code: The DRY Principle */

// // DRY: Don't Repeat Yourself
// // We can use the DRY principle to make our code more efficient and readable
// // we delete the duplicated code and we put it once in one code
// // refactoring is restructuring the code but whitout changing how it works
// // so we do refactoring to improve the code and to ulliminate the duplicated code

// // we can use the ternary operator to make the code more efficient

// // we use functions to remove the duplicated code and to use the DRY principle and to make the code more efficient and more readable

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;
// const displayMessage = message => {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', () => {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);
//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = '⛔ No number!';
//     displayMessage('⛔ No number!');

//     // When player wins
//   } else if (guess === secretNumber) {
//     // document.querySelector('.message').textContent = 'Correct Number! 🎉';
//     displayMessage('Correct Number! 🎉');
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').style.transition = 'all 1s';

//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = score;
//     }
//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       // document.querySelector('.message').textContent = guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!';
//       displayMessage(guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       // document.querySelector('.message').textContent = '💥 You lost the game!';
//       displayMessage('💥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }

// });

// document.querySelector('.again').addEventListener('click', () => {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   // document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
