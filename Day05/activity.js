//  ------------------:) Activity 01 (:----------------

// function checkEvenOdd(num) {
//     if (num % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// checkEvenOdd(7)

// --------------------------------------------------

// function calcSquare(num) {
//     return Math.pow(num, 2)
// }
// console.log(`Square is : ${calcSquare(5)}`);

//  ------------------:) Activity 02 (:----------------

// const maxNum = function (num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is Greater!`);
//     } else {
//         console.log(`${num2} is Greater!`);
//     }
// }
// maxNum(7, 79)

// --------------------------------------------------------

// const strConcat = function (str1, str2) {
//     return str1 + str2;
// }
// console.log(strConcat('Rohit ', 'Kumar'));

//  ------------------:) Activity 03 (:-------------------

// const sum = (num1, num2) => num1 + num2;
// console.log(`Sum of two Number is : ${sum(8, 9)}`);

// -------------------------------------------------------

// let str = 'rohitchaicode';
// const find = (char) => str.includes(char);
// console.log(find('z'));

//  ------------------:) Activity 04 (:-------------------

// let product = (num1, num2 = 8) => num1 * num2;
// console.log((product(5)));

// -------------------------------------------------------

// let greet = (name, age = 19) => `Good Morning! ${name}, you're ${age} now.`;
// console.log(greet('Rohit'));

//  ------------------:) Activity 05 (:-------------------
// function func() {
//     console.log('Hello!');
// }
// function calling(func, num) {
//     for (i = 0; i < num; i++) {
//         func();
//     }
// }
// calling(func, 10)

// ----------------------------------------------------
const double = (num) => num * 2;
const square = (num) => num * num;
function highOrderFunc(func1, func2, num) {
    return func2(func1(num));
}
const result = highOrderFunc(double, square, 4)
console.log(result);



