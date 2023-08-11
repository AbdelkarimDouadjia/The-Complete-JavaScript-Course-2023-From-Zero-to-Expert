"use strict";
// //////////////////////////////
// /* 2- Strict Mode */
// // strict mode is a special mode that we can activate in JS to write a secure JS code

// // strict mode forbids us to do certain things and it creates visible errors in the developer console
// // it should the 'strict mode' be on the first statement in the script
// // we can activate strict mode for specific function or specific block but it recommended to activate it for the whole script
// // strict mode helps us to avoid bugs and errors in our code
// let hasDriversLicense = false;
// let passTest = true;
// if(passTest) hasDriverLicense = true; // this will not work in strict mode
// if(hasDriversLicense) console.log('T can drive :D');

// // strict mode it introduces a short list of variable names that are reserved for features that might be added to the language in the future
// // for example reserved keywords: interface, private, protected, package, static, if ... etc
// const interface = 'Audio';
// const private = 534;
// const if = 23;

//////////////////////////////
// /* 3- Functions */
// // function is a piece of code that we can reuse over and over again
// // we can pass data into a function and we can return data from a function
// function logger() {
//     console.log('My Name is Jonas');
// }

// // calling / running / excuting / invoking function
// logger();
// logger();
// logger();
// const result = logger();
// console.log(result); // undefined
// // we can use functions to avoid duplicate code and  more organized code
// // function arguments or parameters are like variables that are specific to this function
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// // we can store the return value of the function in a variable
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));
// // we defining a specific values to the arguments and it will get passed into the function parameters
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number('23'); // Number is a built-in function in JS

// //////////////////////////////
// /* 4- Function Declarations vs. Expressions */
// // function declaration
// // function declaration is a function that can be used before it's declared in the code
// function calcAge1(birthYear) { // we can only return one value from a function and we can only return variables or a value or an expression
//     return 2037 - birthYear;
// }
// // capture or store the return value of the function in a variable
// const age1 = calcAge1(1991);

// // function expression
// // function expression produces a value and we can store it in a variable
// // function expression is a function that can't be used before it's declared in the code

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);
// console.log(age1, age2);

// // the difference between function declaration and function expression is that we can use function declaration before it's declared in the code but we can't use function expression before it's declared in the code
// // we can use function expression to pass a function into another function
// // we can use function expression to write a function inside an if statement or Object or array
// const age3 = calcAge3(1991); // this will work because function declaration can be used before it's declared in the code
// console.log(age3);
// function calcAge3(birthYear) {
//     return 2037 - birthYear;
// }

// //////////////////////////////
// /* 5- Arrow Functions */
// // arrow function is a special form of function expression that is shorter and faster to write and it added in ES6
// // arrow function doesn't get an arguments keyword

// // Syntax Arrow Function
// // argument => return value // if we have one argument we can delete the parentheses
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3  = calcAge3(1991);
// console.log(age3);
// // (argument1, argument2) => return value // if we have more than one argument we can't delete the parentheses

// // if we have more than one line of code we need to use curly braces and we need to use the return keyword
// // (argument1, argument2) => {
// //     return value
// // }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;  // we need to use the return keyword
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// //////////////////////////////
// /* 6- Functions Calling Other Functions */
// // we can call a function inside another function

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// //////////////////////////////
// /* 7- Reviewing Functions */

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 -age;

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1950, 'Mike'));

// //////////////////////////////
// /* 8- Coding Challenge #1 */

// const calcAverage = (score1 , score2, score3) => (score1 + score2 + score3) / 3;

// // Test 1
// let avgDolphins  = calcAverage(44, 23, 71);
// let avgKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= avgKoalas*2) {
//         console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (avgKoalas >= avgDolphins*2) {
//         console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//     console.log(`No team wins...`);
// }
// }
// checkWinner(avgDolphins, avgKoalas);

// // Test 2
// avgDolphins = calcAverage(85, 54, 41);
// avgKoalas = calcAverage(23, 34, 27);
// checkWinner(avgDolphins, avgKoalas);

// //////////////////////////////
// /* 9- Introduction to Arrays */
// // array is a data structure that we use to store multiple values in one variable
// // array is a data structure that can hold multiple values and it's ordered and it's zero-based and it's mutable (can reasigned) and it's can hold different types of values and it's can hold empty values and it's can hold more arrays and it's can hold objects and it's can hold functions and it's can hold symbols and it's can hold big integers

