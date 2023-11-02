function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (authenticateUser(email, password)) {
        window.location.href = "homepage.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

function authenticateUser(email, password) {
    const validEmail = "user@example.com";
    const validPassword = "password123";
    return email === validEmail && password === validPassword;
}
