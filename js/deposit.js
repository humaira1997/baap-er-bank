console.log('deposit.js');
document.getElementById('btn-deposit').addEventListener('click', function(){
//step2
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = parseFloat(newDepositAmountString);

//step3
const depositTotalEle = document.getElementById('deposit-total');
const prevDepositTotalString = depositTotalEle.innerText;
const prevDepositTotal  = parseFloat(prevDepositTotalString);
//STEp 4
const currentDepositTotal = prevDepositTotal + newDepositAmount;
//set the deposit total
depositTotalEle.innerText = currentDepositTotal;
//step 5
const balanceTotalEle = document.getElementById('balance-total');
const prevBalanceTotalString = balanceTotalEle.innerText;
const prevBalanceTotal = parseFloat(prevBalanceTotalString);

//step6
const currentBalanceTotal = prevBalanceTotal + newDepositAmount;
//set balance total
balanceTotalEle.innerText = currentBalanceTotal;
//step7
depositField.value = '';

})