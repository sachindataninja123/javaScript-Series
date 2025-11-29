//only for .then  positive way(resolve)

// function orderFood() {
//   return new Promise((resolve, reject) => {
//     console.log("Placing order...");

//     setTimeout(() => {
//       resolve("Food is  ready");
//     }, 2000);
//   });
// }

// orderFood().then((result) => {
//   console.log(result);
//   console.log("Eating the food"); 
// });
// orderFood().catch((error) => {
//   console.log("Sometimes went wrong", error);
// });

// for both  then and catch means negative way(resolve and reject) both
function orderFood() {
  return new Promise((resolve, reject) => {
    console.log("Placing order...");

    setTimeout(() => {
      let isFoodBurnt = true;
      if (isFoodBurnt) {
        reject("the food is not for eat because it burnt");
      } else {
        resolve("Food is ready 🍛");
      }
    }, 2000);
  });
}

orderFood()
  .then((result) => {
    console.log(result);
    console.log("Eating the food 🍽️");
  })
  .catch((error) => {
    console.log(error);
    console.log("Something went wrong:", error);
  });
