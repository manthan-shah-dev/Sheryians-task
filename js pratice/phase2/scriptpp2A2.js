// ## 1. `forEach()`

// ### Intermediate Question

// You are given an array of prices.

// Print each price with `"₹"` before it.

// ```jsx
// let prices = [100, 250, 399, 499];
// ```

// ### Hint

// - `forEach()` runs once for every element.
// - You don't return anything here.
// - Use `console.log()` inside it.

// ---

console.log("\n========== Question 1 (forEach - Intermediate) ==========");

let prices = [100, 250, 399, 499];

prices.forEach(function price(elem) {
    console.log('₹', elem)
})

// ### Hard Question

// You are given an array of students.

// ```jsx
// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// ```

// Print:

// - `"Pass"` if marks are greater than 50
// - `"Fail"` otherwise

// Output format:

// ```jsx
// Anubhav - Pass
// Rahul - Fail
// ```

console.log("\n========== Question 1 (forEach - Hard) ==========");

let students = [
    { name: "Anubhav", marks: 85 },
    { name: "Rahul", marks: 42 },
    { name: "Aman", marks: 90 },
];


students.forEach( (el) => {
    if (el.marks > 50) {
        console.log(el.name, '-pass');
    } else {
        console.log(el.name, '-fail');
    }

})

// ### Hint

// - Loop through objects using `forEach()`
// - Use condition checking inside loop.

// ---

// # 2. `map()`

// ### Intermediate Question

// Convert all names into uppercase.

// ```jsx
// let names = ["anubhav", "rahul", "aman"];
// ```

// Expected Output:

// ```jsx
// ["ANUBHAV", "RAHUL", "AMAN"]
// ```

// ### Hint

// - `map()` creates a new array.
// - Use `.toUpperCase()`.

// ---

console.log("\n========== Question 2 (map - Intermediate) ==========");
let names = ["anubhav", "rahul", "aman"];
names = names.map( el => { return el.toUpperCase() })
console.log(names);

// ### Hard Question

// You are given products.

// ```jsx
// let products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Phone", price: 20000 },
// ];
// ```

// Create a new array where:

// - Every product has a new property `discountPrice`
// - Discount is 10%

// Expected:

// ```jsx
// [
//   { name: "Laptop", price: 50000, discountPrice: 45000 }
// ]
// ```

// ### Hint

// - Return a new object from `map()`
// - Formula:

// ```jsx
// price - (price * 10 / 100)
// ```

// ---

console.log("\n========== Question 2 (map - Hard) ==========");
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
];

let productd = products.map( el => {
    return {
        name: el.name,
        price: el.price,
        discountPrice: el.price - (el.price * 10 / 100)
    }
})

console.log(productd[0]);

// # 3. `filter()`

// ### Intermediate Question

// Filter all even numbers.

// ```jsx
// let nums = [1,2,3,4,5,6,7,8];
// ```

// Expected Output:

// ```jsx
// [2,4,6,8]
// ```

// ### Hint

// - `filter()` keeps elements when condition is `true`.



console.log("\n========== Question 3 (filter - Intermediate) ==========");

let nums = [1,2,3,4,5,6,7,8];
 nums=nums.filter(el=>{
    return el%2==0
})
console.log(nums);


// ### Hard Question

// You are given users.

// ```jsx
// let users = [
//   { name: "Anubhav", active: true },
//   { name: "Rahul", active: false },
//   { name: "Aman", active: true },
// ];
// ```

// Return only active users.

// ### Hint

// - Check `active === true`
// - Return condition directly.

// ---

console.log("\n========== Question 3 (filter - Hard) ==========");

let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];

user=users.filter(el=>{
    return el.active===true
})

console.log(user);


// # 4. `reduce()`

// ### Intermediate Question

// Find total sum of array.

// ```jsx
// let nums = [10,20,30,40];
// ```

// Expected Output:

// ```jsx
// 100
// ```

// ### Hint

// - `reduce()` needs:
//     - accumulator
//     - current value

// ---



console.log("\n========== Question 4 (reduce - Intermediate) ==========");
let nu = [10,20,30,40];
let sum=nu.reduce((acc,val)=> {
    return acc+val},0)

console.log(sum);


// ### Hard Question

// Count frequency of elements.

