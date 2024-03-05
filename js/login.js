// login.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn-submit').addEventListener('click', function() {
        console.log('submit button clicked');
        // Get the email address and password
        const emailField = document.getElementById('user-email');
        const passwordField = document.getElementById('user-password');

        const email = emailField.value;
        const password = passwordField.value;

        console.log("Email:", email);
        console.log("Password:", password);
    });
});
