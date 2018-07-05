
const div = '-------------------------';
/* 
* Let vs var
*/

// Valid with var
var no = 10; 
var no = 20; 
console.log(no);
console.log(div);

// declaring the same variable within the same block scope 
// throws an error
let no2 = 10; 
//let no2 = 20; 
console.log(no);
console.log(div);

/*
* Const
*/
const x = 10 ;

// will result in an error because it can't be changed
//x = 12; 

/*
* Variable hoisting
*/
var main = function() { 
    for(var x = 0;x<5;x++) { 
       console.log(x); 
    } 
    console.log("x can be accessed outside the block scope x value is :"+x); 
    console.log('x is hoisted to the function scope'); 
 } 
 main();  