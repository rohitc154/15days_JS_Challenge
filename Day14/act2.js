class Person {
    goodLook = true;
    happy = true;
}
class Student extends Person {
    name = "Rohit"
    sId = '2024/5216'

    giveSId() {
        return this.sId;
    }
    greeting() {
        return `Hello ${this.name}`
    }
}

const me = new Student;
console.log(me.giveSId());
console.log(me.greeting());

const koma = new Student;
console.log(koma.greeting());
