//Function
// function myfunction(){
//     console.log("Good Morning");
//     console.log("Good evening");
//     console.log("Good afternoon");

// }
// myfunction();
// myfunction();
// myfunction();

//function to calculate addition of two numbers

// function addition(a , b){ // a,b are parameter
//         let sum = a+b;
//         console.log(sum);
// }
// addition(2,3); //argument


//ARROW FUNCTION
//MODERN Js

const arrowSum = (x, y) => {
    console.log(x+y);
};
console.log(arrowSum);
arrowSum(7,8);


const arrowMul = (x, y) => {
    //console.log(x*y);
    return x*y; // by using return function
};
let result = arrowMul(2,8);
console.log(result);

// to print without parameter using arrow function
const printHello = () => {
    console.log("print hello");
}
printHello();