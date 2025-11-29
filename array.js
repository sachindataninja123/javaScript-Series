// let persons = [ "Ram" , "sita" , "Gita", "Mohan", "shyam"];

// console.log(persons.at[-1]);

// let fruits = ["Mango" , "Apple", "Banana", "Papaya", "Pineapple"];
/*For of loop , to iterable items */

// for(let items of fruits){
//     console.log(items);
// }

// /*For in loop , it always returns index */
// for(let items in fruits) {
//     console.log(items);
// }

/*ForEach Method */
// fruits.forEach((currElem, index, arr) => {
//     console.log(`${currElem} ${index}`);
//     // console.log(arr);
// })

/*Map Method */
// const myMapMethod = fruits.map((currElem, index, arr) => {
//     return `${currElem} ${index}`;
//     // console.log(arr);
//     });

//     console.log(myMapMethod);


/* QUE...WAP to multiply each element with 2 */
// by forEach method || performs an action on each element..
//  const numbers = [1, 2, 3, 4, 5, 6];
// numbers.forEach((currElem) => {
//     console.log(currElem * 2);
// });

// by map method || create a new array by transformed elements..
// const doubleValue = numbers.map((currElem) => {
//     return currElem*2;
// });
// console.log(doubleValue);


/*QUE...
1..Add Dec at the end of an array? 
2...What is the return value of splice Method?
3...update march to 'March' ?
4... Delete june from an Array ?*/

// const months = [ "Jan", "feb", "march", "april", "june", "august"];

// // 1
// console.log(months.push("Dec"));

// // 2
// // the return value of an splice method is an empty Array.

// // 3
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// console.log(months);

// // 4
// const deleteToUpdate = months.indexOf("june");
// months.splice(deleteToUpdate, 1);
// console.log(months);


//Filter method

//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  const result = numbers.filter((currElem) => {
//     return currElem > 3;
//  });
//  console.log(result);

 /*Que... lets say the user to delete the value 6. */
//  let value = 6;
//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 6, 9];
//  const updatedCart = numbers.filter((currElem) => {
//     return  currElem !== value;
//  })
//  console.log(updatedCart);


 /*QUE.. Array filter */
//filter products with a same price less than or equal to 500
//  const products = [
//     { name: "laptop", price : 200},
//     { name: "phone", price : 800},
//     { name: "laptop", price : 300},
//     { name: "tablet", price : 120},
//  ];

//  const filterProducts = products.filter((currElem) => {
//     return currElem.price <= 500;
//  });
//  console.log(filterProducts);

/*QUE...Find Unique Values.. */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 6, 9];
// const uniqueValues = numbers.filter((currElem, index, arr) => {
//     // console.log(currElem);
//     // console.log(arr.indexOf(currElem));
//     // console.log(index);
//     return arr.indexOf(currElem) === index;
// });
// console.log(uniqueValues);


/*QUE...Sort and compare.. */

// let fruits = ["Mango" , "Apple", "Banana", "Papaya", "Pineapple","Grapes"];
 
// fruits.sort();
// console.log(fruits);

//  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 6,1, 2, 4, 6, 9];
//  numbers.sort();
//  console.log(numbers);



/*QUE...By using map method square the number */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 6, 1, 2, 4, 6, 9];
// const uniqueValue = numbers.filter((currElem, index, arr) => {
//     return arr.indexOf(currElem) === index;
// });
// // console.log(uniqueValue);

// const doubleValue =  uniqueValue.map((currElem) => {
//         return currElem * currElem;
// });
// console.log(doubleValue);


/*QUE... Capitalize the stringof an array */
// let fruits = ["Mango" , "Apple", "Banana", "Papaya", "Pineapple","Grapes"];

// const result = fruits.map((currElem) => {
//     return currElem.toUpperCase();
// })
// console.log(result);

/*QUE... to square a number if given number is Even Number.  */
//First method
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 14, 16, 19];

// const squareNumber = numbers.filter((currElem) => {
//     return  currElem % 2 === 0;
// });
// console.log(squareNumber);

// const squareNumbers = squareNumber.map((currElem) => {
//     return currElem * currElem;
// });
// console.log(squareNumbers);

// second method
// const result = numbers.map((currElem) => {
//     if(currElem % 2 === 0){
//         return currElem * currElem;
//     }
// }).filter((currElem) => currElem !== undefined);
// console.log(result);

/*QUE... Using the map method, Write a function takes an array of names and returns a new array where each name is prefixed with "Mr." */
// const names = ["Sachin" , "Ram" , "Shyam", "Mohan"];
// const prefixName = names.map((currElem) => `Mr. ${currElem}`);
// console.log(prefixName);


/*WA JS function that calculates the total price of items in a shopping cart. the function should take an array of item prices as input and return the total price.. */

// const products = [ 100, 200, 300, 400, 500, 600];
// const totalPrice = products.reduce((accum , currElem) => {
//     return accum + currElem;
// }, 0 );
// console.log(totalPrice);


 let fruits = ["Mango" , "Apple", "Banana", "Papaya", "Pineapple","Grapes"];

 let fruits2 = fruits.indexOf("Banana");
  let fruit = fruits.includes("Grapes");
 console.log(fruit);