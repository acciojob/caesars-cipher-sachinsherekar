// Your Script here.

const lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M', '?': '?', ',': ','
};

// function rot13(encodedStr){
 //  let decodedArr = []; // Your Result goes here
  // Only change code below this line
	function rot13(encodedString) {
  // Create a variable to store the decoded string
  let decodedString = "";

  // Iterate over each character in the encoded string
  for (let i = 0; i < encodedString.length; i++) {
    // Get the ASCII code of the current character
    const charCode = encodedString.charCodeAt(i);

    // Decode the character based on the ROT13 algorithm
    let decodedChar;
    if (charCode >= 65 && charCode <= 90) {
      // Decode uppercase letters (A-Z)
      decodedChar = String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Decode lowercase letters (a-z)
      decodedChar = String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      // Leave non-alphabetic characters unchanged
      decodedChar = encodedString[i];
    }

    // Append the decoded character to the decoded string
    decodedString += decodedChar;
  }

  // Return the decoded string
  return decodedString;
}


  // return ;//return decodedArr
//}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

module.exports = rot13;
