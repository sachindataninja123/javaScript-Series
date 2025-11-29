// Dom methods
//1.. getAttribute(attr)

// let attri1 = document.querySelector("div");
// console.log(attri1);

// let div = div.getAttribute("class");
// console.log(div.getAttribute("class"));


//for node.style attribute
// let div = document.querySelector("div");
// console.log(div);

// div.style.backgroundColor = "pink";
// div.style.fontSize = "33px";

// div.innerText = "hello";


//for add something in our code
//  let newBtn = document.createElement("button");
//  newBtn.innerText = "Click me!";
//  console.log(newBtn);

//  let div = document.querySelector("div");
//  div.prepend(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText ="Hello Javascript!";
console.log(newHeading);

document.querySelector("body").prepend(newHeading);


//remove method
let heading = document.querySelector("h2");
heading.remove();

// newHeading.remove();
let div = document.querySelector("div");
div.remove();
