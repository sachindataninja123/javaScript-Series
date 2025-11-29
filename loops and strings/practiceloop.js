// QUE 1...print all even numbers from 0 to 100.
//let totalEven = 0 ;
// let countEven = 0;
// for(let i = 0; i<=100; i++){
//     if(i % 2 === 0){
//         console.log("num =",i);
//           totalEven += i;
//           countEven++;
//     }
   

// }
// console.log("total sum of even  numbers are: ", totalEven);
// console.log("Count even  numbers are: ", countEven);

/*QUE 2...Create a game where you start with any random number. Ask the user to keep
guessing the game number until the user enters a correct value. */
let gameNum = 25;

let userNum = prompt("Enter a number :");
console.log("userNumber is =",userNum);

while(gameNum != userNum){
    userNum = prompt("you entered wrong number.Enter again : ");
}
console.log("Congratulations, ypu entered the right number.")
