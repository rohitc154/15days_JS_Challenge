//  ------------------:) Activity 01 (:----------------

for (let i = 1; i <= 10; i++) {
    (i == 7) ? 'continue' : console.log(i);
}

// Multiplication Table
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

//  ------------------:) Activity 02 (:----------------
// let i = 0;
// let result = 0;
// while (i <= 10) {
//     result += i;
//     i++;
// }
// console.log(`Sum of 1 to 10 is ${result}`);

// let val = 10;
// while (val != 0) {
//     // console.log(val);
//     val--;
// }

//  ------------------:) Activity 03 (:----------------
// let i = 0;
// do {
//     i++;
//     console.log(i);
// } while (i <= 4)

// Factorial using do-while loop
// let num = 10;
// let result = 1;
// do {
//     if (num == 0) {
//         break;
//     } else {
//         result = result * num;
//         num--;
//     }
// } while (num != 0)
// console.log(result);

//  ------------------:) Activity 04 (:----------------
for (let i = 1; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i > j) {
            console.log('* ');
        }
    }
    console.log('--');
}