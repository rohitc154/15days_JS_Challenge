class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greetMe() {
        return `Hello!, ${this.name} `
    }
    updateAge(age) {
        this.age = age
        return this.age;
    }
    displayDetail() {
        console.log(`${this.name}, ${this.age}`);
    }
}

const Rohit = new Person("Rohit", 25)
console.log(Rohit.greetMe());

console.log(`Your updated age is : ${Rohit.updateAge(52)}`);

Rohit.displayDetail()