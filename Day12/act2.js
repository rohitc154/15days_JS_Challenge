const error = false;
function checkError() {
    try {
        if (!error) {
            console.log("There is no any Error...!");
        }
        else
            throw Error('Error hai re BabA!')
    }
    catch (error) {
        console.log("Err : ", error);
    }
    finally {
        console.log("This will execute independent of the errror is found or not!");
    }
}
checkError()