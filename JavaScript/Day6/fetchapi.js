//fetch api using async

async function getUsers()
{

let response = await fetch(" https://github.com/15Dkatz/official_j...://jsonplaceholder.typicode.com/users");

let data = await response.json();

console.log(data);

}

getUsers();