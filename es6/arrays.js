const div = '-------------------------';
/*
* Array Element Finding
*/
let a = [ 1, 3, 4, 2 ].find(x => x > 3) // 4
let b = [ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
console.log(a);
console.log(b);
console.log(div);

/*
* Array entries
*/
// returns an Array iterator that can be used to loop through
// the array's keys and values.
var numbers = [1, 2, 3]; 
var val = numbers.entries(); 
//console.log([...val]);
console.log(val.next().value);  
console.log(val.next().value);  
console.log(val.next().value);
console.log(div);

/*
* Array keys
*/
console.log(Array.from(['a', 'b'].keys()));
console.log(div);

/*
* Array traversal
*/
var nums = [1001,1002,1003,1004] 
for(let j in nums) { 
   console.log(nums[j]); 
}
console.log(div);

/*
* Array destructuring
*/
var arr = [12,13]; 
var[x,y] = arr; 
console.log(x); 
console.log(y);
console.log(div);

/*
* Typed Arrays
*/
//  ES6 class equivalent to the following C structure:
//  struct Example { unsigned long id; char username[16]; float amountDue }
class Example {
    constructor (buffer = new ArrayBuffer(24)) {
        this.buffer = buffer;
    }
    set buffer (buffer) {
        this._buffer    = buffer;
        this._id        = new Uint32Array (this._buffer,  0,  1);
        this._username  = new Uint8Array  (this._buffer,  4, 16);
        this._amountDue = new Float32Array(this._buffer, 20,  1);
    }
    get buffer ()     { return this._buffer       };
    set id (v)        { this._id[0] = v           };
    get id ()         { return this._id[0]        };
    set username (v)  { this._username[0] = v     };
    get username ()   { return this._username[0]  };
    set amountDue (v) { this._amountDue[0] = v    };
    get amountDue ()  { return this._amountDue[0] };
}

let example = new Example();
example.id = 7;
example.username = "John Doe";
example.amountDue = 42.0;
console.log(example);