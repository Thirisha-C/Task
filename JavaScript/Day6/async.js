//async - always return a promise

async function fn(){
    return "Hello";
}
console.log(fn());

fn().then((msg) => console.log(msg));

// async await

function placeOrder() {
    return new Promise (resolve =>
        {
        setTimeout(()=>  {
            console.log("Order placed");
            resolve();
        },1000);
    });
}

function prepareFood() {
    return new Promise(resolve => {
        setTimeout(()=> {
            console.log("Food prepared");
            resolve();
        },2000);
    });
}

function deliverFood() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Food delivered");
            resolve();
        },1000);
    });
}

async function order() {
    await placeOrder();
    await prepareFood();
    await deliverFood();
}

order();