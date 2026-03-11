
//normal function

function add(a, b) 
{
  return a + b;
}
console.log(add(3,4));

//arrow function

let sub = (a, b) => a-b;
console.log(sub(18,12));

let discount = (amount) => amount - (amount*0.1);
console.log(discount(5000));

let marks = [90,70,60,40,30]
let pass=marks.filter(marks => marks>=35);
console.log(pass);

let total= (price,quantity) => price * quantity;
console.log(total(50,4));