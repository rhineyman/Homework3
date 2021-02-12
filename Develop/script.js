// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = ("1", "2", "3", "4", "5", "6", "7", "8", "9");
var specChar = ("?", ":", "(", "}", "{", ")", "@", "#", "$", "&");
var lowercase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
var uppercase = ("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
//use selects password length
var passLength = prompt("Please select the number of characters in your password between 8-128");
if (passLength < 8) {
  alert("Must be longer than 8 characters");
} if (passLength > 128) {
  alert("Must be less than 128 characters");
}
console.log(passLength);
//user selects what type of characters
var selLowercase = confirm("Would you like lowercase letters?");
var selUppercase = confirm("Would you like uppercase letters?");
var selNum = confirm("Would you like numbers?");
var selSpecial = confirm("Would you like special characters?");
if (
  selLowercase === false &&
  selUppercase === false &&
  selNum === false &&
  selSpecial === false
) {
  alert("Must select a character type")
}
console.log(selLowercase, selUppercase, selNum, selSpecial);

var userSelect = (selLowercase, selUppercase, selNum, selSpecial, passLength);

console.log(userSelect);

//password generation from above variables

var index = Math.floor(Math.random(selLowercase) * passLength.length);
console.log(index)
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
