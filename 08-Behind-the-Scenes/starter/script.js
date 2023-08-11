'use strict';
//////////////////////////////////////
// 3- An High-Level Overview of JavaScript
// JavaScript is a high-level, object-oriented, multi-paradigm programming language.
// High-level: A programming language that is close to human language and needs to be translated into machine language.
// Low-level: A programming language that is close to machine language and can be directly executed by the computer.
// Object-oriented: A programming language that is based on the concept of objects, which can contain data, in the form of fields (attributes), and code, in the form of procedures (methods).
// Multi-paradigm: A programming language that supports different styles of programming, such as object-oriented programming (OOP), imperative programming, and functional programming.
// JavaScript is a prototype-based object-oriented programming language.
// Prototype-based: A programming language that uses prototypes instead of classes for inheritance.

// JavaScript is a high-level prototype-based object-oriented multi-paradigm interpreted or just-intime compiled Dynamic Signle-Thread Garbage-collected programming language with first-class functions and a Non-Blocking Event loop concurrency Model.
// High-level: any program that runs in your computer needs some hardware ressources such as memory and CPU to do his work. Now there is low-level Languages such as C Language where you have to manually manage these ressources, For example asking the computer for memory to create a new variable . But on the other side you have high-level Languages such as JavaScript and python where we don't manage ressources at all because these languages have something called abstractions that take all that work away from us. And this make the language  so easy to learn and to use , but on the downside the programs will never be as fast or as optimized as C(low-level) programs.

// now one of the powerfull tools that taks memory management away from us developer's is Garbage collection
// Garbage collection: which is an algorithm inside the JavaScript engine which are automatically removes old unused objects from the computer memory in order not to clog it up with unnecessary stuff, So it's like bit like JavaSCript has a cleaning guy who cleans our memory from time to time so that we don't have to do it manually in our code

// Next up Javascipt is interpreted or just-in-time compiled language
// Interpreted or just-in-time compiled: computer's processor only understands zeros and ones, that's right, So ultimately, every  single program needs to be written in zeros and ones, which also called  machine code , And since that's not really practical to write, is it? So we simply write human-readable JavaScript code which is an abstraction over machine code obut this cde eventually needs to be translated to machine code , And that Step can be either compiling or interpreting, this step is neceesary in every single programming language because no one write machine code manually in case of JavaScript this happens inside the JavaScript engine

// Now one of the things that makes JavaScript so popular is that fact that it's a multi-paradigm language
// Multi-paradigm: In programming, a paradigm is an approach and an overall mindset of structuring our code,which will ultimately direct the coding style and technique in a project that uses a certain paradigm.And this definition still sounds kind of abstract,but don't worry, it will become more clear as we move on.Now, three popular paradigms are;procedural, object-oriented,and functional programming.So procedural programming is what we've been doing so far,which is basically just organizing the code in a very linear way,and then with some functions in between.Now about object-oriented programming and functional programming,I will talk about them in a second.Also, we can classify paradigms as imperative or as declarative, but again, more on that later.Now, many languages are only procedural or only object-oriented or only functional,but JavaScript does all of it.So it's really flexible and versatile.And so we can do really whatever we want with it.It's our choice. We can use whatever paradigm we want.And in this course, I will show you how to use all of them.

//So, about the object-oriented nature of JavaScript, it is a prototype-based, object-oriented approach.
// prototype-based object-oriented: Now, what does that mean? Well, first, almost everything in JavaScript is an object,except for primitive values such as numbers, strings, et cetera.But arrays, for example, are just object.And we already saw that in practice, right?.Now, have you ever wondered why we can create an array and then use the push method on it, for example? Well, it's because of prototypal inheritance. Basically, we create arrays from an array blueprint,which is like a template and this is called the prototype.This prototype contains all the array methods and the arrays that we create in our code then inherit the methods from the blueprint so that we can use them on the arrays.And this, what I just explained to you is actually a huge oversimplification,which might still sound confusing.And that's the reason why there is a whole section on object-oriented programming with JavaScript later in the course.But since this is a big overview lecture,I wanted to first introduce this topic right here.

// Next up, JavaScript is a language with first-class functions,
// First-class functions: which simply means that functions are treated just as regular variables.So, we can pass functions into other functions and we can even return functions from functions.And this is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional-programming,which is one of the paradigms that we just talked about before.And in fact,we have already used the power of first-class functions without knowing that they are called first-class functions.So remember this piece of code that we wrote for closing the modal window that we built before.So right here, we pass the closeModal function into the addEventListener function as if it was just a regular variable, right? And actually not all languages have first-class functions,but JavaScript has, and it is amazing.Believe me, it's really, really helpful.

