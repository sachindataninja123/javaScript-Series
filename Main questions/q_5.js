// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < 0) {
      break;
    }
    sum += arr[i];
  }
  return sum;
}

let numbers = [10, 20, 30, -5, 100];
console.log(sumUntilNegative(numbers));
console.log(sumUntilNegative([1, 2, 3, 4, 5, -1]));
