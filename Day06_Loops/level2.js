//                                                                        ** LEVEL 2 CHALLENGES **
// 1 - Develop a small script which generate any number of characters random id:
let idGenerated = [];
const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const maxCharacters = 10;
let randomIndex = 0;
do {
  // ASSURE TO MULTIPLY FOR THE MAX LENGHT TO GET VALUES IN THE CHARACTERS RANGE
  randomIndex = parseInt(Math.random() * characters.length);
  idGenerated.push(characters[randomIndex]);
} while (idGenerated.length <= maxCharacters);
// console.log(idGenerated.join(""));

// 2 - Write a script which generates a random hexadecimal number.
const hexRef = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let hexValueResult = ["#"];
for (let i = 0; i <= 5; i++) {
  hexValueResult.push(hexRef[parseInt(Math.random() * hexRef.length)]);
}
// console.log(hexValueResult.join(""))

// 3 - Write a script which generates a random rgb color number.
let rgbColor = [];
for (let e = 0; e <= 2; e++) {
  rgbColor.push(parseInt(Math.random() * 250));
}
// console.log(`rgb(${rgbColor.toString()})`);

// 4 - Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
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
  "Japan",
  "Kenya",
];
const countriesUpperCase = [];
for (const element of countries) {
  countriesUpperCase.push(element.toLocaleUpperCase());
}
// console.log(countriesUpperCase)

// 5 - Using the above countries array, create an array for countries length'.
const countriesLenghtElements = [];
for (const country of countries) {
  countriesLenghtElements.push(country.length);
}
// console.log(countriesLenghtElements)

// 6 - Use the countries array to create the following array of arrays:
const arrayOfArrays = [];
for (const element of countries) {
  arrayOfArrays.push(
    `[${element}, ${element.slice(0, 3).toLocaleUpperCase()}, ${
      element.length
    }]`
  );
}
// console.log(arrayOfArrays);

/*7 - In above countries array, check if there is a country or countries containing the word 'land'.
If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.*/
// const arrayLand = [];
// for (const el of countries) {
//   if (el.includes("land")) {
//     arrayLand.push(el);
//   }
// }
// if (arrayLand.length <= 0) {
//   console.log("All these countries are without land");
// } else {
//   console.log(arrayLand);
// }

/* 8 - In above countries array, check if there is a country or countries end with a substring 'ia'. 
If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
*/
// const countriesIa = []
// for(const country of countries){
//   if(country.slice(-2).toLowerCase() === "ia"){ //avoid camelcase or capital
//     countriesIa.push(country)
//   }
// }
// if(countriesIa !== []){
//   console.log(countriesIa)
// }else{
//   console.log("These are countries ends without ia")
// }

// 9 - Using the above countries array, find the country containing the biggest number of characters.
let biggestCharacterCountry = countries[0];
for (const el of countries) {
  if (el.length > biggestCharacterCountry.length) {
    biggestCharacterCountry = el;
  }
}
// console.log(biggestCharacterCountry);

// 10 - sing the above countries array, find the country containing only 5 characters.
let shortsCountries = [];
for (const element of countries) {
  if (element.length === 5) {
    shortsCountries.push(element);
  }
}
// console.log(shortsCountries)

// 11 - Find the longest word in the webTechs array
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

let biggestWebTechs = webTechs[0];
for (const element of webTechs) {
  if (element.length > biggestWebTechs.length) {
    biggestWebTechs = element;
  }
}
// console.log(biggestWebTechs);

// 12 - Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let arrayTechs = [];
for (const elem of webTechs) {
  arrayTechs.push(`[${elem}, ${elem.length}]`);
}
// console.log(arrayTechs);

/* 13 - An application created using MongoDB, Express, React and Node is called a MERN stack app. 
Create the acronym MERN by using the array mernStack */
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let acronym = ""
for(let i = 0; i<mernStack.length;i++){
  acronym += mernStack[i][0]
}
// console.log(acronym)

/* 14 - Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items. */
// for(const technologies of webTechs){
//   console.log(technologies)
// }

/* 15 - This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop 
without using a reverse method. */
// [ 'lemon', 'mango', 'orange', 'banana' ]
const fruits = ['banana', 'orange', 'mango', 'lemon']
let reverseFruits = []
for (let i = fruits.length-1;i>=0; i--){
  reverseFruits.push(fruits[i])
}
// console.log(reverseFruits)

/* 16 - Print all the elements of array as shown below.
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
*/

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const technogy of fullStack){
  console.log(technogy.join("\n"))
}