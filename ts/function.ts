var getSum = function(num1: number, num2: number): number {
    return num1 + num2;
}

var theSum1: number = getSum(5,2);

console.log(theSum1);

/* Optional parameters */
var getDiff = function(num1: number, num2 = 2, num3?: number): number {
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
}

console.log(getDiff(5));
console.log(getDiff(5,2,3));

/* Rest parameters */
var sumAll = function(...nums: number[]): void {
    var sum = nums.reduce((a,b) => a+b, 0);
    console.log(sum);
}

sumAll(1,2,3,4,5);

