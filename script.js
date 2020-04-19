// Declared Var
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCh = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]

// Start Functions
function pwOptions() {
  var pwLength = prompt("How long do you want ur pw 8 - 128 characters?")
  if (pwLength < 8 || pwLength > 129){
    alert ("Must be password between 8 - 128 characters.")
  }
  
  // Setup confirm 
  var confirmsUppers = confirm ("Do you want Uppercase letters in your password?");

  var confirmsLower = confirm ("Do you want Lowercase letters in your password?");

  var confirmsSpecial = confirm ("Do you want special characters in your password?");

  var confirmNumbers = confirm ("Do you want numbers in your password?");
 
  // 
 var container = { 
   pwLength: pwLength,
   confirmsUppers: confirmsUppers,
   confirmsLower: confirmsLower,
   confirmsSpecial: confirmsSpecial,
   confirmNumbers: confirmNumbers
 }  
  
return container;

}
 // Setup empty Arrays for loop
function generatePassword () {
  var container = pwOptions();
  var allPos = [] 
  var genPw = []


  //container.confirmsUppers === true/false
  if ( container.confirmsUppers ) {
    allPos = allPos.concat(uppercase)
    
  }
  if ( container.confirmsLower ){
    allPos = allPos.concat(lowercase)
    
  }
  if ( container.confirmsSpecial ){
    allPos = allPos.concat(specialCh)
        
  }
  if ( container.confirmNumbers ) {
    allPos = allPos.concat(numerical)
        
  }
  // Test console.log(allPos);

  for (var i = 0; i < container.pwLength; i++) {
    
    var rIndex = Math.floor(Math.random() * allPos.length)
    //console.log(allPos[rIndex]);
    genPw.push(allPos[rIndex])
  }
  //convert into a string
  return genPw.toString().replace(/,/g, '');
   
  
}

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
