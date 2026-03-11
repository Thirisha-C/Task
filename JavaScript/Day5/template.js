
let firstName = "Sri";
let lastName = "Ram";
let city = "Chennai";

console.log(firstName + lastName + " lives in " + city);

//backtick `
console.log(`${firstName}${lastName} lives in ${city}`);

//multiline String
let msg = `Happy
Birthday` // backtick `` used
console.log(msg);

//Single and double quote in string
msg = "Dog's name is Chottu";
console.log(msg);
msg = `Cat's name is  "toto"`;
console.log(msg);

let itemCount = 5;
let total = '$95';
let itemAmount = `"You have ${itemCount} items in your cart.
Your bill amount is ${total}"`;
console.log(itemAmount);


let user = {
    name: "Ram",
    email: "ram@gmail.com"
};

let card = `
<div>
    <h2>${user.name}</h2>
    <p>${user.email}</p>
</div>
`;

console.log(card);