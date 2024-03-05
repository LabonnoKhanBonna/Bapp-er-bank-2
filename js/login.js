//step 1 add click ecent handler with the submit button
document.getElementById('btn-submit').addEventListener('click' , function(){
    // step 2 get the email adress inside the email
    // always remember to us e.value to get text from an input field 
    const emailField = document.getElementById('user-email');

    const email = emailField.value;
    //step- 3 get password 
    // set id on the html element 
    // get the element
    // get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    console.log(email,password)
})