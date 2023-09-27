// ////////////////////////////////////
// /* 4- Linking a JavaScript File */
// let js = "amazing";
// if(js === "amazing") alert("JavaScript is FUN!");
// // *Function to apear the result of an operation in the console
// console.log(40 + 8 + 23 - 10);

// ////////////////////////////////////
// /* 5- Values and Variables */
// console.log("Jonas");
// console.log(23);

// // *Declaring a variable and storing a value into a variable
// let firstName = "Matilda";
// // *Printing the value of the variable in the console
// console.log(firstName);

// // *inligal variable name
// // let 3years; => SyntaxError
// // let jonas&matilda; => SyntaxError

// // *Name a variable with reserved js keywords
// // let new; => SyntaxError
// // let function; => SyntaxError

// // *two sumbols are allowed to use in a variable name: $ and _
// // let $function = 27; // => no error
// // let _function = 27; // => no error

// // *"name" word is not recommended to use in a variable name but it is working
// // let name = "jonas";

// // *don't use uppercase letters in a variable name because it is used in OOP
// // let Person = "jonas"; // => no error
// // let person = "jonas"; // => no error

// // * don't name a variable with a variable name letter all in uppercase because it is used for constants
// // let PI = 3.1415; // => no error
// // let pi = 3.1415; // => no error

// // name your variables with descriptive names
// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// // *don't use abbreviations
// let job1 = "programmer";
// let job2 = "teacher";

// ////////////////////////////////////
// /* 6- Practice Assignements */
// // Assignement Values and Variables
// /*
// 1.Declare variables called 'country', 'continent'and 'population'and assign their values according to your own country(population in millions)
// 2.Log their values to the console*/
// let country = "Algeria";
// let contient = "Africa";
// let population = 44.3;
// console.log(country);
// console.log(contient);
// console.log(population);

// ////////////////////////////////////
// /* 7 - Data Types */
// // *Primitive data types
// // boolean
// // true;
// // console.log(true);
// // the value that hold data type not the variable
// let javscriptIsFun = false;
// console.log(javscriptIsFun);
// let test;
// let test2 = null; // null is an object

// // typeof is an operator like + or - and it i used to know the type of the value
// // and it's return a string of the type of the value
// console.log(typeof true);
// console.log(typeof javscriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
// console.log(typeof test);
// console.log(typeof test2);

// // *reassigning a variable with a different data type
// javscriptIsFun = 'YES!';
// console.log(typeof javscriptIsFun);

// //* undefined and null are two different things
// let year;
// console.log(year); // => undefined
// console.log(typeof year); // => undefined
// year = 1991;
// console.log(typeof year);  // => number
// // an error in the typeof operator
// console.log(typeof null); // => object this is a bug in the typeof operator

// // *Practice Assignements
// /*
// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console
// */
// let isIsland = true;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log("Hello");
// console.log(typeof country);

// ////////////////////////////////////
// /* 8 - let, const and var */
// // * let and const were introduced in ES6(modern JavsaScript)
// // * var is the old way to declare a variable

// //* let: we use let to declare a variable that can be changed later
// // reassigning a variable or mutating a variable
// // we use let to declare an empty variable exp: let age; than => age = 30;

// //* const: we use const to declare a variable that can't supposed to be changed later
// const birthYear = 1991;
// // birthYear = 1990; // => Error because we can't reassign a const variable
// // const is immutated variable
// // we can not create empty const variable
// // exp: const job; // => Error
// // recomandation: use const by default and let only when you need to reassign a variable
// // * var is the old way to declare a variable and it complety avoid it
// // var is the same as let but it has some different behaviors
// // we reassign a variable with var without declaring it like let
// var job = 'programmer';
// job = 'teacher';
// // var is function scoped and let is block scoped
// // var is not a good practice to use it

// // *Practice Assignements
// /*
// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens
// */
// language = "Arabic";
// const motherCountry = "Algeria";
// const motherContient = "Africa";

// ////////////////////////////////////
// /* 9 - Basic Operators */
// // *Math operators
// // subtraction operator
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = 2037 - 2018;
// console.log(ageJonas, ageSarah);
// // Multiplication *  Division /  Exponentiation **  Modulus %
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// // + operator is used for string concatenation
// const firstNamme= 'Jonas';
// const lastNamme = 'Schmedtmann';
// console.log(firstNamme+ ' ' + lastNamme);

// // *Assignment operators
// // equal = operator
// let x = 10 + 5; // => 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * x = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// // *Comparison operators
// // we use it to produce a boolean values
// // >, <, >=, <=
// // > greater than
// console.log(ageJonas > ageSarah); // => true
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

// // *Practice Assignements
// /*
// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population,
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than
// Finland?
// 4. The average population of a country is 33 million people. Does your country
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million
// people speak portuguese'
// */
// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// const averagePopulation = 33;
// console.log(population <= averagePopulation);
// const description = country + 'is in' + contient + ', and its ' + population + 'million people speak ' + language;
// console.log(description);