// // without an array
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // array literal syntax
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// // array constructor syntax
// const years = new Array(1991, 1984, 2008, 2020);

// // get out the stored values in the array
// console.log(friends[0]);
// console.log(friends[2]);

// // the length of the array
// console.log(friends.length);
// // get the last element in the array
// console.log(friends[friends.length - 1]);

// // we can mutate or reasigned the array
// friends[2] = 'Jay';
// console.log(friends);

// // only primitive values are immutable (in const variable) but arrays is not a primitive value so we can mutate it
// // we can't reasigned the whole array but we can mutate it
// // friends = ['Bob', 'Alice']; // this will not work => error

// // we can use an array to store different types of values
// const firstName = 'Jonas'
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const year = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[year.length - 1]);

// const ages = [calcAge(year[0]), calcAge(year[1]),calcAge(year[3]), calcAge(year[year.length - 1])];
// console.log(ages);

// //////////////////////////////
// /* 10- Basic Array Operations (Methods) */
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add Elements
// // we can add elements to the end of an array
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength); // it return the length of the array

// // we can add elements to the beginning of an array
// friends.unshift('John');
// console.log(friends);

// // Remove Elements
// // Remove elements from the end of an array
// friends.pop(); // last and there is no arguments
// const popped = friends.pop();
// console.log(friends);
// console.log(popped); // it return the removed element

// // Remove elements from the beginning of an array
// friends.shift(); // first and there is no arguments and it return the removed element
// console.log(friends);

// // Find Elements
// // Find the index of an element in an array
// console.log(friends.indexOf('Steven')); // 1
// console.log(friends.indexOf('Bob')); // value not exist in the array => -1

// // includes method to check if a value exist in an array and it return true or false
// // it's a new method added in ES6
// friends.push(23);
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes('23')); // false
// // it use the strict equality operator so it doesn't do type coercion
// if(friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

// //////////////////////////////
// /* 11- Introduction to Objects */
// // object is another data structure that we use to store key-value pairs

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];
// console.log(jonasArray);

// // Objects we use curly braces and we use key-value pairs and we use colon to separate the key and the value and we use comma to separate the key-value pairs

// // so in objects we can assign names to each value and we can access these values using these names or keys and it was not possible in arrays

// // there is many ways to create an object but using the curly braces is the most common way

// // Object literal syntax
// /*
// const objectName = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
//     property1: propertyValue1
// };
//  */

// const jonas = {
//     firstName: 'Jonas', // firstName is a property and Jonas is a value
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// // console.log(jonas);

// // the different between Objects and Arrays is that in Objects we can define the property names and we can access the values using these property names but in Arrays we can't define the property names and we can access the values using the index number
// // the big different between Objects and Arrays is that in Objects the order of the values doesn't matter but in Arrays the order of the values matters
// // so in objects the order of the values doesn't matter

// // So we use objects to describe the more complex(instructure data) data and we use arrays to describe the more ordered data

// //////////////////////////////
// /* 12- Coding Challenge #2 */

// // const calcTip = function(bill) {
// //     return bill >= 50 && bill<=300 ? (bill * 15) / 100 : (bill * 20) /100;
// // }
// const calcTip = bill =>  bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

// console.log(calcTip(100));

// const bills = [125, 555, 44];
// // const bills = new Array(125, 555, 44);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// //////////////////////////////
// /* 13- Introduction to Objects Methods */

// // we can use dot and brackets notation to get out the value property from the object
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schledtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas); // the whole object but unordered

// // *Dot Notation Syntax
// // objectName.keyName;
// console.log(jonas.lastName); // value of the property lastName

// // *Bracket Notation Syntax
// // objectName['keyName'];
// console.log(jonas['lastName']); // value of the property lastName

// // inside the square brackets we can put any expression that we want
// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // console.log(jonas.'last' + nameKey); // => error

// const interestedIn = prompt('what do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else { // undefined
//     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }

