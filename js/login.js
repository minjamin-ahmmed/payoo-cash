//Login Button DOM

let btnLogin = document.getElementById('btn-login')
btnLogin.addEventListener('click', function(event){

    event.preventDefault()


    let number = document.getElementById('mobile-number').value
    let pinNumber = document.getElementById('pin-number').value

    if(number === '01716' && pinNumber === '1234'){
      window.location.href = '/transaction.html';
    }
})