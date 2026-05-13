function calculateFactorial(number) {
    let result = 1;
    if (!number || number === 1) {
        result = 1;
    } else {
        for (let i = 1; i <= number; i++) {
            result *= i;
        }
    }
    return result;
}

function showResult() {
    let number = parseFloat(document.getElementById("number").value);
    if (number < 0 || isNaN(number) || !Number.isInteger(number)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("result").textContent = calculateFactorial(number).toString();
}
