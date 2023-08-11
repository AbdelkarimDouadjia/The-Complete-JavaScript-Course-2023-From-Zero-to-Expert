'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// /////////////////////////////////////////////
// /* 1- Destructuring Arrays */
// // 1) Array destructuring: is an ES6 feature and it's basically a way unpacking values from an array or an object into separate variables.
// // in other words, destructuring is to break a complex data structure down into a smaller data structure like a variable
// // So for arrays we use destructuring to retrieve elements from the array and store them into variables in very easy way.

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   // Trick: to Receive multiple return values from a function
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// // #Destructuring Arrays
// // whitout destructuring
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// // with destructuring
// const [x, y, z] = arr; // you need to declare the variables using const.
// console.log(x, y, z); //=> 1 2 3
// console.log(arr); //=> the original array is not effected

// // Exp2: destructuring the categories array from the restaurant object
// const [first, second] = restaurant.categories;
// console.log(first, second); //=> Italian Pizzeria
// // *Skip Element in the array
// const [firstel, , thirdel] = restaurant.categories;
// console.log(firstel, thirdel); //=> Italian Vegetarian

// //*Switching variables
// //*switch variables whitout destructuring
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); //=> Italian Vegetarian

// // const tmp = main;
// // main = secondary;
// // secondary = tmp;
// // console.log(main, secondary); //=> Vegetarian Italian

// //*switch variables with destructuring
// // Reassigning variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary); //=> Vegetarian Italian

// //*Trick: receive 2 return values from a function
// // is that we can have a function return an array and then we can immediately destructuring the result into different variables, and this allows us to return multiple values from a function.

// // Receive 2 return values from a function
// console.log(restaurant.order(2, 0)); //=> ["Garlic Bread", "Pizza"]
// const [starterOrder, mainOrder] = restaurant.order(2, 0);
// console.log(starterOrder, mainOrder); //=> 'Garlic Bread' Pizza

// //*Nested array destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j); // => 2 [5, 6]
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // => 2 5 6

// //*Default values
// // if we try to retrieve the element that doesn't exist in the array, we get undefined, but we can set a default value for the variable if the element doesn't exist in the array.
// //whitout default values
// // const [p, q, r]= [8, 9];
// // console.log(p, q, r); //=> 8 9 undefined

// //with default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // => 8 9 1

// ! //////////////////////////////////////////
// ! /*  2- Destructuring Objects */
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   // but we usually develope the object then call it
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     // and we can also set default values for the object properties
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// // #Destructuring Objects
// // So for objects, we use destructuring to retrieve properties from the object and store them into variables in a very easy way.

// //* Exp1: destructuring some properties from the object
// //let's start with const to define some variable names
// //? we need to write the exact property name here to extract variables from the object
// // since in the object the order of elements doesn't matter , we don't to manualy skip elements like we did in the array
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories); //=> Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]

// // and this an extremrly useful addition to the language , Especially when we deal with the result of an API call, which basically mean to get data from another web application like wheather data or data about movie and this data is usually comes in form of an object

// // Exp2: destructuring with different variable names
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags); //=> Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ["Italian", "Pizzeria", "Vegetarian", "Organic"]
// // we are able to change the variable names here, but the property names in the object are still the same, and this gonna be immensely helpful when dealing whith third-party data.

// //#Default values
// //another useful feature for when we are dealing with third-party data like that , so like an object that we get from somewhere else , for example: an API call , it can really useful to have default values for the case that we're trying to read a property that does not exist on the object , so usually then we get undefined
// // if we try to retrieve the property that doesn't exist in the object, we get undefined, but we can set a default value for the variable if the property doesn't exist in the object.

// const { menu = [], starterMenu: starters = [], table } = restaurant;
// console.log(menu, starters, table); //=> [] (4) ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"] undefined
// // so the default value of the variable menu is [] because the property menu doesn't exist in the object restaurant.

// //#Mutating variables
// // while destructuring objects
// // it is like switching variables while destructuring arrays
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // we want to switch the values of a and b
// // let { a, b} = obj //=> this will not work because we already have a and b variables declared
// // console.log(a, b); //=> Uncaught SyntaxError: Identifier 'a' has already been declared

// // {a, b} = obj; //=> and this will not work because JS will think that we are trying to create a code block
// // console.log(a, b); //=> Uncaught SyntaxError: Unexpected token '='

// // so we need to wrap the code in parentheses
// ({ a, b } = obj);
// console.log(a, b); //=> 23 7

// //#Nested objects
// // we can also destructure nested objects
// // we can use the openingHours object in the restaurant object because it has nested objects inside it and we can destructure them as well
// // const { fri: {open, close}} = openingHours;
// // console.log(open, close); //=> 11 23

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c); //=> 11 23

