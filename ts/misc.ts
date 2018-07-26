/* Destructuring */
var randVals = {x: 1, y: 2, z: 3};

var {x, y ,z} = randVals;

console.log(x + y +  z);

[x, y, z] = [z, y , x];

console.log('switch: ' + x + y + z);


/* Template Strings aka String Interpolation */
var multStr = `I go on for
many lines`;

console.log(multStr);


/* Spread function */
function theSum(...args: number[]): void {
    console.log('Sum: ' + (x + y + z));
}

var args = [4,5,6];
theSum(...args);


/* enumerated types */
enum Emotion {
    Happy = 1,
    Sad, 
    Angry
}

var myFeeling = Emotion.Happy;
myFeeling = 1;