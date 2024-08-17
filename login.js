document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});