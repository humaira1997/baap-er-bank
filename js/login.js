//step 1: add click event handler with the submit button.
document.getElementById('btn-submit').addEventListener('click', function(){
    //step2: get the email add inside the input field
    //always rembr to use .value to get text frm input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    //step3: get pass
    const passField = document.getElementById('user-password');
    const password = passField.value;


if(email=== 'anjum@me.com' && password === 'secret'){
    window.location.href = 'bank.html';
}
else{
    alert('wrong input');
}

})


