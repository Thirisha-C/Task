//Rest operator - collect multiple values store in one operator

/* //array destructuring Using rest operator
let arr = [11,12,13,14,15,16,17,18,19,20];
let [a,b,c,...rest] = arr;
console.log(a,b);
console.log(rest);

let fruits = ["apple","banana","orange","mango","grapes"];
let [first,second,...others] = fruits;

console.log(first);
console.log(second);
console.log(others);

//obj destructuring using rest operator
let user = {
    name: "Sri",
    age: 22,
    city: "Chennai"
};
let{name,...details} = user;
console.log(name);
console.log(details); */

//shopping cart total

function cartTotal(...prices)
{
    let total = 0;
    for(let price of  prices)
    {
        total = total + price;
    }
    console.log(total);
}
cartTotal(100,200,500,1000); //1800