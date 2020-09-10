const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const result = matrix.flat().reduce((sum, item) => {
    if (typeof item === 'string' && item === "^^") {
      return sum + 1;
    }
    return sum;
  }, 0);
  return result;
};
