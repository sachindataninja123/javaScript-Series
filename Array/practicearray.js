// //  Que 1 ...

// let marks = [90,90,90,80,70];
// let totalSubjects =0;
// let totalSum = 0;
// for(let val of marks){
//     console.log(val);
//     totalSum += val;
//     totalSubjects++;

// }
// console.log("total marks is :",totalSum);
// console.log("total subject are :",totalSubjects);

// let avg;
// // avg = totalSum / totalSubjects;
// avg = totalSum / marks.length;
// console.log(`average marks of the class is: ${avg}`);

//QUE 2...

let items = [250, 645,300,900,50];

//by for loop

// for(let i = 0; i < items.length ; i++){
//     console.log(`items are ${items[i]}`);
// }
// console.log("***After applying Offer***");
// for(let i = 0; i < items.length ; i++){
//     // console.log(items[i]);
//     let offer = items[i] / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer ${items[i]}`);  
// }

// by for of loop

for(let val of items){
        console.log(`items are ${val}`);
}
console.log("***After applying Offer***");
let idx = 0;
for(let val of items){
        let offer = val /10;
        items[idx] -= offer;
        console.log(`value after offer ${items[idx]}`);  
        idx++;
}