// //#Passing an object as a function argument
// // we can also destructure objects that are passed into functions as arguments
// // we can destructure the object inside the function argument itself
// // we can also set default values for the object properties

// restaurant.orderDelivery({
//   time: '20:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// // => {time: "20:30", address: "Via del Sole, 21", mainIndex: 2, starterIndex: 2}
// // So we just passing to the function an object of options and that is pretty standard thing in JavaScript.especially in third-party libraries

// //#we can destructure the object inside the function argument itself
// // but usually we develope the object then call it
// restaurant.orderDelivery2({
//   time: '20:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// // we can also set default values for the object properties
// restaurant.orderDelivery2({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// ! //////////////////////////////////////////
// ! /*  5- The Spread Operator (...) */
// // We can use the spread operator to expand an array into all its elements, or unpacking all the array elements at one

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //#function that accepts multiple arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },
// };

// // #add elements from one array to another array
// //* whitout the spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); // => [1, 2, 7, 8, 9]

// // *with the spread operator
// const testArr = [1, 2, arr]; // but here we get the arr array as a single element in the new array
// const newArr = [1, 2, ...arr]; // so the spread operator take all the values out of this arr array and then write them individually into the new array
// console.log(newArr); // => [1, 2, 7, 8, 9]

// //so we use the spread operator when we want to expand an array into all its elements in template literals or when we pass multiple values

// //#passing multiple values of an array into a function
// // *log the indivdual elements of the array using the log function
// console.log(...newArr); //=> 1 2 7 8 9
// // so whenever we need the elements of an array individually, then we can use the spread operator, and that is usueful when we write an array and when we want pass multiple values into a function like we did here in the log function

// //*Exp2: Create an array with one more food item in the main menu array in the restaurant object
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // the spread operator is actually bit similar to the destructuring because it also helps us get elements out of arrays but the big differents is the spread operator takes all the elements from the array and it doesn't create new variables , and as a consesquence we can only use it in places where we would otherwise writes values separated by commas

// // two important use case of the spread operator which is to create shallow copies of arrays and to merge two arrays together

// //#shallow copy of the array
// const mainMenuCopy = [...restaurant.mainMenu]; // it is a bit similar tp object.assign Method

// //#Join 2 arrays together or more
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu); //=> ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// //#the spread operator also works on all iterables
// // Iterables: is most of the build-in data structure in javaScript are now iterable except objects
// // Iterables: arrays, strings, maps, sets. but NOT objects

// //*Exp3: create a string from the mainMenu array
// const str = 'Jonas';
// // We want to create an array which containe all the individual letters of the string and plus some other elements
// const letters = [...str, ' ', 'S.'];
// console.log(letters); //=> ["J", "o", "n", "a", "s", " ", "S."]
// // so we unpacked a string or expend into individual letters and then we added some other elements to the array

// // we can only use the spreat operator when building an array or whnen we pass values into a function
// console.log(...str); //=> J o n a s

// //*but we can't use the spread operator to build a string using template literals
// // console.log(`${...str} Schmedtmann`); //=> Uncaught SyntaxError: Unexpected token '...' because that is not place that expects multiple values separated by commas

// // so again multiple values separated by commas are usually expected when we pass arguments into a function or when we build a new array

// //#function that accepts multiple arguments
// // *Exp4: write a function that accepts multiple arguments
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// // whitout the spread operator
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// // with the spread operator
// restaurant.orderPasta(...ingredients);

// //# Objects with spread operator
// //* since ES 2018 the spread operator also works on objects even thought objects are not iterables
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// //* Shallow copy of the object
// const restaurantCopy = {...restaurant};
// //* so we can now mutate oue name property in the restaurantCopy object
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name); //=> Ristorante Roma
// console.log(restaurant.name); //=> Classico Italiano
// //* So the copy is completely independent and different of the original object

// ! //////////////////////////////////////////
// ! /*  6- Rest Pattern and Parameters */
// // the rest pattern looks exactly like the spread operator , and same syntax with three dots but it does the opposite of the spread operator
// // so the Rest pattern use to collect multiple elements and condense them into a single array
// // the spread operator use to upack an array while the rest operator use to pack elements into an array

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //#function that accepts multiple arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //#function that accepts multiple arguments using rest pattern syntax
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// //#1)- Destructuring
// //*spread operator because on the right side of =
// const arr = [1, 2, ...[3, 4]];

// // We can also use on the right side assignment operator together with destructuring
// //*REST, because the left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //=> 1 2 [3, 4, 5]
// // we use the rest pattern because it will take the rest of the elements and put them into a new array
// // so the rest pattern collects the elements that are unused in the destructuring assignment

// //#Use three dots in both sides of the assignemnt operator
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood); //=> Pizza Risotto ["Garlic Bread", "Caprese Salad"]
// //so the reset pattern must be the last element in the destructuring assignment and must be one rest pattern in any destructuring assignment

