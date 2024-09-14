// login.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Dummy authentication logic
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'password') {
        // Redirect to the desired webpage
        window.location.href = 'alert.html'; // Replace with your target URL
    } else {
        alert('Invalid username or password');
    }
});
