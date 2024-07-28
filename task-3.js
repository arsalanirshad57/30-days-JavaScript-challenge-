//////////////---------------------------------- Activit 01 : If-Else Conditions -------------------------///////////////

//---------- Taks 01 

const num1 = 1
const num2 = 0
const num3 = -1

if (num1 > 0) {
    console.log(`num1 is Positive ${num1}`);
} else if (num2 == 0) {
    console.log(`num2 is zero ${num2}`);
} else if (num3 > 0) {
    console.log(`num3 is Negitive ${num3}`);
}

//---------- Taks 02

const isEligible = 15

if (isEligible >= 18) {
    console.log(`person is Eligible to Vote ${isEligible}`);
} else {
    console.log(`person isn't Eligible to Vote ${isEligible}`);
}

//////////////---------------------------------- Activit 02 : Nested If-Else Conditions -------------------------///////////////

//---------- Taks 03

const number1 = 555
const number2 = 530
const number3 = 35
let largest;

if (number1 > number2) {
    if (number1 > number3) {
        largest = number1
    } else {
        largest = number3
    }
} else {
    if (number2 > number3) {
        largest = number2
    } else {
        largest = number3
    }
}
console.log(largest);


//////////////---------------------------------- Activit 03 : Switch Case -------------------------///////////////

//---------- Taks 04


let weekNo = 7;
let week;

switch (weekNo) {
    case 1:
        week = 'Sunday'
        break;
    case 2:
        week = 'Monday'
        break
    case 3:
        week = 'Tuesday'
        break
    case 4:
        week = 'Wednesday'
        break
    case 5:
        week = 'Thursday'
        break
    case 6:
        week = 'Friday'
        break
    case 7:
        week = 'Saturday'
        break
    default:
        week = 'Please Set Correct Number'
        break;
}

console.log('week:', week);



//---------- Taks 05
let gradeNum = 20
let grade;

switch (true) {
    case (gradeNum >= 450):
        grade = 'A'
        break;
    case (gradeNum < 450 && gradeNum >= 350):
        grade = 'B'
        break
    case (gradeNum < 350 && gradeNum >= 250):
        grade = 'C'
        break
    case (gradeNum < 250 && gradeNum >= 170):
        grade = 'D'
        break
    case (gradeNum < 170 && gradeNum >= 70):
        grade = 'F'
        break
    case (gradeNum < 70):
        grade = 'F'
        break
    default:
        console.log('Please write in Number type');
        break;
}

console.log('grade:', grade);



//////////////---------------------------------- Activit 04 : Ternary Operaters -------------------------///////////////

//---------- Taks 06

let terNum = 43;

terNum % 2 == false ? console.log(`${terNum} is Even`) : console.log(` ${terNum} is Odd`);



//////////////---------------------------------- Activit 04 : Combing Conditions -------------------------///////////////

//---------- Taks 07

let YearNum = 190;
let isLeapYear;

switch (true) {
    case (YearNum % 100 === 0):
        isLeapYear = "Normal"
        break;
    case (YearNum % 4 === 0):
        isLeapYear = "Leap"
        break;
    case (YearNum % 400 === 0):
        isLeapYear = "Leap"
        break;

    default:
        isLeapYear = "Normal"
        break;
}
console.log('Year:', isLeapYear);
