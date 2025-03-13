// Exercise 1
function sayHello(name = "World") {
    console.log(`Hello, ${name}!`);
}
sayHello(); // "Hello, World!"
sayHello("Akhilesh"); // "Hello, Akhilesh!"

// Exercise 2
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // 15

// Exercise 3
const multiply = function(x, y) {
    return x * y;
};
console.log(multiply(3, 4)); // 12

// Exercise 4
function multiply(a, b) {
    return a * b;
}
console.log(multiply(6, 7)); // 42

// Exercise 5
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
console.log(divide(20, 5)); // 4
console.log(divide(10, 0)); // "Cannot divide by zero"

// Exercise 6
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120

// Exercise 7
function square(num) {
    return num * num;
}
console.log(square(9)); // 81
