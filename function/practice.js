/* Que 1...Create a function using the "Function"  keyword that takes a string as an argument
& returns the number of vowels in the string */

// function countVowels(string) {
//   let count = 0;
//   for (const char of string) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("apnacollege");
// countVowels("abcde");
// countVowels("ramkumar");
// countVowels("waterstoring");
// countVowels("usingoffunction");

// Que 2... Create a arrow function to perform the same task.
const countVowels = (str) => {
    count = 0;
    for (const char of str) {
     if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
}
    console.log(count);
}
countVowels("apnacollege");