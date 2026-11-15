// Arrays - An Array is a deta structure that allows multiple values inside a single variable

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
 // Output: ["apple", "banana", "cherry"]

const items: string[] = []


items.push("laptop");
items.push("mouse");
console.log(items);

const colors = new Array ("red", "green", "blue");

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

// Shift & Unshift - they add and removed elements from the starting of the array 
let numbers = [1, 2, 3, 4, 5];

const removed = numbers.shift(); // Removes the first element (1) from the array
console.log(removed); // Output: 1
console.log(numbers); // Output: [2, 3, 4, 5]

let colors2 = ["red", "green", "blue"];
colors2.unshift("yellow");
console.log(colors2); // Output: ["yellow", "red", "green", "blue"]
// unshift adds an element to the beginning of the array, while shift removes the first element from the array.

// slice - Taking a portion
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const fruits2 = ["apple", "banana", "cherry", "date", "elderberry"];
const slicedFruits = fruits2.slice(1, 4);
console.log(slicedFruits); // Output: ["banana", "cherry", "date"]

// splice - Adding and removing elements
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const fruits3 = ["apple", "banana", "cherry", "date", "elderberry"];
fruits3.splice(2, 1, "kiwi", "mango"); // Removes 1 element at index 2 and adds "kiwi" and "mango"
console.log(fruits3); // Output: ["apple", "banana", "kiwi", "mango", "date", "elderberry"]

// forEach - Iterating over an array
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((number) => {
  console.log(number * 2); // Output: 2, 4, 6, 8, 10
});

// map - Creating a new array by transforming each element
const numbers3 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers3.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// filter - Creating a new array with elements that pass a test
const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
// find - Returns the first element that satisfies a condition
const numbers5 = [1, 2, 3, 4, 5];
const firstEvenNumber = numbers5.find((number) => number % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// sort method
//  - Sorting an array
const numbers6 = [5, 2, 9, 1, 5, 6];
numbers6.sort((a, b) => a - b);
console.log(numbers6); // Output: [1, 2, 5, 5, 6, 9]
