document.getElementById("registerBtn").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username === "" || email === "" || password === "") {
        alert("Fill all fields!");
        return;
    }

    // Save user data
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registered successfully!");

    // Redirect to login
    window.location.href = "login.html";
});