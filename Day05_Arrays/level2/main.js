// 1
import { countries } from "./countries.js";
import { webtechs } from "./webtechs.js";

// 2
const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let cleanText = text.replace(regex, ""); // With regex, you can replace all matches with an empty string:
let textArray = cleanText.split(" ");
// console.log(textArray);
// ["I","love","teaching","and","empowering","people","I","teach","HTML","CSS","JS","React","Python"]
// console.log(textArray.length); // 13


// 3
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.includes("Meat")
  ? console.log("Meat was already added")
  : shoppingCart.unshift("Meat");
// [ 'Meat', 'Milk', 'Coffee', 'Tea' ]

shoppingCart.includes("Sugar")
  ? console.log("Sugas was already added")
  : shoppingCart.push("Sugar");
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]°

const alergicToHoney = true;
alergicToHoney
  ? shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
  : console.log("Not alergic to honey");
// [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
// [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]


// 4
const countryToFound = 'Ethiopia'
countries.includes(`${countryToFound}`)
  ? console.log(`${countryToFound.toUpperCase()}`)
  : countries.push(`${countryToFound}`) 
// Ethiopia alredy exist

const webTechToFound = 'Sass'
webtechs.includes(`${webTechToFound}`)
  ? console.log(`${webTechToFound} is a CSS preprocess`)
  : webtechs.push(webTechToFound)
// SASS doesn't exist