const listNumber = [];
const MAX_RANDOM = 100;
const MIN_RANDOM = -100;
const INCLUSIVE_RANGE = 1;

function checkInteger(number) {
    return number.trim() && Number.isInteger(Number(number));
}

function addRandomlyToTheArray(array, maxElement) {
    array.length = 0;
    for (let i = 0; i < Number(maxElement); i++) {
        array.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + INCLUSIVE_RANGE)) + MIN_RANDOM);
    }
    return array;
}

function invertArray(array) {
    let firstElement = 0;
    let lastElement = array.length - 1;
    while (firstElement < lastElement) {
        let temp = array[firstElement];
        array[firstElement] = array[lastElement];
        array[lastElement] = temp;
        firstElement++;
        lastElement--;
    }
    return array;
}

function showResult() {
    let maxElement;
    do {
        maxElement = prompt("Nhập số lượng phần tử muốn khởi tạo:");
        if (Number(maxElement) < 1 || !checkInteger(maxElement)) {
            alert("Giá trị nhập vào không hợp lệ!");
        }
    } while (Number(maxElement) < 1 || !checkInteger(maxElement));
    document.getElementById("resultFirst").textContent = `Mảng số nguyên vừa khởi tạo là ${addRandomlyToTheArray(listNumber, maxElement).join(", ")}`;
    document.getElementById("resultSecond").textContent = `Mảng sau khi đảo là ${invertArray(listNumber).join(", ")}`;
}
