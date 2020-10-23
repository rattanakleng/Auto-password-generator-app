//var lowerCasePw;
function generatePassword() {

    // GIVEN I need a new, secure password
    // WHEN I click the button to generate a password
    // Alert user to click Gen PW botton to create password
    // After user click the botton presented with a series of prompts for password criteria
    // Prompted for password criteria
    // THEN I select which criteria to include in the password
    // WHEN prompted for the length of the password with total charactor between 8 and 128 

    // TO DO
    // Create VAR store data
    var pwLength;
    var numCheck;
    var lowerCase;
    var lowerCasePw = "abcdefghijklmnopqrstuvwxyz";
    var upperCase;
    var upperCasePw = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number;
    var numberPw = "0123456789";
    var speChar;
    var specCharPw = "!&%$#@()^";
    var newPw = "";
    var returnNewPw = "";

    //FUNCTION checkLength to PROMPT in put password length. CHECK input type and number 8-128 
    function checkLenth() {
        pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to created");

        numCheck = isNaN(pwLength);
        if (numCheck == true || pwLength < 8 || pwLength > 128) {
            alert("Please enter number between 8 and 128 for password length.");
            pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to created");
            checkLenth();
        }
    }

    //FUNCTION CONFIRM and collect password charactor for password
    function checkCharatorType() {
        if (pwLength >= 8 && pwLength <= 128) {

            // CONFIRM for lowercase and store user respond
            lowerCase = confirm("Do you want your password contain lowercase letter?");
            if (lowerCase == true) {
                newPw = lowerCasePw;
                console.log(newPw);
            };

            // CONFIRM for uppercase and create varible store user respond
            upperCase = confirm("Do you want your password contain uppercase letter?");
            if (upperCase == true) {
                newPw = newPw + upperCasePw;
                console.log(newPw);
            };

            // CONFIRM for numeric and create varible store user respond
            number = confirm("Do you want your password contain number?");
            if (number == true) {
                newPw = newPw + numberPw;
                console.log(newPw);
            };

            // CONFIRM for special characters create varible store user respond
            speChar = confirm("Do you want your password contain special charactor?");
            if (speChar == true) {
                newPw = newPw + specCharPw;
                console.log(newPw);
            };

            // Check if at lease one password option is sleclected
            if (lowerCase == false && upperCase == false && number == false && speChar == false) {
                alert("Please include letter, number, and special charactor for your password!")
                checkCharatorType();
            };

            for (var i = 0; i <= pwLength; i++) {
                returnNewPw += newPw.charAt(Math.floor(Math.random() * newPw.length));
            };
            console.log(returnNewPw);
            return returnNewPw;


        } else {
            inputCheck();
        }
    }

    // Call back function to run code and return value that matches the selected criteria
    checkLenth();
    checkCharatorType();

    return returnNewPw;
}


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
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