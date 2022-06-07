// // LESSON 25: INTRO TO JAVASCRIPT - SIMPLE PROGRAMS
// // 1. Request a user’s name and display the response “Hello, [name]”.
const userName = prompt('Please enter your name:');
    console.log('Hello,' + ' ' + userName);

// // 2. Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
function age() {
    const birthYear = prompt('Please enter your year of birth:');
    const currentYear = 2022;
    const result = currentYear-+birthYear;
    console.log('Your age is:' + ' ' + result);
}

age();

// // 3. Request a length of a side of a square from a user and display the perimeter of the square. 
function squarePerimeter() {
    const sideLength = prompt('What is the side length of the square?');
    const perimeter = +sideLength * 4;
    console.log('The perimeter of the sqaure is:' + ' ' + perimeter);
}

// squarePerimeter();

// 4. Request a radius of a circle and display the area of such a circle. 
function circleArea() {
    const circleRadius = prompt('What is the radius of the circle?');
    const area = Math.PI * (+circleRadius * +circleRadius);
    const areaRounded = area.toFixed(1);
    console.log('The area of the circle is: ' + areaRounded);
}

circleArea();

// 5. Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 
function onTime() {
    const km = prompt('What is the km between the two cities?');
    const time = prompt('What is the time you want to cover it within? (in hours)');
    const speed = km / time;
    console.log('You need to drive at: ' + speed + 'km/hour.');
}

onTime();

// 6. Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
function currencyConverter() {
    const userUSD = prompt('How much USD do you have?');
    const rate = 0.88;
    const convert = userUSD * rate;
    console.log('You have ' + convert + ' EUR');
}

currencyConverter();

// 7. A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 
function flashDrive() {
    const flashMemory = prompt("What is the flash drives memory in GB?");
    const flashMemoryConvert = flashMemory * 1024;
    const files = flashMemoryConvert / 820;
    const filesRounded = files.toFixed(1);
    console.log('You have ' + filesRounded + ', 820MB files.');
}

flashDrive();

// 8. A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 
function chocolateBars() {
    const wallet = prompt('How much USD do you have in your wallet?');
    const chocolateBarPrice = prompt("What is the price of a chocolate bar in USD?");
    const nrOfBars = wallet / chocolateBarPrice;
    const nrOfBarsRounded = nrOfBars.toFixed(0);
    const change = wallet % chocolateBarPrice;
    console.log ('You can buy ' + nrOfBarsRounded + ' chocolate Bars and will have ' + change + ' USD left over.');
}

chocolateBars();

// 9. The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
function interestCalculator() {
    const bankDeposits = prompt('What is your bank deposits for 2 months?'); 
    const interestRate = 0.05;
    const monthlyInterestRate = interestRate / 12;
    const twoMonthInterestRate = monthlyInterestRate * 2;
    const interestForTwoMonths = bankDeposits * twoMonthInterestRate;
    const interestForTwoMonthsRounded = interestForTwoMonths.toFixed(2);
    const twoMonthsTotal = +(bankDeposits + interestForTwoMonths);
    const twoMonthsTotalRounded = twoMonthsTotal.toFixed(2);
    console.log('You will get ' + interestForTwoMonthsRounded + ' USD interest.');
    console.log('Your total savings after two months will be: ' + twoMonthsTotalRounded + ' USD.');
}

interestCalculator();