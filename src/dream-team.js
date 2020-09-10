const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let newArray = members.filter((item) => {
    return (
      typeof item !== 'number' &&
      typeof item !== 'boolean' &&
      typeof item !== 'object' &&
      item !== null &&
      item !== undefined
    )
  });
  newArray = newArray.map((i) => (i.toUpperCase().trim())[0]).sort();
  newArray = newArray.reduce((sum, item) => sum + item, '');
  return newArray;
};
