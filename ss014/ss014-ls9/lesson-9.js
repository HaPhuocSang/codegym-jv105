const A = [];
const B = [];
let C = [];
const MAX_ELEMENTS = 10;
const MAX_RANDOM = 100;
const MIN_RANDOM = -100;
const INCLUSIVE_RANGE = 1;

function addRandomlyToTheArray(array) {
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        array.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + INCLUSIVE_RANGE)) + MIN_RANDOM);
    }
    return array;
}

function pushInitializeAnArray() {
    A.length = 0;
    B.length = 0;
    addRandomlyToTheArray(A);
    let resultArrayA = A.join(", ");
    addRandomlyToTheArray(B)
    let resultArrayB = B.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mảng A mà bạn vừa khởi tạo là: ${resultArrayA}`;
    document.getElementById("resultSecond").textContent = `Các giá trị mảng B mà bạn vừa khởi tạo là: ${resultArrayB}`;
}

function joinArraysAAndB() {
    C.length = 0;
    C = A.concat(B);
    let resultArrayC = C.join(", ");
    document.getElementById("resultThird").textContent = `Các giá trị mảng C sau khi nối mảng A và B là: ${resultArrayC}`;
}
