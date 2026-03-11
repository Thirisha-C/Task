 let arr = [1,2,3];
console.log(...arr);

//obj update
let user = {
    name: "Sri",
    age: 22
};
console.log(user);
let updated = {...user, age:23, dob: 12}; // age update nd new obj adding
console.log(updated);

user.city = 'chennai';
console.log(user); // new obj create without spread

//new obj create with spread
updated= {
    ...user,
    email: 'sri123@gmail.com'
};
console.log(updated); 

//Array copy without spread
let arr1 = [3,4,5];
let arr2 = arr1; 
arr2.push(6);
console.log(arr1); //[ 3, 4, 5, 6 ]
console.log(arr2); //[ 3, 4, 5, 6 ]

// Array copy with spread
let arr3 = [6,7,8]
let arr4 = [...arr3]; 
arr4.push(9);
console.log(arr3); //[ 6, 7, 8 ]
console.log(arr4); //[ 6, 7, 8 ,9]

//Array merge
let cities = ['Chennai','Banglore'];
let states = ['TamilNadu', 'Karnataka'];
let cityStates = [...cities, ...states];
console.log(cityStates);

//add new values to array
let newarr3 = [4,5,...arr3,9];
console.log(newarr3); //[ 4, 5, 6, 7, 8, 9 ]

//function arguments with spread

let number = [10,20,30,40];
function add(a,b,c,d)
{
    return a+b+c+d;
}
console.log(add(...number));
