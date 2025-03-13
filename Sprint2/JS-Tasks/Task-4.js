// Exercise 1
function checkNumberSign(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

// Exercise 2
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// Exercise 3
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

// Exercise 4
function compareNumbers(num1, num2) {
    if (num1 > num2) return `${num1} is greater`;
    else if (num1 < num2) return `${num2} is greater`;
    else return "Both numbers are equal";
}

// Exercise 5, 9
function leapYearChecker(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year`;
    } else {
        return `${year} is not a leap year`;
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Exercise 6
function gradeCalculator(score) {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
}

// Exercise 7
function ageMessage(age) {
    if (age < 16) return "You can't drive.";
    else if (age <= 17) return "You can drive but not vote.";
    else if (age <= 24) return "You can vote but not rent a car.";
    else return "You can do pretty much anything.";
}

// Exercise 8
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
        else if (i % 3 === 0) console.log("Fizz");
        else if (i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}