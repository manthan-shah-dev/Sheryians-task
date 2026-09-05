// Question 1 (Easy) — Find Expensive Products
// let prices= [100,250,500,150,700];
// Create a new array containing only prices greater than 300.
// What is this question asking?
// Imagine you're building an e-commerce website.
// You only want to show premium products that cost more than ₹300.
// Input:
// [100,250,500,150,700]
// Output:
// [500,700]

let prices = [100, 250, 500, 150, 700];

let newprice = prices.filter(function (val) {
    return val > 300
})
console.log(newprice)

// Concepts Tested
// Arrays
// filter()

// Question 2 (Moderate) — Student Average
// let marks= [80,90,70,85,95];
// Calculate the average marks of all students.
// What is this question asking?
// A teacher has marks of students stored inside an array.



// You need to:
// 1. Find total marks.
// 2. Divide by number of students.
// Output:
// 84

// Concepts Tested
// Arrays
// reduce()
// length property


let marks = [80, 90, 70, 85, 95];

let len2 = marks.length
let average = (marks.reduce((acc, val) => {
    return val + acc
}, 0) / len2)
console.log(average)


// Question 3 (Hard) — Most Frequent Number
// let numbers= [1,2,3,2,4,2,5,1,1,1];
// Find the number that appears the most.
// What is this question asking?
// You're given an array containing repeated values.
// You need to count how many times each number appears and find the highest
// one.
// Output:
// 1

// Because:
// 1 appears 4 times
// 2 appears 3 times



// Concepts Tested
// Arrays
// Loops
// Objects for counting
// Problem solving

let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];

let count = {}
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i]
    if (count[num]) {
        count[num] = count[num] + 1
    }
    else {
        count[num] = 1
    }
}
console.log(count);

let maxfrequency = 0, maxcount = 0;
for (let key in count) {
    console.log(count[key])
    if (count[key] > maxfrequency) {
        maxcount = key
        maxfrequency = count[key]
    }
}
console.log(maxcount)


// Question 4 (Easy) — Update User Age
// letuser= {
// name:"Ritik",
// age:20
// };
// Update age to 21.
// What is this question asking?
// You already have an object.
// Just modify one property.
// Expected result:
// {
// name:"Ritik",
// age:21
// }

// Concepts Tested
// Object property access
// Object update

console.log('Question 4')
let user4 = {
    name: "Ritik",
    age: 20
};
user4.age = 21
console.log(user4);


// Question 5 (Moderate) — Print User Information

// letuser= {
// name:"Ritik",
// age:20,
// city:"Bhopal"
// };

// Print:
// Name:Ritik
// Age:20
// City:Bhopal
// using a loop.
// What is this question asking?
// Instead of manually writing:
// console.log(user.name);
// console.log(user.age);
// Loop through the object dynamically.
// Concepts Tested
// Objects
// Object.entries()
// for...of


console.log("Question 5 ");


let user5 = {
    name: "Ritik",
    age: 20,
    city: "Bhopal"
};

for (let [key, value] of Object.entries(user5)) {
    console.log(key, value)
}

// Question 6 (Hard) — Highest Paid Employee
// let employees= {
// aman:25000,
// ritik:50000,


// priya:45000
// };
// Find the employee with the highest salary.
// What is this question asking?
// Compare all salaries and return:

// Ritik

// Concepts Tested
// Objects
// Loops
// Comparisons


console.log('Question 6');

let employees6 = {
    aman: 25000,
    ritik: 50000,
    priya: 45000
};
let maxsal = 0, maxsalprson;
for (let [key, value] of Object.entries(employees6)) {
    if (maxsal < value) {
        maxsal = value;
        maxsalprson = key
    }
}
console.log('Max sal', maxsalprson, 'MAx sal person', maxsal);

// Question 7 (Easy) — Greeting Function
// Create a function:
// greet(name)
// Output:
// Hello Ritik

// What is this question asking?
// Learn:
// Function declaration
// Parameters

console.log('Question 7');

function greet7(name) {
    console.log(`Hello ${name}`)
}
greet7('Ritik')
// Question 8 (Moderate) — Discount Calculator
// Create a function:
// calculateDiscount(price)
// Rules:
// 10% discount
// Input:
// 500
// Output:
// 450

// What is this question asking?
// Take input.
// Perform calculation.
// Return result.
// Concepts Tested
// Functions
// Parameters
// Return


console.log('Question 8');

