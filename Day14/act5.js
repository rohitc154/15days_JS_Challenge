class Account {
    #balance = 0;

    withdraw(amt) {
        this.#balance -= amt;
        return this.#balance;
    }
    deposite(amt) {
        this.#balance += amt;
        return this.#balance;
    }

}

const newAcc = new Account;
console.log(`Account Balance is : ${newAcc.deposite(500)}`)

console.log(`Account Balance is : ${newAcc.withdraw(50)}`);


