//calculate a factorial by for loop
// let result;
// let fact = 1;
// for(let i=1; i<=6; i++){
//   fact = fact*i;
// }
// console.log(fact);

//by function
// function factFor(number) {
//     let fact =1;
//     for(let i=1; i <= number; i++){
//         fact = fact*i;
//     }
//     return fact;
// }
// let factorail = factFor(6);
// console.log(factorail);

// by array reduce method
let a = 1;
function factorail(number){
    let arr = Array.from(Array(number+1).keys());
    let c = arr.slice(1,).reduce((a,b) => a*b)
    return c;
}
console.log(c);
