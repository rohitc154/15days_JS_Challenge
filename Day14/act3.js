class Person {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static greet() {
        return `HELLO!`
    }
}

// const me = new Person("monu", "monu@hotmail.com");

// console.log(`${me.greet()}`);
console.log(Person.greet());
