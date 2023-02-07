"use strict";


document.addEventListener("DOMContentLoaded", function() {
    
let amount = 0;
const userDeposit = document.getElementById("userDeposit");
const depositButton = document.getElementById("depositButton");
const userWithdraw = document.getElementById("userWithdraw");
const withdrawButton = document.getElementById("withdrawButton");
const balanceDisplay = document.getElementById("Preview");

function updateBalance(newValue) {
    balanceDisplay.innerHTML = newValue
}

let account = {
    balance: 0,
    withdraw: function() {
        this.balance -= amount;

        return this.balance;
    },
    deposit: function() {
        this.balance += amount;

        return this.balance;
    }
};

balanceDisplay.innerHTML = account.balance;

depositButton.addEventListener("click", function() { 
    amount = +userDeposit.value;

    let newBalance = account.deposit();

    updateBalance(newBalance);

});


withdrawButton.addEventListener("click", function() { 
    amount = +userWithdraw.value;
    
    let newBalance = account.withdraw(); 

    updateBalance(newBalance);
});



/*function promptMeToWithdraw()   {
    thisAmount = prompt('Enter the amount to withdraw'); 
    let amount = parseInt(thisAmount);
    return account.withdraw(amount);

}



function promptMeToDeposit()  {
    thisAmount = prompt('Enter the amount to deposit'); 
    let amount = parseInt(thisAmount);
    return account.deposit(amount);

} 



document.getElementById('withdrawButton').addEventListener('click', promptMeToWithdraw);
document.getElementById('Preview').innerHTML = "Balance: <br>" + account.balance;

document.getElementById('depositButton').addEventListener('click', promptMeToDeposit);
document.getElementById('Preview').innerHTML = "Balance: <br>" + account.balance; 
*/


if (account.balance <= 0) {
    document.getElementById('status').innerHTML = "Red";

} 
else if (account.balance > 0 && account.balance < 1000000) {
    document.getElementById('status').innerHTML = "Active";

}
else if (account.balance >= 1000000) {
    document.getElementById('status').innerHTML = "Gold";

}
  });















