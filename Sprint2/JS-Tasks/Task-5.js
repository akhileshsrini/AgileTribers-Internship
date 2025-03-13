// exercise 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// exercise 2
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// exercise 3
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// exercise 4
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5)); // 120

// exercise 5
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

// exercise 6
function average(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum / arr.length;
}
console.log(average([10, 20, 30, 40, 50]));

// exercise 7
for (let i = 1; i <= 5; i++) {
    console.log('*'.repeat(i));
}

// exercise 8
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// exercise 9
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// exercise 10
function checkFirstLast(arr) {
    return arr[0] === arr[arr.length - 1];
}
console.log(checkFirstLast([10, 20, 30, 40, 10]));

// exercise 11
let numbers = [5, 10, 15, 22, 35, 40, 47];
for (let num of numbers) {
    if (num % 5 === 0) {
        console.log(num);
    }
}

// exercise 12
function isVowel(char) {
    return "aeiouAEIOU".includes(char) ? "Vowel" : "Consonant";
}
console.log(isVowel('a'));
console.log(isVowel('b'));

// exercise 13
let evenCount = 0, oddCount = 0;
for (let i = 10; i <= 55; i++) {
    i % 2 === 0 ? evenCount++ : oddCount++;
}
console.log(evenCount, oddCount);

// exercise 14
for (let i = 1; i <= 25; i++) {
    if (i % 5 !== 0) console.log(i);
}

// exercise 15
let nums = [3, 4, 5];
let factorials = nums.map(factorial);
console.log(factorials);

// exercise 16
function productOrSum(a, b) {
    let product = a * b;
    return product > 500 ? a + b : product;
}
console.log(productOrSum(20, 30));

// exercise 17
function maxOfTwo(a, b) {
    return a > b ? a : b;
}
console.log(maxOfTwo(15, 30));

// exercise 18
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(maxOfThree(10, 20, 30));

// exercise 19
let list = [23, 4, -6, 23, -9, 21, 3, -45, -81];
let positives = list.filter(num => num >= 0);
let negatives = list.filter(num => num < 0);
console.log(positives);
console.log(negatives);
