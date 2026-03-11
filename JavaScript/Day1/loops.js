//for loop

for(let i=1;i<=5;i++)
{
    console.log(i);
}

for(let j=10;j>=1;j--)
{
    console.log(j);
}

//while loop

let i=1;
while(i<=4)
{
    console.log(i);
    i++;
}
console.log("outside loop", i)

//DO WHILE LOOP
let j=0;

do{
 console.log(j);
    j++;
}while(j<=10);

// //BREAK- stops the loop

// while(true)
// {
//     let num=Number(prompt("Enter a number"));
//     if(!isNaN(num))
//     {
//         break;
//     }
// }

//CONTINUE- skips the current iteration

for(i=1;i<=20;i++)
{
    if(i%4==0)
    {
        continue;
    }
   console.log(i);    
}


//for..of

let arr=['apple','orange','grapes']
for(i=0;i<arr.length;i++)
{
    console.log(arr[i].toUpperCase());
}

for(let fruit of arr)
{
    console.log(fruit);
}

//for in

item={
    name: "phone",
    quantity: 1,
    price: 25000
}
for(let key in item)
{
    console.log(item[key]);
}