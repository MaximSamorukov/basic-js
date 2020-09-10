const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(arr)) throw new Error();
  if (arr.length === 0) return [];

  let [...newArr1] = [...arr];
  let [...newArr] = [...arr];
  newArr = newArr.map((i, index, array) => {
    if (newArr1[index] === '--double-next') {
      newArr1[index] = newArr1[index + 1];
      return i;
    }
    if (newArr1[index] === '--double-prev') {
      newArr1[index] = newArr1[index - 1];
      return i;
    }
    if (newArr1[index + 1] === '--discard-prev') {
      newArr1[index] = 'discard';
      return i;
    }
    if (newArr1[index - 1] === '--discard-next') {
      newArr1[index] = 'discard';
      return i;
    }
    else {
      return i;
    };
  });
  newArr1 = newArr1
    .filter((i) => (i !== 'discard'))
    .filter((i) => (i !== 'double'))
    .filter((i) => (i !== '--discard-next'))
    .filter((i) => (i !== '--discard-prev'))
    .filter((i) => (i !== undefined));

  return newArr1;
}
