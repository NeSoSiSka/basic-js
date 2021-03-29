const CustomError = require("../extensions/custom-error");

let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  encrypt(message, key) {
    throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let kStr = [];
    let eStr = [];

    for (let i = 0; i < message.length; i++) {
      if (kStr.length == message.length) {
        break;
      } else if (i == key.length - 1) {
        i = 0;
      } else {
        kStr.push(key[i]);
      }
    }

    for (let i = 0; i < message.length; i++) {
      if (alphabet.indexOf(message[i]) == -1) {
        eStr.push(i);
        continue;
      }

      let index = alphabet.indexOf(message[i]) + alphabet.indexOf(kStr[i]);

      if (index > 26) {
        index = index - 26;
      }

      eStr.push(alphabet[index]);
    }
  }    
  decrypt(message, key) {
    throw Error;
    message = message.toUpperCase();
    key = key.toUpperCase();

  }
}

module.exports = VigenereCipheringMachine;
