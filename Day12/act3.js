// -------:) Task 05
function validateUserInput(input) {
    try {
        if (input.length === 0) {
            throw Error("Empty String!")
        }
        else {
            return input.toUpperCase()
        }
    }
    catch (error) {
        console.log(error);
    }
}
const result = validateUserInput("Rohit")
console.log(result);