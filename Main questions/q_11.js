// 11. The Array Filterer:
//     You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

function filterProducts(products, key, value) {
  return products.filter((product) => product[key] === value);
}
const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Shoes", category: "Fashion", price: 680 },
  { name: "Headphones", category: "Electronics", price: 150 },
  { name: "T-shirt", category: "Fashion", price: 25 },
  {
    name: "Rich Dad Poor Dad",
    category: "Book",
    price: 80,
  },
  {
    name: "Java by Robert",
    category: "Book",
    price: 120,
  },
];

// Filter by category = "Book" and Price
const filtered = products.filter(product => {
   return product.category === "Book" && product.price < 100
});
console.log("filtered products (Book & Under 100): ");
console.log(filtered);


// of using filterProducts (for single-criterion filter) without any limitation of price.
const fashionItems = filterProducts(products, "category", "Fashion");
console.log("Fashion products:");
console.log(fashionItems);



