const BillAmountInput = document.querySelector('#get-bill');
const NumberofPeopleInput = document.querySelector('.people');
const generateBillBtn = document.querySelector('.generate-btn');
const tipOutput = document.querySelector('.tip-amount span');
const totalOutput = document.querySelector('.tip-total span');
const eachPersonOutput = document.querySelector('.each-person span');

const customTipInput = document.querySelector('.custom-tip')

const tipsContiner = document.querySelector('.tip-container')

const resetBtn = document.querySelector('.reset-btn')


let tipPercentage = 0;
generateBillBtn.addEventListener('click',()=>{
    // alert('HI')

    const billAmount = parseInt(BillAmountInput.value);
    const numberopeople = parseInt(NumberofPeopleInput.value);
   

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = tipAmount + billAmount

    const eachPersonAmt = totalBill/numberopeople

    // console.log(eachPersonAmt);
    tipOutput.innerHTML = `Rs${tipAmount}`;
    totalOutput.innerHTML = `Rs${totalBill}`
    eachPersonOutput.innerHTML = `Rs${eachPersonAmt}`

    resetBtn.disabled = false;
})

tipsContiner.addEventListener('click',(e)=>{
    if(e.target !== tipsContiner){
        [...tipsContiner.children].forEach((tip)=> tip.classList.remove('selected'))
        e.target.classList.add('selected')
        tipPercentage = parseInt(e.target.innerText)
        customTipInput.value = '';
    }
})

customTipInput.addEventListener('input',()=>{
    tipPercentage = parseInt(customTipInput.value);
    [...tipsContiner.children].forEach((tip)=> tip.classList.remove('selected'))
})

resetBtn.addEventListener('click',()=>{
    tipPercentage = 0;
    BillAmountInput.value = '';
    NumberofPeopleInput.value='';
    customTipInput.value='';

    tipOutput.innerHTML = '';
    totalOutput.innerHTML = '';
    eachPersonOutput.innerHTML = '';

    [...tipsContiner.children].forEach((tip)=> tip.classList.remove('selected'))
    resetBtn.disabled = true;
})