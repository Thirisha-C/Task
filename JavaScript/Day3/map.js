//map - executes callback for each arr and element and returns new array

let priceUSD = [10,15,23];
let priceINR = priceUSD.map(x => x*83);
console.log(priceINR);

priceINR = priceUSD.map(convert);
function convert(val)
{
    return val*83;
}
console.log(priceINR); 

const input = [{name: 'John', age: 15},
    {name: 'Sri', age: 22},
    {name: 'Ram', age: 20},
    {name: 'Prabha', age: 21}]

    const ages = input.map (x=> x.age);
    console.log(ages);

