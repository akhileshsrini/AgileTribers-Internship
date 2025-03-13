// Exercise 1
function productOrSum(a, b) {
    let product = a * b;
    return product > 500 ? a + b : product;
}
console.log(productOrSum(50, 20));

// Exercise 2
function greatestOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log(greatestOfThree(10, 25, 15));

// Exercise 3
function removeDuplicates(arr) {
    let arr_out = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in arr_out){
            arr_out.push(arr[i])
        }
    }
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Exercise 4
function removeAndReplace(arr, num) {
    return arr.filter(n => n !== num);
}
console.log(removeAndReplace([2, 3, 3, 2, 3], 3));

// Exercise 5
function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
console.log(hasDuplicates([1, 2, 3, 4, 5, 1]));
console.log(hasDuplicates([1, 2, 3, 4, 5]));

// Exercise 6
function sumDigitsUntilSingle(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return num;
}
console.log(sumDigitsUntilSingle(38));

// Exercise 7
function duplicateZeros(arr) {
    let res = [];
    for (let num of arr) {
        res.push(num);
        if (num === 0) res.push(0);
    }
    return res.slice(0, arr.length);
}
console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));

// Exercise 8
function findIntersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
}
console.log(findIntersection([1, 2, 2, 11], [2, 2, 1]));
