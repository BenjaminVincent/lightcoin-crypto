let balance = 500.00;


class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let i = 0; i < this.transactions.length; i++) {
      balance += this.transactions[i].value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();
    this.account.addTransaction(this);
    return true;
  }
}




class Withdrawal extends Transaction {

  get value() {
    return this.amount * -1;
  }

}

class Deposite extends Transaction {

  get value() {
    return this.amount;
  }
}



// DRIVER CODE

myAccount = new Account("Ben");

t1 = new Withdrawal(50.25, myAccount);
t2 = new Deposite(999.99, myAccount);
t1.commit();
t2.commit();


console.log(myAccount.balance);
