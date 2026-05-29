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
    const hasEven = integerArray.some(n => n % 2 === 0);
    const hasOdd = integerArray.some(n => n % 2 !== 0);
    let result; 
    if (hasEven && !hasOdd) {
        result = 1;
    } else if (!hasEven && hasOdd) {
        result = 0;
    } else {
        result = -1;
    }
    document.getElementById("resultSecond").textContent = `${result}`;
}
