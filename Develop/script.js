var s = ""
var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numeros = "1234567890"
  var specChars = "!#$%&*+-/:@?="

  




function promptlength() {


  var passwordLength = window.prompt("How long would you like your password to be? please insert a whole number between 8 and 128")

  if (passwordLength !== "brown") {
    var nut = window.prompt("Would you like to add lowercase letters to your password? Please insert yes or DONE to exit")
      if (nut == "yes"){
        var uppercase = window.prompt("Would you like to add uppercase letters to your password? Please insert yes to continue or DONE to recieve your password")
          if (uppercase == "DONE") {
            lowerCaseOnly()
          }
          if (uppercase == "yes"){
            var numeric = window.prompt("Would you like to add numbers to your password? Please insert yes to continue or DONE to recieve your password")
            if (numeric == "DONE"){
              upperCaseOnly()
            }
            if (numeric == "yes"){
              var specialCharacters = window.prompt("Would you like to add special characters to your password? Please insert yes to include them in your password or DONE to recieve your password")
              if (specialCharacters == "DONE"){
                numericOnly()
              }
              if (specialCharacters == "yes"){
                specialCharactersOnly()
              }

            }
          }
      }

  
  }}
 
  
  
  
  
  
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", promptlength);

