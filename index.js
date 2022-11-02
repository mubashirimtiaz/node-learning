//FUNCTION DECLARATION

// function hello() {
//   return 'Hello, World';
// }

// const value = hello();

//ANONYMOUS FUNCTION

// let hello2 = function () {
//   return 'hello again';
// };

// const returnedValue = hello2();
// console.log(hello2);
// console.log(returnedValue);

// function add(a = 5, b) {
//   console.log(b);
//   return a + b;
// }

// const resultOne = add();

// console.log(resultOne);
// const resultTwo = add();

// console.log(resultOne);
// console.log(resultTwo);

//ARROW FUNCTION

// const subtract = (a, b) => a - b;

// const result = subtract(3, 5);
// console.log(result);

// const greet = (name) => console.log('Hello ' + name);

// const result = greet('Okasha');
// console.log(result);

const arr = [1, 2, 3, 4];

// const arr2 = arr;

// arr2[2] = 0;

//SPREAD OPERATOR

// const arr3 = [...arr];

// arr3[0] = 10;

// console.log('arr1: ', arr);
// console.log('arr2: ', arr2);

// console.log('arr3: ', arr3);

// const arr4 = [];

// for (let i = 0; i > arr.length; i++) {
//   arr4[i] = arr[i];
// }

// console.log(arr4);

// const addition = (...params) => {
// };

// const result = addition(1, 2, 3, 4, 5);
// console.log(result);

//IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)

// (function greet() {
//   console.log('Hello World');
// })();

// RECURSIVE FUNCTION

// function doSomething(num) {
//   console.log('num in this iteration is: ' + num);
//   if (num > 0) {
//     doSomething(--num);
//   }
// }

// doSomething();

// const greet = (name) => {
//   console.log(`Hello ${name}`);
// };

// CLOSURES

// const parent = () => {
//   let num = 5;
//   const child = () => {
//     return 200 - num;
//   };
//   return child;
// };

// let result = parent()();
// console.log(result);

//CALLBACK

// const sayHello = (greeting, name) => {
//   greeting(name);
// };

// sayHello(greet, 'Ali');

// const greet = () => {
//   console.log('Hello Ali');
// };

// setTimeout(greet, 3000);
