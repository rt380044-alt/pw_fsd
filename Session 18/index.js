"use strict";
// Arrays - An Array is a deta structure that allows multiple values inside a single variable
let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
// Output: ["apple", "banana", "cherry"]
const items = [];
items.push("laptop");
items.push("mouse");
console.log(items);
const colors = new Array("red", "green", "blue");
const data = [1, 2, 3, 4, 5];
console.log(fruits[0]); // Output: apple
console.log(colors[1]); // Output: green
console.log(data[2]); // Output: 3
let stack = [1, 2];
stack.push(3);
console.log(stack); // Output: [1, 2, 3]
stack.push(4, 5);
stack.pop(); // Removes the last element (5) from the stack
console.log(stack); // Output: [1, 2, 3, 4, 5]
