function findTheSmallest(a, b, c) {
    let min = a;
    if (min > b) {
        min = b;
    }
    if (min > c) {
        min = c;
    }
    return min;
}

function checkInteger(number) {
    return number.trim() && Number.isInteger(Number(number));
}

function showResult() {
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    let thirdNumber = document.getElementById('thirdNumber').value;
    if (!checkInteger(firstNumber) || !checkInteger(secondNumber) || !checkInteger(thirdNumber)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("result").textContent = findTheSmallest(Number(firstNumber), Number(secondNumber), Number(thirdNumber));
}
