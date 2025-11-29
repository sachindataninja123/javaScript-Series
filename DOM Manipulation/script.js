// document.body.style.background = "cyan";

// //Selecting with id
// let header = document.getElementById("heading");
// console.log(header);
// console.dir(header);

// //Selecting with Class
// let headings = document.getElementsByClassName("heading-class");
// console.log(headings);
// console.dir(headings);

// //Selecting with tag
// let para = document.getElementsByTagName("p");
// console.dir(para);
// console.log(para);

//Selecting with Query Selector
let firstEle = document.querySelector(".heading-class");
console.dir(firstEle);

let allEle = document.querySelectorAll(".heading-class");
console.dir(allEle);

let div = document.querySelector("div")
console.dir("div");
