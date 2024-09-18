document.getElementById('btn-add-money').addEventListener('click', function(event){

    event.preventDefault();
    
    let amount = document.getElementById('amount').value
    let amountNumber = parseFloat(amount);

    let pinNumber = document.getElementById('pin').value


   

    if(pinNumber === '1234'){
        let balance = document.getElementById('balance').innerText
        let balanceNumber = parseFloat(balance)

        let newBalance = balanceNumber + amountNumber;

        document.getElementById('balance').innerText = newBalance;
        document.getElementById('amount').value = '';
        document.getElementById('pin').value = '';
    }
    else{
        alert("❌Wrong Pin!!")
    }


})