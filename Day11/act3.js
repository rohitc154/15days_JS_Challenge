const promiseAsync = new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
        if (!error) {
            resolve({ name: "Rohit", mail: "rohit@example.com" });
        }
        else {
            reject('Error Occured!')
        }
    }, 1000)
})

async function consumePromiseAsync() {
    try {
        const response = await promiseAsync
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}

consumePromiseAsync()