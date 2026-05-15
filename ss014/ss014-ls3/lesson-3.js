const NUMBER_INTEGER = [];

function pushInitializeAnArray() {
    NUMBER_INTEGER.length = 0;
    let maxElements;
    do {
        maxElements = parseFloat(prompt("Nhập số lượng phần tử muốn khởi tạo:"));
        if (!Number.isInteger(maxElements) || maxElements <= 0) {
            alert("Giá trị nhập vào không hợp lệ!");
        }
    } while (!Number.isInteger(maxElements) || maxElements <= 0);
    for (let i = 0; i < maxElements; i++) {
        NUMBER_INTEGER.push(Math.floor(Math.random() * 1000));
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa khởi tạo là: ${result}`;
}

function showLargestElement() {
    if (!NUMBER_INTEGER.length) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let max = NUMBER_INTEGER[0];
    for (let i = 0; i < NUMBER_INTEGER.length; i++) {
        if (max <= NUMBER_INTEGER[i]) {
            max = NUMBER_INTEGER[i];
        }
    }
    document.getElementById("resultSecond").textContent = `Phần tử lớn nhất có giá trị là ${max}!`;
}

function showAverageElement() {
    if (!NUMBER_INTEGER.length) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let sum = 0;
    for (let i = 0; i < NUMBER_INTEGER.length; i++) {
        sum += NUMBER_INTEGER[i];
    }
    let aver = sum / NUMBER_INTEGER.length;
    document.getElementById("resultThird").textContent = `Giá trị trung bình của các phần tử trong mảng là ${aver}!`;
}
