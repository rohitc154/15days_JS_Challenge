// Task : 08
// const url = fetch('htps://api.github.com/users/rohitc154')
// url
//     .then((msg) => {
//         console.log(msg);
//     })
//     .catch((error) => {
//         console.log("Error Occured ! ", error);
//     })

// console.log("This could work");

//-----------------------:)) Task 09
async function apiHandleError() {
    try {
        const data = await fetch('htps://api.github.com/users/rohitc154')
        console.log(data);
    }
    catch (error) {
        console.log("Error");
    }
}
apiHandleError()