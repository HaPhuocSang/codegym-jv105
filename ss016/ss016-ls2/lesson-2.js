let currentNumber;
let lastNumber;

function increaseNumber(number) {
    return ++number;
}

function showResult() {
    let numberValue = parseFloat(document.getElementById("numberValue").value);
    if (isNaN(numberValue)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    if (lastNumber !== numberValue) {
        lastNumber = numberValue;
        currentNumber = numberValue;
    }
    currentNumber = increaseNumber(currentNumber);
    document.getElementById("result").textContent = currentNumber.toString();
}
