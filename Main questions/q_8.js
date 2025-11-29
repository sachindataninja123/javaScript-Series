//  Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

function doubleAfterDelay(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 500);
  });
}

async function doubleArrayWithDelay(arr) {
  const Promises = arr.map((num) => doubleAfterDelay(num));
  const results = await Promise.all(Promises);
  return results;
}

doubleArrayWithDelay([1, 2, 3, 4, 5]).then((result) => {
  console.log(result);
});
