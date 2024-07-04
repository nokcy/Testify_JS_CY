alert("Welcome to my Project")


//Project 1: Calculate the sum of numbers within an array

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


const numbers = [5, 7, 3, 2, 12];
const result = sumArray(numbers);
console.log('Sum of array:', result);
