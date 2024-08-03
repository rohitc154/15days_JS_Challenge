//-------------------:) Activity 01(: ------------------

function numCheck(num) {
    if (typeof num == NaN) {
        console.log('Enter Valid Number.');
    } else {
        if (num < 0) {
            console.log(`${num} is Negative.`);
        } else if (num > 0) {
            console.log(`${num} is Positive.`);
        } else if (num == 0) {
            console.log(`${num} is Zero.`);
        }
    }
}
// numCheck('a')

function voteEligibility(age) {
    if (age > 18) {
        console.log("you're eligible for Voting!");
    }
    else {
        console.log("You're not eligible for Voting!");
    }
}
// voteEligibility(19)

//-------------------:) Activity 02 (: ------------------

function largeAmongThree(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3) {
            console.log(`${num1} is Greater!`);
        }
        else if (num2 > num3) {
            console.log(`${num2} is Greater`);
        }
    }
}
largeAmongThree(5, 8, 15)
