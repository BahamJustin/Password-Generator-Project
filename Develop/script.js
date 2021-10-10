// Assignment code here
// Generate characters
function generateLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function generateUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function generateNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function generateSpecial() {
  var special = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  return special[Math.floor(Math.random() * special.length)];
}

// Generate Password
function generatePassword() {
  // Choose length
  var passwordlength = window.prompt(
    "Choose a number of characters between 8 and 128 to generate."
  );
  if (passwordlength < 8 || passwordlength > 128) {
    window.alert("Please choose a valid number of characters.");
  }

  // Lower case criteria
  var confirmLower = window.confirm(
    "Do you want to include lower case letters?"
  );
  if (confirmLower) {
    generateLower();
  }

  // Upper case criteria
  var confirmUpper = window.confirm(
    "Do you want to include upper case letters?"
  );
  if (confirmUpper) {
    generateUpper();
  }

  // Number criteria
  var confirmNumber = window.confirm("Do you want to include numbers?");
  if (confirmNumber) {
    generateNumber();
  }

  // Special criteria
  var confirmSpecial = window.confirm(
    "Do you want to include special characters?"
  );
  if (confirmSpecial) {
    generateSpecial();
  }

  for (var i = 0; i < 10; i++) {
    generateLower([i]);
    console.log(generateLower());
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
