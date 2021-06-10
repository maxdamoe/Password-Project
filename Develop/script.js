
//Declaring Necessary Variables

var s = ""
var lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
var upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeros = "1234567890"
var specChars = "!#$%&*+-/:@?="

var upperLower = lowerCaseAlphabet + upperCaseAlphabet
var upperLowerNumber = lowerCaseAlphabet + upperCaseAlphabet + numeros
var all = lowerCaseAlphabet + upperCaseAlphabet + numeros + specChars






// Main Function, this gets called on click event

function promptlength() {


  var passwordLength = window.prompt("How long would you like your password to be? please insert a whole number between 8 and 128")

  if (passwordLength !== "brown") {
    var nut = window.prompt("Would you like to add lowercase letters to your password? Please insert yes or DONE to exit")
    if (nut == "yes") {
      var uppercase = window.prompt("Would you like to add uppercase letters to your password? Please insert yes to continue or DONE to recieve your password")
      if (uppercase == "DONE") {

        function lowerCaseOnly() {
          for (var i = 0; i < passwordLength; i++) {

            var neck = (s += (lowerCaseAlphabet[Math.floor(Math.random() * 26)]))

          }
          window.alert("your password is" + neck)
        }
        lowerCaseOnly()
      }


      if (uppercase == "yes") {
        var numeric = window.prompt("Would you like to add numbers to your password? Please insert yes to continue or DONE to recieve your password")
        if (numeric == "DONE") {

          function upperCaseOnly() {
            for (var i = 0; i < passwordLength; i++) {

              var tubby = (s += (upperLower[Math.floor(Math.random() * 52)]))
            }
            window.alert("your password is" + tubby)
          }
          upperCaseOnly()
        }


        if (numeric == "yes") {
          var specialCharacters = window.prompt("Would you like to add special characters to your password? Please insert yes to include them in your password or DONE to recieve your password")
          if (specialCharacters == "DONE") {

            function numericOnly() {
              for (var i = 0; i < passwordLength; i++) {

                (s += (upperLowerNumber[Math.floor(Math.random() * 62)]))
              }
              window.alert("your password is" + s)
            }
            numericOnly()
          }

          if (specialCharacters == "yes") {

            function specialCharactersOnly() {
              for (var i = 0; i < passwordLength; i++) {
                (s += (all[Math.floor(Math.random() * 75)]))
              }

              window.alert("Your password is" + s)
            }

            specialCharactersOnly()
          }

        }
      }
    }


  }
}






var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", promptlength);

