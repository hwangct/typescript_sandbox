const div = '-------------------------';
/*
* Object Initializers
*/
//In ES6, assigning a property value that matches a property name, you can omit the property value
var foo = 'bar'; 
var baz = { foo }; 
console.log(baz.foo);
console.log(div);

/*
* Construcor function
*/
// A way to create an object
function Car() { 
  this.make = "Ford"; 
  this.model = "F123"; 
}  
var obj = new Car(); 
console.log(obj.make); 
console.log(obj.model);
console.log(div);

 /*
 * Object.create Method
 */
// Alternative way to create objects
var roles = { 
  type: "Admin", // Default value of properties 
  displayType : function() {  
    // Method which will display type of role 
    console.log(this.type); 
  } 
}  

// Create new role type called super_role 
var super_role = Object.create(roles); 
super_role.displayType(); // Output:Admin  

// Create new role type called Guest 
var guest_role = Object.create(roles); 
guest_role.type = "Guest"; 
guest_role.displayType(); // Output:Guest
console.log(div);

 /*
 * Object.assign Function
 */
// Used to clone objects
var det = { name:"Tom", ID:"E1001" }; 
var copy = Object.assign({}, det); 
console.log(copy);  
for (let val in copy) { 
  console.log(copy[val]);
}

// Used to merge objects
var o1 = { a: 10 }; 
var o2 = { b: 20 }; 
var o3 = { c: 30 }; 
var obj = Object.assign(o1, o2, o3); 
console.log(obj);  
console.log(o1);

// When objects are merged, the larger object doesn't maintain a new copy of the properties
// It holds the reference to the properties contained
var o1 = { a: 10 }; 
var obj = Object.assign(o1); 
obj.a++;
console.log("Value of 'a' in the Merged object after increment  ") 
console.log(obj.a);  
console.log("value of 'a' in the Original Object after increment ") 
console.log(o1.a);
console.log(div);

/*
* Deleting Properties
*/
// Creates a new object, myobj, with two properties, a and b. 
var myobj = new Object; 
myobj.a = 5; 
myobj.b = 12; 

// Removes the ‘a’ property 
delete myobj.a; 
console.log ("a" in myobj) // yields "false"
console.log(div);

/*
* Comparing Objects
*/
// Will always return false because they point to a completely different memory address
var val1 = {name: "Tom"}; 
var val2 = {name: "Tom"}; 
console.log(val1 == val2)  // return false 
console.log(val1 === val2)  // return false

// Will return true because the reference of the properties are shared
var val1 = {name: "Tom"}; 
var val2 = val1  

console.log(val1 == val2) // return true 
console.log(val1 === val2) // return true
console.log(div);

/*
* Object Destructuring
*/
// Default values
var emp = { name: 'John', Id: 3 }; 
var {name, Id} = emp; 
console.log(name); 
console.log(Id);

// another destructuring example
const person = {  
  name: 'Luke',
  age: '24',
  facts: {
    hobby: 'Photo',
    work: 'Software Developer'
  }
}

// object matching, deep matching
var {facts: {hobby}} = person;  
console.log(hobby); // 'Photo'  

// Default values  that will be used if the data to be extracted doesn't exist
const {hometown = 'Unknown'} = person;  
console.log(hometown); // 'Unknown'  

// Destructuring the function parameter
const toString = ({name, age}) => {  
  return `${name} is ${age} years old`;
}
  
console.log(toString(person)); // Luke is 24 years old 
console.log(div);

/*
* Parameter Context Matching
*/
function f ([ name, val ]) {
  console.log(name, val)
}
function g ({ name: n, val: v }) {
  console.log(n, v)
}
function h ({ name, val }) {
  console.log(name, val)
}
f([ "bar", 42 ]);
g({ name: "foo", val:  7 });
h({ name: "bar", val: 42 });