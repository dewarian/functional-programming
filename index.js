/* TO DO
[x] require dataset
[x] Zoom into column location (filter dataSet to a single column)
[] clean a single value
  [] convert coordinates to long lat

*/
let dataSet = require('./secret_data/Survey_Information_Design_clean-parsed.json');
let copiedData = Object.assign({}, dataSet);
let testArray = [];

console.log(getSpecificDataValue(1, "geboorteplaats"))
console.log(filterColumn(copiedData, "geboorteplaats"))

function getSpecificDataValue(key, value) {
  return dataSet[key][value]
}

function filterColumn(object, columnName) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      testArray.push(element[columnName])
    }
  }
  return testArray
}
