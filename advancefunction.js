// //FIRST ORDER FUNCTION

// function greetUser(name) {
//     console.log("Hello" + " " + name);
// }
// let myFunction = greetUser;
// myFunction("Sachin");

// HIGHER ORDER FUNCTION

// function processUserInput(name , greetUser) {
//     console.log("Received input : " + name);
//     greetUser(name);
// }

// function greetUser(name) {
//     console.log(`Hello! ${name}`);
// }

// processUserInput("Sachin" , greetUser);

/*Problem :: WAP to perform mathematical operations using callback functions and two variables in javascript */
const mathOperation = (a, b, optr) => {
  return optr(a, b);
};
const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  if (b === 0) {
    return "Can't divide by zero!";
  } else {
    return a / b;
  }
};
const remainder = (a, b) => {
  return a % b;
};

console.log(mathOperation(5, 18, add));
console.log(mathOperation(6, 18, sub));
console.log(mathOperation(5, 18, multiply));
console.log(mathOperation(6, 3, divide));
console.log(mathOperation(5, 2, remainder));
