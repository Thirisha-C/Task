/* //map - map obj are collection of key value pairs
a key in the map occur once
key or value can be obj */

let map =  new Map();
map.set('a',1);
map.set('b',2);
map.set('a',3); //replace the previous value
map.set('c',3);
console.log(map); //{ 'a' => 3, 'b' => 2, 'c' => 3 }
console.log(map.size);
console.log(map.has('d'));

for(let i of map)
{
    console.log(i);
}

for(let [k,v] of map)
{
    console.log(k);
    // console.log(v);
}

for(let v of map.values())
{
    console.log(v);
}

map.forEach((v,k) => {
    console.log('key', k, 'value',v);
})

//2 dimensional array to map

let kvArr=[['a',1],['b',2]];
let map1 = new Map(kvArr);
console.log(map1);
console.log(...map1); //spread operator used to convert into arr

//set object - Collection of values and values are unique
let arr=[1,2,1,2,3,5,5,6,7,8,2,3,9];
let mySet = new Set(arr);
console.log(arr);
console.log(mySet);
        
let mySet1 = new Set();
mySet1.add(3);
mySet1.add(4);
mySet1.add('prst');
mySet1.add({'a':1, 'b': 2});
mySet1.add(3);
console.log(mySet1);

let obj = {'a': 1, 'b': 2};
mySet1.add(obj);
console.log(mySet1);
console.log(mySet1.size);
console.log(mySet1.has(3));
console.log(mySet1.has(6));
console.log(mySet1.delete(3));
console.log(mySet1);

let array = Array.from(mySet1);
console.log(array);
