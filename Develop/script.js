// Assignment Code
var generateBtn = document.querySelector("#generate");

  var numbers = ["1","2","3","4","5","6","7","8","9"];
  var specChar = ["?", ":", "(", "}", "{", ")", "@", "#", "$", "&"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","o","m","n","p","q","r","s","t","u","v","w","x","y","z"];
  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","O","M","N","P","R","S","T","U","V","W","X","Y","Z"];

function passSelect () {

  var passLength = prompt("Please select the number of characters in your password between 8-128");

  if (passLength < 8){
    alert("Must be longer than 8 characters");    
  }

  if (passLength > 128){
    alert("Must be less than 128 characters");
  }
  

var selLowercase =  prompt("Would you like lowercase letters?");  
var selUppercase =  prompt("Would you like uppercase letters?");
var selNum =  prompt("Would you like numbers?");
var selSpecial =  prompt("Would you like special characters?");


if (
  selLowercase === false&&
  selUppercase === false&&
  selNum === false&&
  selSpecial === false
)
{
  alert ("Must select a character type")
}



function generatePassword (){

}

for (i = 0; i < passLength.length; i++)
  
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
