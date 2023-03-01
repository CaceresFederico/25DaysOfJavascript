//                                                                        ** LEVEL 3 CHALLENGES **
import { countriesData } from "./countries.js";
// 1 - Copy countries array(Avoid mutation)
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Kenya",
  "Japan",
];
const countriesCopy = countries.slice();

/*2- Arrays are mutable. Create a copy of array which does not modify the original. 
Sort the copied array and store in a variable sortedCountries */
const sortedCountries = countriesCopy.sort();
// console.log(countriesCopy);

// 3- Sort the webTechs array and mernStack array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
const webTechsSorted = webTechs.slice().sort();
const mernStackSorted = mernStack.slice().sort();
// console.log(webTechsSorted)
// console.log(mernStackSorted)

// 4-Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesLand = [];
for (const country of countriesData) {
  if (country.includes("land")) {
    countriesLand.push(country);
  }
}
// console.log(countriesLand);

// 5- Find the country containing the hightest number of characters in the countries array
let biggestCountryCharacter = countriesData[0];
for (const el of countriesData) {
  if (biggestCountryCharacter.length < el.length) {
    biggestCountryCharacter = el;
  }
}
// console.log(biggestCountryCharacter)

// 6- Extract all the countries contain the word 'ia' from the countries array and print it as array
let countriesIa = [];
for (const element of countriesData) {
  if (element.includes("ia")) {
    countriesIa.push(element);
  }
}
// console.log(countriesIa);

// 7- Extract all the countries containing only four characters from the countries array and print it as array
let countriesShortName = [];
for (const elem of countriesData) {
  if (elem.length == 4) countriesShortName.push(elem);
}
// console.log(countriesShortName)

// 8- Extract all the countries containing two or more words from the countries array and print it as array
let countriesCompoundName = [];
for (const el of countriesData) {
  if (el.split(" ").length > 1) countriesCompoundName.push(el);
}
// console.log(countriesCompoundName)

// 9- Reverse the countries array and capitalize each country and stored it as an array
let countriesReverseCapitalize = countriesData.slice().reverse();
// for (const el of countriesReverseCapitalize) {
//     countriesReverseCapitalize.push(el.toUpperCase())
// }
// THIS THROW AN ERROR 'INVALID SIZE ERROR 147268994 IN NODE.JS ENVIRONMENT'
// I SKIP THE CAPITALIZE STEP BECAUSE ITS ALREADY CAPITALIZE
console.log(countriesReverseCapitalize)
