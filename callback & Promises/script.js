//Async Wait

console.log("Good morning");
console.log("It is a boy that takes admission in college");

setTimeout(() =>{
    console.log("I am inside Set timeout");
} , 1000);

setTimeout(() =>{
    console.log("I am inside Set timeout2");
} , 0);

console.log("End the program");

// Callback Function
const callback = (argument) =>{
    console.log(argument);

}

const loadScript = (src , callback) =>{
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Sachin");
    document.head.append(sc)
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);