// Task 01
// function throwError() {
//     throw new Error("This is an intentional error!");
// }

// try {
//     throwError();
// }
// catch (error) {
//     console.error("Error : ", error);
// }
// console.log("This will run appropriately!");

// Task 02
function divTwoNum(num1, num2) {
    try {
        if (num2 === 0)
            throw Error("Zero Division Error!")
        else
            return num1 / num2;
    }
    catch (error) {
        console.log("Err : ", error);
    }
}
const result = divTwoNum(5, 0);
console.log(result);