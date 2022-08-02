// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "~`!@#$%^&*()-_=+";
var passwordString = "";
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  
  var lowercaseAlpha = confirm("Would you like to include lowercase letters?");
  var uppercaseAlpha = confirm("Would you like to include uppercase letters?");
  var numb = confirm("Would you like to include any numbers?")
  var specialChara = confirm("Would you like to include any special characters?");
  var passwordLength = (prompt("Please choose between 8 and 128 characters.")); 

  while(passwordLength <= 9 || passwordLength >= 129) {
    alert("Password length must be between 8 and 128 characters. Please try again")
    var passwordLength = (prompt("Please choose between 8 and 128 characters.")); 
  }

  var passwordString = "";

  if (lowercaseAlpha) {
    passwordString += lowercaseAlphabet;
  }

  if (uppercaseAlpha) {
    passwordString += uppercaseAlphabet;
  }

  if (numb) {
    passwordString += numbers;
  }

  if (specialChara) {
    passwordString += specialCharacters;
  }

  var newPassword = ""

  for (var i = 1; i <= passwordLength; i++) {
    newPassword += passwordString.charAt(Math.floor(Math.random() * passwordString.length));
  } 

  passwordText.value = newPassword; 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

