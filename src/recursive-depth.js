const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepthFunc(arr) {

    const array = arr.map((i) => {
      if (Array.isArray(i) && i.length > 0) {
        return 1 + this.calculateDepth(i);
      }
      else if (Array.isArray(i) && i.length === 0) {
        return 1 + this.calculateDepth('');
      } else {
        return 1;
      }
    });
    return array;
  }

  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 1;

    const array = this.calculateDepthFunc(arr);
    const returnValueArray = array.sort((a, b) => b - a);
    const returnValue = returnValueArray[0];
    return returnValue;
  }
};