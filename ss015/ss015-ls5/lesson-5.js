function checkTwoStrings() {
    let textFirstValue = document.getElementById("textFirst").value;
    let textSecondValue = document.getElementById("textSecond").value;
    textFirstValue = textFirstValue.trim().toLowerCase().replace(/\s/g, "");
    textSecondValue = textSecondValue.trim().toLowerCase().replace(/\s/g, "");
    if (!textFirstValue || !textSecondValue) {
        alert("Bạn chưa nhập 2 chuỗi!")
        return;
    }
    document.getElementById("result").textContent = textFirstValue === textSecondValue ? "Hai chuỗi có thông tin giống nhau!" : "Hai chuỗi có thông tin khác nhau!";
}
