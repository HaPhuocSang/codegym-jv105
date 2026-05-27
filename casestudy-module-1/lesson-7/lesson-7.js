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
    let hasNumber = false;
    let hasString = false;
    for (let i = 0; i < arrayOfCharacters.length; i++) {
        if (!(Number.isNaN(Number(arrayOfCharacters[i])))) {
            hasNumber = true;
        } else {
            hasString = true;
        }
    }
    let result;
    if (hasNumber && hasString) {
        result = -1;
    } else if (hasNumber) {
        result = 1;
    } else {
        result = 0;
    }
    document.getElementById("resultSecond").textContent = `${result}`;
}
