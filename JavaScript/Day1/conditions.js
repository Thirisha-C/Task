//if-else 

let age = 22;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

//if else if else

let amount = 1240;

if (amount >= 5000)
{
    console.log("40% discount applied");
}
else if (amount >= 3000)
{
    console.log("20% discount applied");
}
else if (amount >= 1000)
{
    console.log("10% discount applied");
}
else
{
    console.log("No discount:)");
}

//Switch

let paymentMethod = "COD";

switch(paymentMethod)
{
    case "card": console.log("Processing card Payment");
                 break;
    case "UPI": console.log("Processing UPI Payment");
                 break;
    case "COD": console.log("Cash on Delivery");
                 break;                         
    default :   console.log("Invalid payment method");
}
