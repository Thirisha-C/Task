//global scope

let globalVar = "Hiii";

function someFunc()
{
    console.log(globalVar);
}
someFunc();

//LOCAL SCOPE

function  sayHello()
{
    let message = "Hello"; // this var can be accessed only within this func
    console.log(message);
}
sayHello();
// console.log(message); //ReferenceError: message is not defined

function addNum()
{
    let test = "Hellooo"
    console.log(test);
}
addNum();
// console.log(test); //ReferenceError: test is not defined

//BLOCK SCOPE 
{
  let city = "Covai";
  console.log(city);
}

console.log(city); // Error

//BLOCK SCOPE WITH VAR
{
  var city = "Chennai";
  console.log(city);
}

console.log(city); 