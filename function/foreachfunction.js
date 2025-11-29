//For each function in arrays
let arr =["delhi" , "pune" ,"hyderabad" ,"gwalior"];

//by for each function
// arr.forEach(function printval(val) {
//     console.log(val);
// })

// by arrow function
// arr.forEach((val) =>{
//     console.log(val.toUpperCase());
// })

// there are three parameters in forEach loop and they are optional(val , idx, arr)
// arr.forEach((val , idx , arr) =>{
//     console.log(val.toUpperCase() , idx , arr);
// })



//  QUE 1...for a given array of numbers , print the square of each value using the for each loop.
let number = [1,2,3,4,5];

// number.forEach((number) => {
//     console.log(number * number);
// })

//another method
let calsquare = (number) => {
    console.log(number * number); 
}
number.forEach(calsquare);
