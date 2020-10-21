
// GIVEN I need a new, secure password

// WHEN I click the button to generate a password

// Alert user to click Gen PW botton to create password

alert("Please click Generate Password botton to create a password");

// After user click the botton presented with a series of prompts for password criteria
// Prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password with total charactor between 8 and 128 
// Create var to store password length in prompt

// var pwLength = prompt ("Please enter number for the lenght of password you want to created");
// var numCheck = isNaN(pwLength);

// Create function to verify the input number is between 8 and 128 and covert string to interger

var  pwLength;
var numCheck;

function lengthCheck() {
  pwLength = prompt ("Please enter any numbers between 8 and 128 for the lenght of password you want to created");
  numCheck = isNaN(pwLength);
  if (numCheck == true) {
   alert("Please enter number between 8 and 128 for password length.");
   pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to created");
 } 
}

lengthCheck();

function lengthCheck2() {
  pwLength = prompt ("Please enter any numbers between 8 and 128 only!");
  numCheck = isNaN(pwLength);
  if (numCheck == true) {
   alert("Please enter number only");
   pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to created");
 } 

 inputChar ();
}

// Verify if the passworkd lenght is between 8 and 128
var lowerCase;
var upperCase;
var number;
var speChar;

function inputChar () {
  if(pwLength >= 8 && pwLength <= 128) {

  // After verify the lenght of at least 8 characters and no more than 128 characters
  // Alert character types to include in the password
  // Connfirm for lowercase, create varible store user respond
  lowerCase = confirm("Do you want your password contain lowercase letter?");


  // Confirm for uppercase and create varible store user respond
  upperCase = confirm("Do you want your password contain uppercase letter?");
 
  // Confirm for numeric and create varible store user respond
  number = confirm("Do you want your password contain number?");
  
  // Confirm for special characters create varible store user respond
  speChar = confirm("Do you want your password contain special charactor?");

  } else {
    lengthCheck2();
  }
}

inputChar();
console.log(lowerCase);
console.log(upperCase);
console.log(number);
console.log(speChar);

  // THEN my confirm if input should be validated and at least one character type should be selected
  // WHEN all prompts are answered
  if(lowerCase == false && upperCase == false && number == false && speChar == false) {
    alert ("Please include letter, number, and special charactor for your password!")
    inputChar();   
  } else if (lowerCase == true && upperCase == false && number == false && speChar == false) {
    confirm("Your password contains lowercase letters only");
  } else if (lowerCase == false && upperCase == true && number == false && speChar == false) {
    confirm("Your password contains uppercase letters only");
  } else if (lowerCase == false && upperCase == false && number == true && speChar == false) {
    confirm("Your password contains numbers only");
  } else if (lowerCase == false && upperCase == false && number == false && speChar == true) {
    confirm("Your password contains special charactors only");
  } else if (lowerCase == true && upperCase == true && number == false && speChar == false) {
    confirm("Your password contains lowercase and uppercase letters only");
  } else if (lowerCase == true && upperCase == true && number == true && speChar == false) {
    confirm("Your password contains letters and numbers only");
  } else if (lowerCase == true && upperCase == true && number == false && speChar == true) {
    confirm("Your password contains letters and special charactor only");
  } else if (lowerCase == true && upperCase == false && number == true && speChar == false) {
    confirm("Your password contains lowercase letters and numbers only");
  } else if (lowerCase == true && upperCase == true && number == true && speChar == true) {
    confirm("Your password contains lowercase letter, numbers, special charactor only");
  } else if (lowerCase == false && upperCase == true && number == true && speChar == false) {
    confirm("Your password contains uppercase letters and numbers only");
  }  
  else {
    confirm("Your password contains letters, numbers, and special characters");
  }

  // THEN a password is generated that matches the selected criteria

  

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page






// Assignment Code
var generateBtn = document.querySelector("#generate");
    pop[oirtwe]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
