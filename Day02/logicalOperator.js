//  Logical Operator

let num = 20

//  Logical And Operator
if (num > 10 && num < 25) {
    console.log(`${num} is between 10 and 25 : ${num > 10 && num < 25}`);
}

num = 15
// Logical OR Operator
console.log(` Does num < 10 || num > 25 : ${num > 10 || num < 25}`);


// Not Operator
console.log(`Does 5 Not Equals 7 : ${5 != 7}`);

// ----------------:) Ternary Operator (:--------------

marks = 75;
console.log(marks > 90 ? `Destinction` : marks < 80 ? `Fine` : `Not Fine`);