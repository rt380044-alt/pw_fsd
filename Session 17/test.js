console.log("x");

var x = 5;

var x;
console.log(x);
x = 5;

// Function Hoisting
sayHello();
function sayHello() {
    console.log("Hello");
}