class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  describe() {
    return `${this.name} — $${this.price}`;
  }
}

// #1
const item1 = new Item("rope", 8);
console.log(item1.describe());      // It's already in a string, toString() would be redundant?

// #2
class Account {
  #balance = 0;

  constructor(owner, opening = 0) {
    this.owner = owner;
    this.#balance = opening;
  }

  get balance() { return this.#balance; }

  set balance(value) {
    if (value < 0) throw new RangeError("balance cannot be negative");
    this.#balance = value;
  }

  deposit(amount) {
    this.balance = this.#balance + amount;
    return this;
  }
}

const acct = new Account;
console.log(acct.balance);      // I'M BROKE. $0!!!
console.log(acct.deposit(5).deposit(10));       // I assume it adds 10 and then adds 5.

try {
    console.log(acct.deposit(-20));
} catch (error) {
    console.log(error);
}       // Balance cannot be negative.

// #3
class Money {
  static rate = 0.07;
  static tax(amount) { return +(amount * Money.rate).toFixed(2); }
}

console.log(Money.tax(40));     // $2.8 tax.

// Stretch
function makeCounter(start = 0) {
  let count = start;
  return {
    increment: () => ++count,
    get value() { return count; },
  };
}
