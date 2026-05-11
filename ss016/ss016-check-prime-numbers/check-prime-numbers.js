function checkPrimeNumbers(number) {
    let result = true;
    if (number <= 1) {
        result = false;
    } else {
        for (let i = 2; i < Math.sqrt(number); i++) {
            if (!(number % i)) {
                result = false;
                break;
            }
        }
    }
    return result;
}

function showPrimeNumbers() {
    let primeNumber = parseFloat(document.getElementById("primeNumber").value);
    if (isNaN(primeNumber) || !Number.isInteger(primeNumber)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("result").textContent = checkPrimeNumbers(primeNumber) ? `${primeNumber} là số nguyên tố!` : `${primeNumber} không phải là số nguyên tố!`;
}
