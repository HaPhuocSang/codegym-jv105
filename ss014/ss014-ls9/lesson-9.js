const A = [];
const B = [];
const C = [];
const MAX_ELEMENTS = 10;
const MAX_RANDOM = 100;
const MIN_RANDOM = -100;
const INCLUSIVE_RANGE = 1;

function pushInitializeAnArray() {
    A.length = 0;
    B.length = 0;
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        A.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + INCLUSIVE_RANGE)) + MIN_RANDOM);
    }
    let resultArrayA = A.join(", ");
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        B.push(Math.floor(Math.random() * (MAX_RANDOM - MIN_RANDOM + INCLUSIVE_RANGE)) + MIN_RANDOM);
    }
    let resultArrayB = B.join(", ");
    document.getElementById("resultFirst").textContent = `Các giá trị mảng A mà bạn vừa khởi tạo là: ${resultArrayA}`;
    document.getElementById("resultSecond").textContent = `Các giá trị mảng B mà bạn vừa khởi tạo là: ${resultArrayB}`;
}

function joinArraysAAndB() {
    C.length = 0;
    if (!A.length || !B.length) {
        alert("Bạn Chưa khởi tạo mảng!");
        return;
    }
    for (let i = 0; i < A.length; i++) {
        C.push(A[i]);
    }
    for (let i = 0; i < B.length; i++) {
        C.push(B[i]);
    }
    let resultArrayC = C.join(", ");
    document.getElementById("resultThird").textContent = `Các giá trị mảng C sau khi nối mảng A và B là: ${resultArrayC}`;
}
