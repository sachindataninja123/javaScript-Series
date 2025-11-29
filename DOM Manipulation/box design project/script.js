//generate a random color

console.log("scrpt.js initializing");
let boxes = document.getElementsByClassName("box");
console.log(boxes);

function getRandomColor(){
    let val1 = Math.floor( 0 + Math.random() * 255);
    let val2 = Math.floor( 0 + Math.random() * 255);
    let val3 = Math.floor( 0 + Math.random() * 255);
    return `rgb(${val1} , ${val2} ,${val3})`;
}

Array.from(boxes).forEach(e=> {
    console.log(e);
    e.style.backgroundColor = getRandomColor();
    e.style.color = getRandomColor();
});