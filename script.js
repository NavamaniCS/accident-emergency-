// Dummy credentials for demonstration purposes
const validUserId = 'user';
const validPassword = 'password';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === validUserId && password === validPassword) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('alertSection').style.display = 'block';
    } else {
        document.getElementById('loginError').textContent = 'Invalid User ID or Password';
    }
});

document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    if (location && description) {
        const alertList = document.getElementById('alertList');

        const alertItem = document.createElement('li');
        alertItem.className = 'alert-item';
        alertItem.innerHTML = <strong>Location:</strong> ${location}<br><strong>Description:</strong> ${description};

        alertList.appendChild(alertItem);

        // Clear the form
        document.getElementById('location').value = '';
        document.getElementById('description').value = '';
    }
});