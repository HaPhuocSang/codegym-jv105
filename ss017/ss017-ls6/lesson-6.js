function checkInteger(number) {
    return number.trim() && Number.isInteger(Number(number));
}

function checkForPositiveInteger(number) {
    return number > 0;
}

function showResult() {
    let numberValue = document.getElementById("numberValue").value;
    if (!checkInteger(numberValue)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("result").textContent = checkForPositiveInteger(Number(numberValue)) ? `${numberValue} là số nguyên dương!` : `${numberValue} không phải là số nguyên dương!`;
}
