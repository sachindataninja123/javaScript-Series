// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function isValidPassword(password) {
  if (password.length < 8) {
    return false;
  }

  let hasUpperCase = /[A-Z]/.test(password);
  let hasLowerCase = /[a-z]/.test(password);
  let hasDigit = /[0-9]/.test(password);

  return hasUpperCase && hasLowerCase && hasDigit;
}
console.log(isValidPassword("pass1"));
console.log(isValidPassword("pssw2iiiiop"));
console.log(isValidPassword("Password1")); // true
console.log(isValidPassword("pass1")); // false (too short, no uppercase)
console.log(isValidPassword("PASSWORD1")); // false (no lowercase)
console.log(isValidPassword("password")); // false (no digit, no uppercase)
