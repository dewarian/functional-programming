console.log("script loaded")

/* Methode 1: Draai lokaal een server
//Use python `-m SimpleHTTPServer 8000` to serve the current folder locally
//Then use either fetch (check on mdn)
fetch("data/Survey_Information_Design_clean-parsed.json")
  .then(response => response.json())
  .then(json => console.log(json));
//Or load the d3 library in html and use d3
d3.csv('data/Survey_Information_Design_clean-parsed.json', (data) => {
	console.log(data)
})
*/

/* Methode 2: Stop alle data in een string variabele
*/
//Put all data in a string variable in the data folder using the template literal sign ``
//Load that file in html BEFORE you load this file so it's available
const surveyAnswers = data
console.log(surveyAnswers)

//Let's see what's inside one of these objects
console.log(surveyAnswers[0])

//Get some super specific thing out of them
//

//Let's list important subjects
let belangrijksteOnderwerpen = []
for (answer of surveyAnswers){
	console.log(answer)
	belangrijksteOnderwerpen.push(answer.belangrijksteOnderwerpVanDezeTijd)
}

//Let's change some of this data to have the right datatype


console.log(belangrijksteOnderwerpen)
//Unieke values listen
//map, filter chainen?
// string manip opschonen?
// eye color voorbeeld laten zien https://vizhub.com/Razpudding/43af65cee12c440c8992b9bfadd81eab?edit=files&file=index.js
// Vaknaam string manip laten zien> https://github.com/cmda-tt/course-20-21/blob/master/examples/string-manipulation.md