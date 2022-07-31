// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "~`!@#$%^&*()-_=+"



// Write password to the #password input
function writePassword() {
  
  var passwordLength = 128; 
  var password = "";
  var passwordText = document.querySelector("#password");

  for (var i = 9; i <= passwordLength; i++) { 
    
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
