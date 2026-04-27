let selectedBtnPlay = document.getElementById("btnPLay");
selectedBtnPlay.addEventListener("click", numberGuessingGame);

function numberGuessingGame() {
    let max;
    do {
        max = parseFloat(prompt("Bạn muốn đoán số từ không đến bao nhiêu?"));
        if (isNaN(max) || max <= 0) {
            alert("Nhập số không hợp lệ!");
        }
    } while (isNaN(max) || max <= 0);
    let numberRandom = Math.floor(Math.random() * (max + 1));
    let count = 0;
    let guessingNumber
    do {
        guessingNumber = parseFloat(prompt("Nhập số bạn muốn đoán: "));
        if (isNaN(guessingNumber)) {
            alert("Vui lòng nhập số!");
            continue;
        }
        if (guessingNumber === numberRandom) {
            alert("Bạn đã đoán đúng!");
            break;
        } else if (guessingNumber > numberRandom) {
            alert("Số bạn đoán lớn hơn!");
        } else {
            alert("Số bạn đoán nhỏ hơn!");
        }
        count++;
    } while (count < 3);
    if (guessingNumber !== numberRandom) {
        alert(`Bạn đã sử dung hết số lần đoán. Bạn thua cuộc. Số đúng là ${numberRandom}!`);
    }
}
