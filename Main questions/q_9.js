//  The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function placeOrder(item) {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 3000) + 1000; // random delay btn 1s to 4s

    setTimeout(() => {
      resolve(`Order got placed successfully for : ${item}`);
    }, delay);
  });
}

async function simulateShopping() {
  console.log("Placing Order");
  const confirmation = await placeOrder("Laptop");
  console.log(confirmation);
}
simulateShopping();
