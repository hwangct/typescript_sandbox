/*
* String Interpolation
*/
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`
console.log(message);

/*
* String.raw()
*/
// backslashes have no special meaning
var text =`Hello \n World`; 
console.log(text);  

var raw_text = String.raw`Hello \n World `; 
console.log(raw_text);

/*
* String.fromCodePoint()
*/
// returns a string created by using the specified sequence of
// unicode code points.  
console.log(String.fromCodePoint(42));        
console.log(String.fromCodePoint(65, 90));