
const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

// 1. Find the total elements available or length and log on console
console.log("Length of the array: ", array.length);

// 2. Log the first element and last elements in array numbers and log on console
console.log("First element: ", array[0]);
console.log("Last element: ", array[array.length - 1]);

// 3. Log the third last element using length property and log on console
console.log("Third last element: ", array[array.length - 3]);

// 4. Find the all even numbers using for of loop and log on console
console.log("Even numbers: ");
for (const num of array) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

// 5. Find the odd numbers for of loop and log on console
console.log("Odd numbers: ");
for (const num of array) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

// 6. Find the numbers which are multiple of 5
console.log("Numbers multiple of 5: ");
for (const num of array) {
  if (num % 5 === 0) {
    console.log(num);
  }
}

// 7. Is number 115 available in array Numbers?
console.log("Is 115 available? ", array.includes(115));

// 8. Is number 23 available in array Numbers?
console.log("Is 23 available? ", array.includes(23));

// 9. Insert numbers-55,66 at index 3 and log array on console
array.splice(3, 0, 55, 66);
console.log("Array after insertion: ", array);

// 10. Delete 3 elements starting from index 4 and log array Numbers on console
array.splice(4, 3);
console.log("Array after deletion: ", array);