// ```jsx
// let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// ```

// Expected Output:

// ```jsx
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }
// ```

// ### Hint

// - Create an empty object `{}` as initial value.
// - Increase count if already exists.

// ---


console.log("\n========== Question 4 (reduce - Hard) ==========");


let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

let fruitCount = fruits.reduce((acc, val) => {
    if (acc[val]) {
        acc[val]++;
    } else {
        acc[val] = 1;
    }

    return acc;
}, {});

console.log(fruitCount);

// # 5. `find()`

// ### Intermediate Question

// Find first number greater than 50.

// ```jsx
// let nums = [20, 35, 60, 80];
// ```

// Expected Output:

// ```jsx
// 60
// ```

// ### Hint

// - `find()` returns first matching element.

// ---


console.log("\n========== Question 5 (find - Intermediate) ==========");
let nums5 = [20, 35, 60, 80];

let anse5=nums5.find(el=>{
    return el>50
})

console.log(anse5);


// ### Hard Question

// Find a user with username `"admin"`.

// ```jsx
// let users = [
//   { username: "rahul" },
//   { username: "admin" },
//   { username: "aman" }
// ];
// ```

// ### Hint

// - Compare inside callback:

// ```jsx
// user.username === "admin"
// ```

console.log("\n========== Question 5 (find - Hard) ==========");

let users5= [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];


let ansh5=users5.find(user=>{
    return user.username==='admin'
})
console.log(ansh5);


// # 6. `findIndex()`

// ### Intermediate Question

// Find index of number `90`.

// ```jsx
// let nums = [10, 40, 90, 50];
// ```

// ### Hint

// - `findIndex()` returns index number.

// ---


console.log("\n========== Question 6 (findIndex - Intermediate) ==========");
let nums6 = [10, 40, 90, 50];


let ind=nums6.findIndex(e=>{
    return e===90
})
console.log(ind);

// ### Hard Question

// Find index of first failed student.

// ```jsx
// let students = [
//   { name: "A", marks: 90 },
//   { name: "B", marks: 30 },
//   { name: "C", marks: 70 },
// ];
// ```

// Condition:

// - Failed if marks < 40

// ### Hint

// - Use condition directly inside callback.

// ---

console.log("\n========== Question 6 (findIndex - Hard) ==========");

let students6 = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];

let studfail=students6.findIndex(e=>{
    return e.marks<40
})
console.log(studfail);


// # 7. `some()`

// ### Intermediate Question

// Check if any number is negative.

// ```jsx
// let nums = [10, 20, -5, 40];
// ```

// Expected Output:

// ```jsx
// true
// ```
console.log("\n========== Question 7 (some - Intermediate) ==========");
let nums7 = [10, 20, -5, 40];

let numneg=nums7.some(e=>{
    return e<0
})
console.log(numneg);

// ### Hint

// - `some()` returns true if at least one condition matches.

// ---

// ### Hard Question

// Check if any product is out of stock.

// ```jsx
// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Phone", stock: 0 },
// ];
// ```

// ### Hint

// - Check:

// ```jsx
// stock === 0
// ```


console.log("\n========== Question 7 (some - Hard) ==========");

let products7 = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];


let prooutstock=products7.some(e=>{
    return e.stock ===0
})

console.log(prooutstock);

// # 8. `every()`

// ### Intermediate Question

// Check if all numbers are positive.

// ```jsx
// let nums = [10, 20, 30, 40];
// ```

// Expected Output:

// ```jsx
// true
// ```

// ### Hint

// - `every()` checks all elements.

// ---
console.log("\n========== Question 8 (every - Intermediate) ==========");

let nums8 = [10, 20, 30, 40];


let nume8=nums8.every(e=>{
    return e>0
})
console.log(nume8);


// ### Hard Question

// Check if all students passed.

// ```jsx
// let students = [
//   { name: "A", marks: 80 },
//   { name: "B", marks: 45 },
//   { name: "C", marks: 60 },
// ];
// ```

// Passing marks:

// ```jsx
// 40
// ```

// ### Hint

// - Return condition:

// ```jsx
// marks >= 40
// ```


console.log("\n========== Question 8 (every - Hard) ==========");
let students8 = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];

let studentres=students8.every(e=>{
    return e.marks>=40
})
console.log(studentres);


