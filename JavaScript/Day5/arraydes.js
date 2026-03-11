//Destructuring - breaking data from arr/obj into individual variables.

//array des
let arr = [10,20,30,40];
let [a,b,c,d] = arr; //arr values directly assign to variables
console.log(a,b,c,d);
 [a,,c,d] = arr; //middle value skip o/p 10 30
console.log(a,c,d);

//without destructuring
let x = arr[0];
let y = arr[1];
let z = arr[2];
console.log(x,y,z); 

let arr1 = [1,2,3,4,5,6,7,8,9];
let [p,r,s,t] = arr1; //remaining values ignore
console.log(p,r,s,t);

//swap 
let val1 = 10;
let val2 = 20;
[val1, val2] = [val2,val1];
console.log(val2);

//nrml swap
let num1 = 12;
let num2 = 18;
let swap = num1;
num1 = num2;
num2 = swap;
console.log(num2);

