
console.log(`========= Spread Operator ==========`);
console.log(`========== 1. Creating new array from existing array ===========`);
let arrayFive = [10, 20, 30, 20, 80];
console.log(arrayFive);
console.log(...arrayFive);
let arraySix = [...arrayFive];

console.log(`========== 2. Array concatenation ===========`);
let arraySeven = [10, 20, 30];
let arrayEight = [100, 200, 930];
let arrayNine = [...arraySeven, ...arrayEight];
console.log(arrayNine);