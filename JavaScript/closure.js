//Closure - giving inner functions access to outer function variables

function outer()
{
    let name = "Sri";
function inner()
{
    console.log(name);
}
inner();
}
outer();

//Bank acc eg
function bankAccount()
{
    let balance = 200;
    return function deposit(amount)
    {
        balance = balance + amount;
        console.log("Balance:", balance)
    }
}
// bankAccount()(500) - evry tym new balance will create 
let myAccount = bankAccount(); //balance maintain in a same memory
myAccount(300);
myAccount(200);