// // Add new properties to the object
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // Challenge
// // "Jonas has 3 friends, and his best friend is called Michael"
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`); // we use operator precedence to get the correct result

// //////////////////////////////
// /* 14- Object Methods */
// // we can add functions to objects and we call them methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   // we use function expression because it produce a value
//   // clacAge: function(birthYear) {
//   //     return 2037 - birthYear;
//   // },

//   // *use this keyword
//   //     calcAge: function() {
//   //         console.log(this); // this keyword is the object that is calling the jonas object

//   //         return 2037 - this.birthYear;// this ketword is calling another property inside jonas object

//   // return 2037 - jonas.birthYear; // we can use the object name instead of this keyword but if we change the name of the object we need to change it here too
//   //     },

//   // *create a property incide a function
//   calcAge: function () {
//     this.age = 2037 - this.birthYear; // we create a new property and store the result of the function in a property in the object
//     return this.age;
//   },

//   // *using the properties and methods inside the Method
//   getSummary: function () {
//     // we call calcAge() instead of this.age because it can calcAge() is not called before so the this.age will be undefined
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
//   }
// };

// console.log(jonas.calcAge()); // dot notation
// // console.log(jonas['calcAge'](1991)); // bracket notation

// // Challenge
// // "Jonas is a 46-year old teacher, and he has a driver's license"

// console.log(jonas['getSummary']());

// // Arrays is also an object and they have methods too




// //////////////////////////////
// /* 15- Coding Challenge #3 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.BMI = this.mass / (this.height * this.height);
//     return this.BMI;
//   }
// };

// console.log(
//   john.calcBMI() > mark.calcBMI()
//     ? `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`
//     : `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`
// );


// //////////////////////////////
// /* 16- Iteration: The for Loop */
// // for loop is a control structure that allows us to automate repetitive tasks in our code
// // for loop is a statement that allows us to repeat a certain block of code a certain number of times

// //*Syntax for loop
// // for (loop counter; condition; final expression) {
// //     // code block
// // }

// //*whitout for loop
// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// // with for loop
// // for loops keeps running while condition is TRUE
// for(let rep = 1; rep <=10 ; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }



// //////////////////////////////
// /* 17- Looping Arrays, Breaking and Continuing */
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // console.log(jonas[2]);
// // console.log(jonas[3]);
// // console.log(jonas[4]);

// // create new array to store the typeof the elements in jonas array
// const types = []; // empty array


// for(let i = 0; i < jonas.length; i++) {
//     // Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     // Fillig types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]); // we can use push method to add elements to the array
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break statements
// // continue statement is to exit the current iteration of the loop and continue to the next one
// // break statement is to completely terminate the whole loop

// console.log('--- ONLY STRINGS ---');
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] !== 'string') continue; // if the element is not a string continue to the next iteration or jump to the next iteration
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('--- BREAK WITH NUMBER ---');
// for(let i = 0; i < jonas.length; i++) {
//     if(typeof jonas[i] === 'number') break; // if the element is a number break the loop or exit the loop
//     console.log(jonas[i], typeof jonas[i]);
// }


// //////////////////////////////
// /* 18- Looping Backwards and Loops in Loops */
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// // 4, 3, ..., 0
// for(let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);
// }

// // loop inside a loop
// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise} --------`);

//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//     }
// }



// //////////////////////////////
// /* 19- The while Loop */
// // while loop is another way to automate repetitive tasks in our code
// // while loop is a statement that will execute a certain block of code as long as a condition is true

// //*Syntax while loop
// // while(condition) {
// //     // code block
// // }

// // for(let rep = 1; rep <=10 ; rep++) {
// //     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// // }

// // with while loop
// // while loops keeps running while condition is TRUE
// // let rep = 1;
// // while(rep <= 10) {
// //     console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
// //     rep++;
// // }

// // math.random() generate a random number between 0 and 1
// // math.trunc() remove the decimal part of the number
// let dice = Math.trunc(Math.random() * 6) + 1;

// while(dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice === 6) console.log('Loop is about to end...');
// }




// //////////////////////////////
// /* 20- Coding Challenge #4 */
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52
// ];
// const tips = [];
// const totals = [];

// const calcTip = function(bill) {
//     return bill >= 50 && bill<=300 ? (bill * 15) / 100 : (bill * 20) /100;
// }

// for(let i = 0; i < bills.length; i++) {
//     tips[i]=calcTip(bills[i]);
//     totals.push(bills[i] + tips[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function(arr) {
//     let sum = 0;
//     for(let i = 0; i <= arr.length - 1 ; i++) {
//         // sum = arr[i] + sum;
//         sum += arr[i];
//     }
//      return sum / (arr.length); 
// }

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));







