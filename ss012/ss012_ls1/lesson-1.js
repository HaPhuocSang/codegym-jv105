let selectedLoop = document.getElementById('btnLoop');
selectedLoop.addEventListener('click', showListNumber);
const LAST_NUMBER = 100;
function showListNumber() {
    let listNumber = "";
    for (let i = 1; i < LAST_NUMBER; i++) {
        listNumber += i + " ";
    }
    alert("Đã hoàn thành!");
    document.getElementById("result").textContent = listNumber;
}

