// alerts.js

document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    
    // Add alert to the list
    const alertList = document.getElementById('alertList');
    const newAlert = document.createElement('li');
    newAlert.classList.add('alert-item');
    newAlert.textContent = `Location: ${location} | Description: ${description}`;
    alertList.appendChild(newAlert);
    
    // Clear the form
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
});
