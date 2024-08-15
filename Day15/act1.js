function outerFunc(num1) {
    return (function innerFunc(num2) {
        console.log("outer Variable : " + num1);
        console.log("Inner Variable : " + num2);
    })
}

const newFunc = outerFunc(10);
// newFunc('50')

function incre() {
    counter = 0;
    return {
        increment: function () {
            counter++;
            return counter;
        }
    }
}

const newCount = incre();
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
console.log(newCount.increment());
