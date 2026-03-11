//Object destructuring
let user = {
    name: 'Sri',
    age: 22
};
let {name,age} = user;
console.log(name,age);

//without destructuring
 let name1 = user.name;
let age1 = user.age; 
console.log(name1,age1);

//Rename variable
let user1 = {
    name: "Ram",
    age: 20
};
let {name:username} = user1;
console.log(username);

//API response
let response = {
    id: 1,
    username: 'Sri',
    email: 'sri12@gmail.com'
};