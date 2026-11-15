// Function: A function is a reusuble block of code that performs specific action/

// console.log("Hello Rohit");
// console.log("welcome to typescript");

function welcome() {
    console.log("Hello Rohit");
    console.log("Welcome to Typescript");

}

welcome()
welcome()
welcome()
welcome()

function functionName() {
    //...code
}

functionName();


function sendMsg(msg: string) {
    console.log(msg);
}

sendMsg("Rohit"); // Function Invokation

function sendMsg(msg:string) { // Function declaration
    console.log(msg);
}
   
// Parameter -> Variable/place holder in function's declaration
function greet_1 (name:string){
    console.log("Hello"+ name);

}
// Argument -> actual value that is passed during the function invokation
greet_1("Roht")

function add(a: number, b: number) {
    console.log(a + b);
}

add(10, 20);