// //#Objects
// // the remaining elements will be collected into a new object and not into a now array
// const { set, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); //=> {thu: {…}, fri: {…}, sat: {…}}

// //#2)- Functions
// // rest pattern or rest parameters
// // *Exp1: write a function that accept multiple arguments
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];

//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);
// //the spread operator expand and with the rest syntax we compress multiple elements into an array

// // *Exp2:
// const x = [23, 5, 7];
// add(...x); // we use the spread operator to pass the array into the function

// // *Exp3:
// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); //=> mushrooms ["onion", "olives", "spinach"]
// restaurant.orderPizza('mushrooms'); //=> mushrooms []
// // so the rest pattern serve to collect all the remaining unused parameter into an array

// // *Conclusion: the spread and the rest look exactly the same but they work in opposite ways depending on where they are used
// // *the spread operator is used where we otherwise write values separated by commas ,On the other hand the rest pattern is used where we otherwise writes variable names separated by commas and not values separated by commas

// ! //////////////////////////////////////////
// ! /*  7- Short Circuiting (&& and ||) */
// //*short circuiting means that if the first value is a truthy value then it will immediately return that first value

// //#OR operator
// //*the logical operators can use any data type, can return any data type and can do short circuiting or short circuit evaluation
// // *so we can use the logical operators in any data type and not only in boolean values
// //*short circuiting in the case of the OR operator means that if the first value is truthy value then it will immediately return that first value, then the other operand will not even be evaluated , so javascript will not even look at the second value
// console.log(3 || 'Jonas'); //=> 3
// console.log('' || 'Jonas'); //=> Jonas
// console.log(true || 0); //=> true

// //if the first value is a falsy value then it will immediately return the second value even the second value is a falsy value
// console.log(undefined || null); //=> null
// // so the short circuiting it will stop intil it finds a truthy value or until it reaches the end of the expression
// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //=> Hello

// //because remember in the OR operator the result is true it at least one operand is true, so if the first value is a truthy value then the whole expression will be true and javascript will not even look at the second value

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //#function that accepts multiple arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //#function that accepts multiple arguments using rest pattern syntax
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// //*Exp:
// //*Whithout short circuiting , OR operator
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //=> 23

// //*Whith short circuiting , OR operator
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); //=> 23

// //#AND operator
// //*when we comme to the short circuit evaluation the AND operator works in the exact opposite way of the OR operator
// //* the AND operator short circuit when the first value is a falsy and then immediately returns that falsy value whithout even evaluating or looking at the second operand
// //* and when the first value is truthy then it means the evaluation will continues and then simply the last value is returned
// console.log(0 && 'Jonas'); //=> 0
// console.log(7 && 'Jonas'); //=> Jonas

// //*So the AND operator is only true if all the operands are true ,and the first one is false that means the entire result of the AND operator will be false
// //# AND=> return the first false it finds or the last value if all of them are true
// //# OR=> return the first true it finds or the last value if all of them are false

// //*Exp
// console.log('Hello' && 23 && null && 'jonas'); //=> null

// //*Exp
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }
// //=> mushrooms ["spinach"]
// // With AND operator
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach'); // => mushrooms ["spinach"]

// //Summarize: The OR operator will return the first truthy value of all the operand or simply the last value if all of them are falsy
// // The AND operator will return the first falsy value or the last value if all of them are truthy
// //And for practical applications we can use the OR operator to set default values and AND operator to execute code in the second operand if the first operand is true

// ! //////////////////////////////////////////
// ! /*  8- The Nullish Coalescing Operator (??) */
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //#function that accepts multiple arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //#function that accepts multiple arguments using rest pattern syntax
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// //#Nullish Coalescing Operator (??)
// //*the nullish coalescing operator is a short circuiting operator just like the OR and the AND operator
// //*the nullish coalescing operator works with nullish values instead of falsy values: null and undefined (NOT 0 or '')
// //*so the nullish coalescing operator short circuiting when the first value is null or undefined and then immediately returns that first value without even evaluating the second operand
// //*and when the first value is not nullish then the evaluation continues and then simply the last value is returned

// //*with OR operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); // => 10

// // * with nullish coalescing operator
// //#it is an operator was introduced in ES2020 , and it works almost the same way as the OR operator , but it will fix our error in the previous example
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect); // => 0
// //#nuslish operator works with nullish values instead of falsy values
// //#nullish values: null and undefined (NOT 0 or '')
// //#so with the nullish coalescing operator 0 and '' empty string are were truthy values .

// ! /////////////////////////////////////////
// ! /*  9- Logical Assignment Operators */
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //#function that accepts multiple arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //#function that accepts multiple arguments using rest pattern syntax
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// //*Logical operators can be used in combination with the assignment operator to write more concise code
// //*The logical assignment operators were introduced in ES2021

