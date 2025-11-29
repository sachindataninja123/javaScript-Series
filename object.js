// const person = {
//     id :  22,
//     Name : "Mohan",
//     class : "B.tech",
//     Roll_no : "24cs08",
//     "is'student" : true,
//    greet: function() {
//     console.log("hello! Welcome Again");
//    }
// };
// //to print value

// console.log(person.Name);
// console.log(person.Roll_no);
// console.log(person["is'student"]);

// //to add more properties and modify them
// person.career = "Web Developer";
// person.id  =  45;
// console.log(person);
// person.greet();

// let idType = "studentId";
// let  student = {
//     [idType] :"A123456",
//     sName : "Sachin",
//     sAge : 25,
//     isStudent : true,
//     greet : function() {
//         return `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}`
//     }
// }
// console.log(student.greet());

//Pass by value
// let a = 10;
// const modifyValue = (x) => {
//    return x = 40;
// };

// console.log(modifyValue(a));
// console.log(a);

/*INTERVIEWS QUESTION*/
// const target = { a : 1 , b : 2 };
// const source = { b : 3 , c : 4 };

// const mergedObject =  Object.assign({}, target, source);
// console.log(mergedObject);

/*PROBLEM 1 */

// let student = {
//   name: "Bob",
//   id: 45,
//   grades: {
//     math: 90,
//     sst: 88,
//     science: 98,
//   },
// };

// const addSubjectGrade = (student, subject, marks) => {
//   if (!student.grades) {
//     student.grades = {};
//   }
//   return (student.grades[subject] = marks);
// };

// addSubjectGrade(student, "computer", 92);
// console.log(student);

/*Problem 2 */
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };


// const areObjectsEqual = () => {
//   let o1 = Object.keys(objA);
//   let o2 = Object.keys(objB);

//   if (o1.length !== o2.length) {
//     console.log("There keys are not same");
//     return false;
//   }

//   for (let key in objA) {
//     if (objA[key] !== objB[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(areObjectsEqual(objA, objB));

/*Problem 3 */

let inputArray = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "charlie" },
];

const ArrayToObj = (arr) => {
    let obj = {};
    for(let key of arr) {
        console.log(key.id, key);
        obj[key.id] = key;
    }
    return obj;
}


console.log(ArrayToObj(inputArray));
