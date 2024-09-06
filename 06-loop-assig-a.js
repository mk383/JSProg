
// 1. Counting Vowels
function countVowels(s) {
  return s.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
}

let s = "I am very good IT Developer";
console.log(countVowels(s));  // Output: 8

// 2. Sum of Cube of Numbers
function sumOfCubes(n) {
  return Array.from({ length: n }, (_, i) => (i + 1) ** 3).reduce((a, b) => a + b, 0);
}

console.log(sumOfCubes(5));  // Output: 225

// 3. Odd Positioned Chars Function
function oddPositionedChars(s) {
  s = s.replace(" ", "");
  for (let i = 0; i < s.length; i++) {
    if ((i + 1) % 2 !== 0) {
      process.stdout.write(s[i] + " ");  // Use process.stdout.write for Node.js
    }
  }
}

let string1 = "Hard work always pays back";
let string2 = "Soon I will be UI IT Champ";

console.log("Odd positioned chars for string1:");
oddPositionedChars(string1);
console.log("\nOdd positioned chars for string2:");
oddPositionedChars(string2);

