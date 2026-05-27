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
}

function checkArray() {
    if (!integerArray.length) {
        alert("Mảng hiện tại chưa có phần tử nào!");
        return;
    }
    let hasEven = false;
    let hasOdd = false;
    for (let i = 0; i < integerArray.length; i++) {
        if (!(integerArray[i] % 2)) {
            hasEven = true;
        } else {
            hasOdd = true;
        }
    }
    let result;
    if (hasEven && hasOdd) {
        result = -1;
    } else if (hasEven) {
        result = 1;
    } else {
        result = 0;
    }
    document.getElementById("resultSecond").textContent = `${result}`;
}
