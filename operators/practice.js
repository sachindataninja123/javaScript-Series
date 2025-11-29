/* get user to input a number using prompt.check 
if the number is multiple of 5 or not. */

// let number = prompt("Enter a Number :");
// if(number % 5 === 0){
//     console.log(number,"is a multiple of 5");
// } else {
//     console.log(number,"is Not a multiple of 5");
// }

//WAP which can gives grades to students according to their scores:
let marks = prompt("Enter the marks :");
if(marks >= 90 && marks <= 100){
    console.log("Grade = A");
} else if(marks >= 70 && marks <= 89){
    console.log("Grade = B");
} else if(marks >= 60 && marks <= 69){
    console.log("Grade = C");
} else if(marks >= 50 && marks <= 59){
    console.log("Grade = D");
} else {
    console.log("fail");
}