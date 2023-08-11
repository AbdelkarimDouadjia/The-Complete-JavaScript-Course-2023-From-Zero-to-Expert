// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// //////////////////////////////
// /* 3- Setting Up Prettier and VS Code */
// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2037 - birthYear;
// console.log(x);
// console.log('hello world!');
// console.log('hello world!');

// //////////////////////////////
// /* 4- Using Google, StackOverflow and MDN */
// // 1- https://developer.mozilla.org/en-US/

// // 2- https://stackoverflow.com/

// // 3- https://caniuse.com/

// // 4- https://babeljs.io/

// // 5- https://prettier.io/

// // 6- https://es6-features.org/
// // 7- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// // 8- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// // 9- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// // 10- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

// //////////////////////////////
// /* 9- Debugging with the Console and Breakpoints */

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     // C) FIX
//     value: Number(prompt('Degrees celsius:')),
//   };

//   // B) FIND
//   //   debugger;
//   console.table(measurement);

//   //   console.log(measurement.value);
//   //   console.warn(measurement.value);
//   //   console.error(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// // A) IDENTIFY
// console.log(measureKelvin());

//////////////////////////////
/* 10- Coding Challenge #1 */
// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`...${arr[i]}°C in ${i + 1} days `);
//   }
// };

// 1)- Understanding the Problem
//- Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2)- Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with °C
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = arr => {
  let str = '... ';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `;
  }
  return str;
};
console.log(printForecast(data1));
console.log(printForecast(data2));
