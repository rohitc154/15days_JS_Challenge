//  using the fetch Api to get data from a public api and log the response data to the console using promises.

// fetch('https://api.github.com/users/rohitc154')

//     .then((response) => {
//         const data = response.json()
//         return data;
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//  using the fetch Api to get data from a public api and log the response data to the console using async/await.


async function consumeApiData() {
    try {
        const response = await fetch('https://api.github.com/users/rohitc154');
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}
consumeApiData()


