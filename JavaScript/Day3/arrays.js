
let cities =["Chennai", "Trichy", "Madurai"];
let marks = [78, 56, 87, 64, 52]

//length - total elements in the array
console.log(marks.length);

//at 
console.log(marks.at(-2)); //64

//add
cities[3] = 'Mumbai';
console.log(cities);

//access 2nd element from the start - index starts wid 0
console.log(cities[2]);

console.log(cities[4]); // undefined

//last element
console.log("Last element");
console.log(marks[marks.length-1]);

//mix of int and string
let arr = [5,6,7,'a','abc',[3,4]];
console.log(arr);
console.log(arr[5]); // [ 3, 4 ]
console.log(arr[5][1]); // 4

let matrix = [[1,2,3], [4,5,6], [7,8,9]];
console.log(matrix);
console.log(matrix[1]);
console.log(matrix[1][2]);

console.log("Matrix");
for(let i=0;i<matrix.length;i++)
{
    for(let j=0;j<matrix[i].length;j++)
    {
        console.log(matrix[i][j]);
    }
}
// for loop
console.log('for loop');
let num = [0,1,2,3,4,5,6];
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}

//for off
let number = [1,2,3,4,5]
for(let num of number)
{
    console.log(num);
}
