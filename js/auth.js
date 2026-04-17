document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const authArea = document.getElementById("authArea");

    if (!authArea) {
        return;
    }

    if (loggedInUser) {
        authArea.innerHTML = `
    <span class="welcome-user">Welcome, ${loggedInUser}</span>
    <button id="logoutBtn" class="logout-btn">Logout</button>
         `;

        document.getElementById("logoutBtn").addEventListener("click", function () {
            localStorage.removeItem("loggedInUser");

            // Check if page is inside a folder
            if (
                window.location.pathname.includes("/games/") ||
                window.location.pathname.includes("/movies/") ||
                window.location.pathname.includes("/comics/") ||
                window.location.pathname.includes("/music/")
            ) {
                window.location.href = "../index.html";
            } else {
                window.location.href = "index.html";
            }
        });
    } else {
        // Show normal login/register links depending on page location
        if (
            window.location.pathname.includes("/games/") ||
            window.location.pathname.includes("/movies/") ||
            window.location.pathname.includes("/comics/") ||
            window.location.pathname.includes("/music/")
        ) {
            authArea.innerHTML = `
                <a href="../login.html">Login</a>
                <a href="../register.html">Register</a>
            `;
        } else {
            authArea.innerHTML = `
                <a href="login.html">Login</a>
                <a href="register.html">Register</a>
            `;
        }
    }
});