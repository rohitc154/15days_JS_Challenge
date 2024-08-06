// ---------------:) Activity 01 (:---------------
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);

// ----------------------------------------------------

// console.log(arr1[0]);
// console.log(arr1[arr1.length - 1]);

// ---------------:) Activity 02 (:---------------
// arr1.push(10)
// console.log(arr1);
// console.log(arr1.pop());
// arr1.shift()
// console.log(arr1);
// arr1.unshift(9)
// console.log(arr1);

// ---------------:) Activity 03 (:---------------
// let mapArr = arr1.map((item) => item * 2)
// console.log(mapArr);

// ---------------------------------------------------

// let filterArr = arr1.filter((element) => element % 2 == 0)
// console.log(filterArr);

// ------------------------------------------------------

// const rArr = arr1.reduce((acc, item) => acc + item)
// console.log(rArr);

// ---------------:) Activity 04 (:---------------
// for (let i = 0; i < arr1.length; i++) {
//     console.log(arr1[i]);
// }

// arr1.forEach((item) => console.log(item));

// ---------------:) Activity 05 (:---------------
let twoDimArr = [[1, 2, 3,], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < twoDimArr.length; i++) {
    for (let j = 0; j < twoDimArr[i].length; j++) {
        console.log(twoDimArr[i][j]);
    }
}