// Next, I said that JavaScript is a dynamic language and dynamic actually means dynamically-typed.
// Dynamic: So as we've already seen,in JavaScript, we don't assign data types to variables.Instead, they only became known when the JavaScript engine executes our code.Also, the type of variables can easily be changed as we reassign variables.And this is basically what dynamically-typed means.Now there is a lot of controversy if this is good or bad,but this is just how it works.Now, the same is not true for most other programming languages,where we have to manually assign types, to variables.And this then usually prevents bugs from happening,which is the reason why many people say that JavaScript should be a strongly-typed language as well.And if you yourself want to use JavaScript with types,then you can always look into TypeScript.

// But anyway, let's now finally talk about the single-thread and the non-blocking event loop concurrency model.
// Single-Thread and Non-blocking Event Loop: Now this is a really complex topic and probably the most complex one of the whole course,which is why it's kind of at the end of the course.And therefore,I'm not gonna go into specifics here just yet,but instead I will just define some things here.First, what actually is a concurrency model? Well, it's just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time.No, okay. That's cool.But why do we need that? Well, because JavaScript itself runs in one single-thread,which means that it can only do one thing at a time and therefore we need a way of handling multiple things happening at the same time.And by the way, in computing,a thread is like a set of instructions that is executed in the computer's CPU.So basically, the thread is where our code is actually executed in a machine's processor.All right. But what if there is a long-running task,like fetching data from a remote server? Well, it sounds like that would block the single thread where the code is running, right? But of course we don't want that.What we want is so-called non-blocking behavior and how do we achieve that? Well, by using a so-called event loop.The event loop takes long-running tasks,executes them in the background and then puts them back in the main thread once they are finished.And this is, in a nutshell,JavaScript's non-blocking event loop concurrency model with a single thread.It sounds like a mouthful for sure but in the end,it really just compresses to this.Just keep in mind that, again,this is a huge oversimplification that we will come back to.All right.And this actually rounds up this overview lecture.

//////////////////////////////////////
// 4- The JavaScript Engine and Runtime
// What is the JavaScript Engine?
// The JavaScript engine is simple a computer program that executes JavaScript code.
// Now, every browser has its own JavaScript engine, and so does Node.js, which is a JavaScript runtime.

// //////////////////////////////////////
// /* 7 - Scoping in Practice */

// function calcAge(birthYear) {
//   // Global Scope
//   const age = 2037 - birthYear;
//   //   console.log(firstName); // js do variable lookup in the scope chain to find the variable
//   function printAge() {
//     // Nested New Scope
//     let output = `${firstName} You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       // so here we created a variable with same name as the global scope variable but it is not the same variable because it is in a different scope
//       const firstName = 'Steven'; // because js try to look for the variable first on the current scope and if it doesn't find it then it will look for it on the parent scope and so on until it reaches the global scope
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       var millenial = true; // var is function scoped it means it is accessible outside the if block, so var can access just on the printAge function scope

//       function add(a, b) {
//         // function are block scoped in strict mode
//         return a + b;
//       }
//       console.log(add(2, 3));
//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';
//     }
//     // console.log(str); // ReferenceError: str is not defined // because const and let variables are block scoped and not function scoped
//     console.log(millenial); // var can access just on the printAge function scope
//     // add(2, 3); // function are block scoped in strict mode
//     console.log(output); //=> NEW OUTPUT! // because we changed the value of the output variable on the if block
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas'; // Global Scope
// calcAge(1991);
// // console.log(age); // ReferenceError: age is not defined // because only the inner scope can access the outer scope but not the other way around

// // printAge(); // ReferenceError: printAge is not defined // because the function is not in the global scope

// //////////////////////////////////////
// /* 9 - Hoisting and TDZ in Practice */

// // Variables
// console.log(me); // underfined
// // console.log(job); // ReferenceError: Cannot access 'job' before initialization because job is in the TDZ
// // console.log(year); // ReferenceError: Cannot access 'year' before initialization  because year is in the TDZ
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Functions
// console.log(addDecl(2, 3)); //=> 5
// // console.log(addExpr(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization because function expression are treated as variables
// // console.log(addArrow(2, 3)); // ReferenceError: Cannot access 'addExpr' before initialization because Arrow functions are treated as variables

