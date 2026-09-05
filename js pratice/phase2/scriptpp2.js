// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.

function greet(){
    console.log("Hello World");
}
greet()

// 2 Create a function add(a, b) that returns the sum.

function add(a,b){
    var sum=a+b
    return sum
}
console.log(add(10,20));


// 3 Write a function to calculate the square of a number.

var sq=a=> a*a

console.log(sq(10));

//4 Create a function that checks whether a number is even or odd.
function check(a){
    if(a%2==0){
        console.log('the number is even');
    }
    else{
        console.log('The number is odd');
    }
}

check(10)

// 5 Write a function that converts Celsius to Fahrenheit.

function tempchange(cel){
    return (cel*1.8)+32
}
console.log(tempchange(50))


// 6> Create a function with default parameter "Guest".

function guest(user='Guest'){
    console.log('the user name is',user)
}
guest()
guest('manthan')

