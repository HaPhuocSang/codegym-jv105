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
function deleteValue() {
    if (NUMBER_INTEGER.length < MIN_ELEMENTS) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let elementDelete = parseFloat(document.getElementById("elementValue").value);
    if (isNaN(elementDelete)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    let checkDelete = false;
    for (let i = 0; i < NUMBER_INTEGER.length; i++) {
        if (NUMBER_INTEGER[i] === elementDelete) {
            checkDelete = true;
            for (let j = i; j < NUMBER_INTEGER.length - 1; j++) {
                NUMBER_INTEGER[j] = NUMBER_INTEGER[j + 1];
            }
            NUMBER_INTEGER[NUMBER_INTEGER.length - 1] = 0;
            i--;
        }
    }
    if (!checkDelete) {
        alert("Không tìm thấy giá trị cần xóa!");
        return;
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultLast").textContent = `Mảng sau khi xóa ${elementDelete} là: ${result}`;
}
