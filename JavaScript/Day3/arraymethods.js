//array methods
let arr = ['a','b','c','d','e'];
console.log(arr);

//1.PUSH- add elements to the end
arr.push('f');
console.log(arr);

//POP - removes element from the end and returns removed value
console.log(arr.pop()); //f

//SHIFT - removes element from the start of the array and returns removed value
console.log(arr.shift()); //a
console.log(arr);  //[ 'b', 'c', 'd', 'e' ]

//UNSHIFT - add element to the start of the arr and  returns the length
arr.unshift('a');
console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]
console.log(arr.unshift('a')); // 6
console.log(arr);

 // DELETE


delete arr[1];
console.log(arr);
console.log(arr[1]); //undefined

//SPLICE
/* 1st  parameter - starting index
2nd parameter - Node.of elements to be deleted from the starting index 
3rd (or more) parameter - values to be inserted from the starting index */ 

arr.splice(1,2); //delete 2 elements starting at index 1
console.log(arr);

arr.splice(2,1,'s'); // replace - deletes 1 element at index 2 and replace s
console.log(arr);

arr.splice(3,1,'t','v'); //delete element at position 3 and add 2 elements
console.log(arr);

arr.splice(1,0,'b');
console.log(arr);

//SLICE - starting index,ending index
//ending index not included
console.log(arr.slice(1,2)); //b
console.log(arr.slice(1,3)); // [ 'b', 'c' ]
console.log(arr.slice(1)); // [ 'b', 'c', 's', 't', 'v' ]
console.log(arr.slice(-1)); // [ 'v' ]
console.log(arr.slice(-5)); // [ 'b', 'c', 's', 't', 'v' ]
console.log(arr.slice(-4, -1)); //[ 'c', 's', 't' ]
console.log(arr.slice(0,3));  // [ 'a', 'b', 'c' ]

//REVERSE
arr.reverse()
console.log(arr);

//JOIN - converts arr to str
let str = arr.join();
console.log(str);

//SPLIT - converts str to arr
let arr1 = str.split(',');
console.log(arr1);

//concat and spread operator
let firstArr = [1,2,3];
let secondArr = [4,5,6];
let joinedArr = [firstArr, secondArr];
console.log(joinedArr); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
 
//concat fun
joinedArr = firstArr.concat(secondArr);
console.log(joinedArr); //[ 1, 2, 3, 4, 5, 6 ]

//spread
let joined = [...firstArr, ...secondArr];
console.log(joined); //[ 1, 2, 3, 4, 5, 6 ]

//sort - alphabetical order
let fruits =['apple','orange','grapes','banana','mango'];
fruits.sort();
console.log(fruits);

let numbers = [12,18,4,3,25,22];
numbers.sort((a,b)=>a-b);
console.log(numbers);

//find - first value return