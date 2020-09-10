const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const returnObject = {
    0: 'winter',
    1: 'winter',
    2: 'spring',
    3: 'spring',
    4: 'spring',
    5: 'summer',
    6: 'summer',
    7: 'summer',
    8: 'autumn',
    9: 'autumn',
    10: 'autumn',
    11: 'winter',
  }
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  date.valueOf();
  if (!date || isNaN(date.getMonth())) {
    console.log('hi');
    return 'Unable to determine the time of year!'
  } else {
    return returnObject[date.getMonth()];
  }
};
