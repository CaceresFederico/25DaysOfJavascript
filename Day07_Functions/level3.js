//                                                                        ** LEVEL 3 CHALLENGES **
/* 1- MODIFY THE USERIDGENERATOR FUNCTION.
      DECLARE A FUNCTION NAME USERIDGENERATEDBYUSER.
      IT DOESN’T TAKE ANY PARAMETER BUT IT TAKES TWO INPUTS USING PROMPT().
      ONE OF THE INPUT IS THE NUMBER OF CHARACTERS AND THE SECOND INPUT IS THE NUMBER OF IDS WHICH ARE SUPPOSED TO BE GENERATED. */
const userIdGeneratedByUser = () => {
  let charLenght = prompt("Ingrese el numero de caracteres para su usuario");
  while (charLenght === "" || charLenght === " " || charLenght <= 0) {
    charLenght = prompt("Ingrese un numero válido de caracteres");
  }
  let idQuantity = prompt("Ingrese la cantidad de ID que desea generar");
  while (idQuantity === "" || idQuantity === " " || idQuantity <= 0) {
    idQuantity = prompt("Ingrese un numero válido");
  }
  let randomChar = "";
  let randomId = "";
  for (let i = 0; i < idQuantity; i++) {
    for (let i = 0; i < charLenght; i++) {
      randomChar = Math.floor(Math.random() * 256).toString(16);
      if (randomChar.length === 1) {
        randomId += randomChar.toLocaleUpperCase();
      } else {
        randomId += randomChar.charAt(0);
      }
    }
    console.log(randomId);
    randomId = "";
  }
};

// console.log(userIdGeneratedByUser()) //  ☑

// 2- WRITE A FUNCTION NAME RGBCOLORGENERATOR AND IT GENERATES RGB COLORS.
// BACKGROUND CHANGER FUNCTION ADDED 📈
const rgbColorGenerator = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  const rgbColor = `rgb(${red}, ${green}, ${blue})`;
  const bodyDOM = document.body;
  bodyDOM.style.backgroundColor = rgbColor;
  return rgbColor;
};
// TEST INPUT
// console.log(rgbColorGenerator()); //  ☑

// 3- WRITE A FUNCTION ARRAYOFHEXACOLORS WHICH RETURN ANY NUMBER OF HEXADECIMAL COLORS IN AN ARRAY.
const arrayOfHexaColors = (numColors) => {
  const result = [];
  for (let i = 0; i < numColors; i++) {
    // MULTIPLY 16777215=ffffff  AS MAXIMUM RANGE AND WE CONVERT TO BASE 16 AND GET VALUES BETWEEN [0,9]AND[A,F]
    result.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  }
  return result;
};
// TEST INPUT // OUTPUT
// console.log(arrayOfHexaColors(5)); // ☑
// (5) ['#f31f32', '#72cbe6', '#799657', '#b7ebb4', '#8395d6']
// console.log(arrayOfHexaColors(10)); // ☑
//(10) ['#16cce5', '#6d4440', '#4bfe94', '#6eafda', '#711e6', '#ec5ed0', '#6fbf0e', '#ca02cf', '#8bd807', '#fc9132']

