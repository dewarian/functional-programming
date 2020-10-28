const fetch = require('node-fetch');

let dataRes;

fetch("/secret_data/Survey_Information_Design.json")
  .then(res => res.json())
  .then(data => dataRes = data)
  .then(() => console.log(datRes))

/* 
  // console.log(`script has been loaded successfully`);
  let storeData;

  // Fetch local json file
  fetch("/secret_data/Survey_Information_Design_clean-parsed.json")
  .then(response => response.json())
  .then(data => storeData = data)
  .then(() => console.log(storeData));

  const surveyData = storeData;

  console.log(surveyData)
*/


/* 
// sort names alphabetically
let array = ["Anthony","Naomi","Sjors","Nadine","Shabier","Nathan"]
array.sort(function (a, b) {
      if (a < b) return -1;
      else if (a < b) return 1;
      return 0;
    });
*/