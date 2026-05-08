const NUMBER_INTEGER = [];
const MIN_ELEMENTS = 1;
const MAX_ELEMENTS = 10;
const FIRST_POSITION = 0;
let selectedBtnInitializeAnArray = document.getElementById("btnInitializeAnArray");
let selectedBtnLargestElementAndPosition = document.getElementById("btnLargestElementAndPosition");
selectedBtnInitializeAnArray.addEventListener("click", pushInitializeAnArray);
selectedBtnLargestElementAndPosition.addEventListener("click", showLargestElementAndPosition);

function pushInitializeAnArray() {
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        let numberInt
        do {
            numberInt = parseFloat(prompt(`Nhập số nguyên thứ ${i + 1}:`));
            if (!Number.isInteger(numberInt)) {
                alert("Số bạn nhập vào không phải số nguyên!")
            }
            if (NUMBER_INTEGER.includes(numberInt)) {
                alert("Giá trị bạn nhập đã tồn tại!");
            }
        } while (!Number.isInteger(numberInt) || NUMBER_INTEGER.includes(numberInt));
        NUMBER_INTEGER[i] = numberInt;
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa nhập vào là: ${result}`;
}

function showLargestElementAndPosition() {
    if (NUMBER_INTEGER.length < MIN_ELEMENTS) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let max = NUMBER_INTEGER[FIRST_POSITION];
    let position = FIRST_POSITION;
    for (let i = 0; i < NUMBER_INTEGER.length; i++) {
        if (max <= NUMBER_INTEGER[i]) {
            max = NUMBER_INTEGER[i];
            position = i;
        }
    }
    document.getElementById("resultLast").textContent = `Phần tử lớn nhất có giá trị là ${max} và nằm ở vị trí số ${position} trong mảng!`;
}
