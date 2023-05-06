// Assignment code here
var lowCharset = "abcdefghijklmnopqrstuvwxyz";
var upCharset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numCharset = "1234567890";
var specialCharset = "!@#$%^&*()/<>";
var allChars = lowCharset + upCharset + numCharset + specialCharset;
var charset = ''
console.log(allChars);

function generatePassword() {
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
if (passwordUppers === true) {
  charset = charset + upCharset
}
var passwordLowers = confirm('Would you like to include lowercase letters?');
if (passwordLowers === true) {
  charset = charset + lowCharset
}
var passwordNumbers = confirm('Would you like to include numbers?');
if (passwordNumbers === true) {
  charset = charset + numCharset
}
var passwordSpecial = confirm('Would you like to include special characters?');
if (passwordSpecial === true) {
  charset = charset + specialCharset
  console.log(charset)
}

for (var i = 0; i < passwordLength; i++) {
var randomChooser = (Math.floor(Math.random() * charset));
console.log(randomChooser)
}
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