
document.addEventListener("DOMContentLoaded", function() {

    let amount = 0;
    let balanceDisplay = document.getElementById("Preview");
    let withdrawButton = document.getElementById("withdrawButton");
    let depositButton = document.getElementById("depositButton");
    let userDeposit = document.getElementById("userDeposit");
    let userWithdraw = document.getElementById("userWithdraw");
    let statusDisplay = document.getElementById("status");
    

    let account = {

        balance: 10,

        deposit: function() {
            
            amount = userDeposit;

            if (amount < 0.1) {
                alert("You can only deposit above $0.01 .")
            }
            else {
                this.balance += amount;
                //return this.balance;           
            }
        },

        withdraw: function() {

            amount = userWithdraw;

            if(account.balance - amount < -1000) {
                alert("Not enough money!");
            }
            else if (account.balance > 1000000) {
                amount = amount + (amount * 1 / 100);
                account.balance -= amount;
                
            }
            else if (amount < 0.1 || amount > 1000) {
                alert("You can only withdraw between 0.1 and 1000")
            }
            else {
                this.balance -= amount;
                //return this.balance;
            }
        },
        status: function() {

            if (account.balance <= 0) {
                statusDisplay.innerHTML = "Red";
            } 
            else if (account.balance < 1000000) {
                statusDisplay.innerHTML = "Active";
            }
            else {
                statusDisplay.innerHTML = "Gold";
            }
        },
    };

});
export default {account};

   
    
