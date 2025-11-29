//Object Example

// const student ={
//     fullName : "Sachin Kumar",
//     marks : 89,
//     gender : "male",
//     myFunction : function() {
//         console.log("marks" , this.marks);
//     }
// // }

// // prototype
// const employee = {
//     calcTax1() {
//         console.log("Tax rate is 12%");
//     },
// };

// const karanArjun1 = {
//     salary : 60000,
// };
// const karanArjun2 = {
//     salary : 60000,
// };
// const karanArjun3 = {
//     salary : 60000,
// };
// const karanArjun4 = {
//     salary : 60000,
// };

// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;

// let obj = {
//     a:1,
//     b:"Harry",
// }
// console.log(obj);
// let animal = {
//     eats : true
// };

// let rabbit = {
//     jump : true
// };

// rabbit.__proto__ = animal;

//class

// class toyotaCar{
//     start() {
//         console.log("start");
//     }

//     stop() {
//         console.log("Stop");
//     }

//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new toyotaCar();
// fortuner.setBrand("fortuner");
// let lexus = new toyotaCar();
// lexus.setBrand("lexus");

class Animal {
  constructor(name) {
    this.name= name;
    console.log("Object is created");
  }
  eats() {
    console.log("Kha raha hoon");
  }
  jump() {
    console.log("Kood raha hun");
  }
}

class Lion extends Animal {
  constructor(name) {
    super(name)
    console.log("Object is created and he is a lion");
  }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Shera");
console.log(l);
