const listNumber = [];
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
            if (listNumber.includes(numberInt)) {
                alert("Giá trị bạn nhập đã tồn tại!");
            }
        } while (!Number.isInteger(numberInt) || listNumber.includes(numberInt));
        listNumber[i] = numberInt;
    }
    let result = listNumber.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa nhập vào là: ${result}`;
}

function showLargestElementAndPosition() {
    if (!listNumber.length) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let max = listNumber[FIRST_POSITION];
    let position = FIRST_POSITION;
    for (let i = 0; i < listNumber.length; i++) {
        if (max <= listNumber[i]) {
            max = listNumber[i];
            position = i;
        }
    }
    document.getElementById("resultLast").textContent = `Phần tử lớn nhất có giá trị là ${max} và nằm ở vị trí số ${position} trong mảng!`;
}
