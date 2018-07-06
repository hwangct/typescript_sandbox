const div = '-------------------------';
/*
 * Maps
 */
const map_a = new Map();
map_a.set('name', 'Testing Map');; // Tutorial point
console.log(map_a.get('name'));
console.log(div);

const map_b = new Map();
map_b.set(1, true);
console.log(map_b.has("1")); //false 

map_b.set("1", true);
console.log(map_b.has("1")); //true
console.log(div);

var roles = new Map([
    ['r1', 'User'],
    ['r2', 'Guest'],
    ['r3', 'Admin'],
]);
console.log(`value of key r1 before set(): ${roles.get('r1')}`);
roles.set('r1', 'superUser');
console.log(`value of key r1 after set(): ${roles.get('r1')}`);
console.log(div);

var roles = new Map([
    ['r1', 'User'],
    ['r2', 'Guest'],
    ['r3', 'Admin'],
]);
for (let r of roles.entries())
    console.log(`${r[0]}: ${r[1]}`);
console.log(div);

/*
 * Weak Maps
 *   A weak map is identical to a map with the following exceptions:
 *   1. its keys must be objects
 *   2. keys in a weak map can be garbage collected.
 *   3. a weak map cannot be iterated or cleared.
 */
let weakMap = new WeakMap();
let obj = {};
console.log(weakMap.set(obj, "hello"));
console.log(weakMap.has(obj)); // true
console.log(div);

/*
 * Weak Sets
 * Weak sets can only contain objects, and the objects they contain may be 
 * garbage collected.  Like weak maps, weak sets cannot be iterated.
 */
let weakSet = new WeakSet();
let obj2 = { msg: "hello" };
weakSet.add(obj);
console.log(weakSet.has(obj));
weakSet.delete(obj);
console.log(weakSet.has(obj));
console.log(div);

/*
 * Iterator
 */
var set = new Set(['a', 'b', 'c', 'd', 'e']);
var iterator = set.entries();
console.log(iterator.next());

var set = new Set(['a', 'b', 'c', 'd', 'e']);
var iterator = set.values();
console.log(iterator.next());

var set = new Set(['a', 'b', 'c', 'd', 'e']);
var iterator = set.keys();
console.log(iterator.next());

var map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
var iterator = map.entries();
console.log(iterator.next());

var map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
var iterator = map.values();
console.log(iterator.next());

var map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
]);
var iterator = map.keys();
console.log(iterator.next());