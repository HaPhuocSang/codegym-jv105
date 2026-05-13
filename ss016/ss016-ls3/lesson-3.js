function comparison(a, b) {
    return a > b;
}

function showResult() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    let result;
    if (comparison(firstNumber, secondNumber)) {
        alert(`${firstNumber} > ${secondNumber}`);
        return;
    } else {
        result = `Tổng là ${firstNumber + secondNumber}`;
    }
    document.getElementById("result").textContent = result;
}
