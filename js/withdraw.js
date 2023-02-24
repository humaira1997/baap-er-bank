//add event handler
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawField.value;

    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    const withdrawTotalEle = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = withdrawTotalEle.innerText;

    const prevWithdrawTotal = parseFloat(prevWithdrawTotalString);

    const balanceTotalEle = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalEle.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);

    if (newWithdrawAmount > prevBalanceTotal) {
        alert('you dont have enough money to withdraw');
        return;
    }

    const currentWithdrawTotal = prevWithdrawTotal + newWithdrawAmount;
    withdrawTotalEle.innerText = currentWithdrawTotal;
    const newBalanceTotal = prevBalanceTotal - newWithdrawAmount;
    balanceTotalEle.innerText = newBalanceTotal;

   
})