const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
const { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = "+" } = options;
const additionItem = (add, sep, art) => {
  const newAdd = add === null ? `null` : add;
  const resArr = [];
  for(let i = 1 ; i <= art; i += 1) {
    resArr.push(newAdd);
  }

  return (resArr.join(sep));
}
const addItem = additionItem(addition, additionSeparator, additionRepeatTimes);
const resultArray = [];
for (let i = 1; i <= repeatTimes; i +=1) {
  resultArray.push(`${str}${addItem}`)
}

return (resultArray.join(separator));
};
