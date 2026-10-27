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
a=20;

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

let age2: number = 20;

let name2: string = "Rohit";

// name2 = 100;
let isStudent: boolean = true;

// Inference vs Annotation

// Inference -> Automatically

// Annotation -> Explcitly


// Template Literals
const employee = "Rohit";
const role = "Engineer";

const message = `${employee} is working as an ${role}`;

console.log(message);

// ${} --> interpolation

const price =400;
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

let count = 10;console.log(count);
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
console.log(typeof age4);

// Logical Operators
// &&, -> it returns true only when both the conditions match

const age5 = 20;
const hasID = true;

console.log(age5 > 18 && hasID); // true

// || -> it returns true if at least one of the conditions is true. (Logical OR)


// | -> simply reverse a boolean value (Logical not)

console.log(!true)

let f =5;
let g = f--; // post decremenet
// let g = --f // pre deceremenet
console.log(f); // ans =
console.log(g); // ans =


let result_1 = 5 + 2 * 10;
// BODMAS

// 5 + 2 = 7

// 2*10 = 20
// 20 + 5 = 5
console.log(result_1)

let check = 10 + 5 === 15;

// 15 === 15 -> true
const input ="50";

input + 10;

console.log(input);

//sring + number => concat
// "50" + 10 => 5010

// strimg - number => arithematic calculation => 40