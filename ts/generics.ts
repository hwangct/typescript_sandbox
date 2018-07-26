function GetType<T>(val: T): string {
    return typeof(val);
}

var aStr = "A String";
var aNum = 10;

console.log(GetType(aStr));
console.log(GetType(aNum));
