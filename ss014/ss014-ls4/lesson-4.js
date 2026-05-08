const NUMBER_INTEGER = [];
const MIN_ELEMENTS = 1;

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
        let numberInt;
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

function showReverseTheElements() {
    if (NUMBER_INTEGER.length < MIN_ELEMENTS) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    let firstElements = 0;
    let lastElements = NUMBER_INTEGER.length - 1;
    while (firstElements < lastElements) {
        let temp = NUMBER_INTEGER[firstElements];
        NUMBER_INTEGER[firstElements] = NUMBER_INTEGER[lastElements];
        NUMBER_INTEGER[lastElements] = temp;
        firstElements++;
        lastElements--;
    }
    let result = NUMBER_INTEGER.join(", ");
    document.getElementById("resultLast").textContent = `Mảng sau khi đảo ngược là: ${result}`;
}
