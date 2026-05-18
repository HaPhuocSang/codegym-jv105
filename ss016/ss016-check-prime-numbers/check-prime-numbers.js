function checkPrimeNumbers(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (!(number % i)) {
            return false;
        }
    }
    return true;
}

function showPrimeNumbers() {
    let primeNumber = parseFloat(document.getElementById("primeNumber").value);
    if (isNaN(primeNumber) || !Number.isInteger(primeNumber)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("result").textContent = checkPrimeNumbers(primeNumber) ? `${primeNumber} là số nguyên tố!` : `${primeNumber} không phải là số nguyên tố!`;
}
