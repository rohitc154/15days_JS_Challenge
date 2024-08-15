function genUniqueId() {
    let lastId = 0;

    return function () {
        return Math.round(Math.random() * 100 + 1)
    }
}

const rohit = genUniqueId();
// console.log(rohit());
// console.log(rohit());
// console.log(rohit());

// ---------------:) Task 05

function outerFunc(userName) {
    return function () {
        console.log(`Hello ! ${userName}`);

    }
}

const monu = outerFunc("Rohit");
monu()