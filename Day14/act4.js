class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(fname) {
        this._firstName = fname;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(lname) {
        this._lastName = lname;
    }
}

const rohit = new Person("Rohit", "Kumar");
console.log(rohit);

rohit.firstName = "Monu"
console.log(rohit);


