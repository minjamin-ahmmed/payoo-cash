document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault()

    let amount = document.getElementById('cashout-amount').value
    let amountNumber = parseFloat(amount);

    let pinNumber = document.getElementById('pin').value

    if(pinNumber === '1234'){
        let balance = document.getElementById('balance').innerText
        let balanceNumber = parseFloat(balance)

        let newBalance = balanceNumber - amountNumber;

        document.getElementById('balance').innerText = newBalance;
        document.getElementById('cashout-amount').value = '';
        document.getElementById('pin').value = '';
    }
    else{
        alert("❌Wrong Pin!!")
    }

    
})