// 4- WRITE A FUNCTION ARRAYOFRGBCOLORS WHICH RETURN ANY NUMBER OF RGB COLORS IN AN ARRAY.'
const arrayOfRgbColors = (numRgbColors) => {
  const generatedColors = [];
  for (let i = 0; i < numRgbColors; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    generatedColors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return generatedColors;
};
// TEST INPUT / OUTPUT
// console.log(arrayOfRgbColors(5));  // ☑
//  ['rgb(76, 236, 168)', 'rgb(5, 235, 118)', 'rgb(61, 251, 159)', 'rgb(46, 37, 153)', 'rgb(118, 32, 46)']

// 5- WRITE A FUNCTION CONVERTHEXATORGB WHICH CONVERTS HEXA COLOR TO RGB AND IT RETURNS AN RGB COLOR.
const convertHexaToRgb = (hexColor) => {
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};
// TEST INPUT / OUTPUT
// console.log(convertHexaToRgb("#234535")); // rgb(35, 69, 53)  ☑

// 6- WRITE A FUNCTION WHICH CONVERTS RGB TO HEXA COLOR AND IT RETURNS AN HEXA COLOR.
const convertRgbToHexa = (r, g, b) => {
  const rHex =
    r.toString(16).length === 1 ? "0" + r.toString(16) : r.toString(16);
  const gHex =
    g.toString(16).length === 1 ? "0" + g.toString(16) : g.toString(16);
  const bHex =
    b.toString(16).length === 1 ? "0" + b.toString(16) : b.toString(16);
  return `#${rHex}${gHex}${bHex}`;
};
// TEST INPUT / OUTPUT
// console.log(convertRgbToHexa(230, 250, 13)); // ##e6fa0d  ☑

// 7- WRITE A FUNCTION GENERATECOLORS WHICH CAN GENERATE ANY NUMBER OF HEXA OR RGB COLORS.
const generateColors = (format, quantity) => {
  let colors = [];
  let randomHexColor = "";
  let randomRgbColor = "";
  for (let i = 0; i < quantity; i++) {
    let randomRed = Math.floor(Math.random() * 256);
    let randomGreen = Math.floor(Math.random() * 256);
    let randomBlue = Math.floor(Math.random() * 256);
    if (format === "hexa" || format === "hexadecimal" || format === "Hexa") {
      randomHexColor = `${randomRed.toString(16)}${randomGreen.toString(
        16
      )}${randomBlue.toString(16)}`;
      colors.push(`#${randomHexColor.toUpperCase()}`);
    } else if (format === "rgb" || format === "RGB" || format === "Rgb") {
      randomRgbColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
      colors.push(randomRgbColor);
    }
  }
  return colors;
};
// TEST INPUT / OUTPUT
// console.log(generateColors("rgb", 3)); // ☑
// console.log(generateColors("Hexa", 4)); // ☑

// 8- CALL YOUR FUNCTION SHUFFLEARRAY, IT TAKES AN ARRAY AS A PARAMETER AND IT RETURNS A SHUFFLED ARRAY.
const shuffleArray = (array) => {
  let output = [];
  let randomIndexArray = [];
  let randomIndex = "";
  for (let i = 0; i < array.length; i++) {
    randomIndex = Math.floor(Math.random() * array.length);
    if (!randomIndexArray.includes(randomIndex)) {
      randomIndexArray.push(randomIndex);
      output.push(array[randomIndex]);
    } else {
      i--;
    }
  }
  return output;
};
// TEST INPUT
// console.log(shuffleArray(["fede","juan",1,4,true,{name:"fede", country:"argentina"}])) // ☑

// 9- CALL YOUR FUNCTION FACTORIAL, IT TAKES A WHOLE NUMBER AS A PARAMETER AND IT RETURN A FACTORIAL OF THE NUMBER.
const factorial = (number) => {
  let product = 1;
  for (let i = 1; i <= number; i++) product *= i;
  return product;
};
// TEST INPUT / OUTPUT
// console.log(factorial(5)) // 120  ☑
// console.log(factorial(10))// 3628800  ☑

// 10- CALL YOUR FUNCTION IS EMPTY, IT TAKES A PARAMETER AND IT CHECKS IF IT IS EMPTY OR NOT
const isEmpty = (parameter) => {
  let log = "";
  parameter !== "" && parameter !== " "
    ? (log += "Not empty ❌")
    : (log += `Empty ✅`);
  return log;
};

// TEST INPUT / OUTPUT
// console.log(isEmpty(false)); //not empty ☑
// console.log(isEmpty(undefined)); //not empty ☑
// console.log(isEmpty(0)); //not empty ☑
// console.log(isEmpty([1, 2, 3])); // not empty ☑
// console.log(isEmpty("")); // empty ☑
// console.log(isEmpty(" ")); // empty ☑

// 11- CALL YOUR FUNCTION SUM, IT TAKES ANY NUMBER OF ARGUMENTS AND IT RETURNS THE SUM.
function sumArguments() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) sum += arguments[i];
  return sum;
}
// WITH ARROW SYNTAX
const sum = (...args) => {
  let accumulator = 0;
  for (el of args) accumulator += el;
  return accumulator;
};
// TEST INPUT / OUTPUT
// console.log(sum(1, 2, 3, 20,40,22.3)); // 88.3 ☑

