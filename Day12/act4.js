// ------------:) Task 06
// Create a promise that randomly resolves or rejects. Use .catch() to handle the rejections and log an appropriate message to the console.
const promise = new Promise((resolve, reject) => {
    const check = Math.floor(Math.random() * 10) + 1;
    if (check % 2 === 0) {
        resolve('Chcking is Resolved!')
    }
    else {
        reject('Rejected!')
    }
})

// promise
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((err) => {
//         console.log('haha', err);
//     })
// console.log("is this executed??");

// --------------:) Task 07
// Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function consumePromise() {
    try {
        const data = await promise;
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}
consumePromise()