// ////////////////////////////////////
// /* 10 - Operator Precedence */
// // * the height precedence operator is the one that is executed first

// console.log(25 - 10 - 5);
// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// ////////////////////////////////////
// /* 11 - Coding Challenge #1 */

// // Data 1
// // const markHeight = 1.69;
// // const johnHeight = 1.95;
// // const markMass = 78;
// // const johnMass = 92;

// //Data 2
// const markHeight = 1.88;
// const johnHeight = 1.76;
// const markMass = 95;
// const johnMass = 85;

// const BMIMark = markMass / (markHeight **2);
// const BMIJohn = johnMass / (johnHeight * johnHeight);

// const markHeigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHeigherBMI);

// ////////////////////////////////////
// /* 12 - Strings and Template Literals */
// // *Template literals is a new way to write strings in JavaScript and it's introduced in ES6
// // normal string concatenation
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;
// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(jonas);

// // concatenation with template literals
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
// // and it work with normal String
// console.log(`Just a regular String...`);

// // we can use template literals to write multiple lines of strings
// // old way to write multiple lines of strings
// console.log('String with \n\
// multiple \n\
// lines');
// // new way to write multiple lines of strings with template literals
// console.log(`String with
// multiple
// lines`);
// // so in template literals to create multiple lines of strings you just press enter and create a new line

// ////////////////////////////////////
// /* 13 - Taking Decisions: if / else Statements */
// // *Control Structure: if / else Statements

// const age = 15;
// // *if / else statement
// if(age >= 18) {
//     console.log('Sarah can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
// // *Code block: is a block of code that is wrapped between curly braces
// const birthYear = 1991;

// let centry; // because it is block scoped variable
// if(birthYear <= 2000) {
//     centry = 20; // if we define centry incide the if block it will be a local variable
//     // and we can't use it outside the if block
// } else {
//     centry = 21;
// }
// console.log(centry);

////////////////////////////////////
/* 14 - Coding Challenge #2 */
// // Data 1
// // const markHeight = 1.69;
// // const johnHeight = 1.95;
// // const markMass = 78;
// // const johnMass = 92;

// //Data 2
// const markHeight = 1.88;
// const johnHeight = 1.76;
// const markMass = 95;
// const johnMass = 85;

// const BMIMark = markMass / (markHeight **2);
// const BMIJohn = johnMass / (johnHeight * johnHeight);

// console.log(BMIMark, BMIJohn);
// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI(${BMIMark}) is higher than John's(${BMIJohn})!`);
// } else {
//     console.log(`John's BMI(${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// ////////////////////////////////////
// /* 15 - Type Conversion and Coercion */
// // *Type Conversion: is when we manually convert from one type to another
// // *Type Coercion: is when JavaScript automatically converts types behind the scenes for us

// // *Type Conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear); // 1991 "1991"
// console.log(Number(inputYear) + 18); // => 2009

// // when u try to convert a string that is not a number to a number it will return NaN: Not a Number
// console.log(Number('Jonas')); // NaN => Not a Number
// console.log(typeof NaN); // => Number(or an invalid number)
// console.log(String(23), 23); // => "23"(white: string) 23(purple: number)

// // *Type Coercion
// // when we use the + operator between a number and a string it will convert the number to a string
// console.log("I am " + 23 + " years old"); // => I am 23 years old
// console.log('23' + '10' + 3); // => 23103
// // when we use the - or * or / or % operator between a number and a string it will convert the string to a number
// console.log('23' - '10' - 3); // => 10
// console.log('Jonas' - '2'); // => NaN

// // test
// let n = '1' + 1; // => '11'
// n = n - 1; // => 10
// console.log(2 + 3 + 4 + '5'); // => '95'
// console.log('10' - '4' - '3' - 2 + '5'); //=> '15'
// console.log('10' - false); // => true= 1 and false = 0

// ////////////////////////////////////
// /* 16 - Truthy and Falsy Values */
// // when we to convert falsy values to boolean it will return false : 0
// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); // => false
// console.log(Boolean(undefined)); // => false
// console.log(Boolean('Jonas')); // => true
// console.log(Boolean({})); //({}: this is empty object) => true

// // but allways the conversion to boolean is allways explicit or type coercion
// // but when javascript do type coercion to booleans?
// // it happend in two situations: logical operators(like &&, || and !) and logical context(like if / else statements)
// const money = 0;
// if (money) {// javascript will convert money to boolean: false
//     // it will execute when money is true
//     console.log("Don't spend it all ;)");
// } else {
//     console.log('You should get a job!');
// }

// let height;
// if (height) {
//     console.log('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED');
// }

