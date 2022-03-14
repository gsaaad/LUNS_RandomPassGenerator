// Assignment Code
//Get refereneces to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "~",
  "_",
  ".",
  ",",
  ";",
  ":",
];
var validPass = [];

// Write password to the #password input
function writePassword() {
  window.alert("Welcome to Password generator");
  window.alert(
    "You will be given a set of options to choose from, such as lowercase, uppercase, numbers, and / or Special characters!"
  );
  window.alert(
    "The password will be randomly generated and revealed in the center box"
  );
  var validatePassword = function () {
    var lowercaseConfirm = window.confirm(
      "Would you like to include [LOWERCASE] letters?"
    );

    var uppercaseConfirm = window.confirm(
      "Would you like to include [UPPERCASE] letters?"
    );

    var numConfirm = window.confirm("Would you like to include [NUMBERS]?");

    var specialConfirm = window.confirm(
      "Would you like to include [SPECIAL CHARACTERS?]"
    );

    var passLength = window.prompt(
      "How long should the password be? [Only accepting 8 to 128 characters]"
    );

    if (
      lowercaseConfirm === false &&
      uppercaseConfirm === false &&
      numConfirm === false &&
      specialConfirm === false
    ) {
      window.alert(
        "You have not selected any criteria. Please choose AT LEAST one: Lowercase, UpperCase, Special Characters, Numbers"
      );
      validatePassword();
    } else if (passLength < 8 || passLength > 128) {
      validPass = [
        lowercaseConfirm, //0
        uppercaseConfirm, //1
        numConfirm, //2
        specialConfirm, //3
      ];
      window.alert(
        "You have not chosen a valid Password Length. Please choose a password between 8 to 128 characters long"
      );
      while (passLength < 8 || passLength > 128) {
        passLength = window.prompt(
          "How long should the password be? [Only accepting 8 to 128 characters]"
        );

        validPass.push(passLength);
      }
    } else {
      validPass = [
        lowercaseConfirm, //0
        uppercaseConfirm, //1
        numConfirm, //2
        specialConfirm, //3
        passLength,
      ];
    }
    return validPass;
  };
  var results = validatePassword();

  var generatePassword = function (results) {
    //extracting numbers from array backwards
    //numbers first
    var passLength = results.pop();

    var specialPassword = results.pop();
    var numcasePassword = results.pop();
    var uppercasePassword = results.pop();
    var lowercasePassword = results.pop();
    var passArray = [];
    if (
      lowercasePassword &&
      uppercasePassword &&
      numcasePassword &&
      specialPassword
    ) {
      var passArray = lower.concat(upper, numbers, specialChars);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (lowercasePassword && numcasePassword && specialPassword) {
      var passArray = lower.concat(numbers, specialChars);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (lowercasePassword && specialPassword) {
      var passArray = lower.concat(specialChars);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (uppercasePassword && numcasePassword && specialPassword) {
      var passArray = upper.concat(numbers, specialChars);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (uppercasePassword && numcasePassword) {
      var passArray = upper.concat(numbers);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (uppercasePassword && specialPassword) {
      var passArray = upper.concat(specialChars);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (numcasePassword && specialPassword) {
      var passArray = numbers.concat(specialChars);
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (lowercasePassword) {
      var passArray = lower;
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (uppercasePassword) {
      var passArray = upper;
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (numcasePassword) {
      var passArray = numbers;
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    } else if (specialPassword) {
      var passArray = specialChars;
      var randomPass = "";
      for (var i = 0; i < passLength; i++) {
        randomPass += passArray[i];
        return randomPass;
      }
    }
  };

  var password = generatePassword(results);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
