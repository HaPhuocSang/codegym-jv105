const NUMBER_INTEGER = [];
const MAX_RANDOM = 100;
const MIN_RANDOM = -100;
const INCLUSIVE_RANGE = 1;

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
        NUMBER_INTEGER.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + INCLUSIVE_RANGE)) + MIN_RANDOM);
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa khởi tạo là: ${result}`;
}

function showNegativeElement() {
    if (!NUMBER_INTEGER.length) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let result = [];
    for (let i = 0; i < NUMBER_INTEGER.length; i++) {
        if (NUMBER_INTEGER[i] < 0) {
            result.push(NUMBER_INTEGER[i]);
        }
    }
    let txt = `Có ${result.length} số nguyên âm trong mảng đó là: ${result.join(", ")}`;
    if (!result.length) {
        txt = "Không có số nguyên âm nào trong mảng!";
    }
    document.getElementById("resultLast").textContent = txt;
}
