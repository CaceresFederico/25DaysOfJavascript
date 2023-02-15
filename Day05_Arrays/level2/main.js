//                                                                        ** LEVEL 2 CHALLENGES **
/* 1-  Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. 
Access both file in main.js file   */
import { countries } from "./countries.js";
import { webtechs } from "./webtechs.js";


// 2- First remove all the punctuations and change the string to array and count the number of words in the array
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let cleanText = text.replace(regex, ""); // With regex, you can replace all matches with an empty string:
let textArray = cleanText.split(" ");
console.log(textArray);
// ["I","love","teaching","and","empowering","people","I","teach","HTML","CSS","JS","React","Python"]
// console.log(textArray.length); // 13


// 3- In the following shopping cart add, remove, edit items
// 3.1 - Add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.includes("Meat")
  ? console.log("Meat was already added")
  : shoppingCart.unshift("Meat");
// [ 'Meat', 'Milk', 'Coffee', 'Tea' ]

// 3.2 - Add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes("Sugar")
  ? console.log("Sugas was already added")
  : shoppingCart.push("Sugar");
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

// 3.3 - Remove 'Honey' if you are allergic to honey
const alergicToHoney = true;
alergicToHoney
  ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
  : console.log("Not alergic to honey");
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

// 3.4 - Modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf("Tea")] = "Green Tea";
// [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]


// 4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const countryToFound = "Ethiopia";
countries.includes(`${countryToFound}`)
  ? console.log(`${countryToFound.toUpperCase()}`)
  : countries.push(`${countryToFound}`);
// Ethiopia alredy exist


// 5- In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechToFound = "Sass";
webtechs.includes(`${webTechToFound}`)
  ? console.log(`${webTechToFound} is a CSS preprocess`)
  : webtechs.push(webTechToFound);
// SASS doesn't exist

// 6- Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack) 
// ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
