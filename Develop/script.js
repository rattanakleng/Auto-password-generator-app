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
    // var pwLength;
    // var numCheck;
    // var lowerCase;
    // var lowerCasePw = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var upperCase;
    // var upperCasePw = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // var number;
    // var numberPw = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    // var speChar;
    // var speCharPw = ["!", "&", "%", "$", "#", "@", "(", ")", "^"];
    // var newPw = "";
    // var returnNewPw = "";




    var pwLength;
    var lowerCase;
    var lowerCasePw = "abcdefghijklmnopqrstuvwxyz";
    var upperCase;
    var upperCasePw = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number;
    var numberPw = "0123456789";
    var speChar;
    var speCharPw = "!&%$#@()^";
    var newPw = "";
    var returnNewPw = "";
    var finalPassword = "";


    //FUNCTION checkLength to PROMPT in put password length. CHECK input type and number 8-128 

    pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to creat.");


    while (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
        //pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to create.");
        console.log("try again");
        pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to creat.");

    }

    lowerCase = confirm("Do you want your password contain lowercase letter?");
    upperCase = confirm("Do you want your password contain uppercase letter?");
    number = confirm("Do you want your password contain number?");
    speChar = confirm("Do you want your password contain special charactor?");

    if (lowerCase === false && upperCase === false && number === false && speChar === false) {
        alert("Password must include letter, number, or special charactor for your password! Please try gain")
        // pwLength = prompt("Please enter any numbers between 8 and 128 for the lenght of password you want to creat.");
        // //generatePassword();
        return "Click Generate Password botton to create a password";
    };

    //FUNCTION CONFIRM and collect password charactor for password
    while (newPw.length < pwLength) {

        // CONFIRM for lowercase and store user respond
        //lowerCase = confirm("Do you want your password contain lowercase letter?");
        if (lowerCase) {

            newPw = lowerCasePw.charAt(Math.floor(Math.random() * lowerCasePw.length));

            //newPw = lowerCasePw;
            console.log(newPw);

            //returnNewPw += newPw.charAt(Math.floor(Math.random() * newPw.length))
        };

        // CONFIRM for uppercase and create varible store user respond
        //upperCase = confirm("Do you want your password contain uppercase letter?");
        if (upperCase) {

            newPw = newPw + upperCasePw.charAt(Math.floor(Math.random() * upperCasePw.length));
            console.log(newPw);
        };

        // CONFIRM for numeric and create varible store user respond
        // number = confirm("Do you want your password contain number?");
        if (number) {
            newPw = newPw + numberPw.charAt(Math.floor(Math.random() * numberPw.length));
            console.log(newPw);
        };

        // CONFIRM for special characters create varible store user respond
        //speChar = confirm("Do you want your password contain special charactor?");
        if (speChar) {
            newPw = newPw + speCharPw.charAt(Math.floor(Math.random() * speCharPw.length));
            console.log(newPw);
        };

        // finalPassword = newPw

        finalPassword = newPw;
        for (var i = 0; i < pwLength; i++) {
            returnNewPw += newPw.charAt(Math.floor(Math.random() * newPw.length));
        };

        return returnNewPw;
    }

    return returnNewPw;

}

// Call back function to run code and return value that matches the selected criteria
// console.log(returnNewPw);
// return finalPassword;


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