//map method

// let num = [ 2,5,8,9,13];

// num.map((val) => {
//     console.log(val  * val);
// })

//create a new array
// let newArr = num.map((val) =>{
//     return val;
// })
// console.log(newArr);

//Filter method
// let num = [1,2,5,8,9,13];

// num.filter((val) => {
//     console.log(val % 2 === 0);
// })

// let newArr = num.filter((val) =>{
//     return val % 2 !== 0 ;
// })
// console.log(newArr);

//Reduce method
//calculate to sum
// let num = [1,2,5,8];
// const sum = num.reduce((prev , curr) => {
//     return prev + curr;
// })
// console.log(sum);

//find the largest  by reduce method
let num = [1,2,5,8,56,90,77];
const sum = num.reduce((prev , curr) => {
    return prev > curr ? prev : curr; //tertiary operator
})
console.log(sum);