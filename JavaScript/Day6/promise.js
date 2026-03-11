//Promise obj represents the completion or failure of an async operation

function tatkalBook(){
    return new Promise((resolve,reject) =>
{
    let bookingSuccess = false;
    if(bookingSuccess)
    {
        resolve();
    }
    else
    {
        reject();
    }
})
}

tatkalBook()
.then(() => console.log("Thanks, I will transfer the amount"))
.catch(() => console.log("Thanks for trying!"));