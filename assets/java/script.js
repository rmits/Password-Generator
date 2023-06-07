// Assignment code here
var lowCharset = "abcdefghijklmnopqrstuvwxyz";
var upCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharset = "1234567890";
var specialCharset = "!#$%&')*+,-./:;<=>?]/[^_`{|~";
var allChars = lowCharset + upCharset + numCharset + specialCharset;
console.log(allChars);

function generatePassword() {
var charset = '';

var passwordLength = prompt("Please input a number between 8 and 128 for the length of the password");
console.log(passwordLength);
if (passwordLength === '') {
  alert('Input is empty, try again!');
  return generatePassword();
} else if (passwordLength < 8 || passwordLength > 128) {
  alert('Input does not match guidelines, try again!');
  return generatePassword();
} 


var passwordUppers = confirm("Would you like to include uppercase letters?");
if (passwordUppers) {
  charset += upCharset;
}
var passwordLowers = confirm('Would you like to include lowercase letters?');
if (passwordLowers) {
  charset  +=  lowCharset;
}
var passwordNumbers = confirm('Would you like to include numbers?');
if (passwordNumbers) {
  charset  +=  numCharset;
}
var passwordSpecial = confirm('Would you like to include special characters?');
if (passwordSpecial) {
  charset  +=  specialCharset;
}

var chosenPassword = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    chosenPassword += allChars[randomIndex];
  }

  return chosenPassword;
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);