/* 12- WRITE A FUNCTION CALLED SUMOFARRAYITEMS, IT TAKES AN ARRAY PARAMETER AND RETURN THE SUM OF ALL THE ITEMS. 
CHECK IF ALL THE ARRAY ITEMS ARE NUMBER TYPES. IF NOT GIVE RETURN REASONABLE FEEDBACK. */
const sumOfArrayItems = (array) => {
  let total = 0;
  for (const el of array) {
    if (typeof el !== "number") {
      throw new Error("Wrong type of data ❌");
    } else {
      total += el;
    }
  }
  return total;
};
// TEST INPUT // OUTPUT
// console.log(sumOfArrayItems([1, 2, 10, 2.3, -5])); //10.3 ☑
// console.log(sumOfArrayItems([1, 2, 10, 2.3, true])); // ERROR ☑

/* 13- WRITE A FUNCTION CALLED AVERAGE, IT TAKES AN ARRAY PARAMETER AND RETURNS THE AVERAGE OF THE ITEMS. 
CHECK IF ALL THE ARRAY ITEMS ARE NUMBER TYPES. IF NOT GIVE RETURN REASONABLE FEEDBACK.*/
function average(array) {
  let sum = 0;
  for (const el of array) {
    if (typeof el !== "number") {
      throw new Error("Not number value inserted in the array ❌");
    } else {
      sum += el;
    }
  }
  return sum / array.length;
}
// TEST INPUT / OUTPUT
// console.log(average([1, 2, 3, 4, 5])); //3 ☑
// console.log(average([NaN, true, 1, 0, 2])); //Error ☑

/* 14- WRITE A FUNCTION CALLED MODIFYARRAY TAKES ARRAY AS PARAMETER AND MODIFIES THE FIFTH ITEM OF THE ARRAY AND RETURN THE ARRAY. 
IF THE ARRAY LENGTH IS LESS THAN FIVE IT RETURN 'ITEM NOT FOUND */
const modifyArray = (array) => {
  if (array.length <= 5) {
    throw new Error("Item not found ❌");
  } else {
    array[4] = "modified value ✅";
  }
  return array;
};
// TEST INPUT / OUTPUT
// console.log(modifyArray([1, 2, 3, 4, 5, "juan"])); //[ 1, 2, 3, 4, 'modified value', 'juan'] ☑
// console.log(modifyArray([1, 2, 3], "fede")); //Item not found ☑

// 15- WRITE A FUNCTION CALLED ISPRIME, WHICH CHECKS IF A NUMBER IS PRIME NUMBER.
const isPrime = (number) => {
  let response = "";
  for (let i = 0; i <= number; i++) {
    number % i == 0 && number % 2 !== 0
      ? (response = `The number: ${number} its prime`)
      : (response = `The number: ${number} isn't prime`);
  }
  return response;
};
// TEST INPUT / OUTPUT
// console.log(isPrime(0)) //its prime ☑
// console.log(isPrime(1)) //isn't prime ☑
// console.log(isPrime(20)) //its prime ☑
// console.log(isPrime(2001)) //its prime ☑

// 16- WRITE A FUNCTION WHICH CHECKS IF ALL ITEMS ARE UNIQUE IN THE ARRAY.
const arrayOfUniques = (array) => {
  let log = "";
  for (const item of array) {
    array.indexOf(item) !== array.lastIndexOf(item)
      ? (log += `${item} 🔴 \n`)
      : (log += `${item} ✅ \n`);
  }
  return log;
};
// TEST INPUT
// console.log(
//   arrayOfUniques([
//     "fede",
//     "juan",
//     "mica",
//     "fede",
//     124,
//     true,
//     () => {},
//     function () {},
//     124,
//   ])
// );

