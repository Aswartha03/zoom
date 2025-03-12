function createBankAccount(amount){
    let balance = amount
    // balance+=amount 
    return {
        deposit : function (amounttobedeposit){
                balance+=amounttobedeposit
                return ("Deposited ₹"+amounttobedeposit+". New balance: ₹"+balance)
        },
        withdraw: function (Amount){
            if(balance<Amount){
                return ("Insufficient funds")
            }
            else{
                balance = balance-Amount 
                return ("Withdrew ₹"+Amount+". New balance: ₹"+balance)
            }
        },
        getBalance : function (){
            return ("Current balance: ₹"+balance)
        }
    }

}
const myAccount = createBankAccount(1000);  
console.log(myAccount.deposit(500));   // "Deposited ₹500. New balance: ₹1500"  
console.log(myAccount.withdraw(200));  // "Withdrew ₹200. New balance: ₹1300"  
console.log(myAccount.withdraw(1500)); // "Insufficient funds"  
console.log(myAccount.getBalance());   // "Current balance: ₹1300"  
console.log(myAccount.deposit(1000)) // 1000 rupees deposited into the account 