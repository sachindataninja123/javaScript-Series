// var divide = "Hello" / 2;
// console.log(divide);

// var result = 0.1 + 0.2;
// console.log(result);
// console.log(result.toFixed(1));

// var result2 = 0.2 + 0.2;
// console.log(result2);

// var result3 = 55 * "Hello";
// console.log(result3);

// == is used for check a value is equal to and while === is used for strict equality
// console.log(5 == 5); // true
// console.log(5 == "5"); // it returns true
// console.log(5 === "5"); // it returns false

// question on logical optr
// let age = 19;
// let isDrivingLicence =  true;

// if(age >= 18 && isDrivingLicence){
//     console.log("he is eligible to drive");
// } else{
//     console.log("not eligible to drive");
// }

// ternary Operator Syntax : condition ? expressionIfTrue : expressionIfFalse;
// var result = age >= 18 && isDrivingLicence ? "Eligibe to drive" : "not eligible to drive";
// console.log(result);

// //Question 2
// var score = 70;
// let result_2 = score >= 60 ? "The student Pass" : "The student Fail";
// console.log(result_2);

// //Combined Tricky Questions
// console.log("5" - 3); // 2
// console.log(typeof("5" - 3));

// console.log(2 < 12 < 5);

// console.log("20" + 10 + 10);

//Conditional statement question

// let age = 15;
// const isCitizen = false;
// const isRegisteredToVote = false;

// if (age >= 18 && isCitizen && isRegisteredToVote) {
//   console.log("They are eligible to vote");
// } else if (age < 18 && !isCitizen && !isRegisteredToVote) {
//   console.log("They are not eligible to vote(Younger)");
// } else if (age >= 18 && !isCitizen) {
//   console.log("They are not eligible to Citizenship Status");
// } else if (age >= 18 && isCitizen && !isRegisteredToVote) {
//   console.log("They are not eligible due to registration status.");
// }

// // //que 2
// // var num = 20;
// // if (num % 2 === 0) {
// //   console.log("It is a even number");
// // } else {
// //   console.log("odd number");
// // }

// var areaOfShapes = "circle";
// var a = 5;
// var b = 10;
// var area;

// switch (areaOfShapes) {
//   case "square":
//     area = a * a;
//     console.log(area);
//     break;

//   case "rectangle":
//     area = a * b;
//     console.log(area);
//     break;

//   case "circle":
//     let r = 2;
//     area = 3.14 * r * r;
//     console.log(area);
//     break;
// }

// var num = 5;
// for(let i = 1; i<=10; i++){
//     // console.log("5 * " + i + " = " +num*i);
//     //by string lateral
//     console.log(`5 * ${i} = ${num *i}`);
// }

// let userInput;
// let positiveNumber;

// do{
//     positiveNumber = prompt("Enter a Positive Number");
//     positiveNumber = parseFloat(userInput);
// } while(isNaN(positiveNumber) || positiveNumber < 0);
// console.log(`You Entered a Valid Positive Number ${positiveNumber}`);

// Que...
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   sum += i;
  
// }
// console.log(sum);

// Find a Prime Number
// var num = 47;
// var isPrime = true;

// for(let i = 2; i < num; i++){
//     if(num % i === 0){
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime){
//     console.log("Prime Number");
// } else{
//     console.log("Not a prime Number");
// }

//Find a leap year

// var year = 2024;
// if(year % 4 === 0 && year !== 100){
//     console.log("Leap Year");
// } else if (year % 400 === 0 ) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a leap Year");
// }

// print a half triangle

for(var i = 1; i<=5; i++){
    var pattern = "";
    for(var j = 1; j <= i; j++) {
        pattern = pattern + " * ";
    } 
    console.log(pattern);
}
