let name_1 = "Rohit"
console.log(name_1);

// Type of Scope
// 1. Global Scope

const company = "PW" // Global Scope

function employee() {
    const company = "PW"
    console.log(company);
}
employee();

console.log(company);

let score = 100;

function changeScore() {
    score = 50;
}
changeScore();
console.log(score);

// Block Scope

// {
    // let message = "Hello";
// }
//  console.log(message);

 // Let and const are blocked scope

 for (var i = 0; i < 5; i++) {
    console.log(i);
 }

 console.log("outside", i);


 const msg = "Hello"

 function greet() {
    console.log(msg);
 }
 greet();
    
 // Scope Chain

 const a = 10;

 function outer() {
    const b = 20;
    function inner(){
        const c = 30;

        console.log(c);
        console.log(b);
        console.log(a);
    }
    inner()
 }
 outer()

 // variable shadowing

 const name_2 = "Global";

 function outer_1() {
    const name_2 = "Outer"

 function inner(){
    const name_2 = "Inner"
    console.log(name_2);
 }
 inner()
 }
 outer()


 function createCounter() {
   let count =0;


   return function() {
       count++;
       console.log(count);
   }
 }

 const counter = createCounter();
 counter();
  counter();
 counter();
    

 function createCounter_1() {
   let count = 0;

   return function(){
      count++;
      console.log(count);
   };
 }

 const counter1 = createCounter_1();
 const counter2 = createCounter_1();
 
counter1();
counter1();
counter2();

// HOF
function runTwice(fn: () => void) {
   fn();
   fn();
}

runTwice(sayHello);
// HOF
function creatGreeting() {
   return function () {
      console.log("Hello");
   };
}

const price: number[] = [10, 20, 30, 40, 50];

const expensive = price.filter((price) => {
   return price > 30;
});
console.log(expensive);

const total = expensive.reduce((sum, price) => {
   return sum + price;
}, 0);
console.log(total);

console.log("Start");
setTimeout(() => {
   console.log("Timer start");
}, 1000);

console.log("End");