// ////////////////////////////////////
// /* 17 - Equality Operators: == vs. === */
// // ==	Equal to: true if the operands are equal	5=='5'; //true
// // ===	Strict equal to: true if the operands are equal and of the same type	5==='5'; //false
// // we use === instead of == because == do type coercion
// // == will do type coercion
// const age = '18';
// if(age == 18) console.log('You just become an adult :D (loose)'); // => because '18' will be converted to number 18 (type coercion)
// // but "==="" will not do type coercion

// if(age === 18) console.log('You just become an adult :D (strict)'); // => no type coercion

// // simple way to get a value from any web page
// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite); // => string

// if(favourite === 23) { // => 22 === 23 -> FALSE
//     console.log('Cool! 23 is an amazing number!');
// } else if(favourite === 7) {
//     console.log('7 is also a cool number');
// } else if(favourite === 9) {
//     console.log('9 is also a cool number');
// } else {
//     console.log('Number is not 23 or 7 or 9');
// }

// if(favourite !== 23) console.log('Why not 23?'); // => !== not equal to

////////////////////////////////////
/* 18 - Coding Challenge #3 */
// Complete

// ////////////////////////////////////
// /* 19 - Logical Operators */
// // *Logical Operators: &&, || and !
// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// // And operator &&
// console.log(hasDriversLicense && hasGoodVision); // => true
// // OR operator ||
// console.log(hasDriversLicense || hasGoodVision); // => true
// // NOT operator !
// console.log(!hasDriversLicense); // => false

// if(hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

// const isTired = false; // C
// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

////////////////////////////////////
/* 20 - Coding Challenge #4 */

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if(scoreDolphins > scoreKoalas) {
//     console.log("Dolphins Wins the trophy 🏆");
// } else if(scoreKoalas > scoreDolphins) {
//     console.log("Koalas Wins the trophy 🏆");
// }else if (scoreDolphins === scoreKoalas) {
//     console.log("Both win the trophy!");
// }

// Bonus 2
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 106) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if((scoreDolphins > scoreKoalas) && (scoreDolphins >= 100)) {
//     console.log("Dolphins Wins the trophy 🏆");
// } else if((scoreKoalas > scoreDolphins)&& (scoreDolphins >= 100)) {
//     console.log("Koalas Wins the trophy 🏆");
// }else if (
//   scoreDolphins === scoreKoalas &&
//   scoreDolphins >= 100 &&
//   scoreKoalas >= 100
// ) {
//   console.log("Both win the trophy!");
// } else {
//   console.log("No one wins the trophy 😭");
// }

// ////////////////////////////////////
// /* 21 - The switch Statement */
// const day = "friday";
// switch (day) {
//   case "monday": // day === 'monday' (strict equality)
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; // break is used to exit the switch statement
//   case "tuesday": // if(day === 'tuesday)
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default: // default is like the last else in (if / else statement)
//     console.log("Not a valid day!");
// }
// // using if / else statement
// if (day === "monday") {
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//     console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//     console.log("Write code examples");
// } else if (day === "friday") {
//     console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//     console.log("Enjoy the weekend :D");
// } else {
//     console.log("Not a valid day!");
// }

// ////////////////////////////////////
// /* 22 - Statements and Expressions */
// // *Expressions: is a piece of code that produces a value
// // exp: 3+4 => 7 / 1991 => 1991 / true && false && !false => false
// // *Statement: is a bigger piece of code that is executed and which does not produce a value on itself
// //exp: if / else statement / switch statement / for loop / while loop
// if(23 > 10) {
//     const str = '23 is bigger';
// }

// // in Template literals we can only write expressions not statements
// const me = 'Jonas';
// console.log(`I'm ${2037 - 1991} years old ${me}.`); // =>it produce a value:  I'm 46 years old Jonas.

// ////////////////////////////////////
// /* 23 - The Conditional (Ternary) Operator */
// // ternary operator is like a short hand if / else statement
// // ternary operator is an expression and it produce a value because all the operator produce a value
// const age = 15;
// // age >= 18 ? console.log('I like to drink Soda 🥤') : console.log('I like to drink water 💧');

// const drink = age >= 18 ? 'Soda 🥤' : 'water 💧';
// console.log(drink);

// let drink2;
// if(age >= 18) {
//     drink2 = 'Soda 🥤';
// } else {
//     drink2 = 'water 💧';
// }
// console.log(drink2);

// //we can use ternary operator inside template literals because it's an expression
// console.log(`I like to drink ${age >= 18 ? 'Soda 🥤' : 'water 💧'}`)

////////////////////////////////////
// 24 -Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(tip);
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`,
);

////////////////////////////////////
/* 25 - JavaScript Releases: ES5, ES6+ and ESNext */
// ES5: is the version of JavaScript that was released in 2009
// ES6: is the version of JavaScript that was released in 2015
// ES6+ or ESNext: is the version of JavaScript that was released after ES6
// Complete
