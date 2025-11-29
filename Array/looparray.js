// loop over a array

let heros = ["tony stark" , "hulk" , "thor" , "batman","shaktiman", "spiderman","superman" , "antman"];

// by for loop
// for(let i = 0; i < heros.length ; i++){
//     console.log("array is :",heros[i]); 
// }

//by for of loop
// for(let hero of heros){
//     console.log(hero);
// }

let cities = ["delhi" , "faridabad","mumbai","kolkata" , "punjab" ,"gwalior"];
// for(let city of cities){
//     console.log(city);
// }

//using string method to print cities
for(let city of cities){
    console.log(city.toUpperCase());
}