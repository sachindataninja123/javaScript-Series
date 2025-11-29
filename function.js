// // Que 1..

// function sum(a,b) {
//     return a+b;
// }

// console.log(sum(4 , 9));
// console.log(sum(17 , 19));
// console.log(sum(10 , 6));

// // Que 2...
// function greet(name) {
//     console.log(`Hello! ${name}, Welcome to my institute.`);

// }
// greet("Sachin");
// greet("Krishna");

// /*Function Expression*/

// var result = function multiply(a,b) {
//     return a*b;
// }
// console.log(result(9, 10));

// /*anonymous Function -- in this function there is no function name*/
// var greetFun = function (name) {
//     console.log(`Hello! ${name}, Welcome to my institute.`);

// }
// greetFun("Sachin");
// greetFun("Krishna");


/* Immediately Invoked Function */ 
// var result = (function (a, b){
//     console.log(a+b);
//     return a+b;
// })(10,10);

// console.log("The sum of two number is: " + result);

/*Fat Arrow Function */
// const sum = (a,b) => {
//     let result =`The sum of ${a} and ${b} is ${a+b}`;
//     console.log(result);
// }
// sum(56,4);

/*QUE... Make a calculator by function that takes three arguments
first number and second number and third one is a operator. */
//By traditional function method
// function calculator(a, b, optr) {
//     if(optr === '+'){
//         return a + b;
//     } else if(optr === '-'){
//         return a - b;
//     } else if(optr === '*'){
//         return a * b;
//     } else if(optr === '/') {
//         if( b !== 0 ){
//             return a / b;
//         } else {
//             return "ERROR! Cannot Divided by 0."
//         }
         
//     } else if(optr === '%') {
//         return a % b;
//     } else {
//         return "Invalid Operator"
//     }
// }
// console.log(calculator(5, 0, '/'));
// console.log(calculator(5, 6, '*'));
// console.log(calculator(5, 6, '+'));
// console.log(calculator(5, 4, '%'));
// let result = calculator(5, 4, '-');
// console.log(result);

//By FAT ARROW function method
// const calculator = (a, b, optr) => {
//     if(optr === '+'){
//         return a + b;
//     } else if(optr === '-'){
//         return a - b;
//     } else if(optr === '*'){
//         return a * b;
//     } else if(optr === '/') {
//         if( b !== 0 ){
//             return a / b;
//         } else {
//             return "ERROR! Cannot Divided by 0."
//         }
         
//     } else if(optr === '%') {
//         return a % b;
//     } else {
//         return "Invalid Operator"
//     }
// }
// console.log(calculator(5, 0, '/'));
// console.log(calculator(5, 6, '*'));
// console.log(calculator(5, 6, '+'));
// console.log(calculator(5, 4, '%'));
// let result = calculator(5, 9, '-');
// console.log(result);

/*QUE...Write a function to reverse  a given string
 without using built-in reverse methods. */
//by fat arrow function
// const isReverse = (str) => {
//     let reverse = "";
//     for(let i = str.length-1; i >= 0; i--){
//         reverse = reverse + str[i];
//     }
//     return reverse;
// } 
// console.log(isReverse("Sachin Kushwaha"));


/*Write a function to determine if a given string is 
a palindrome (reads the same backward as forward) */

//by fat arrow function
const isPalindromeString = (str) => {
    let reverse = "";
    for(let i = str.length-1; i >= 0; i--){
        reverse += str[i];
    }
    // if(str === reverse){
    //     return true;
    // } else {
    //     return false;
    // }
    //by terniary operator
    return str === reverse ? true : false;
    
};
console.log(isPalindromeString("radar"));