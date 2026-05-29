function checkArray(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

function showResult() {
    let lengthArray = Number((document.getElementById("lengthArray").value).trim());
    if (lengthArray <= 0 || lengthArray % 2 !== 0 || !Number.isInteger(lengthArray)) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    let numberArray = [];
    for (let i = 1; i <= Number(lengthArray); i++) {
        let num;
        do {
            num = prompt(`Nhập số thứ ${i}: `);
            if (num === null || !num.trim()) {
                alert("Phần tử không được để rỗng!");
            }
            if (!Number.isInteger(Number(num))) {
                alert("Phần tử phải là số nguyên!");
            }
        } while (num === null || !num.trim() || !Number.isInteger(Number(num)));
        numberArray.push(Number(num));
    }
    document.getElementById("resultFirst").textContent = `[${numberArray.join(", ")}]`;
    document.getElementById("resultSecond").textContent = checkArray(numberArray) ? "OK" : "NO";
}