function calculateDiscount(price) {
    return price - (price / 10)
}
console.log(calculateDiscount(287))

// Question 9 (Hard) — Dynamic Sum Function
// Create a function:

// sum(...numbers)
// that can add any amount of numbers.
// Example:
// sum(1,2,3)
// Output:
// 6

// Example:
// sum(1,2,3,4,5)
// Output:

// 15

// What is this question asking?
// The function should not depend on fixed parameters.
// It should work for unlimited inputs.
// Concepts Tested
// Functions
// Rest Parameters
// reduce()

// Arrays + Objects + Functions Together
// These are the most important because real projects use all three together.

console.log('Question 9');
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0)
}

console.log((sum(10, 20, 30, 40, 50, 60)));


// Question 10 (Easy) — Find Adult Users
// letusers= [
// { name:"Ritik", age:20 },
// { name:"Aman", age:16 },
// { name:"Priya", age:25 }
// ];
// Create a function:
// getAdults(users)
// Return only users whose age is 18 or above.
// What is this question asking?
// You have:
// Array
// Objects inside array
// Function
// Output:
// [
// { name:"Ritik", age:20 },
// { name:"Priya", age:25 }
// ]

// Concepts Tested
// Array of objects
// filter()
// Functions


console.log('question 10');



let users10 = [
    { name: "Ritik", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Priya", age: 25 }
];

function getAdults(users) {
    return users.filter((par) => par.age >= 18)
}

console.log(getAdults(users10));

// Question 11 (Moderate) — Shopping Cart Total
// letcart= [
// { name:"Mouse", price:500, qty:2 },
// { name:"Keyboard", price:1000, qty:1 },
// { name:"Monitor", price:10000, qty:1 }
// ];
// Create a function:
// getCartTotal(cart)
// Output:
// 12000

// What is this question asking?
// Each item has:
// price × quantity
// Calculate total bill.
// Concepts Tested
// Array of objects
// Functions
// reduce()

console.log('Question 11');

let cart11 = [
    { name: "Mouse", price: 500, qty: 3 },
    { name: "Keyboard", price: 1000, qty: 1 },
    { name: "Monitor", price: 10000, qty: 1 }
];

function getCartTotal(cart) {
    return cart.reduce((ac, val) => ac + (val.price * val.qty), 0)
}
console.log(getCartTotal(cart11));

// Question 12 (Hard) — Student Grade Report
// letstudents= [
// {
// name:"Ritik",
// marks: [80,90,85]
// },
// {
// name:"Aman",
// marks: [50,40,60]
// }
// ];
// Create a function:
// generateReport(students)
// Return:

// [
// {
// name:"Ritik",
// average:85,
// grade:"A"
// },
// {
// name:"Aman",
// average:50,
// grade:"C"
// }
// ]

// What is this question asking?
// For every student:
// 1. Calculate average.
// 2. Decide grade.
// 3. Create a new object.
// 4. Return a new array.
// This is extremely close to real-world frontend interview questions.
// Concepts Tested
// Arrays
// Nested Arrays
// Objects
// Functions
// map()
// reduce()
// Conditional Logic

console.log('Question 12 (Hard)');
let students12 = [
    {
        name: "Ritik",
        marks: [80, 90, 85]
    },
    {
        name: "Aman",
        marks: [50, 40, 60]
    }
];

function generateReport(students) {
   return students.map(function (num) {
        let total = num.marks.reduce((acc, val) => acc + val, 0)
        console.log(total);
        let average = total / num.marks.length
        if (average >= 80) {
           grade = "A";
        }
        else if (average >= 60) {
            grade = "B";
        }
        else if (average >= 50) {
           grade = "C";
        }
        else if (average >= 40) {
           grade = "D";
        }
        else {
            grade = "F";
        }
        return {
            name:num.name,
            average:average,
            grade:grade
        }
    })
   
}
console.log(generateReport(students12))
console.log(students12)


// 🚀 Final Challenge (Very Hard)
// Mini Library Management System
// Create:

// addBook(title,author)
// borrowBook(id)
// returnBook(id)
// showAvailableBooks()

// Books should be stored as:

// {
// id:1,
// title:"Atomic Habits",
// author:"James Clear",
// borrowed:false
// }

// What is this question asking?
// You need to manage a collection of books.
// Tasks:
// 1. Add new books.
// 2. Borrow books.
// 3. Return books.
// 4. Display available books.
