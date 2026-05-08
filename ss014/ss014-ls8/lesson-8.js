const NUMBER_INTEGER = [];
const MIN_ELEMENTS = 1;
const MAX_ELEMENTS = 10;
const MAX_RANDOM = 100;
const MIN_RANDOM = -100;
const INCLUSIVE_RANGE = 1;

function pushInitializeAnArray() {
    NUMBER_INTEGER.length = 0;
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        NUMBER_INTEGER.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + INCLUSIVE_RANGE)) + MIN_RANDOM);
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa khởi tạo là: ${result}`;
}

function sortTheArrayDescendingOrder() {
    if (NUMBER_INTEGER.length < MIN_ELEMENTS) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    NUMBER_INTEGER.sort((a, b) => b - a);
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultLast").textContent = `Mảng sau khi được sắp xếp là: ${result}`;
}