// // We know that any variable decalred with var variable will eb hoisted and set to underfined and now the addExpr1 function is variable declared with var and so right now is undefined and here we are trying to call undefined as a function
// console.log(addExpr1); // => undefined
// console.log(addExpr1(2, 3)); //=> TypeError: addExpr1 is not a function
// console.log(addArrow1(2, 3)); //=> TypeError: addArrow1 is not a function

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b; // implicit return

// var addExpr1 = function (a, b) {
//   return a + b;
// };

// var addArrow1 = (a, b) => a + b; // implicit return

// // Example

// console.log(numProducts); //=> undefined
// if (!numProducts) deleteShoppingCart(); //=>:!undfined => true => call deleteShoppingCart(); // because undefined is a falsy value and because of hoisting the variable numProducts is undefined

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// // Best practices
// // *the best practice to avoid this error is to do not use var and use instead let or const because they are not hoisted and so we will get an error if we try to use them before declaring them
// //*  you need to declare ur variable at the top of each scope
// //* finally decalre all of ur functions first and use them only after the delcaration and this apply to all the types of the fucntions even functions declaration which are hoisted because is not clean

// //Another example for different between let & const & var
// var x = 1; // create a property on the global window object
// let y = 2;
// const z = 3;

// // Window object is the global object of JavaScript in the browser and we get the variable that are declared in var keyword as a property of the window object
// // so we can find X as a property of the window object but we can not fined y or z because they are decalred in let and const keyword
// console.log(window.x); //=> 1
// console.log(x === window.x); //=> true
// console.log(y === window.y); //=> true
// console.log(z === window.z); //=> true

// // In conclusion that var variable will create a property at the window global object and this is not the case for let and const variables

// //////////////////////////////////////
// /* 11 - The this Keyword in Practice */

// // global scope
// console.log(this); //=> window the global object in the browser

// // regular function
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //=> undefined
// };
// calcAge(1991); //=> undefined because in the strict mode the this keyword is undefined but in sloppy mode we get the global object (window)

// // Arrow function
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); //=> lexical this keyword because it get the this keyword of its parent function or its parent scope //=> window the global object in the browser because window is the parent scope(global scope) of calcAgeArrow function
// };
// calcAge(1980);

// // Method in Object
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //=> jonas object
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// // Exp3
// // the this keyword allways point to the object that is calling the method

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; //=> method borrowing // => so the this keyword is dynamic is not static because it's depens based on how the function is called
// matilda.calcAge(); //=> 20

// //Exp4:
// const f = jonas.calcAge;
// f(); //=> undefined //=> because the this keyword is undefined in strict mode

// //////////////////////////////////////
// /* 12 - Regular Functions vs. Arrow Functions */

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); //=> jonas object
//     console.log(2037 - this.year);

//     // Solution 1
//     // // and here is the solution for isMillenial function
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //     // this is just a regular function call even it is happen inside the method , and so the this keyword will be undefined in strict mode
//     // //   console.log(this);
//     // //   console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // isMillenial();

//     //Solution 2
//     // in ES6 solution:
//     const isMillenial = () => {
//       // it works because Arrow function don't get their own this keyword and so they will use the this keyword of their parent scope which is the calcAge method and so the this keyword will be the jonas object
//       // Basically the arrow function inherit the this keyword from their parent scope which is the calcAge Method in this case
//       console.log(this); //=> jonas object
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this); //=> window object
//     console.log(`Hey ${this.firstName}`); //=> Hey undefined //=> because arrow function don't get their own this keyword and so they will use the this keyword of their parent scope which is the global scope and so the this keyword will be the global object which is window in the browser , and window.firstName is undefined and because the object doesn't create thier own scope it's just Template Literal
//     // and when try to access a property doesn't exist on certain object then we get undefined
//   },
// };
// jonas.greet(); //=> undefined

// // if we are using var to declare a variable then it will create property on the global object window
// var firstName = 'Matilda';
// jonas.greet(); //=> Hey Matilda //=> because now the this keyword is the global object and the global object has a property called firstName and so we get the value of this property
// // Conculsion never ever use Arrow function as a Method in a object, instead use function expression or function declaration

// jonas.calcAge();

// // #Arguments Keyword
// // *Regular Function: Function expression or Function declaration
// //  the arguments keyword is a special variable that is created for every function and it contains all the arguments that were passed into that function
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5); //=> Arguments(2) [2, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ] //=> we get an array-like structure but not an array ,and it contains all the arguments that were passed into that function with thier index
// addExpr(2, 5, 8, 12); // => Arguments(4) [2, 5, 8, 12, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// // *Arrow Function
// var addArrow = (a, b) => {
// //   console.log(arguments); // ReferenceError: arguments is not defined //=> because arrow function don't have an arguments keyword
//   return a + b;
// };
// addArrow(2, 5, 8); //=> 7

