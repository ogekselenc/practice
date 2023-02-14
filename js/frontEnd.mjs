import { account }  from "/account.js";

let amount = 0;
const balanceDisplay = document.getElementById("Preview");
const withdrawButton = document.getElementById("withdrawButton");
const depositButton = document.getElementById("depositButton");
const userDeposit = document.getElementById("userDeposit");
const userWithdraw = document.getElementById("userWithdraw");
let statusDisplay = document.getElementById("status");

balanceDisplay.innerHTML = account.balance;
statusDisplay.innerHTML = account.status();


console.log(account.balance);

