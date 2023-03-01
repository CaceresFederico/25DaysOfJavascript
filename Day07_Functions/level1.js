//                                                                        ** LEVEL 1 CHALLENGES **
// 1- Declare a function fullName and it print out your full name.
function getFullName() {
  const name = "Federico";
  const surnName = "Cáceres";
  return `${name} ${surnName}`;
}
// console.log(getFullName()) //Federico Cáceres

// 2- Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function getFullNameWhitParameters(name, surname) {
  return `${name} ${surname}`;
}
// console.log(getFullNameWhitParameters("Federico", "Cáceres")); //Federico Cáceres

// 3-Declare a function addNumbers and it takes two two parameters and it returns sum.
function getSum(firstNumber, secondNumber) {
  let sum = firstNumber + secondNumber;
  return sum;
}
// console.log(getSum(20, 30)); // 50

// 4-An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function getAreaOfRectangle(length, width) {
  let area = length * width;
  return `The area of rectangle: ${area.toFixed(1)}`;
}
// console.log(getAreaOfRectangle(10, 2)); // 20

// 5-A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function getPerimeterOfRectangle(lenght, width) {
  let perimeter = 2 * (lenght + width);
  return `Perimeter of rectangle: ${perimeter.toFixed(1)}`;
}
// console.log(getPerimeterOfRectangle(10,2)); // 24

// 6-A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function getVolumeOfRectPrism(length, width, height) {
  let volume = length * width * height;
  return `Volume of reactangular prism: ${volume.toFixed(1)}`;
}
// console.log(getVolumeOfRectPrism(2,5.4,3)); // 32.4

// 7- Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const pi = 3.14;
function getAreaOfCircle(radius) {
  let area = pi * radius ** 2;
  return `Area of circle: ${area.toFixed(1)}`;
}
// console.log(getAreaOfCircle(2)); // 12.5

// 8- Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function getCircumference(radius) {
  let circumOfCircle = 2 * pi * radius;
  return `Circunference: ${circumOfCircle.toFixed(1)}`;
}
// console.log(getCircumference(3)); // 18.8

// 9-Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function getDensity(mass, volume) {
  let density = mass / volume;
  return `density: ${density.toFixed(1)}`;
}
// console.log(getDensity(10, 2.5)); // 4

// 10-Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function getSpeed(distance, time) {
  let speed = distance / time;
  return `The speed detected was: ${speed.toFixed(0)};`;
}
// console.log(getSpeed(150, 2.3)); // 65kmh

// 11 -Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function getWeigth(mass, gravity = 9.81) {
  let weigth = mass * gravity;
  return `The weigth of substance is: ${weigth.toFixed(2)}`;
}
// console.log(getWeigth(22.3)); // 218.76

// 12-Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(celsius) {
  let oF = (celsius * 9) / 5 + 32;
  return `°${celsius} Celsius are equal to °${oF} Farenheit`;
}
// console.log(convertCelsiusToFahrenheit(25)); // °25 are equal to °77 Farenheit

/* 13- Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
Check if a person is underweight, normal, overweight or obese based the information given below. */
const getBodyMassIndex = (weigth, height) => {
  const index = parseFloat(weigth) / parseFloat(height ** 2);
  if (index < 18.5) {
    return `Underweigth: ${index.toFixed(1)}`;
  } else if (index <= 24.9) {
    return `Normal weigth: ${index.toFixed(1)}`;
  } else if (index <= 29.9) {
    return `Overweigth: ${index.toFixed(1)}`;
  } else {
    return `Obese: ${index.toFixed(1)}`;
  }
};
// console.log(getBodyMassIndex(73,1.74)) // Normal weigth: 24.1

// 14-Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
const checkSeason = (month) => {
  let currentMonthIndex = months.indexOf(month.toString().toLowerCase());
  if (currentMonthIndex <= 2) {
    return `Summer`;
  } else if (currentMonthIndex >= 3 && currentMonthIndex <= 5) {
    return `Auntumn`;
  } else if (currentMonthIndex >= 6 && currentMonthIndex <= 8) {
    return `Winter`;
  } else {
    return `Spring`;
  }
};
// console.log(checkSeason('March')) //summer
// console.log(checkSeason('aPril')) // autumn
// console.log(checkSeason('sEptember')) //winter
// console.log(checkSeason('October')) //spring

// 15- Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
let max = 0;
const getMax = (a, b, c) => {
  if (a > b && a > c) {
    return (max = a);
  } else if (b > a && b > c) {
    return (max = b);
  } else {
    return (max = c);
  }
};
// console.log(getMax(20,10,2)) //20
// console.log(getMax(22,-3,0)) //22
