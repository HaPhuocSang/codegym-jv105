const vowels = ["a", "e", "i", "o", "u"];

function checkString(str) {
    str = str.toLowerCase();
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i]) && vowels.includes(str[i])) {
            result.push(str[i].toLowerCase());
        }
    }
    return result;
}

function showResult() {
    let textValue = (document.getElementById("textValue").value).trim();
    if (!textValue) {
        alert("Chuỗi nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("result").textContent = `Các ký tự nguyên âm trong chuỗi là: [${checkString(textValue).join(", ")}]`;
}
