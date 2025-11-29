/*synchronous code executes line by line , blocking further execution until each line is completed, while asynchronous code allows other code to continue executing while it waits for an asynchronous operation to complete. */

//synchronous function
// const fun1 = () => {
//     console.log("Function 1 starts an ends");
// };

// const fun2 = () => {
//     console.log("Function 2 Starts");
//     fun1();
//     console.log("Function 1 Ends here");
// };

// fun2();

//asynchronous Function
//example 1
// const fun1 = () => {
//   setTimeout(() => {
//     console.log("Fun 1 starts here");
//   }, 2000);
// };

// const fun2 = () => {
//   console.log("Fun 2 starts and ends here");
//   fun1();
//   console.log("Fun 1 Ends here");
// };
// fun2();

//Example 2
// function firstFunction() {
//     console.log("First Function");
//     secondFunction();
// };

// function secondFunction() {
//     console.log("Second Function");
//     setTimeout(() => {
//         console.log("Fun 2 is starting");
//     }, 3000);
//     thirdFunction();
// };

// function thirdFunction() {
//     console.log("Third Function");
// }

// firstFunction();
