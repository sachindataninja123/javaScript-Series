// que 1
const product ={
    title : "ball pen Parker",
    rating :5,
    offer : 10 ,
    price : 500,
}
console.log(product)
console.log(product.price);

product["title"] = "MARKER PEN";
console.log(product.title);

//que 2
const profile ={
    id : "its_you178",
    isFollow : true,
    posts : 195,
    followers  : 569,
    following : 45,
    name : "Sachin",
    Bio: "Software Engineer",
}

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["following"]);