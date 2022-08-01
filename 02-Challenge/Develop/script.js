// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"
var specialCharacters = "~`!@#$%^&*()-_=+"

var allOptions = [lowercaseAlphabet, uppercaseAlphabet, numbers, specialCharacters]



// Write password to the #password input
function writePassword() {
  
  var lowercaseAlpha = confirm("Would you like to include lowercase letters?");
  var uppercaseAlpha = confirm("Would you like to include uppercase letters?");
  var numb = confirm("Would you like to include any numbers?")
  var specialChara = confirm("Would you like to include any special characters?");
  var passwordLen = confirm("Please choose between 8 and 128 characters.");
  var passwordLength = 129; 




  for (var i = 9; i <= passwordLength; i++) {
    var randomString = Math.floor(Math.random() * )
  }

  var password = "";
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
