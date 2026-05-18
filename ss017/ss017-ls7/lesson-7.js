function swapTheTwoNumbers(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return `Số thứ nhất có giá trị là ${a}. Số thứ hai có giá trị là ${b}.`;
}

function checkInteger(number) {
    return number.trim() && Number.isInteger(Number(number));
}

function showResult() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    if (!checkInteger(firstNumber) || !checkInteger(secondNumber)) {
        alert("Giá trị nhập vào không hợp lệ!")
        return;
    }
    document.getElementById('result').textContent = swapTheTwoNumbers(firstNumber,secondNumber);
}
