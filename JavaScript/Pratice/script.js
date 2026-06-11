
document.getElementById("userForm").addEventListener("submit", function(event)
{
    event.preventDefault();
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    console.log(name);
    console.log(city);
    console.log(address);
    console.log(number);
    console.log(email);
});