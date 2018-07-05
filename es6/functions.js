const div = '-------------------------';
/*
* Default function parameters
*/
function add(a, b = 1) { 
    return a+b; 
 } 
 console.log(add(4));
 console.log(div);

 /*
 * Lambda Expression
 */
// You can drop the braces if it is a one-liner
var foo = (x)=>10+x;
console.log(foo(10));
console.log(div);

/*
* Lambda Statement
*/
// braces used for multiiple lines
var msg = ()=> { 
   console.log("function invoked");
   console.log(div); 
} 
msg();

/*
* Syntactic Variations
*/
// Without parentheses for single parameter
var msg2 = x=> { 
    console.log(x);
} 
msg2(10);

 // Without braces for a single statment.  Empty parentheses for no
var disp = ()=>console.log("Hello World"); 
console.log(div);
disp();

/*
* Generator Functions
*/
function* rainbow() { 
   // the asterisk marks this as a generator 
   yield 'red'; 
   yield 'orange'; 
   yield 'yellow'; 
   yield 'green'; 
   yield 'blue'; 
   yield 'indigo'; 
   yield 'violet'; 
} 
for(let color of rainbow()) { 
   console.log(color); 
} 

function* ask() { 
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('Ethan'));  
 console.log(it.next('Cricket')); 


