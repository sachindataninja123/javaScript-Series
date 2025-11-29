// 13. The Shopping Cart Totalizer:
//     You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost. and reduce the total cost of discountprice 15%.

function calculateTotal(cart) {
  let total = 0;

  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

function calculateAfterDiscount(totalCost){
    let discount = totalCost * 15 / 100;
    console.log("Discount price is :", discount);
    let finalPrice = totalCost - discount;
    return finalPrice;
}

function calculateGst(afterDiscountPrice){
    let gst = totalCost * 18 /100;
    console.log("gst price is :",gst);
    let finalPriceWithGst = afterDiscountPrice + gst;
    return finalPriceWithGst;
}

const cartItems = [
    { name: "Cricket Bag", price: 5000, quantity: 1 },
    { name: "Bat", price: 1500, quantity: 1 },
    { name: "Pad", price: 1400, quantity: 2 },
    { name: "Ball", price: 200, quantity: 3 },
];


const totalCost = calculateTotal(cartItems);
console.log("Total cost of items are : " + totalCost);


const afterDiscountPrice = calculateAfterDiscount(totalCost);
console.log("Price After 15% discount is :" + afterDiscountPrice);

// console.log("Price After 15% discount is :" + calculateAfterDiscount(totalCost) );

const totalPriceWithGst = calculateGst(afterDiscountPrice);
console.log("Price After adding GST 18% :",totalPriceWithGst);
