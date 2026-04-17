document.getElementById("registerBtn").addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || email === "" || password === "") {
        alert("Fill all fields!");
        return;
    }

    // Save one user for this project
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registered successfully!");
    window.location.href = "login.html";
});