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

const funcKeys = {
  lower: generateLower,
  upper: generateUpper,
  number: generateNumber,
  special: generateSpecial,
};

// Generate Criteria for password
function generateCriteria() {
  // Choose length
  var passwordLength = window.prompt(
    "Choose a number of characters between 8 and 128 to generate."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please choose a valid number of characters.");
    return;
  } else if (passwordLength > 8 || passwordLength < 128) {
  }

  // Lower case criteria
  var confirmLower = window.confirm(
    "Do you want to include lower case letters?"
  );
  if (confirmLower == false) {
  } else if (confirmLower == true) {
    generateLower();
  }

  // Upper case criteria
  var confirmUpper = window.confirm(
    "Do you want to include upper case letters?"
  );
  if (confirmUpper == false) {
  } else if (confirmUpper == true) {
    generateUpper();
  }

  // Number criteria
  var confirmNumber = window.confirm("Do you want to include numbers?");
  if (confirmNumber == false) {
  } else if (confirmNumber == true) {
    generateNumber();
  }

  // Special criteria
  var confirmSpecial = window.confirm(
    "Do you want to include special characters?"
  );
  if (confirmSpecial == false) {
  } else if (confirmSpecial == true) {
    generateSpecial();
  }

  const lower = confirmLower;
  const upper = confirmUpper;
  const number = confirmNumber;
  const special = confirmSpecial;
  const length = passwordLength;

  generatePassword(lower, upper, number, special, length);
}

function generatePassword(lower, upper, number, special, length) {
  var generatedPassword = "";

  var typeCount = lower + upper + number + special;

  var typeArray = [{ lower }, { upper }, { number }, { special }].filter(
    (item) => Object.values(item)[0]
  );

  if (typeCount === 0) {
    return "";
  }
  for (let i = 0; i < length; i += typeCount) {
    typeArray.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += funcKeys[funcName]();
    });
  }

  var passwordText = document.querySelector("#password");
  passwordText.value = generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generateCriteria();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
