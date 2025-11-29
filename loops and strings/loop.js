// //LOOP


//for loop
// //print 1 to 5
// for(let i = 1; i<=10; i++){
//     console.log("hii");
// }
// //to print a table
// let table = 5;
// for(let i = 1; i<=10; i++){
//     console.log(table*i);
// }

//calculate sum of 1 to 5
// let sum = 0;
// for(let i = 1; i<=5; i++){
//     sum +=i;
// }
// console.log("sum is :", sum);

//while loop
// let a = 1;
// while(a <= 16){
//     console.log("a =",a);
//     a++;
// }

//do while loop
// let b = 1;
// let table = 7;
// do{
//     console.log("table is =",b*table);
//     b++;   
// }while(b <= 10);

//for-of-loop
// let str="sachinKumar";
// let length = 0;
// for(let Val of str){
//     console.log("Val =",Val);
//     length++;
// }
// console.log("String Size :",length);

//for-in loop
let student = {
    Name : "sachin",
    Branch : "B.tech",
    Roll_no : "24CS08",
    CGPA : 8.6,
    isPass : true,
}

for( let key in student){
    // console.log("key =",key);
       console.log("key =",key , "value =",student[key]);
}
