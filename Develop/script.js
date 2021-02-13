// Assignment Code

//user selects password length
function generatePassword() {

  while (!passLength) {
    var passLength = prompt("Please select the number of characters in your password between 8-128");
    if (passLength < 8 || passLength > 128) {
      alert("Must be longer than 8 characters, Must be less than 128 characters");      
      passLength = null;
    }
    if (isNaN(passLength)) {
      console.log(typeof passLength);
      alert("Must select a number");
      passLength = null;
    }

  }

  console.log(passLength);

  //user selects what type of characters


  while (
    !selLowercase &&
    !selUppercase &&
    !selNum &&
    !selSpecial
  ) {
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
      alert("Must select a character type");

    }
  }


  console.log(selLowercase, selUppercase, selNum, selSpecial);

  

  var bank = [];

  if (selLowercase) {
    bank = bank.concat("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "o", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
  }
  if (selUppercase) {
    bank = bank.concat("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "O", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
  }
  if (selNum) {
    bank = bank.concat("1", "2", "3", "4", "5", "6", "7", "8", "9");
  }
  if (selSpecial) {
    bank = bank.concat("?", ":", "(", "}", "{", ")", "@", "#", "$", "&");
  }

  console.log(bank);



  //password generation from above variables

  var passW = "";

  for (i = 0; i < passLength; i++) {
    passW = passW.concat(bank[Math.floor(Math.random() * bank.length)]);
  }
  console.log(passW);

  return passW;
}

// Write password to the #password input
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
