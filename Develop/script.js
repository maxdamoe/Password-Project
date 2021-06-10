// Assignment code here



function promptlength() {

  passwordLength = window.prompt("How long would you like your password to be? please insert a whole number between 8 and 128")
  lowercase = window.prompt("Would you like to include lowercase letters in your password? Please insert yes or no")
  uppercase = window.prompt("Would you like to include uppercase letters in your password? Please insert yes or no")
  numeric = window.prompt("Would you like to include numeric charactes in your password? Please insert yes or no")
  specialCharacters = window.prompt("Would you like to include special characters in your password? Please insert yes or no")

  var brown = [lowercase, uppercase, numeric, specialCharacters]

  
  
  // Password generating for-loop, for numbers

  var s = ""

  for ( var i = 0; i < passwordLength; i++){
    
    window.alert(s +=(Math.floor(Math.random() * brown.length)))
    
    
    //if (brown = [yes, yes, yes, yes]) { 
      //window.alert(brown[Math.floor(math.random() * brown.length)])
    //}


  }
  
  









  
  //function next(length){
    
   //poop = window.prompt("Include lowercase characters? type yes or no.")

    //if (poop === yes) {
      //function continuation(poop){
        //poop = window.prompt("Include uppercase characters? type yes or no.")
        

     //}

    //if (poop === no)
     
   //}

  //}

//next()




}
 





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 


}

generateBtn.addEventListener("click", promptlength);























// function length(){
// var length = window.prompt("How long would you like your password to be? please insert a whole number between 8 and 128")






function promptsecondpart(){
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

 




//WHEN I click the button to generate a password THEN I am presented with a series of prompts for password
