const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alpahabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  }

  encrypt(str = '', key = '') {
    if (str === '' || key === '') {
      throw new Error();
    }
    let keyPreArray = key.toUpperCase().split('');
    const keyArrLength = keyPreArray.length;
    const strArray = str.toUpperCase().split('');
      let prevIndex = 0;
      const newKeyArray = new Array(strArray.length);
      const keyArray = strArray.map((i, index) => {
        if (this.getCode(i) > 90 || this.getCode(i) < 65) {
          newKeyArray[index] = i;
          return i;
        } else {
          const currentIndex = index === 0 ? 0 : this.getCurrentIndex(keyPreArray, prevIndex);
          const currentElementFromKeyArray = keyPreArray[currentIndex];
          newKeyArray[index] = currentElementFromKeyArray;
          prevIndex = currentIndex;
          return i;
        }
      })
    const encryptArray = strArray.map((i, index) => {
      if (this.getCode(i) > 90 || this.getCode(i) < 65) {
        return i;
      }
      const strLetter = i;
      const keyLetter = newKeyArray[index];
      const numberOfStrLetter = this.getNumber(strLetter);
      const numberOfKeyLetter = this.getNumber(keyLetter);
      const thePrevNumber = (numberOfKeyLetter + numberOfStrLetter - 1);
      const theNumber = thePrevNumber > 26 ? thePrevNumber % 26 : thePrevNumber;
      return this.getLetter(theNumber);
    })
    if (this.type === false) {
      return encryptArray.reverse().join('');
    }
    return encryptArray.join('');
  }
  decrypt(encStr = '', key = '') {
    if (encStr === '' || key === '') {
      throw new Error();
    }
    let keyPreArray = key.toUpperCase().split('');
    const keyArrLength = keyPreArray.length;
    const strArray = encStr.toUpperCase().split('');
      let prevIndex = 0;
      const newKeyArray = new Array(strArray.length);
      const keyArray = strArray.map((i, index) => {
        if (this.getCode(i) > 90 || this.getCode(i) < 65) {
          newKeyArray[index] = i;
          return i;
        } else {
          const currentIndex = index === 0 ? 0 : this.getCurrentIndex(keyPreArray, prevIndex);
          const currentElementFromKeyArray = keyPreArray[currentIndex];
          newKeyArray[index] = currentElementFromKeyArray;
          prevIndex = currentIndex;
          return i;
        }
      })
    const decryptArray = newKeyArray.map((i, index) => {
      if (this.getCode(i) > 90 || this.getCode(i) < 65) {
        return i;
      }
      const keyLetter = i;
      const strLetter = strArray[index];
      const keyNumberFromLetter = this.getNumber(keyLetter);
      const strNumberFromLetter = this.getNumber(strLetter);
      let answerNumber = strNumberFromLetter - keyNumberFromLetter + 1;
      answerNumber = answerNumber > 0 ? answerNumber : 26 + answerNumber;
      const answerLetter = this.getLetter(answerNumber);
      return answerLetter;
    })
    if (this.type === false) {
      return decryptArray.reverse().join('');
    }
    return decryptArray.join('');
  }

  getNumber(letter) {
    const as = this.alpahabet.split('');
    const num = as.findIndex((i) => i === letter.toUpperCase()) + 1;
    return num;

  }

  getLetter(number) {
    return this.alpahabet.split('')[number - 1];
  }

  getCurrentIndex(array, prevIndex) {
    if (array.length === prevIndex + 1) {
      return 0;
    } else {
      return prevIndex + 1;
    }
  }

  getCode(item) {
    return item.codePointAt(0)
  }
}


module.exports = VigenereCipheringMachine;
