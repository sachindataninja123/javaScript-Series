// 3. The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorMirror(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  let mirror = str + reversed;
  return mirror;
}

console.log(mirrorMirror("abcd"));
console.log(mirrorMirror("123"));
console.log(mirrorMirror("12357"));
console.log(mirrorMirror("a"));
