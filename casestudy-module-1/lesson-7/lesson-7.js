const arrayOfCharacters = [];

function pushArray() {
    let textValue = (document.getElementById("textValue").value).trim();
    if (!textValue.length) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    arrayOfCharacters.push(textValue);
    document.getElementById("resultFirst").textContent = `[${arrayOfCharacters.join(", ")}]`;
}

function deleteArray() {
    arrayOfCharacters.length = 0;
    document.getElementById("resultFirst").textContent = `[${arrayOfCharacters.join(", ")}]`;
    document.getElementById("resultSecond").textContent = "";
}

function checkArray() {
    if (!arrayOfCharacters.length) {
        alert("Mảng hiện tại chưa có phần tử nào!");
        return;
    }
    let regexNumber = /^-?\d+(\.\d+)?$/;
    let hasNumber = arrayOfCharacters.some(item => regexNumber.test(item.trim()));
    let hasString = arrayOfCharacters.some(item => !regexNumber.test(item.trim()));
    let result;
    if (hasNumber && !hasString) {
        result = 1;
    } else if (!hasNumber && hasString) {
        result = 0;
    } else {
        result = -1;
    }
    document.getElementById("resultSecond").textContent = `${result}`;
}
