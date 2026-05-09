const LIST = [];
const MAX_ELEMENTS = 10;

function arrayInitialization() {
    LIST.length = 0;
    for (let i = 0; i < MAX_ELEMENTS; i++) {
        LIST.push(Math.floor(Math.random()*201));
    }
    document.getElementById("resultFirst").textContent = LIST.join(", ");
}

function invertArray() {
    if (!LIST.length) {
        alert("Chưa khởi tạo mảng!");
        return;
    }
    LIST.reverse();
    document.getElementById("resultLast").textContent = LIST.join(", ");
}
