const NUMBER_INTEGER = [];
const MAX_ELEMENTS = 10;
const MIN_ELEMENTS = 1;
const LIMIT_NUMBER = 10;
let selectedBtnInitializeAnArray = document.getElementById("btnInitializeAnArray");
let selectedBtnDisplayIntegers = document.getElementById("btnDisplayIntegers");
selectedBtnInitializeAnArray.addEventListener("click", pushInitializeAnArray);
selectedBtnDisplayIntegers.addEventListener("click", showArrayInteger);

function pushInitializeAnArray() {
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        do {
            NUMBER_INTEGER[i] = parseFloat(prompt(`Nhập số nguyên thứ ${i + 1}:`));
            if (!Number.isInteger(NUMBER_INTEGER[i])) {
                alert("Số bạn nhập vào không phải số nguyên!")
            }
        } while (!Number.isInteger(NUMBER_INTEGER[i]));
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mà bạn vừa nhập vào là: ${result}`;
}

function showArrayInteger() {
    if (NUMBER_INTEGER.length < MIN_ELEMENTS) {
        alert("Bạn chưa khởi tạo mảng!");
        return;
    }
    let countNumber = 0;
    let result = [];
    for (let i = 0; i < NUMBER_INTEGER.length; i++) {
        if (NUMBER_INTEGER[i] >= LIMIT_NUMBER) {
            result.push(NUMBER_INTEGER[i]);
            countNumber++;
        }
    }
    let txt = `Có ${countNumber} giá trị lớn hơn hoặc bằng ${LIMIT_NUMBER} đó là ${result.join(", ")}`;
    if (countNumber === 0) {
        txt = `Không có số nào lớn hơn hoặc bằng ${LIMIT_NUMBER}`;
    }
    document.getElementById("resultLast").textContent = txt;
}
