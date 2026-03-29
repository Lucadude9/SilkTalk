document.getElementById("loginBtn").addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");

        // Save login session
        localStorage.setItem("loggedInUser", email);

        window.location.href = "home.html";
    } else {
        alert("Invalid email or password");
    }
});