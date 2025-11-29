let boxes = document.querySelector(".box");

boxes.innerHtml = "Hey i am  kkkk";
console.log(boxes);
console.log(boxes.getAttribute("style"));
console.log(boxes.hasAttribute("style"));


//setAttribute
let para = document.createElement("p");
para.innerHTML = "I have add this by <b> setAttribute</b>";
para.setAttribute("class" , "created");
document.querySelector(".container").append(para);

//insertAdjacentHtml
let add = document.querySelector(".container");
add.insertAdjacentHTML("afterend","IT is too <b>Raining.</b>")

//classlidt
let data = document.querySelector(".container");
console.log(data.classList);
console.log(data.className);

console.log(data.classList.add("harry"));
console.log(data.classList.remove("bg-green"));

// toggle means button switch 
let toggles = document.querySelector(".red");
console.log(toggles.classList.toggle("red"));
console.log(toggles.classList.toggle("red"));
// console.log(typeof(document));
// console.log(typeof(window));