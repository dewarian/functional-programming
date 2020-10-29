/* TO DO
[x] require dataset
[x] Zoom into column location (filter dataSet to a single column)
[] Remove empty values
[] clean a single value
  [] convert coordinates to long lat

*/
// Initializing variables that need to be hoisted
let dataSet = require('./secret_data/Survey_Information_Design_clean-parsed.json');
let copiedData = Object.assign({}, dataSet);
let testArray = [];

console.log(getSpecificDataValue(1, "geboorteplaats"))
// console.log(filterColumn(copiedData, "geboorteplaats"))
// console.log(removeEmptyValues(filterColumn(copiedData, "geboorteplaats")))


/* Return specific data value from element and column */
function getSpecificDataValue(key, value) {
  return dataSet[key][value]
}

/* Filter dataset and push specified column to new array */
function filterColumn(object, columnName) {
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const element = object[key];
      testArray.push(element[columnName])
    }
  }
  return testArray
};

/* Check to find empty value in array */
// const findEmptyValue = (arr) => {
//   return arr.includes('');
// };

// console.log(findEmptyValue(filterColumn(copiedData, "geboorteplaats")));

/* function to remove empty values within array */
function removeEmptyValues(arr) {
  let arrayWithoutEmptyValues = arr.filter(findEmptyValue)
  return arrayWithoutEmptyValues;
};

