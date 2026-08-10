// ### 1. Create an Object

// Create an object for a student with:

// - name
// - age
// - course

// Then print all values.

// ---

console.log("\n========== Question 1 ==========");

var student = {
  name: 'manthan',
  age: 20,
  course: 'B.E'
}
console.log(student.name);
console.log(student.age);
console.log(student.course);

// ### 2. Access Properties

// Given:

// ```jsx
// const car = {
//   brand: "BMW",
//   model: "M4",
//   year: 2022
// }
// ```

// Print:

// - brand
// - model

// using both:

// - dot notation
// - bracket notation

// ---

console.log("\n========== Question 2 ==========");

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}

console.log(car.brand)
console.log(car.model)


// ### 3. Update Object Value

// Change the age of a user from 20 to 25.

// ```jsx
// const user = {
//   name: "Anubhav",
//   age: 20
// }
// ```
console.log("\n========== Question 3 ==========");

const user = {
  name: "Anubhav",
  age: 20
}
user.age = 25
console.log(user);


// ---

// ### 4. Add New Property

// Add a new property:

// ```jsx
// isAdmin: true
// ```

// to this object.

// ---

console.log("\n========== Question 4 ==========");

user.isAdmin = true;
console.log(user);



// ### 5. Delete Property

// Remove the `password` property from the object.

// ```jsx
// const account = {
//   username: "john",
//   password: "12345"
// }
// ```

console.log("\n========== Question 5 ==========");

const account = {
  username: "john",
  password: "12345"
}
console.log(`before delete `, account);

delete account.password
console.log(`after delete `, account);
// ---

// # Intermediate Level

// ### 6. Count Properties

// Write a function that returns how many properties an object has.

// Example:

// ```jsx
// countProperties({a:1,b:2,c:3})
// // 3
// ```

// Hint:

// Use:

// ```jsx
// Object.keys()
// ```

console.log("\n========== Question 6 ==========");

function countProperties(obj) {
  return Object.keys(obj).length
}

console.log(countProperties({ a: 1, b: 2, c: 3 }))
// ### 7. Loop Through Object

// Print all keys and values from this object.

// ```jsx
// const person = {
//   name: "Rahul",
//   age: 22,
//   city: "Delhi"
// }
// ```

// Hint:

// Use:

// ```jsx
// for...in
// ```

console.log("\n========== Question 7 ==========");

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}
for (let per in person) {
  console.log(per, person[per])
}

// ### 8. Check Property Exists

// Check whether `"email"` exists inside an object or not.

// Hint:

// Use:

// ```jsx
// in
// ```

console.log("\n========== Question 8 ==========");


const person8 = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}


console.log("email" in person8);

// ---

// ### 9. Merge Two Objects

// Merge these two objects into one.

// ```jsx
// const obj1 = { a: 1, b: 2 }
// const obj2 = { c: 3, d: 4 }
// ```

// Hint:

// Use:

// ```jsx
// spread operator
// ```


console.log("\n========== Question 9 ==========");


const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

const one = { ...obj1, ...obj2 };
console.log(one);


// ---

// ### 10. Convert Object to Array

// Convert this object into an array of key-value pairs.

// ```jsx
// const user = {
//   name: "Aman",
//   age: 21
// }
// ```

// Hint:

// Use:

// ```jsx
// Object.entries()
// ```

console.log("\n========== Question 10 ==========");

const user10 = {
  name: "Aman",
  age: 21
}

let arr = Object.entries(user10)
console.log(arr);

// # Problem Solving Level

// ### 11. Find Highest Value

// Find the student with highest marks.

// ```jsx
// const marks = {
//   Anubhav: 95,
//   Rahul: 82,
//   Aman: 90
// }
// ```

// Expected Output:

// ```jsx
// "Anubhav"
// ```

console.log("\n========== Question 11 ==========");

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}

let mark = 0
let highmar = 0
for (let ma in marks) {
  if (marks[ma] > mark) {
    mark = marks[ma]
    highmar = ma
  }
}
console.log(highmar);

// ### 12. Sum of Object Values

// Find total salary.

// ```jsx
// const salaries = {
//   john: 1000,
//   alex: 2000,
//   bob: 1500
// }
// ```

// Expected Output:

// ```jsx
// 4500
// ```

console.log("\n========== Question 12 ==========");

const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}

let sum = 0
for (let employee in salaries) {
  sum += salaries[employee]
}
console.log('total salaries', sum);


// ### 13. Nested Object Access

// Print:

// - city
// - pincode

// ```jsx
// const user = {
//   name: "Anubhav",
//   address: {
//     city: "Bhopal",
//     pincode: 462001
//   }
// }
// ```

console.log("\n========== Question 13 ==========");

const user13 = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}

console.log(user13.address.city);
console.log(user13.address.pincode);

// ### 14. Object Method Practice

// Create an object with:
// - name
// - marks
// - method called `getResult`

// If marks > 40:

// ```jsx
// "Pass"
// ```

// else:

// ```jsx
// "Fail"
// ```

console.log("\n========== Question 14 ==========");


let obj = {
  name: 'manthan',
  marks: 85,
  getResult: function (mark) {
    if (mark > 40) {
      return 'Pass'
    }
    return 'Fail'
  }
}

console.log(obj.getResult(obj.marks));

// ### 15. Convert Array to Object

// Convert this array into an object.

// ```jsx
// const arr = ["name", "Anubhav", "age", 24]
// ```

// Expected Output:

// ```jsx
// {
//   name: "Anubhav",
//   age: 24
// }
// ```

console.log("\n========== Question 15==========");

const arr15 = ["name", "Anubhav", "age", 24]

let obj15 = {}

for (let i = 0; i < arr15.length; i += 2) {
  obj15[arr15[i]] = arr15[i + 1]
}

console.log(obj15);
// # Harder Practice Questions

// ### 16. Frequency Counter

// Count frequency of each character.

// Input:

// ```jsx
// "banana"
// ```

// Expected Output:

// ```jsx
// {
//   b:1,
//   a:3,
//   n:2
// }
// ```

console.log("\n========== Question 16==========");


// ### 17. Group By Property

// Group users by age.

// ```jsx
// const users = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 }
// ]
// ```

// Expected Output:

// ```jsx
// {
//   20: [
//     { name: "A", age: 20 },
//     { name: "C", age: 20 }
//   ],
//   21: [
//     { name: "B", age: 21 }
//   ]
// }
// ```

// ---

// ### 18. Deep Property Check

// Check whether this property exists:

// ```jsx
// "user.address.city"
// ```

// inside an object dynamically.

// Hint:

// Use:

// ```jsx
// split(".")
// ```

// ---

// ### 19. Object Comparison

// Check if two objects have same keys and values.
// Example:

// ```jsx
// {a:1,b:2}
// {a:1,b:2}
// ```

// Expected Output:

// ```jsx
// true
// ```

// ---

// ### 20. Remove Duplicate Objects

// Remove duplicate objects from array based on `id`.

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"},
//   {id:1,name:"A"}
// ]
// ```

// Expected Output:

// ```jsx
// [
//   {id:1,name:"A"},
//   {id:2,name:"B"}
// ]
// ```