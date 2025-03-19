// Get user input
let num1 = parseFloat(prompt("Enter first number: "));
let operator = prompt("Enter operation (+, -, *, /): ");
let num2 = parseFloat(prompt("Enter second number: "));

// Validate input and perform calculation
function calculate(num1, operator, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input! Please enter numbers.";
    }
    
    switch (operator) {
        case "+":
            return `Result: ${num1 + num2}`;
        case "-":
            return `Result: ${num1 - num2}`;
        case "*":
            return `Result: ${num1 * num2}`;
        case "/":
            return num2 !== 0 ? `Result: ${num1 / num2}` : "Error: Division by zero!";
        default:
            return "Invalid operator! Use +, -, *, or /.";
    }
}

console.log(calculate(num1, operator, num2));
