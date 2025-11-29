function orderFood(callback) {
  console.log("Placing order...");

  setTimeout(() => {
    console.log("Food is ready");
    callback();
  }, 2000);
}

orderFood(function () {
  console.log("Eating the food");
});
