// MY NOTES
const person = {
  firstName: "Federico",
  surname: "Cáceres",
  age: 29,
  country: "Argentina",
  city: "Buenos Aires",
  skills: ["HTML", "CSS", "JS"],
  adress: {
    street: "Boyaca",
    streetNumber: 1938,
    cp: 1425
  },
  getPersonInfo: function (){
    return `I am ${this.firstName} and i live in ${this.city}`
  }
};

// Adding some new property to obj
person.height = 175

// MANIPULATE OBJECTS METHODS
// Object.assign({},obj) To copy object without modifying the original obj
const copyPerson = Object.assign({},person);
// console.log(copyPerson)
// Object.keys(obj) To get keys or properties of an obj as an array
const keys = Object.keys(person)
// console.log(keys)
// Object.values(obj) To get the values of an object as an array
const values = Object.values(person)
// console.log(values)
// Object.entries(obj) To get the keys and values in an array
const entries = Object.entries(person)
// console.log(entries)
