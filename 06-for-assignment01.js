
// Logs numbers from 5 to 15 (inclusive)
for (let i = 5; i <= 15; i++) {
  console.log(i);
}

// Logs numbers from 50 to 40 (inclusive)
for (let i = 50; i >= 40; i--) {
  console.log(i);
}

// Logs the first 15 odd numbers starting from 5 (not including 5)
let oddCount = 0;
let index = 5;
while (oddCount < 15) {
  if (index % 2 !== 0) {
    console.log(index);
    oddCount++;
  }
  index++;
}

// Logs the first 10 even numbers starting from 2
let evenCount = 0;
let i = 2;
while (evenCount < 10) {
  console.log(i);
  evenCount++;
  i += 2;
}

// Logs multiples of 5 from 5 to 50 (inclusive)
for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

// Logs multiples of 10 from 10 to 100 (inclusive)
for (let i = 1; i <= 10; i++) {
  console.log(10 * i);
}

// Logs multiples of 10 from 100 to 10 (inclusive) in reverse order
for (let i = 10; i >= 1; i--) {
  console.log(10 * i);
}










