// let btn = document.querySelector("button");
// btn.onclick = () => {
//     console.log("btn was clicked");
//     let a =24;
//     a++;
// }

// let div= document.getElementsByClassName(".content");
// div.onmouseover = () => {
//     console.log("you are inside the div");
// }

//event object

// let btn = document.querySelector("button");
// btn.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };
// let div = document.getElementsByClassName(".content");
// div.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

//EventListener
// syntax = node.addEventListener(event , callback)
let btn1 = document.querySelector("button");
// btn1.addEventListener("click", (evt) => {
//   console.log("The button was clicked");
// });

// // btn1.addEventListener("click" ,() => {
// //   console.log("the button was clicked - handler 2")
// // })

// let box = document.querySelector("div");
// box.addEventListener("dblclick", (evt) => {
//   console.log("the div was clicked 2x times");
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// });

// box.addEventListener("dblclick" , () =>{
//   console.log("the div was clicked 2x times - handler 2");
// })

// syntax = node.removeEventListener(event , callback)

// btn1.addEventListener("click", () => {
//   console.log("the button was clicked - handler 1");
// });

// btn1.addEventListener("click", () => {
//   console.log("the button was clicked - handler 2");
// });

// const handler3 = () =>{
//   console.log("the button was clicked - handler 3");
// }

// btn1.addEventListener("click", () => {
//   console.log("the button was clicked - handler 4");
// });

// btn1.removeEventListener("click" , handler3);

/*Que 1... Create a toggle button  that changes the screen to
 dark-mode when clicked & light-mode when clicked again*/
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode1 = "light";

modeBtn.addEventListener("click" , () =>{
  if(currMode1 === "light"){
    currMode1 = "dark";
    // document.querySelector("body").style.backgroundColor = "black"; //by access
    body.classList.add("dark");
     body.classList.remove("light");
  } else{
    currMode1 = "light";
    // document.querySelector("body").style.backgroundColor = "white"; // by access
    body.classList.add("light");
    body.classList.remove("dark");
  }

  console.log(currMode1);
})

let modeBtn2 = document.querySelector("#mode2");
let div = document.querySelector("div");
let currMode = "hovered";


modeBtn2.addEventListener("mouseover" , () =>{
  if(currMode === "hovered"){
    currMode = "unhovered";
    div.classList.add("unhovered");
     div.classList.remove("hovered");
  } else{
    currMode = "hovered";
    div.classList.add("hovered");
    div.classList.remove("unhovered");
  }

  console.log(currMode);
})



