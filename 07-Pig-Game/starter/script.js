'use strict';

// /////////////////////////////
// /* 15 -PROJECT #3: Pig Game */
// // Selecting elements
// // getElementById is a special method that we can use to select an element by it's id
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');
// // diceEl.style.display = 'none';

// /////////////////////////////
// /* 16 - Rolling the Dice */
// // console.log(Math.ceil(Math.random() * 6));
// // Math.ceil => rounds up to the next integer
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let currentScore = 0;
// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//     // 1. Generating a random dice roll
//     const dice = Math.ceil(Math.random() * 6);
//     console.log(dice);

//     //2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     //3. Check for rolled 1
//     if(dice !== 1) {
//         // Add dice to current score
//         currentScore += dice;
//         current0El.textContent = currentScore; // CHANGE LATER
//     }else {
//         // Switch to next player
//     }
// });

// /////////////////////////////
// /* 17 - Switching the Active Player */
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   // 1. Generating a random dice roll
//   const dice = Math.ceil(Math.random() * 6);
//   console.log(dice);

//   //2. Display dice
//   diceEl.classList.remove('hidden');
//   diceEl.src = `dice-${dice}.png`;

//   //3. Check for rolled 1
//   if (dice !== 1) {
//     // Add dice to current score
//     currentScore += dice;
//     // current0El.textContent = currentScore; // CHANGE LATER
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     // Switch to next player
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     // toggle() is a method that we can use on any element that we have selected
//     // toggle() => if the class is there, it will remove it, if it's not there, it will add it
//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
//   }
// });

// /////////////////////////////
// /* 18 - Holding Current Score */
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// // Switching the active player
// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.ceil(Math.random() * 6);
//     console.log(dice);

//     //2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     //3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       // current0El.textContent = currentScore; // CHANGE LATER
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     //2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 20) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');
//       document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//       document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

/////////////////////////////
/* 19 - Resetting the Game */
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

// Switching the active player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore; // CHANGE LATER
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});
// Resetting the game
btnNew.addEventListener('click', init);
