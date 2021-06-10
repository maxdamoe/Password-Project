// Helper functions 



function lowerCaseOnly(){
    for ( var i = 0; i < passwordLength; i++){ 
    
        window.alert(s +=(lowerCaseAlphabet[Math.floor(Math.random() * passwordLength)]))
    }
    console.log(s)
}

// generate password of lowercase + Uppercase 

function upperCaseOnly() {
    for ( var i = 0; i < passwordLength; i++){ 
    
        window.alert(s +=(upperCaseAlphabet + lowerCaseAlphabet)[Math.floor(Math.random() * passwordLength)]))
    }
    window.alert(s)
}


//generate password of lowercase + uppercase + numbers 

function numericOnly(){
    for ( var i = 0; i < passwordLength; i++){
    
        window.alert(s +=(upperCaseAlphabet + lowerCaseAlphabet + numeros)(Math.floor(Math.random() * passwordLength)))
      }
      window.alert(s)
}

//generate password with all 4 types 

function specialCharactersOnly(){
    for ( var i = 0; i < passwordLength; i++){ 
    
        window.alert(s +=(upperCaseAlphabet + lowerCaseAlphabet + numeros + specChars)[Math.floor(Math.random() * passwordLength)])
    }
    window.alert(s)
}








