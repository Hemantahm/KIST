document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "admin123") {
        localStorage.setItem("role", "admin");
        window.location.href = "dashboard.html";
    } else if (username === "student" && password === "student123") {
        localStorage.setItem("role", "student");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error").textContent = "Invalid credentials. Try again.";
    }
});
