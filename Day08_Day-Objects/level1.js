// 1- Create an empty object called dog
const dog = {};

// 2- Print the the dog object on the console
console.log(dog);

// 3-Add name, legs, color, age and bark properties for the dog object.
// The bark property is a method which return woof woof
dog.name = "Kai";
dog.legs = 4;
dog.age = 5;
dog.bark = function () {
  return "woof woof";
};

// 4- Get name, legs, color, age and bark value from the dog object
// console.log(dog["name"], dog["legs"], dog["age"], dog.bark())

// 5- Set new properties the dog object: breed, getDogInfo
dog.breed = true;
dog.getDogInfo = function () {
  return `Hi im ${this.name} a dog with ${this.legs} and im ${this.age} years old`;
};
// console.log(dog.getDogInfo());
