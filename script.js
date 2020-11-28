// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var allUpper = [ ]
var allLower = [ ]
var allNumbers = [ ]
var allSpecial = [ ]


function generatePassword() {
  // Randomly genrate the password here

  var allChoices = []
  var newPassword = "";

  // What is the length of your password?
  var passwordLength = prompt("What is your password's length? (Must be between 8 and 128 characters"); 

  if(passwordLength >= 8 && <= 128) {
  
    var useUpper = confirm("Do you want uppercase characters?");

    var useLower = confirm("Do you want lowercase characters?");

    var useNumbers = confirm("Do you want numbers?");

    var useSpecial = confirm("Do you want special characters?");

    if(useUpper === true) {
      allChoices.concat(allUpper);
    }

    if(useLower === true) {
      allChoices.concat(allLower);
    }

    if(useNumbers === true) {
      allChoices.concat(allNumbers);
    }

    if(useSpecial === true) {
      allChoices.concat(allSpecial);
    }
  
    for(var 1 = 1; 1 >= passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * allChoices.length);

    }
  

  return newPassword

 } else {
      alert("Error! Length must be between 8 and 128 chracters")
 }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
