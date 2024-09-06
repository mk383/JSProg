
const fruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

// 1. Log the first and last element on console
console.log(fruits[0], fruits[fruits.length - 1]);

// 2. Add -Papaya before the element 'Banana' and then log array on console
fruits.splice(0, 0, "-Papaya");
console.log(fruits);

// 3. Remove 'Mango' from the array
fruits.splice(fruits.indexOf("Mango"), 1);

// 4. Add element or insert an element 'Pineapple' at the last position
fruits.push("Pineapple");

// 5. Insert an element-'Dragon Fruit' before "Water Melon"
fruits.splice(fruits.indexOf("Water Melon"), 0, "Dragon Fruit");

// 6. Replace an element 'Orange' with 'Kiwi'
fruits[fruits.indexOf("Orange")] = "Kiwi";

// 7. Log the elements starting from index 1 to 4
console.log(fruits.slice(1, 5));

// 8. Only select last 3 elements and log on console: Use the length property
console.log(fruits.slice(-3));