// // In conclusion: Arrow function don't get their own arguments keyword but regular functions do , but the arguments keyword is not that important in modern JavaScript because now we have more modern ways to deal with multiple parameteres

// //////////////////////////////////////
// /* 13 - Primitives vs. Objects (Primitive vs. Reference Types) */
// // #Primitive Types
// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age); //=> 31
// console.log(oldAge); //=> 30
// // We get different values for age and oldAge because they are two different variables in the stack and each one of them has its own copy of the value 30 and 31

// // #Reference Types
// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend: ', friend); //=> Friend:  {name: "Jonas", age: 27}
// console.log('Me: ', me); //=> Me:  {name: "Jonas", age: 27}
// // We get the same age for both friend and me because they are pointing to the same object in the heap

// //////////////////////////////////////
// /* 14 - Primitives vs. Objects in Practice */

// // #Primitive Value
// let lastName = 'Williams'; // lastName identifier point to the memory address in the call stack that contains the value 'Williams'
// let oldLastName = lastName; // lastName and oldLastName identifiers point to the same memory address in the call stack that contains the value 'Williams'

// lastName = 'Davis'; // new value 'Davis' is created in the call stack with new memory and the lastName identifier point to this new value 'Davis' and the oldLastName identifier still point to the old value 'Williams'

// console.log(lastName, oldLastName); //=> Davis Williams

// // #Reference Value(Object)
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica; // marriedJessica and jessica identifiers point to the same memory address in the call stack that contains the value of the jessica object in the heap
// marriedJessica.lastName = 'Davis'; // the value of the lastName property in the marriedJessica object in the heap is changed to 'Davis' and so the value of the lastName property in the Jessica object in the heap is also changed to 'Davis'

// console.log('Before marriage: ', jessica); //=> Before marriage:  {firstName: "Jessica", lastName: "Davis", age: 27}
// console.log('After marriage: ', marriedJessica); //=> After marriage:  {firstName: "Jessica", lastName: "Davis", age: 27}

// // marriedJessica = {}; //=> TypeError: Assignment to constant variable. //=> because we are trying to change the value of the marriedJessica identifier which is a const variable and so we can't change the value of a const variable because we can not change the value fo the current memory in the call stack to a new memory address
// // but if it was let mmrriedJassica; => it will work

// // #Copying Objects

// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// // if we want to copy the jessica2 object to a new object called jessicaCopy then we use a function called Object.assign()
// // Object.assign() method : is a function that merge two objects together and then return a new object

// const jessicaCopy = Object.assign({}, jessica2); // we merge an empty new object with jessica2 and this will create a completely new object that contain all the properties are copied from the jessica2 object and the empty object , then we store this properties in the new object in the jessicaCopy variable
// // And behind the scences is that a new object was in fact created in the heap , and jessicaCopy is now pointing to that object
// jessicaCopy.lastName = 'Davis';
// console.log('============ #Copying Objects ============');
// console.log('Before marriage: ', jessica2);
// console.log('After marriage: ', jessicaCopy);

// // but we still have a problem because this technique of object.assign() only works on the first level of the object and not on the nested object, or on other word, if we have an object insice our object then the inner object will actually still be the same (it will still point the same place in the memoy )
// // And that's why we say that object.assign() creates a shallow copy and not a deep clone which is what we would like to have
// // Shallow copy will only copy the properties in the first level , while a deep clone will copy everything including the nested objects

// //
// const jessica3 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   // We will add an array here because an array is just an object behind the scense same as function ...etc
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy2 = Object.assign({}, jessica3);
// jessicaCopy.lastName = 'Davis';

// // Manipulating an object of family within the object jessica3
// jessicaCopy2.family.push('Mary');
// jessicaCopy2.family.push('John');

// console.log('Before marriage: ', jessica3); // lastName was preserved because it that's in the first level , but the family object is deeply nested object , and therefor object.assign() did not really behind the scenses copy it to the new object, it just copied the reference nested object from the original object
// // So both jessica3 and jessicaCopy2 have a property called family wihich are pointing to the same family object in the memory heap, and when we change the array also gonna be changed in the other one.
// console.log('After marriage: ', jessicaCopy2);

// // Now a deep clone is what we need here but is not easy to achieve and we usually using an external library like Lo-Dash, and this library has a tone of helpful tools and one of them is deep cloning by including an external library
