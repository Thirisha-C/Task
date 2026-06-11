
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr);

for( let i=0; i<arr.length;i++)
{
    console.log(arr[i]);
}

for(let val of arr)
{
    console.log(val)
}

//odd or even

console.log("return true or false");
let result = arr.map(val => val%2 ==0)
console.log(result);

for(let value of arr)
{
    console.log(value %2 !==0) // true or false
}

console.log("Return odd or even");

let num = [1,3,4,12,18,25,39,42,63];

for(let n of num)
{
    console.log(n %2 !==0 ? "even" : "odd");
}

//using if
console.log("Even or odd");
for(let n1 of num)
{
    if(n1 %2 == 0)
    {
        console.log(n1, "even");
    }
    else
    {
        console.log(n1);
    }
}
