// //Simple Calculator

// let optr = prompt("enter the operator(+,-,*,/) :")
// let num1 = Number(prompt("enter the first value :"));
// let num2 = Number(prompt("enter the Second value :"));
// let result;

// if(optr === '+'){
//     result = num1 + num2;
//     console.log(`Addition of two numbers = ${result}`);
// } else if(optr == '-'){
//      result = num1 - num2;
//     console.log(`Subtraction of two numbers = ${result}`);
// } else if(optr == '*'){
//      result = num1 * num2;
//     console.log(`Multiplication of two numbers = ${result}`);
// }
//  else{
//     if(num2 != 0){
//            result = num1 / num2;
//            console.log(`division of two numbers = ${result}`);
//     }
//     else {
//         console.log(`division is not possible`);
//     }
// }

/* Faulty calculator using js
this faulty calculator does following:
1. it takes two number as a input
2. it performs wrong operations as follows:

+ ----> -
- ----> /
/ ----> **
* ----> +

it performs wrong operation 10% of the times
*/

let random = Math.random();
let a = prompt("Enter the first Number :");
let operator = prompt("Enter the operator:");
let b = prompt("Enter the second number:");

let obj = {
  "+": "-",
  "-": "/",
  "*": "+",
  "/": "**",
};

console.log(random);

if(random > 0.1){
    //perform correct calculation
console.log(`The result is ${a} ${operator} ${b}`);
alert(`the result is ${eval(`${a} ${operator} ${b}`)}`);
}

else {
     //perform wrong calculation
     operator = obj[operator];
     alert(`the result is ${eval(`${a} ${operator} ${b}`)}`)
}