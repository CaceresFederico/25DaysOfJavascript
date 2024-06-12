// 1- Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

function findPersonMostSkilled() {
  let personMostSkilled = "";
  let maxSkills = 0;

  for (const user in users) {
    if (users[user].skills.length > maxSkills) {
      maxSkills = users[user].skills.length;
      personMostSkilled = user;
    }
  }
  return personMostSkilled;
}
// console.log(findPersonMostSkilled(users))

// 2 - Count logged in users, count users having greater than equal to 50 points from the following object.
function countLoggedUsers() {
  let loggedUsers = 0;
  let greaterPointsUsers = 0;
  for (const el in users) {
    if (users[el].isLoggedIn == true) {
      loggedUsers++;
    }
    if (users[el].points >= 50) {
      greaterPointsUsers++;
    }
  }
  return `Users equal or greater to 50: ${greaterPointsUsers} \nLogged users: ${loggedUsers} `;
}
// console.log(countLoggedUsers(users));

// 3- Find people who are MERN stack developer from the users object
function foundMernDevelopers() {
  let usersMern = [];
  for (const el in users) {
    if (
      (users[el].skills.includes("React") &&
        users[el].skills.includes("MongoDB") &&
        users[el].skills.includes("Express") &&
        users[el].skills.includes("Node.js")) ||
      users[el].skills.includes("Node")
    ) {
      usersMern.push(el);
    }
  }
  return usersMern;
}
// console.log(foundMernDevelopers(users));

// 4- Set your name in the users object without modifying the original users object
const newUser = {
  email: "caceresfederico@hotmail.com",
  skills: ["HTML", "CSS", "JS", "PYTHON", "UX/UI", "FIGMA", "GIT"],
  age: 29,
  isLoggedIn: true,
  points: 80,
};
function newModifyObj() {
  let copyObject = Object.assign({}, users);
  copyObject["Federico"] = newUser;
  return copyObject;
}

// console.log(newModifyObj(users));

// 5- Get all keys or properties of users object
function getKeys (){
  let keys = Object.keys(users)
  return keys
}
// console.log(getKeys(users))

// 6 -Get all the values of users object
function getValues (){
  let values = Object.values(users)
  return values
}
console.log(getValues(users))