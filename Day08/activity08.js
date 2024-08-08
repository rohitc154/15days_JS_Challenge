// ---------------:)Activity 01(:----------------

// const name = "Rohit";
// const age = 22;

// console.log(`Hey! I'm ${name} and i'm ${age} yrs old.`);
// console.log(`Hey! this is multi-line templated string
//     and it's created by ${name}`);

// ---------------:)Activity 02(:----------------

// Array destructuring
const arr = [1, 2, 3, 4, 5];
// [first, sec] = arr;
// console.log(first, sec);

// Object destructuring
// const obj = {
//     title: 'Be You!',
//     author: 'xyz',
// }

// const { title, author } = obj;
// console.log(title, author);

// ---------------:)Activity 03(:----------------
// const newArr = [...arr, 8, 9, 10]
// console.log(newArr);

// -------------------------------------------------
// let result;
// function sum(...num) {
//     // for (let i = 0; i < num.length; i++)
//     //     result += num[i]
//     result = num.reduce((acc, val) => acc + val)
//     return result;
// }
// console.log(sum(1, 2, 3, 4, 5));

// ---------------:)Activity 04(:----------------
// const multiply = function (num1, num2 = 9) {
//     return num1 * num2;
// }
// console.log(multiply(7, 6));
// console.log(multiply(7));

// ---------------:) Activity 05 (:----------------
const obj = {
    name: "Rohit",
    lang: {
        front_end: 'Html',
        back_end: 'js'
    },
    inspiration: function () {
        return console.log('My Inspiration!');
    }
}
console.log(obj);

