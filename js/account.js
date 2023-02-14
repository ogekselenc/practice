"use strict";

let amount = 0;
const balanceDisplay = document.getElementById("Preview");
const withdrawButton = document.getElementById("withdrawButton");
const depositButton = document.getElementById("depositButton");
const userDeposit = document.getElementById("userDeposit");
const userWithdraw = document.getElementById("userWithdraw");
let statusDisplay = document.getElementById("status");

document.addEventListener("DOMContentLoaded", function() {
    
    let account = {

        balance: 1,

        status: function(balance) {

            if (balance <= 0) {
                return statusDisplay.innerHTML = "Red";
                console.log("Red");
            } 
            else if (balance < 1000000) {
                return statusDisplay.innerHTML = "Active";
                console.log("Active");
            }
            else {
                return statusDisplay.innerHTML = "Gold";
                console.log("Gold");
            }
        },

        withdraw: function(amount) {

            amount = +amount.value;
        
            if(balance - amount < -1000) {
                alert("Not enough money!");
            }
            else if (balance > 1000000) {
                amount = amount + (amount * 1 / 100);
                return balance -= amount;
            }
            else if (amount < 0.1 || amount > 1000) {
                alert("You can only withdraw between 0.1 and 1000")
            }
            else {
                return balance -= amount;
            }
        },

        deposit: function(amount) {

            amount = +amount.value;

            if (amount < 0.1) {
                alert("You can only deposit above $0.01 .")
            }
            else {
                return balance += amount;
            }
        }
    };

    

balanceDisplay.innerHTML = account.balance;
statusDisplay.innerHTML = account.status();
});

   
    
