
let ages = [45, 17, 8, 20, -10, 200, 0, null];

for (let i = 0; i < ages.length; i++) {
  let age = ages[i];
  if (age === null || age < 0 || age > 130)
     {
    console.log("Invalid data " + age);
  } else {
    console.log("Valid data " + age + ", your age is " + age + ", " + (age >= 18 ? "you can vote" : "you cannot vote"));
  }
}


