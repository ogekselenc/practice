import account from './account.js';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("Preview").innerHTML = account.balance;
    console.log(account.balance);
});


/*
depositButton.addEventListener("click", function () {account.deposit});
balanceDisplay.innerHTML = account.balance;
account.status();

withdrawButton.addEventListener("click", function () {account.withdraw});
balanceDisplay.innerHTML = account.balance;
account.status();
*/
/*
    function updateBalance(newBalance) {
        balanceDisplay.innerHTML = newBalance;
    }

    depositButton.addEventListener("click", function() {
        updateBalance(account.deposit(userDeposit));
        
        account.status();
    });
    

    withdrawButton.addEventListener("click", function() {
        updateBalance(account.withdraw(userWithdraw));
        updateBalance(newBalance);
        account.status();
    });
  */  






