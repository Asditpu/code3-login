document.addEventListener("DOMContentLoaded", function () {
    const usernameField = document.getElementById("username");
    const passwordField = document.getElementById("password");
    const rememberMeCheckbox = document.getElementById("rememberMe");
    
    // Agar "Remember Me" belgilangan bo'lsa, localStorage'dan ma'lumotlarni o'qish
    if (localStorage.getItem("rememberMe") === "true") {
        usernameField.value = localStorage.getItem("username") || "";
        passwordField.value = localStorage.getItem("password") || "";
        rememberMeCheckbox.checked = true;
    }

    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem("username", usernameField.value);
            localStorage.setItem("password", passwordField.value);
        } else {
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        alert("Login Successful!");
    });
});

