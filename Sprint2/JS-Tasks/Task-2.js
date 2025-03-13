// Exercise 1
let camelCaseVariable = "Camel Case";
let under_score_case = "Underscore Case";

// Exercise 2
const myConstant = 10;
// myConstant = 20; // This will cause an error

// Exercise 3
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // Access first element
numbers.push(6); // Add element
numbers.pop(); // Remove last element

// Exercise 4
let num1 = 5;
let num2 = 10;
console.log("Sum:", num1 + num2);

// Exercise 5
let radius = 7;
console.log("Area of Circle:", Math.PI * radius * radius);

// Exercise 6
let length = 10, width = 5;
console.log("Area of Rectangle:", length * width);

// Exercise 7
let base = 8, height = 6;
console.log("Area of Triangle:", (base * height) / 2);

// Exercise 8
let a = 20;
let b = 4;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// Exercise 9
let assignVar = 10;
assignVar += 5;
assignVar -= 3;
assignVar *= 2;
assignVar /= 4;
console.log("Assignment Operators Result:", assignVar);

// Exercise 10
let counter = 10;
counter++;
counter--;
console.log("Counter Value:", counter);

// Exercise 11
let x = 5;
let y = "5";
console.log(x == y, x === y, x != y, x !== y, x > 2, x < 10, x >= 5, x <= 4);

// Exercise 12
let bool1 = true;
let bool2 = false;
console.log(bool1 && bool2, bool1 || bool2, !bool1);

// Exercise 13
let first = 3;
let second = 7;
[first, second] = [second, first];
console.log("Swapped Values:", first, second);

// Exercise 14
let values = [10, 20, 30, 40, 50];
let avg = 0;
for (let i = 0; i<values.length; i++){
    avg+=values(values.length)
}
avg/=values.length
console.log("Average:", avg);

// Exercise 15
let p = 10, q = 30, r = 12, s = 3;
console.log("Expression Result:", ((p + q) * r) / s);

// Exercise 16
let tamil = 85, english = 90, maths = 95, science = 88, social = 92;
let total = tamil + english + maths + science + social;
let average = total / 5;
console.log("Total Marks:", total);
console.log("Average Marks:", average);
