// Question 1 
console.log('Question 1 ');

let prices1 = [100, 250, 500, 150, 700];
let pricces12 = prices1.filter((val) => val > 300)
console.log(pricces12);

// Question 2 — Last Student in Class
console.log('Question 2 — Last Student in Class');

let students2 = ["Aman", "Ritik", "Priya", "Rahul"];
let lastindex2 = students2.length
console.log(students2[lastindex2 - 1]);


// Question 3 — Add New Product

console.log('Question 3 — Add New Product');
let products3 = ["Laptop", "Mouse", "Keyboard"];
products3.push("Monitor")
console.log(products3);

// Question 4 — Remove Last Notification
console.log('Question 4 — Remove Last Notification');

let notifications4 = [
    "Order Placed",
    "Order Shipped",
    "Order Delivered"
];
console.log('Before Remove Last Notification', notifications4);
notifications4.pop();
console.log('after Remove Last Notification', notifications4);


// Question 5 — Check User Exists
console.log('Question 5 — Check User Exists');
let users5 = ["Aman", "Ritik", "Priya"];
// Check if "Ritik" exists.
console.log(users5.includes("Ritik"));


// Question 6 — Convert Marks to Percentage
console.log('Question 6 — Convert Marks to Percentage');

let marks6 = [80, 90, 70];
// Create a new array where each mark is followed by % .
let result6 = marks6.map((val) => val + '%');
console.log(result6);


// Question 7 — Count Products
console.log('Question 7 — Count Products');

let cart7 = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Laptop"
];
// Print total number of products.
console.log("total number of products. in cart", cart7.length);


// Question 8 — Student Average
console.log('Question 8 — Student Average');

let marks8 = [80, 90, 70, 85, 95];
// Find average marks.
console.log(marks8.reduce((acc, val) => acc + val, 0) / marks8.length);


// Question 9 — Even Numbers Finder
let numbers9 = [1, 2, 3, 4, 5, 6, 7, 8];
// Return all even numbers.
// Scenario
// Filter numbers for a report.

console.log(numbers9.filter(val => val % 2 === 0))
console.log(numbers9);


// Question 10 — Product Search
console.log('Question 10 — Product Search')
let products10 = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

console.log('index of keyboard',products10.indexOf('Keyboard'));


// Question 11 — Total Revenue
console.log('Question 11 — Total Revenue')
let sales10= [500,700,1000,300];

// Calculate total revenue.
console.log('The Total revenue',sales10.reduce((acc,val)=>acc+val,0));


// Question 12 — Uppercase Usernames
console.log("Question 12 — Uppercase Usernames")
let users12= ["ritik","aman","priya"];
// Convert every username into uppercase.
let upperCaseNames12=users12.map(val=>val.toUpperCase())
console.log('user before the uppercase',users12);
console.log('user before the uppercase',upperCaseNames12);


// Question 13 — Find First Adult
console.log('Question 13 — Find First Adult')
let ages13= [12,15,17,19,22];
// Find the first age greater than or equal to 18.
// Scenario
// Age verification system.
// Concepts
console.log('the first age greater than or equal to 18. ',ages13.find(val=>val>=18))