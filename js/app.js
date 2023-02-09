"use strict";

document.addEventListener("DOMContentLoaded", function() {

    let amount = 0;
    const userDeposit = document.getElementById("userDeposit");
    const depositButton = document.getElementById("depositButton");
    const userWithdraw = document.getElementById("userWithdraw");
    const withdrawButton = document.getElementById("withdrawButton");
    const balanceDisplay = document.getElementById("Preview");
    let statusDisplay = document.getElementById("status");

    function updateBalance(newValue) {
        balanceDisplay.innerHTML = newValue;
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

        if (amount < 0.1) {
            alert("You can only deposit above $0.01 .")
        }
        else {
            let newBalance = account.deposit();

            updateBalance(newBalance);
        }
        if (account.balance <= 0) {
            statusDisplay.innerHTML = "Red";
            console.log("Red");
    
        } 
        else if (account.balance < 1000000) {
            statusDisplay.innerHTML = "Active";
            console.log("Active");
    
        }
        else {
            statusDisplay.innerHTML = "Gold";
            console.log("Gold");
    
        }
    });
    
    withdrawButton.addEventListener("click", function() { 
        amount = +userWithdraw.value;
        
        if(account.balance - amount < -1000) {
            alert("Your account balance is less than $-1000");
        }
        else if (account.balance > 1000000) {
            amount = amount + (amount * 1 / 100);
            let newBalance = account.withdraw();
            updateBalance(newBalance);
        }
        else if (amount < 0.1 || amount > 1000) {
            alert("You can only withdraw between 0.1 and 1000")
        }
        else {
            let newBalance = account.withdraw(); 

            updateBalance(newBalance);
        }

        if (account.balance <= 0) {
            statusDisplay.innerHTML = "Red";
            console.log("Red");
        
        } 
        else if (account.balance < 1000000) {
            statusDisplay.innerHTML = "Active";
            console.log("Active");
        
        }
        else {
            statusDisplay.innerHTML = "Gold";
            console.log("Gold");
        
        }
        
    });
});

   
    