// //#OR assignment operator
// const rest1 = {
//   name: 'Capri',
//   //   numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// //*without OR Assignment Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// //*with OR Assignment Operator
// //*if numGuests != 0
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// //#Nullish Assignment Operator (null or undefined)
// //*if numGuests = 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);

// //#AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// ! /////////////////////////////////////////
// ! /*  10- Coding Challenge #1 */
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1/- using destructuring to create variables called players1 and players2
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// //2/-remaining => rest pattern syntax
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3/-creating an array called allPlayers containing all players of both teams (22 players)
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4/-players1 + 'Thiago', 'Coutinho', 'Perisic'
// const [players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// //5/-creating 3 var
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //6/-function that prints out the goals scored in the game
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
//   for (let i = 0; i < players.length; i++) console.log(players[i]);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7/-the team with lower odd is more likely to win
// //Method 1
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// //Method 2
// console.log(
//   (team1 < team2 && 'Team 1 is more likely to win') ||
//     (team1 > team2 && 'Team 2 is more likely to win')
// );

// ! /////////////////////////////////////////
// ! /*  11- Looping Arrays: The for-of Loop */
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   // #passing an object as a function argument
//   orderDelivery: function (obj) {
//     console.log(obj);
//   },

//   //#we can destructure the object inside the function argument itself
//   orderDelivery2: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //#function that accepts multiple arguments
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //#function that accepts multiple arguments using rest pattern syntax
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };
// // New way of looping over arrays wich was introduced in ES6
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// //*so this loop will loop over the entire array and in each iteration it will give us access to the current array element which we can specify here
// //*So we can use the for of loop and whithout having to worry about all the underlaying details such as counters and conditions
// //* and we can also use the continue and break statements in the for of loop

// // #printing the index of each element
// for (const item of menu.entries()) {
//   console.log(item);
// }
// //the entries method returns an array with the index as the first element and the element itself as the second element
// console.log(menu.entries()); //=>Array Iterator {} // we get this weird array iterator , but we will learn it by the end of the course
// console.log([...menu.entries()]); //=> [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// console.log(...menu.entries()); //=> [0, "Focaccia"] [1, "Bruschetta"] [2, "Garlic Bread"] [3, "Caprese Salad"] [4, "Pizza"] [5, "Pasta"] [6, "Risotto"]

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`); //=>1: Focaccia 2: Bruschetta 3: Garlic Bread 4: Caprese Salad 5: Pizza 6: Pasta 7: Risotto
// }

// // #destructuring the item element
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// ! /////////////////////////////////////////
// ! /*  12- Enhanced Object Literals */

// // #1. we can now set the object properties based on variables or even function arguments
// //Now this is seprate variable
// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // #3. we can compute(calculate) property names instead of writing them manually and literally
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// //to compute the property name we need to wrap it in square brackets[] syntax and inside the brackets we can put any expression that we want, and we can alse use destructuring
// const openingHours2 = {
//   [weekdays[3]]: {
//     // we need to use the square brackets [] to compute the property name and inside the brackets we can put any expression that we want
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [`days-${2 + 4}`]: {
//     open: 0, // before ES6 we could only compute the values of properties but not we can compute alse the property names.
//     close: 24,
//   },
// };
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   //#1
//   //before ES6
//   openingHours: openingHours, // but we have annoying probelm repetition here because the property name is exactly the same as the variable name.

//   //with ES6 Enhanced Object Literals
//   openingHours, // we can just remove the repetition and just write the variable name and it will be automatically converted into an object property
//   // but if change the variable here you need to change it in the openingHours object as well

//   // #2. Second Enhancement about writing Methods
//   //* we can now add methods to objects without the function keyword
//   //*So in ES6 we are no longer have to create a property and set it to a function expression like we are always doing
//   //*Old way
//   // order: function (starterIndex, mainIndex) {
//   //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   // },
//   //*ES6 New way
//   //So we can just remove the function keyword and the colon and we can just write the function like this
//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   //*ES6 New way
//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   //*ES6 New way
//   orderPasta(ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   //*ES6 New way
//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// //#Enhanced Object Literals
// // #1. we can now set the object properties based on variables or even function arguments
// // #2. Second Enhancement about writing Methods
// // #3. we can compute(calculate) property names instead of writing them manually and literally

// //so the restaurant object has written using the object literal syntax
// //Now ES6 introduced three ways which make it easier to write object literals like the restaurant object

// // #1. we can now set the object properties based on variables or even function arguments
// // if we have object outside our restaurant object and we want to add it to the restaurant object, and we want to add it as a property
// //and we want the openingHours object inside the restaurant object .

//! /////////////////////////////////////////
// ! /*  13- Optional Chaining (?.) */
