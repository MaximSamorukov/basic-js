const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!sampleActivity || parseInt(sampleActivity, 10) <= 0 || parseFloat(sampleActivity, 10) > 15 || isNaN(parseInt(sampleActivity, 10)) || typeof sampleActivity === 'number' || typeof sampleActivity === 'object') {
    return false;
  }
  const newSampleActivity = parseFloat(sampleActivity, 10);
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / newSampleActivity) / k);

};
