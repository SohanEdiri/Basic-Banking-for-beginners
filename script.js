const balance = document.getElementById("balance");
const depositBtn = document.getElementById("deposit");
const withdrawBtn = document.getElementById("withdraw");

const depositBox = document.getElementById("depositBox");
const withdrawBox = document.getElementById("withdrawBox");

const addMoney =  document.getElementById("confirmDeposit")
const removeMoney =  document.getElementById("confirmWithdraw")
const closeDepo =  document.getElementById("closeDeposit")
const closeWith = document.getElementById("closeWithdraw")

const withdrawAmount = document.getElementById("withdrawAmount")
const depositAmount = document.getElementById("depositAmount")

let currentBalance = 0;

depositBtn.addEventListener("click", () => {
    depositBox.style.display = "block";
    withdrawBox.style.display = "none";
});


withdrawBtn.addEventListener("click", () => {
    withdrawBox.style.display = "block";
    depositBox.style.display = "none";
});

addMoney.addEventListener('click', ()=> {
    const dAmount = Number(depositAmount.value)

    if(dAmount <= 0){
        alert('Enter valid deposit amount')
        return
    }
    currentBalance += dAmount
    balance.textContent = `Balance: $${currentBalance}`

    depositAmount.value = "";
    depositBox.style.display = "none";
})

closeDepo.addEventListener('click', ()=>{
    depositBox.style.display = "none";
})

removeMoney.addEventListener('click', ()=> {
    const wAmount = Number(withdrawAmount.value)

    if(wAmount <= 0){
        alert('Enter valid deposit amount')
        return
    }
    if(wAmount > currentBalance){
        alert("Insufficient balance")
        return
    }

    currentBalance -= wAmount
    balance.textContent = `Balance: $${currentBalance}`

    withdrawAmount.value = "";
    withdrawBox.style.display = "none";
})

closeDepo.addEventListener('click', ()=>{
    depositBox.style.display = "none";
})

closeWith.addEventListener('click', ()=>{
    withdrawBox.style.display = "none";
})