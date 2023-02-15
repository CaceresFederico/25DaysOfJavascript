//                                                                        ** LEVEL 1 CHALLENGES **
// 1
const myArray = [];
const myArrayConstructor = Array();

// 2
const friends = ["Lucas", "Dennis", "Javier", "Pablo", "Facundo"];

// 3
const friendsLen = friends.length; // 4

// 4
const firstFriend = friends[0]; // Lucas
const middleFriend = friends[parseInt(friends.length / 2)]; //Javier
const lastFriend = friends[friends.length - 1]; // Facundo

// 5
const mixedDataTypes = [
  "Logitech",
  { id: 22, price: "2000", model: "g203" },
  true,
  [],
  "White",
  false,
];
const mixedDataTypesLength = mixedDataTypes.length; // 6

// 6
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7
console.log(itCompanies); // ['Facebook','Google','Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

// 8
console.log(itCompanies.length); //7

// 9
const firstCompany = itCompanies[0]; // Facebook
const middleCompany = itCompanies[parseInt(itCompanies.length / 2)]; //4
const lastCompany = itCompanies[itCompanies.length - 1]; // Amazon

// 10
const printCompany = itCompanies.map((company) => console.log(company));
// ['Facebook','Google','Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

// 11
const itCompaniesToUpperCase = itCompanies.map((company) =>
  console.log(company.toLocaleUpperCase())
); // ['FACEBOOK', 'GOOGLE', 'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'AMAZON']

// 12
const sentence = [...itCompanies];
sentence.pop();
sentence.push("and Amazon are Big It Companies");
console.log(sentence.join(" "));
// "Facebook,Google,Microsoft,Apple,IBM,Oracle,and Amazon are Big It Companies"

// 13
const companyToSearch = "Amazon";
const searchCompany = itCompanies.includes(companyToSearch); // true

// 14
const result = [];
const searchCompanyMap = itCompanies.map((company) => {
  if (company.includes("oo")) {
    result.push(company);
  }
});// [ 'Facebook', 'Google' ]

// 15
const sortItCompanies = itCompanies.sort();
// ["Amazon", "Apple", "Facebook", "Google", "IBM", "Microsoft", "Oracle"]

// 16
const reverseItCompanies = itCompanies.reverse();
// ['Oracle','Microsoft','IBM','Google','Facebook','Apple','Amazon']

// 17
const firstThreeCompanies = itCompanies.slice(0, 3); // [ 'Oracle', 'Microsoft', 'IBM' ]

// 18
const lastThreeCompanies = itCompanies.slice(
  itCompanies.length - 3,
  itCompanies.length
); // ['Facebook', 'Apple', 'Amazon']

// 19
const middleCompanySlice = itCompanies.slice(
  parseInt(itCompanies.length / 2),
  Math.ceil(itCompanies.length / 2)
); // ['Google']

// 20
const removeFirstCompany = itCompanies.shift();
// [ 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ] ORACLE REMOVED

// 21
const removeMiddleCompanies = itCompanies.slice(2, 4);

// 22
const removeLastCompany = itCompanies.pop();

// 23
const removeAllCompanies = itCompanies.splice();
