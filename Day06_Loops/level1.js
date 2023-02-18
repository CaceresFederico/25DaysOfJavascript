//                                                                        ** LEVEL 1 CHALLENGES **
// 1- Iterate 0 to 10 using for loop, do the same using while and do while loop
// FOR
// for(let i = 0; i<=10;i++){
//     console.log(i)
// }
// WHILE
// let whileCounter = 0
// while (whileCounter<=10){
//     console.log(whileCounter)
//     whileCounter++
// }
// console.log(whileCounter) // whileCounter == 11
// DO WHILE
// let doWhileCounter = 0
// do {
//     console.log(doWhileCounter)
//     doWhileCounter++
// } while (doWhileCounter<=10)
// console.log(doWhileCounter) // doWhileCounter == 11


// 2- Iterate 10 to 0 using for loop, do the same using while and do while loop
// FOR
// for(let i=10;i>=0;i--){
//     console.log(i)
// }
// WHILE
// let i = 10
// while (i>=0){
//     console.log(i)
//     i--
// }
// DO WHILE
// let a = 10
// do {
//     console.log(a)
//     a--
// } while(a>=0)


// 3- Iterate 0 to n using for loop
// const spins = 35
// for(let i=0;i<=spins;i++){
//     console.log(`Spins ${i}`)
// }


// 4- Write a loop that makes the following pattern using console.log():
/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
// let i = 0
// let line = ''
// while(i<=6){
//     line += '#'
//     console.log(line)
//     i++
// }


// 5- Use loop to print the following pattern:
/* 
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/
// for(let i = 0; i<=10; i++){
//     console.log(`${i} x ${i} = ${i*i}`)
// }


// 6-Using loop print the following pattern
/*
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
*/
// for(let i =0 ;i<=10; i++){
//     console.log(`${i} ${i**2} ${i**3}`)
// }


// 7- Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i = 2; i<=100;i++){
//     if(i%2=== 0){
//         console.log(i)
//     }
// }


// 8- Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i = 1;i<=100;i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }


// 9- Use for loop to iterate from 0 to 100 and print only prime numbers
// const limit = 100;
// const primeNumbers = [];
// for(let i = 2; i <= limit; i++) {
//     let primo = true;
//     for(let divisor=2; divisor < i; divisor++) {
//         if(i%divisor === 0) {
//             primo = !primo;
//             break;
//         }
//     }
//     if(primo) primeNumbers.push(i);
// }
// console.log(primeNumbers);


// 10- Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0
// for (let i = 0; i<=100;i++){
//     sum +=i
// }
// console.log(sum) // 5050


// 11- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evenSum = 0
// let oddSum = 0
// for (let i = 1; i<=100;i++){
//     if(i%2 === 0){
//         evenSum += i
//     }else{
//         oddSum +=i
//     }
// }
// console.log(`Even sum: ${evenSum}`) //2550
// console.log(`Odd sum: ${oddSum}`) //2500


// 12- Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let evenSum = 0;
// let oddSum = 0;
// let i = 0;
// let response = [];
// do {
//   i % 2 === 0 ? (evenSum += i) : (oddSum += i);
//   i++;
// } while (i <= 100);
// response.push(evenSum, oddSum);
// console.log(response); // [2550, 2500]


// 13-Develop a small script which generate array of 5 random numbers
// const myResultArray = []
// for(let i=1 ;i<=5;i++){
//     myResultArray.push(parseInt(Math.random()*100))
// }
// console.log(myResultArray)


// 14- Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let i = 1
// let randomNumber = 0
// let uniquesArray = []
// do{
//     randomNumber = parseInt(Math.random()*100)
//     if(uniquesArray.includes(randomNumber)){
//         console.log(`The ${randomNumber} its included`)
//         break
//     }else{
//         uniquesArray.push(randomNumber)
//     }
//     i++
// }while(i<= 5)
// console.log(uniquesArray)


// 15-Develop a small script which generate a six characters random id:
// const idGenerated = [];
// const characters = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
// ];
// let randomIndex = 0;
// do {
// //   i assure to get a random value in range of characters length multiplying for the characters.length
//   randomIndex = parseInt(Math.random() * characters.length);
//   idGenerated.push(characters[randomIndex]);
// } while (idGenerated.length <= 5);
// console.log(idGenerated.join(""));
