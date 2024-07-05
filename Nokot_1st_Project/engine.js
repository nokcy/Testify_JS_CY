alert("Welcome to my Project")


//Project 1: Calculate the sum of numbers within an array

function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum =sum + numbers[i];
    }
    return sum;
}


const numbers = [5, 7, 3, 2, 12];
const result = sumArray(numbers);
console.log('Sum of array:', result);



//Project 2: Create a length converter function
function lengthConverter(meters) {
    const feet = meters * 3.28084;
    return feet;
}

const feetValue = lengthConverter(5);
console.log("Converting Lenght from meters to feet = ",feetValue);  



//Project 3: Print all even numbers from 0 – 100.

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("here are the even number ",i);
    }
}


//Project 4: 
function printMultiplicationTable() {
    for (let i = 1; i <= 10; i++) {
        let row = '';
        for (let j = 1; j <= 10; j++) {
            row += (i * j).toString().padStart(4, ' ');
        }
        console.log(row);
    }
}

printMultiplicationTable();



// Project 5: Create a function that reverses an array.
function reverseArray(array) {
    return array.slice().reverse();
}

const Arraynumbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(Arraynumbers);
console.log(reversedNumbers);  



//project 6: Sort an array of strings in alphabetical order.
function sortStrings(array) {
    return array.sort();
}

const fruits = ['banana', 'apple', 'orange', 'mango'];
const sortedFruits = sortStrings(fruits);
console.log(sortedFruits);


// project 7: Sort an array of numbers in descending order
function sortNumbersDescending(array) {
    return array.sort((a, b) => b - a);
}

const MyNumbers = [5, 2, 9, 1, 5, 6];
const sortedNumbers = sortNumbersDescending(MyNumbers);
console.log(sortedNumbers);


// Project 8: Return a Boolean if a number is divisible by 10.
function isDivisibleBy10(number) {
    return number % 10 === 0;
}

console.log(isDivisibleBy10(20));  
console.log(isDivisibleBy10(25));  



//Project 9: Return the number of vowels in a string.

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

const exampleString = 'HEllo, World!';
const vowelCount = countVowels(exampleString);
console.log(vowelCount); 


//Project 10: Create a function that filters out negative numbers.

function filterNegativeNumbers(array) {
    return array.filter(number => number >= 0);
}

 const Totalnumbers = [1, -2, 3, -4, 5, -6];
const positiveNumbers = filterNegativeNumbers(Totalnumbers);
console.log(positiveNumbers);  
