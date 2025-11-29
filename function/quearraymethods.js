//QUE 1 .. WE are given array of marks of students . filter out of the marks of students that scored 90+.

// let marks = [44,77,99,90,94,33,99,89,67,98];

// let newArr = marks.filter((val) =>{
//     return val > 90;
// })
// console.log(newArr);

/*QUE 2.. Take a number n as input from user . create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array ,
Use the reduce method to calculate the products of all numbers in the array.*/
let n = prompt("Enter the value of n :");
let arr =[];
for(let i = 0 ; i < n ; i++){
    arr[i] = Number(prompt("enter the element of an array"));
}
console.log(arr);

//for sum
const totalSum = arr.reduce((prev , curr) => {
        return prev + curr;
})

//for products
const totalProduct = arr.reduce((prev , curr) => {
        return prev * curr;
})
console.log("sum is ",totalSum);
console.log("sum is ",totalProduct);
