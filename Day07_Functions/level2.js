//                                                                        ** LEVEL 2 CHALLENGES **
// 1- Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a, b, c) {
  if (a === 0 && b === 0) {
    throw new Error("Both coefficients 'a' and 'b' cannot be zero.");
  } else if (a === 0) {
    return -c / b;
  } else if (b === 0) {
    return -c / a;
  } else {
    return (-c - a) / b;
  }
}

// console.log(solveLinEquation(0,1,5)) //-5
// console.log(solveLinEquation(0,0,5)) //error a & b cannot be zero

// 2- Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
function solveQuadraticEquation(a, b, c) {
  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    return [-b / (2 * a)];
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [x1, x2];
  }
}

// console.log(solveQuadraticEquation(1, 4, 4)) //-2
// console.log(solveQuadraticEquation(1, -1, -2)) //2,-1

// 3- Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const NUMBERS_ARRAY = [1, 2, 3, 4, 5];
const NAMES_ARRAY = ["fede", "lucas", "lauti", "mica"];
function printArray(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    console.log(arr[i]);
  }
}

// console.log(printArray(NUMBERS_ARRAY)); // [1,2,3,4,5]

// 4-Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
  const date = new Date();
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];
  const [hour, minutes] = [date.getHours(), date.getMinutes()];
  return console.log(`${day}/${month}/${year} ${hour}:${minutes}`);
}

// console.log(showDateTime());
// 20/2/2023 17:20

// 5-Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x, y) {
  const mem = x;
  x = y;
  y = mem;
  return console.log(`previous values: ${[y, x]}, new values : ${[x, y]} `);
}
// console.log(swapValues(1, 2));

// 6-Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
function reverseArray(arr) {
  let reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}
// console.log(reverseArray(NUMBERS_ARRAY)); // [ 5, 4, 3, 2, 1 ]

// 7-Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let capitalizedArray = [];
  if (Array.isArray(arr)) {
    for (el of NAMES_ARRAY) {
      capitalizedArray.push(el.charAt(0).toUpperCase() + el.substr(1));
    }
  } else {
    return console.error("I need an array to work!");
  }
  return capitalizedArray;
}
// console.log(capitalizeArray(NAMES_ARRAY)); // [ 'Fede', 'Lucas', 'Lauti', 'Mica' ]
// console.log(capitalizeArray({ name: "fede", edad: 25 })); // ERROR : I need an array to work!

// 8- Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
function addItem(item) {
  let array = [];
  array.push(item);
  return array;
}
// console.log(addItem("Buy groceries"));

// 9- Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
function removeItem(index) {
  let arrayCopy = NAMES_ARRAY.slice();
  arrayCopy.splice(index, 1);
  return arrayCopy;
}

// BEFORE ["fede","lucas","lauti","mica"]
// console.log(removeItem(2));
// AFTER [ 'fede', 'lucas', 'mica' ]

// 10-Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) => {
  if (typeof number === "number") {
    let acc = 0;
    for (let i = 0; i <= number; i++) {
      acc += i;
    }
    return console.log(
      `The sum of numbers in the range 0:${number} is : ${acc}`
    );
  } else {
    throw new Error("I only work with numbers!");
  }
};

// console.log(sumOfNumbers(5)) //15
// console.log(sumOfNumbers(-10)) //0
// console.log(sumOfNumbers("fede")) // Error: I only work with numbers!

// 11-Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (number) => {
  if (typeof number === "number") {
    var sumOfOdds = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 !== 0) {
        sumOfOdds += i;
      }
    }
  }
  return console.log(
    `The sum of odds numbers in range 0:${number} is: ${sumOfOdds}`
  );
};

// console.log(sumOfOdds(50)) //625
// console.log(sumOfOdds(10)) //25

// 12-Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) => {
  if (typeof number === "number") {
    var sumOfEven = 0;
    for (let i = 1; i <= number; i++) {
      if (i % 2 == 0) {
        sumOfEven += i;
      }
    }
  }
  return console.log(
    `The sum of odds numbers in range 0:${number} is: ${sumOfEven}`
  );
};

// console.log(sumOfEven(10)); //30
// console.log(sumOfEven(20)); //110
// console.log(sumOfEven(23)); //132

// 13-Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (number) => {
  if (typeof number === "number" && number >= 0) {
    var oddsCounter = 0,
      evensCounter = 0;
    for (let i = 0; i <= number; i++) {
      i % 2 === 0 ? evensCounter++ : oddsCounter++;
    }
  } else {
    throw new Error("I need a number input and positive integer to work!");
  }
  return console.log(
    `Number of odds: ${oddsCounter} \nNumber of evens: ${evensCounter}`
  );
};

// console.log(evensAndOdds(100))
// Number of odds: 50
// Number of evens: 51

// 14-Write a function which takes any number of arguments and return the sum of the arguments
function sumArgsFunction() {
  // console.log(arguments);
  var sumResult = 0;
  for (let i = 0; i < arguments.length; i++) {
    sumResult += arguments[i];
  }
  return sumResult;
}
// console.log(sumArgsFunction(3, 3, 4, 5, 6)); //21

// With arrow function use ...args spread operator
const sumArgs = (...args) => {
  var sumArgsResult = 0;
  for (el of args) {
    sumArgsResult += el;
  }
  return console.log(`The sum of args is: ${sumArgsResult}`);
};
// console.log(sumArgs(1,2,3,4)) //10
// console.log(sumArgs(10,29,42)) //81

// 15- Write a function which generates a randomUserIp.
// 192.168.0.10 EXPECTED OUTPUT
function getRandomUserIp() {
  let start = performance.now();
  let ipAdress = "";
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor(Math.random() * 256);
    ipAdress += randomNumber + ".";
  }
  let end = performance.now();
  console.log(end - start);
  return ipAdress.substring(0, ipAdress.length - 1); //this is to remove the last dot "."
  // return ipAdress; //this is to remove the last dot "."
}

// console.log(getRandomUserIp()); // 148.61.160.246

// 16- Write a function which generates a randomMacAddress
// 00-1B-63-84-45-E6 EXPECTED OUTPUT
function getRandomMacAdress() {
  let macAdress = "";
  for (let i = 0; i <= 5; i++) {
    let randomNumber = Math.floor(Math.random() * 256).toString(16); //this convert the random number 0-256 to hexadecimal
    //checking to get 2 digits
    if (randomNumber.length === 1) {
      randomNumber = "0" + randomNumber;
    }
    macAdress += randomNumber + "-";
  }
  return macAdress.toUpperCase().substring(0, macAdress.length - 1);
}
// console.log(getRandomMacAdress()); //09-2C-D4-5A-5C-E8

// 17- Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () => {
  const hexadecimals = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
  let randomIndex = ""
  let result = ""
  for (let i = 0; i <= 5; i++) {
    randomIndex = Math.floor(Math.random()* hexadecimals.length)
    result += hexadecimals[randomIndex]
  }
  return `#${result}`
};

// console.log(randomHexaNumberGenerator()) //#a73c17

// 18- Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () =>{
  let randomChar = ""
  let userId = ""
  for(let i = 0; i<=6;i++){
    randomChar = Math.floor(Math.random() * 256).toString(16)
    if(randomChar.length!==1){
      userId += randomChar.substring(0,randomChar.length-1)
    }else{
      userId +=randomChar
    }
  }
  return userId
}

console.log(userIdGenerator())
