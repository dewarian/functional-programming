/* TO DO
[] require dataset
[] Zoom into column location (filter dataSet to a single column)
[] clean a single value
  [] convert coordinates to long lat

*/
let dataSet = require('./secret_data/Survey_Information_Design_clean-parsed.json')
console.log(getSpecificDataValue(0, "geboorteplaats"))
testFunction(dataSet)

function getSpecificDataValue(key, value) {
  return dataSet[key][value]
}

function testFunction(object) {
  for (const geboorteplaats of object) {
    console.log(geboorteplaats)
  }
}