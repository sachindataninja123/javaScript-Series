/*QUE 1.. create a H2 heading element with text - "Hello Javascript". Append
"From Apna College Students" to text using Js. */

// let changeH2 = document.querySelector("h2");
// console.dir(changeH2.innerText);

// changeH2.innerText = changeH2.innerText + "From Apna College Students"; 


/*QUE 2.. create  3 divs with common name - "box".Access them & add some unique text to each
of them.*/

let boxes = document.querySelectorAll(".box");
// console.log(boxes[0]);
// console.log(boxes[1]);
// console.log(boxes[2]);

for(div of boxes) {
    console.log(boxes);
}

//by individual
// boxes[0].innerText = "new unique value 1";
// boxes[1].innerText = "new unique value 2";
// boxes[2].innerText = "new unique value 3";

// change value of divs by loops
let idx = 1;
for (div of boxes) {
    div.innerText = `New unique value ${idx}`;
    idx++;
}