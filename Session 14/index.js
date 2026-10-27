"use strict";
let age = 20;
// age --> 20
age = 21;
// age --> 21
// Let -> use let when the value might change
let marks = 90;
marks = 95;
console.log(marks);
// cost -> use const when the variable should not be reassigned.
// var -> javascript histoirically had var, but modern js prefers using let and const
// var -> older style
// let -> value can change
// const -> value cannot be reassigned hear
// Multiple data types : strings, boolean (true/false), symbols, null and underfined.
// underfined
let a;
a = 20;
// null
let b = null;
// Type -> number
let age1 = 20;
// age1 -> number
// this is called as Type Inference
// Var vs let vs const
if (true) {
    var x = 10;
}
console.log(x);
// Type annotation
let age2 = 20;
let name2 = "Rohit";
// name2 = 100;
let isStudent = true;
// Inference vs Annotation
// Inference -> Automatically
// Annotation -> Explcitly
// Template Literals
const employee = "Rohit";
const role = "Engineer";
const message = `${employee} is working as an ${role}`;
console.log(message);
// ${} --> interpolation
const price = 400;
const qty = 3;
console.log(`total = ${price * qty}`);
const name3 = "Rohit";
const age3 = 20;
const html = `
<div>
    <h1>${name3}</h1>
    <p>Age: ${age3}</p>
</div>
`;
console.log(html);
// Operators
// An operator is a symbol that tells js/ts to perform some functions
let result = 10 + 20;
//Arithmetic 
// + - * / % ** ++
// Assignment
// = += -= *= /= %= **=
// Comparison
// == != === !== > < >= <=
// Logical Operators
// && || !
// Uniary Operators
// typeof, delete, void, +, -, ~, !
let a1 = 10;
let b1 = 20;
console.log(a1 + b1);
console.log(a1 - b1);
console.log(a1 * b1);
console.log(a1 / b1);
console.log(a1 % b1);
console.log(12 % 5);
let count = 10;
console.log(count);
count++;
// count = count + 1;
console.log(count);
// count -- count = count - 1;
let balance = 100;
// balance = balance + 50;
console.log(balance);
// =, == ,===
console.log(10 == 10); // true
Console.log(10 == "10"); // true
console.log(10 === 10); // true
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 !== 10);
const age4 = 20;
console.log(Number(age4));
