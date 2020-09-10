const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  const turns = Math.pow(2, disksNumber) - 1;
  const seconds = Math.floor(turns / turnsSpeed * 3600);
  return { turns, seconds };

};
