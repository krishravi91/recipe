class Bank{
    constructor(accno, name, accType, balance){
        this.accno = accno;
        this.name = name;
        this. accType = accType;
        this.balance = balance;
    }

    getbalance(){
        return `your account balance ${this.balance}`;
    }

    cashWithdrawal(){
        if(this.balance >= amount){
            this.balance = this.balance-amount;
            return `Balance after withdrawal of Rs.${amount} is Rs.${this.balance}`;
        } else {
            return "Insufficient Balance";
        }
    }

    cashDeposit(amount){
        this.balance = this.balance+amount;
        return ` Amount deposited is Rs.${amount}`;
        return ` Balance is Rs.${this.balance}`;
    }
}

const Naresh = new Bank(1001, "Naresh", "SB", 50000);
const Philomina = new Bank(1002, "Philomina", "SB", 60000);
const Vaibhav = new Bank(1003, "Vaibhav", "SB", 70000);
const Pavithra = new Bank(1004, "Pavithra", "SB", 90000);

