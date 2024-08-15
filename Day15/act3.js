let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr[i] = arr.push(function () {
//         return function () {
//             console.log('Closure Function');
//         }

//     })
// }
// console.log(arr);

function outer(index) {
    return function () {
        index++;
        return index;
    }
}
for (let i = 0; i < 5; i++) {
    arr.push(outer(i))
}
for (let k = 0; k < 5; k++) {
    console.log(arr[k]());
}


// -----------------:)
// let functions = [];
// for (let i = 0; i < 5; i++) {
//     functions.push(function () {
//         return i;
//     })
// }

// for (let j = 0; j < 5; j++) {
//     console.log(functions[j]());
// }