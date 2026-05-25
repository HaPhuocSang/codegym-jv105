function checkArray(arr) {
    if (arr.length < 2) {
        return false;
    }
    let step = arr[1] - arr[0];
    if (step <= 0) {
        return false;
    }
    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i + 1] - arr[i]) !== step) {
            return false;
        }
    }
    return true;
}

function showResult() {
    let lengthArray = Number(document.getElementById("lengthArray").value);
    do {
        if (isNaN(lengthArray) || lengthArray <= 0 || lengthArray > 20) {
            alert("Mảng có độ dài từ 1 đến 20!");
        }
        if (!Number.isInteger(lengthArray)) {
            alert("Độ dài là số nguyên dương!");
        }
    } while (isNaN(lengthArray) || lengthArray <= 0 || lengthArray > 20 || !Number.isInteger(lengthArray));
    let numberArray = [];
    for (let i = 1; i <= lengthArray; i++) {
        let num;
        do {
            num = prompt(`Nhập số thứ ${i}: `);
            if (num === null || !num.trim()) {
                alert("Phần tử không được để rỗng!");
            }
            if (!Number.isInteger(Number(num))) {
                alert("Phần tử là số nguyên!");
            }
            if (numberArray.includes(Number(num))) {
                alert("Phần tử là này đã tồn tại!");
            }
        } while (num === null || !num.trim() || !Number.isInteger(Number(num)) || numberArray.includes(Number(num)));
        numberArray.push(Number(num));
    }
    alert(checkArray(numberArray) ? "Mảng tăng dần đều!" : "Không phải mảng tăng dần đều!");
}
