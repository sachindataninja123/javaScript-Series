//PRIMITIVE DATA TYPE( 7 ) Decelaration

let name = "Sachin kumar";
console.log(name);
console.log(typeof name);
let price = 777.1;
console.log(price);
console.log(typeof price);
let isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);
let x;
console.log(typeof x);

let y = null;
console.log(typeof y);

let integer = BigInt("123456");
console.log(integer);
console.log(typeof integer);

let t = Symbol("Hello!");
console.log(t);
console.log(typeof t);


//NON-PRIMITIVE DATA TYPE (OBJECT(ARRAYS , FUNCTIONS))
//decelaration
 const student ={
    name : "Ram Kumar",
    Branch : "B.tech",
    CGPA : 8.6,
    isPass : true,
    age : 23,
 };
 console.log(student);
console.log(typeof student);
console.log(student["name"]);
console.log(student["CGPA"]); //access a key value
console.log(student["isPass"]);
console.log(student.age);

student["name"] = "Sachin Kumar"; // to change the value of name
console.log(student.name); 