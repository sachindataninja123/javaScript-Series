// // let text = "Sachin,  kumar";
// // // console.log(text.length);

// // // console.log(text.indexOf("kumar"));

// // /*Index of() method find value from starting */
// // //str from array
// // let strArr = Array.from(text);
// // // console.log(strArr);

// // let strMap =  strArr.map((currElem, index) => `${currElem} - ${index}`);
// // console.log(strMap);

// /*lastIndex of() method find value from last of the sentence/word */
// // let text = "Hello ! javascript, welcome to our world best javascript course!"
// // let index2 = text.indexOf("javascript");
// // let index = text.lastIndexOf("javascript");
// // let index3 = text.lastIndexOf("javascript", 40);

// // console.log(index);
// // console.log(index2);
// // console.log(index3);

// /*Search() method */
// // let result = text.search("javascript"); // if word not found it always returns -1
// // console.log(result);

// /*match() method */
// // let result2 = text.match("javascript");
// // let result2 = text.match(/javaScript/g);  g --> globally search
// // let result2 = text.match(/javaScript/gi);  // i --> case sensitive if word match it returns true
// // console.log(result2);

// /*matchall() method */
// // let matchWord = text.matchAll("javascript");
// // console.log(...matchWord)
// // for(let items of matchWord) {
// //     console.log(items);
// //     console.log(items[0]);
// // }

// // for(let index of matchWord) {
// //     console.log(index.index);
// // }


// /*includes() method = returns true if the string contains the specified value, and false otherwise.. */
// // let includeResult = text.includes("java");
// // console.log(includeResult);

// /*substring() method */
// // let text = "Hello ! javascript, welcome to our world best javascript course!";
// // // let result = text.substring(0);
// // // let result = text.substring(1);
// // let result = text.substring(-5);
// // console.log(result);

// //at().method
// // const text2  = "Welcome to my technical world!"
// // let result2 = text2.at(-6);
// // console.log(result2);

// /*trim() : removes whitespaces both from ends and starts of the string. */
// // const str = "   Hello , World!  ";
// // console.log(str.length);

// // let trimStr = str.trim();
// // console.log(trimStr);
// // console.log(trimStr.length);



// /*solit : splits the string into an array of substrings based on a specifired delimiter.. */
// // const str  = "apple,orange,banana";
// // let strArr = str.split(",");
// // console.log(strArr);

// //reverse
// // const str  = "apple,orange,banana";
// // let strArr = str.split(",").reverse();
// // console.log(strArr);

// // now change into string
// // const str  = "apple,orange,banana";
// // let strArr = str.split(",").reverse().join();
// // console.log(strArr);


// /* to print a character a to z */
// // console.log("a".charCodeAt());
// // console.log("z".charCodeAt());

// // for(let char = 97; char <= 122; char++){
// //     // console.log(char);
// //     console.log(String.fromCharCode(char));
// // }

// /*Write a function to check if all the vowels presents in a string or not?  */
// // const checkAllVowels = (str) => {
// //     const vowels = "aeiou";
// //     for(let char of vowels){
// //         // console.log(char);
// //         // console.log(str.includes(char));
// //         if(!str.includes(char)){
// //             return false;
// //         }
        
// //     }
// //    return true;
    
// // }
// // console.log(checkAllVowels("My name is sachin Kushwaha.What yours?"));



// /* QUE.. Now count the value of the vowels in string */
// // const checkAllVowels = (str) => {
// //     const vowels = "aeiou";
// //     let count = 0;
// //     for(let char of str){
// //         // console.log(char);
// //         // console.log(str.includes(char));
// //         if(vowels.includes(char)){
// //             count++;
// //         }
        
// //     }
// //    return count;
    
// // }
// // console.log(checkAllVowels("My name is sachin Kushwaha.What yours?"));

// /*QUE... WRITE a js function to check given number isPangram or not?? */
// const pangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");
//     console.log(inputArr);

//     const values = inputArr.filter((currElem) => 
//         currElem.charCodeAt() >= "a".charCodeAt() &&  currElem.charCodeAt() <= "z".charCodeAt() 
//     );

//     console.log(values);
//     return[...new Set(values)].length === 26;
// }
// console.log(pangramChecker("the quick a brown fox jumps ove the lazy dog"));


