const promise = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        setTimeout(() => {
            resolve();
        }, 2000)
    }
    else {
        setTimeout(() => {
            reject('Error : Pta nhi yar!')
        }, 2000)
    }

})
promise.then(() => {
    console.log("This is first promise!");
})
promise.catch((error) => {
    console.log(error);
})