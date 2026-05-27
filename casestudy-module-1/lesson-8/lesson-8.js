const integerArray = [];

function pushArray() {
    let numberInteger = (document.getElementById("numberInteger").value).trim();
    if (!numberInteger.length || !Number.isInteger(Number(numberInteger))) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    integerArray.push(Number(numberInteger));
    document.getElementById("resultFirst").textContent = `[${integerArray.join(", ")}]`;
}

function deleteArray() {
    integerArray.length = 0;
    document.getElementById("resultFirst").textContent = `[${integerArray.join(", ")}]`;
    document.getElementById("resultSecond").textContent = "";
}

function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

function checkArray() {
    if (!integerArray.length) {
        alert("Mảng hiện tại chưa có phần tử nào!");
        return;
    }
    let hasPrimeNumber = false;
    let noPrimeNumber = false;
    for (let i = 0; i < integerArray.length; i++) {
        if (isPrime(integerArray[i])) {
            hasPrimeNumber = true;
        } else {
            noPrimeNumber = true;
        }
    }
    document.getElementById("resultSecond").textContent = hasPrimeNumber && !noPrimeNumber ? "TRUE" : "FALSE";
}
