// Generate a random number between 0 and 1
let randomNumber = Math.random();
console.log("Random Number:", randomNumber);

// Round numbers up and down
let numberToRound = 4.7;
let roundedDown = Math.floor(numberToRound);
let roundedUp = Math.ceil(numberToRound);
console.log("Rounded Down:", roundedDown);
console.log("Rounded Up:", roundedUp);

// Find min and max in a list
let numbers = [12, 45, 7, 23, 56, 89, 34];
let minNumber = Math.min(...numbers);
let maxNumber = Math.max(...numbers);
console.log("Min Number:", minNumber);
console.log("Max Number:", maxNumber);





let originalString = "Hello, World!";

// Change case
let upperCase = originalString.toUpperCase();
let lowerCase = originalString.toLowerCase();
console.log("Upper Case:", upperCase);
console.log("Lower Case:", lowerCase);

// Extract substrings
let substring = originalString.substring(0, 5);
console.log("Substring:", substring);

// Check inclusion
let includesWorld = originalString.includes("World");
console.log("Includes 'World':", includesWorld);

// Replace text
let replacedString = originalString.replace("World", "JavaScript");
console.log("Replaced String:", replacedString);