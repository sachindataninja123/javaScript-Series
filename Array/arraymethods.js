//Array Methods

let veggies = ["potato" , "tomato" ,"papaya" ,"bettergourd" ,"lady's finger","banana"];
// console.log(veggies);
// veggies.push("cucumber","chips" ,"namkeen" ,"snacks"); // use push() method to add something in the end of an array
// console.log(veggies);

//pop() :delete from end & return
// console.log(veggies);
// let deleted = veggies.pop();
// console.log(veggies);
// console.log("Deleted item is :",deleted);

//toString() : converts array to string
// console.log(veggies);
// console.log(veggies.toString());

// let marks = [99,88,90,78,98,45];
// console.log(marks);
// console.log(marks.toString());


//concat() : joins multiple array & return result
// let marvelHeros = ["ironman" ,"hulk" , "thor" ,"spiderman"];
// let dcHeros = [" batman" , "superman" ,"badmash man"];
// let indianHeros= ["krish" , "shaktiman"];

// let heros = marvelHeros.concat(dcHeros , indianHeros);
// console.log(heros); // return new array

//unshift() : add to shift at first
// let marvelHeros = ["ironman" ,"hulk" , "thor" ,"spiderman"];
// console.log(marvelHeros);
// marvelHeros.unshift("antman");
// console.log(marvelHeros);
// console.log(typeof marvelHeros);
// console.log(marvelHeros.length);

//shift() : delete from start & return
// let marvelHeros = ["ironman" ,"hulk" , "thor" ,"spiderman"];
// console.log(marvelHeros);
// let deleted = marvelHeros.shift();
// console.log(marvelHeros);
// console.log(deleted);


//slice() :return a piece of an array
//slice(startIdx , endIdx)
// let marks = [77,88,99,55,66,44,33];
// console.log(marks);
// console.log(marks.slice(1,3));
// console.log(marks.slice()); //return a copy of an array

//splice() : change original method(add,remove,replace)
//splice(startIdx,delCount,newEle...)

let numbers =[1,2,3,4,5,6,7,8,9];
// numbers.splice(2,3,101,202,303);
console.log(numbers);

// //Add element
// numbers.splice(2,0,101);
// console.log(numbers);

//delete element
// numbers.splice(2,3);
// console.log(numbers);

//replace element
// numbers.splice(2,1,101);
// console.log(numbers);

numbers.splice(4);
 console.log(numbers);