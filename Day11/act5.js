//  Use 'Promise.all' to wait for multiple promises to resolve and then log all their values.
function promise1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data From API 1')
        }, 1000)
    })
}
function promise2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data From API 2')
        }, 1000)
    })
}
function promise3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data From API 3')
        }, 1000)
    })
}

//  using .then and .catch
// Promise.all([promise1(), promise2(), promise3()])
//     .then((values) => {
//         console.log(values);
//     })
//     .catch((error) => {
//         console.log('Error : ', error);
//     })

//  using async and await
// async function consumePromiseAll() {
//     try {
//         const data = await Promise.all([promise1(), promise2(), promise3()])
//         console.log(data);
//     }
//     catch (error) {
//         console.log("Error : ", error);
//     }
// }
// consumePromiseAll()

// ------------:)〰️〰️〰️〰️〰️(:-----------
//  Use 'Promise.race' to log the value of the first promise that resolves among multiple promises.

// Promise.race([promise1(), promise2(), promise3()])
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log('Error : ', error);
//     })

//  using Promise.race using async and await
async function consumePromiseRace() {
    try {
        const data = await Promise.race([promise1(), promise2(), promise3()])
        console.log(data);
    }
    catch (error) {
        console.log('Error : ', error);
    }
}
consumePromiseRace()