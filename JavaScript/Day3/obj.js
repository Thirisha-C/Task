let item1 = {
    name: 'phone',
    price: 25000,
    quantity: 1,
    categories: ['electronics','phones'],
    dimensions: {
        length:7,
        breadth: 3.4,
        height: .5
    }
};
console.log(item1);
console.log(item1.categories[1]);
console.log(item1.dimensions.length);


//Another way to  create a object
let item2 = new Object();
item2.name = 'Charger';
item2.price = 500;
item2.quantity = 1;
console.log(item2);

//accessing object using dot notation
console.log(item1.price);
item1.price = 24000; //changing the value
console.log(item1.price);

item1.returnable = true; //adding
console.log(item1);

delete item2.quantity; //delete
console.log(item2); 

//square bracket notation
console.log(item1['price']);
item1['returnable'] = false;
console.log(item1);

let key = 'price';
item1[key] = 26000;
item1.key = 28000; //won't  change the price value
console.log(item1);