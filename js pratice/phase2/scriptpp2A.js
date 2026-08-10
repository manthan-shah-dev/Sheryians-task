// ## 1. Array

// ### Intermediate

// Create an array of 5 favorite movies and print all values.

// **Hint:** Use indexing

console.log('question 1');


var movi = ['Asuran', ' Raanjhanaa', 'Thiruchitrambalam', 'Karnan', 'Velaiilla Pattadhari.']
console.log(movi[0]);
console.log(movi[1]);
console.log(movi[2]);
console.log(movi[3]);
console.log(movi[4]);


// ### Hard

// Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.

// **Hint:** Mixed data types + nested indexing


console.log('Hard question');

var quesh1 = [10, 'hard', true, [10, 20, 30]]
console.log(quesh1[3])


// 2. Indexing in Array

// ### Intermediate

// Print the first and last element of an array.

// **Hint:** Use `0` and `length - 1`

console.log('question 2');


var quese2 = [10, 20, 30, 40, 50, 60, 70]

console.log(quese2[0]);
console.log(quese2[quese2.length - 1]);


// ### Hard

// Swap the second and second-last element using indexing.

// **Hint:** Use temporary variable



console.log('before swap', quese2);


var temp = quese2[quese2.length - 1]
quese2[quese2.length - 1] = quese2[quese2.length - 2]
quese2[quese2.length - 2] = temp

console.log('aftere swap', quese2);



// # 3. Multi-Dimensional Arrays

//  Intermediate

// Create a 2D array and print all first elements of inner arrays.

// **Hint:** Double indexing


console.log('question 3');

var quese3 = [
    [10, 20],
    [20, 10],
    [30, 20]
]

console.log(quese3[0][0]);
console.log(quese3[1][0]);
console.log(quese3[2][0]);


// ### Hard

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index




var quesh3 = [
    [10, 20, 30],
    [20, 50, 30],
    [30, 20, 20]
]

var sum = quesh3[0][0] + quesh3[1][1] + quesh3[2][2]

console.log('sum is', sum);



// # 4. length

// ### Intermediate

// Find total elements in an array without counting manually.

// **Hint:** Use `.length`

console.log('question 4');

var quese4 = [10, 20, 30, 40, 50, 60, 70]
console.log(quese4.length);


// ### Hard

// Create a function that checks whether array length is even or odd.

// **Hint:** Use modulus operator


var quesh4 = [10, 20, 30, 40, 50, 60, 70]

var a = (b) => b.length % 2 == 0 ? true : false;

console.log(a(quesh4));



// # 5. push()

// ### Intermediate

// Add 3 new elements at the end of array.

// **Hint:** Use `push()`



console.log('question 5');


var quese5 = [10, 20, 50, 60, 70]

console.log('before push', quese5);
quese5.push(60)
quese5.push(80)
quese5.push(90)

console.log('after push', quese5);


// ### Hard

// Add elements dynamically inside loop from another array.

// **Hint:** Loop + push


var quesh51 = [10, 20, 40, 50, 60, 70]
var quesh52 = []

console.log('before elemnt add quesh52', quesh52);
for (var i = 0; i < quesh51.length; i++) {
    quesh52[i] = quesh51[i]
}

console.log('after elemnt add quesh52', quesh52);


// # 6. pop()

// ### Intermediate

// Remove last element and print removed value.

// **Hint:** Store `pop()` result

console.log('question 6');

var qe6 = [10, 20, 40, 50, 60, 70]

console.log('before pop', qe6);

qe6.pop()
console.log('after pop', qe6);


// ### Hard

// Keep removing elements until array becomes empty.

// **Hint:** Use `while` loop



var qh6 = [10, 20, 40, 50, 60, 70]

while (qh6.length > 0) {
    qh6.pop()
    console.log(qh6);

}


// # 7. unshift()

// ### Intermediate

// Add one username at beginning of array.

// **Hint:** Use `unshift()`

// ### Hard

// Insert multiple elements at beginning without replacing existing ones.

// **Hint:** Multiple arguments


console.log('question 7');


var quh7 = [10, 20, 40, 50, 60]

quh7.unshift(101, 102, 103)

console.log(quh7);


// # 8. shift()

// ### Intermediate

// Remove first element from array.

// **Hint:** Use `shift()`

console.log('question easy 8');


var que8 = [10, 20, 40, 50, 60]
console.log('before shift', que8);
que8.shift()
console.log('after shift', que8);


// ### Hard

// Remove first element repeatedly until only 2 elements remain.

// **Hint:** Loop + length check

console.log('question hard 8');


var quh8 = [10, 20, 40, 50, 60]

while (quh8.length >= 2) {
    console.log('before shift', quh8);
    quh8.shift()
}


// # 9. splice()

// ### Intermediate

// Remove 2 elements from middle of array.

// **Hint:** `splice(start, deleteCount)`

console.log('question easy 9');

var que9 = [10, 20, 40, 50, 60]

que9.splice(2, 2);
console.log(que9);


// ### Hard

// Replace 3 middle elements with 5 new values.

// **Hint:** Use insertion with splice


console.log('question hard 9');


var quh9 = [10, 20, 40, 50, 60, 70, 80]

console.log('before changing', quh9);
quh9.splice(2, 3, 1, 2, 3);

console.log('after change', quh9);


//  10. reverse()

// ### Intermediate

// Reverse an array using method.

// **Hint:** Use `reverse()`

console.log('question easy 10');

var que10 = [10, 20, 40, 50, 60, 70, 80]

console.log('before reverse', que10);
que10.reverse();
console.log('after reverse', que10);
// ### Hard

// Reverse only first half of array.

// **Hint:** Manual swapping

console.log('question hard 10');

var quh10 = [10, 20, 40, 90, 50, 60, 70, 80]


var len = Math.floor(quh10.length / 2);

console.log('before half swap', quh10);

for (var i = 0; i < Math.floor(len / 2); i++) {
    quh10[i] = quh10[i] + quh10[len - 1 - i]
    quh10[len - 1 - i] = quh10[i] - quh10[len - 1 - i]
    quh10[i] = quh10[i] - quh10[len - 1 - i]
}
console.log('after half swap', quh10);



// # 11. sort()

// ### Intermediate

// Sort numbers in ascending order.

// **Hint:** Compare function

console.log('question easy 11');

var que11 = [10, 2, 40, 90, 5, 6, 70, 80]

console.log('before sorting', que11);

que11.sort((a, b) => a - b)
console.log('after sorting', que11);


// ### Hard

// Sort array so even numbers come first and odd later.

// **Hint:** Custom compare logic

console.log('question hard 11');


var quh11 = [10, 2, 40, 90, 5, 6, 70, 80]


console.log('before sorting', quh11);

quh11.sort((a, b) =>  
    a % 2 === 0 && b % 2 !== 0 ? -1:
    a % 2 !== 0 && b % 2 === 0 ? 1:
    a-b
);
console.log('after sorting', quh11);

