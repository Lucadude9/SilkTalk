document.getElementById("loginBtn").addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedUsername = localStorage.getItem("username");

    if (email === savedEmail && password === savedPassword) {
        // Save current logged in user
        localStorage.setItem("loggedInUser", savedUsername);

        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
    }
});