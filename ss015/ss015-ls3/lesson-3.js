const LIST = [];

function pushInitializeAnArray() {
    LIST.length = 0;
    let maxElements;
    do {
        maxElements = parseFloat(prompt("Nhập số lượng muốn nhập"));
        if (isNaN(maxElements)) {
            alert("Ký tự nhập vào không hợp lệ");
        }
        if (maxElements <= 0) {
            alert("Số lượng ký tự không được bé hơn hoặc bằng 0!")
        }
        if (!Number.isInteger(maxElements)) {
            alert("Số lượng ký tự là số nguyên!")
        }
    } while (maxElements <= 0 || isNaN(maxElements) || !Number.isInteger(maxElements));
    for (let i = 0; i < maxElements; i++) {
        let txt;
        do {
            txt = prompt(`Nhập ký tự thứ ${i + 1}:`);
            if (!txt || !txt.trim()) {
                alert("Bạn chưa nhập ký tự!");
            }
            if (LIST.includes(txt)) {
                alert("Giá trị bạn nhập đã tồn tại!");
            }
        } while (!txt || !txt.trim() || LIST.includes(txt));
        LIST[i] = txt;
    }
    let result = LIST.join(", ");
    document.getElementById("resultFirst").textContent = `Các ký tự mà bạn vừa nhập vào là: ${result}`;
}

function countTheNumberOfCharacters() {
    if (!LIST.length) {
        alert("Chưa khởi tạo mảng!");
        return;
    }
    let result = [];
    for (let i = 0; i < LIST.length; i++) {
        if (LIST[i] >= '0' && LIST[i] <= '9' && LIST[i].length === 1) {
            result.push(LIST[i]);
        }
    }
    let txt = `Có ${result.length} ký tự số từ 0-9 trong mảng đó là: ${result.join(", ")} `
    if (!result.length) {
        txt = "Không có ký tự số từ 0-9 trong mảng!";
    }
    document.getElementById("resultLast").textContent = txt;
}