// OUTPUT
// fede 🔴
// juan ✅
// mica ✅
// fede 🔴
// 124 🔴
// true ✅
// () => {} ✅
// function () {} ✅
// 124 🔴

// 17- WRITE A FUNCTION WHICH CHECKS IF ALL ITEMS OF THE ARRAY ARE THE SAME DATA TYPE.
const arrayCheckTypes = (array) => {
  let types = [];
  for (const el of array) {
    types.push(typeof el);
  }
  for (const item of types) {
    types.indexOf(item) !== types.lastIndexOf(item)
      ? console.error(`${item} 🔴`)
      : console.log(`${item} ✅`);
  }
  return "End of program";
};

// TEST INPUT
// console.log(
//   arrayCheckTypes([
//     "fede",
//     1234,
//     function () {},
//     { average: 200, kdr: 2.4 },
//     "fede",
//   ])
// );

// OUTPUT
// string 🔴
// number ✅
// function ✅
// object ✅
// string 🔴
// End of program

/*18 - JAVASCRIPT VARIABLE NAME DOES NOT SUPPORT SPECIAL CHARACTERS OR SYMBOLS EXCEPT $ OR _. 
WRITE A FUNCTION ISVALIDVARIABLE WHICH CHECK IF A VARIABLE IS VALID OR INVALID VARIABLE */
function isValidVariable(variableName) {
  // Check if the variable name starts with a letter, $, or _
  if (!/^[a-zA-Z$_]/.test(variableName)) {
    return false;
  }

  // Check if the variable name contains any invalid characters
  if (!/^[a-zA-Z0-9$_]*$/.test(variableName)) {
    return false;
  }

  // Check if the variable name is a reserved keyword in JavaScript
  if (
    [
      "abstract",
      "arguments",
      "await",
      "boolean",
      "break",
      "byte",
      "case",
      "catch",
      "char",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "double",
      "else",
      "enum",
      "eval",
      "export",
      "extends",
      "false",
      "final",
      "finally",
      "float",
      "for",
      "function",
      "goto",
      "if",
      "implements",
      "import",
      "in",
      "instanceof",
      "int",
      "interface",
      "let",
      "long",
      "native",
      "new",
      "null",
      "package",
      "private",
      "protected",
      "public",
      "return",
      "short",
      "static",
      "super",
      "switch",
      "synchronized",
      "this",
      "throw",
      "throws",
      "transient",
      "true",
      "try",
      "typeof",
      "var",
      "void",
      "volatile",
      "while",
      "with",
      "yield",
    ].includes(variableName)
  ) {
    return false;
  }

  // If all checks pass, the variable name is valid
  return true;
}

// 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.

const createSerial = () => {
  let serial = [];
  while (serial.length < 7) {
    let randomValue = Math.floor(Math.random() * 10); //getting value between [0-9]
    if (!serial.includes(randomValue)) {
      serial.push(randomValue);
    }
  }
  return serial;
};

// console.log(createSerial());
// [4, 7, 1, 8, 9, 2, 6]
// [0, 6, 4, 5, 7, 9, 1]
// [6, 2, 3, 7, 4, 1, 9]

// 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
  let countriesCopy = countriesArray.slice();
  let countriesReversed = []
  for (let i = countriesCopy.length - 1; i >= 0; i--) {
    countriesReversed.push(countriesCopy[i])
  }
  return countriesReversed;
}

const countriesArray = [
  "Argentina",
  "Alemania",
  "Andorra",
  "Bolivia",
  "Brasil",
  "Guatemala",
];

// console.log(reverseCountries(countriesArray))
// ['Guatemala', 'Brasil', 'Bolivia', 'Andorra', 'Alemania', 'Argentina']
// console.log(countriesArray)
// ['Argentina', 'Alemania', 'Andorra', 'Bolivia', 'Brasil', 'Guatemala']