function randomPassword(string, length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * string.length);
        result += string[index];
    }
    return result;
}

function showResult() {
    let lengthPassword = document.getElementById("lengthPassword").value;
    let txt = "";
    if (document.getElementById("number").checked) {
        txt += "1234567890";
    }
    if (document.getElementById("letter").checked) {
        txt += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("symbol").checked) {
        txt += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }
    if (!txt.length) {
        alert("Phải ít nhất có một loại được chọn!");
        return;
    }
    document.getElementById("result").textContent = randomPassword(txt, lengthPassword);
}

function showValue(value) {
    document.getElementById("lengthValue").textContent = value;
}

showValue(document.getElementById("lengthPassword").value);
