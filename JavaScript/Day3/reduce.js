
//reduce - executes reducer callback and returns accumulated result

let cost=[35,22,556,585,12];
let cartTotal = cost.reduce((total,el) => total+el, 1000);  //1000 - initial value
console.log(cartTotal);

arr=[
    ['a', 'b','c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g']
];
 
let result = {'a':1, 'b': 2};
result['c'] = 1;
console.log(result['d']);
console.log(result);

console.log(arr.flat()); //flat will convert the two dimensional arry into 1d arr

let count = arr.flat().reduce(
    (accumulator,currentVal) => {
            if(accumulator[currentVal])
    accumulator[currentVal]++;
    else
        accumulator[currentVal] = 1;
    return accumulator;
}, {});
console.log(count);


let input = [6,-5,7,-2,4,6,-1];

let sum = input.reduce((total,currVal) => {
    if(currVal >=0)
        return total + currVal;
    else
        return total;
});
console.log(sum);

