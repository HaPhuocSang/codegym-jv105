const CALMEL_CASE = [];
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
            if (CALMEL_CASE.includes(numberInt)) {
                alert("Giá trị bạn nhập đã tồn tại!");
            }
        } while (!Number.isInteger(numberInt) || CALMEL_CASE.includes(numberInt));
        CALMEL_CASE[i] = numberInt;
    }
    let result = CALMEL_CASE.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa nhập vào là: ${result}`;
}

function showLargestElementAndPosition() {
    if (!CALMEL_CASE.length) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let max = CALMEL_CASE[FIRST_POSITION];
    let position = FIRST_POSITION;
    for (let i = 0; i < CALMEL_CASE.length; i++) {
        if (max <= CALMEL_CASE[i]) {
            max = CALMEL_CASE[i];
            position = i;
        }
    }
    document.getElementById("resultLast").textContent = `Phần tử lớn nhất có giá trị là ${max} và nằm ở vị trí số ${position} trong mảng!`;
}
