"use strict";
// if
let age = 25;
console.log("Eligible to vote:");
if (age >= 18) {
    console.log("Yes, you are eligible to vote.");
}
else {
    console.log("No, you are not eligible to vote.");
}
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}
let cardValid = true;
let pinCorrect = true;
let balance = 5000;
if (cardValid) {
    if ((pinCorrect) == true) {
        if (balance >= 1000) {
            console.log("Transaction successful. You can withdraw money.");
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    else {
        console.log("Wrong PIN. Please try again.");
    }
}
else {
    console.log("Invalid card. Please check your card.");
}
// switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day.");
}
if (0) {
    console.log("Yes");
}
else {
    console.log("No");
}
if (1) {
    console.log("10");
}
else {
    console.log("Not 10");
}
let username = "Rohit";
if (username) {
    console.log("Welome" + username);
}
else {
    console.log("Please provide a username.");
}
// 0 is false, everything else is true
// empty string is false
let num = 100;
if (num > 20) {
    console.log("A");
}
if (num > 30) {
    console.log("B");
}
if (num > 40) {
    console.log("C");
}
else {
    console.log("F");
}
for (let i = 1; i <= 5; i++) {
    console.log("Hello, World!");
}
// for(initialization; condition; update)
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
}
// while(condition)
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// 5 = 5*4*3*2*1
// 4 = 4*3*2*1
let factorial = 1;
for (let i = 5; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
// do while
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);
for (let k = 1; k <= 5; k++)
    if (k === 3) {
        continue; // Skip the rest of the loop for k=3
    }
