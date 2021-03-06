// Starter Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const pLength = prompt(
    "How many characters in your password? (between 8 to 128)"
  );

  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (pLength >= 8 && pLength <= 128) {
    const lcConfirm = confirm("Include LOWERCASE characters?");
    const ucConfirm = confirm("Include UPPERCASE characters?");
    const numConfirm = confirm("Include NUMERIC characters?");
    const specConfirm = confirm("Include SPECIAL characters?");

    // Type of characters arrays
    if (lcConfirm || ucConfirm || numConfirm || specConfirm) {
      
      const lcCharArray = [
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
      const ucCharArray = [
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
      const numCharArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const specCharArray = [
        "!",
        '"',
        "#",
        "$",
        "%",
        "&",
        "'",
        "(",
        ")",
        "*",
        "+",
        ",",
        "-",
        ".",
        "/",
        ":",
        ";",
        "<",
        "=",
        ">",
        "?",
        "@",
        "[",
        "\\",
        "]",
        "^",
        "_",
        "`",
        "{",
        "|",
        "}",
        "~",
      ];
      let pwd = "";

      // Generate the password
      for (let i = 0; pwd.length < pLength; i++) {
        // Random select lower case / upper case / numeric / special
        let rdmType = Math.floor(Math.random() * 4);

        // Random lowercase character
        if (rdmType === 0 && lcConfirm) {
          console.log(`rdmType: ${rdmType} = lc`);
          let rdmLC =
            lcCharArray[Math.floor(Math.random() * lcCharArray.length)];
          console.log(`rdmLC: ${rdmLC}`);
          pwd = pwd + rdmLC;
        }

        // Random uppercase character
        else if (rdmType === 1 && ucConfirm) {
          console.log(`rdmType: ${rdmType} = uc`);
          let rdmUC =
            ucCharArray[Math.floor(Math.random() * ucCharArray.length)];
          console.log(`rdmUC: ${rdmUC}`);
          pwd = pwd + rdmUC;
        }

        // Random number character
        else if (rdmType === 2 && numConfirm) {
          console.log(`rdmType: ${rdmType} = num`);
          let rdmNumC =
            numCharArray[Math.floor(Math.random() * numCharArray.length)];
          console.log(`rdmNumC: ${rdmNumC}`);
          pwd = pwd + rdmNumC;
        }

        // Random special character
        else if (rdmType === 3 && specConfirm) {
          console.log(`rdmType: ${rdmType} = spec`);
          let rdmSpecC =
            specCharArray[Math.floor(Math.random() * specCharArray.length)];
          console.log(`rdmSpecC: ${rdmSpecC}`);
          pwd = pwd + rdmSpecC;
        }
      }

      // Return the final password generated
      console.log(`pwd: ${pwd}`);
      console.log(`pwd length: ${pwd.length}`);
      return pwd;
    } else {
      alert("Please select at least one character type.");
      generatePassword();
    }
  } else {
    alert("Please select a length number beetween 8 and 128 characters.");
    generatePassword();
  }
}

// Write password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate button
generateBtn.addEventListener("click", writePassword);