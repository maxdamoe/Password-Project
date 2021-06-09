// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 


}


function promptList(){
  var passwordDetails = window.prompt("what characters would you like to add in your password? Enter 1 for Letters only, 2 to include Numbers, and 3 to include special characters")
 
  if (passwordDetails === "1") {
    //insert function to generate password with random letters
        //then insert function to carry us to ask about length inside generating function
  }
  if(passwordDetails ==="2") {
    //insert function to generate password with random letters and numbers
        //then insert function to carry us to ask about length inside generating function

  } 
  if (passwordDetails === "3"){
    //insert function to generate password with random letters, numbers, and special characters
        //then insert function to carry us to ask about length inside generating function
  }



}



// Add event listener to generate button
generateBtn.addEventListener("click", promptList,);

 




//WHEN I click the button to generate a password THEN I am presented with a series of prompts for password criteria

