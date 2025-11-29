// 10. The Coffee Machine:
//     In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function brewCoffee(coffeeType) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 3000) + 2000; // 2 to 5 seconds
    console.log(`Brewing your ${coffeeType} ...`);

    setTimeout(() => {
      resolve(`your ${coffeeType} is ready! Enjoy!`);
    }, delay);
  });
}

async function orderCoffee() {
  const result = await brewCoffee("Cappucino");
  console.log(result);
}
orderCoffee();
