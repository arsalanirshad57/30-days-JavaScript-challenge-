//////////////---------------------------------- Activity 01 : Arithmetic Operators -------------------------///////////////

//---------- Taks 01 

const num1 = 25
const num2 = 50

console.log(num1 + num2);

//---------- Taks 02

const subNum1 = 25
const subNum2 = 50

console.log(subNum1 - subNum2);

//---------- Taks 03

const mulNum1 = 25
const mulNum2 = 50

console.log(mulNum1 * mulNum2);

//---------- Taks 04

const divNum1 = 25
const divNum2 = 50

console.log(divNum1 / divNum2);

//---------- Taks 05

const reNum1 = 100
const reNum2 = 23

console.log(reNum1 / reNum2);



//////////////---------------------------------- Activity 02 : Assigment Operators -------------------------///////////////

//---------- Taks 06

let assNum1 = 46

assNum1 += 50

console.log(assNum1);

//---------- Taks 07

let assNum2 = 26

assNum2 -= 5

console.log(assNum2);



//////////////---------------------------------- Activity 03 : Comaprison Operators -------------------------///////////////

//---------- Taks 08

const comNum1 = 86
const comNum2 = 6

console.log(comNum1 > comNum2);
console.log(comNum1 < comNum2);

//---------- Taks 09

const a = 86
const b = 86

console.log(a >= b);
console.log(a <= b);

//---------- Taks 10

const check1 = 86
const check2 = '86'

console.log(check1 == check2);
console.log(check1 === check2);


//////////////---------------------------------- Activity 04 :Loigcal Variables  -------------------------///////////////

//---------- Taks 11

const isWork = true
const isMonday = true

const goToOffice = isMonday && isMonday

console.log(goToOffice);

//---------- Taks 12

const isWork1 = true
const isMonday1 = false

const goToOffice1 = isMonday || isMonday

console.log(goToOffice1);

//---------- Taks 12

const isWork2 = true

const goToOffice2 = !isMonday

console.log(goToOffice2);


//////////////---------------------------------- Activity 05 : Ternary Const   -------------------------///////////////

//---------- Taks 13


const terNum1 = 150
const terNum2 = -150

terNum1 > 0 ? console.log(`numer is positive ${terNum1}`) : console.log('numer is negitive')
terNum2 < 0 ? console.log(`numer is negitive ${terNum2}`): console.log('numer is positive')