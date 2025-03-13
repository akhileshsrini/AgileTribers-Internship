// Exercise 1
function filterNegativeNumbers(arr) {
    let arr_out = [];
    for (let i=0; i < arr.length; i++){
        if (arr[i]<0){
            arr_out.push(arr[i])
        }
    }
    return arr_out
}
console.log(filterNegativeNumbers([-7, 4, -2, 8, -11]));

// Exercise 2
function replaceOddNumbers(arr) {
    for (let i=0; i < arr.length; i++){
        if (arr[i]%2 != 0){
            arr[i] = 0;
        }
    }
    return arr;
}
console.log(replaceOddNumbers([5, 10, 15, 20, 22, 23]));

// Exercise 3
let sum = 0;
let userInput;
do {
    userInput = parseInt(prompt("Enter a number (0 to stop):"), 10);
    sum += userInput;
} while (userInput !== 0);
console.log("Total Sum:", sum);

// Exercise 4
for (let i = 0; i < 10; i++) {
    let prev = i - 1;
    console.log(`Current: ${i}, Previous: ${prev}, Sum: ${i + prev}`);
}

// Exercise 5
let evenCount = 0, oddCount = 0;
for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
console.log("Even Count:", evenCount);
console.log("Odd Count:", oddCount);