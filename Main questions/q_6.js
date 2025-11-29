//  The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U" ||
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("sachin"));
console.log(countVowels("Hello world"));
console.log(countVowels("AEIOU"));
console.log(countVowels("aeiou"));
