function showPassword() {
    let password = document.getElementById("password");
    let btn = document.getElementById("btn");
    if (password.type === "password") {
        document.getElementById("password").type = "text";
        document.getElementById("btn").innerHTML = "Hide Pass";
    }
    else {
        document.getElementById("password").type = "password";
        document.getElementById("btn").innerHTML = "Show Pass";
    }
}
