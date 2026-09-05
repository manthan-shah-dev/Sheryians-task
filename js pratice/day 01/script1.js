// var num=Number(prompt('Enter the number to print table'))
// var a=1


// While loop

// while(a<=10){
//     console.log(num+" X "+a+" = " + a*num);
//     a++
    
// }


//Do While Loop
// do{
//     console.log('lalaa');
    
// }while(a==0)

// //for loop

// for(var a=1;a<10;a++){
//     console.log(a);
    
// }


// // function declaration
// function a1(){
//     console.log('Hello guys 1');
    
// }

// //function expression
// var b1= function(){
//     console.log('Hello guys 2');
    
// }

// //arrow function
// var c1=()=>{
//     console.log('Hello guys 3');
// }

// //arrow function in one line
// var d1=()=>console.log('hello from one line function');

// a1()
// b1()
// c1()
// d1()

// function test(user='manthan',age=20){
//     console.log(`your name is ${user} and age is ${age}`);
    
// }

// test(undefined,29)

function dada(){
    console.log('I am dada');
    function papa(){
        console.log('I am papa');
        

        function child(){
            console.log('I am child');
            
        }
        return child
        
    }
    return papa
}


dada()()()