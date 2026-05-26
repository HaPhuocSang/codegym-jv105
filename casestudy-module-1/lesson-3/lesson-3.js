function checkForArraySymmetry(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        if (arr[first] !== arr[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
}

function showResult() {
    let lengthArray = Number(document.getElementById("lengthArray").value);
    if (isNaN(lengthArray) || lengthArray < 2 || !Number.isInteger(lengthArray)) {
        alert("Độ dài của mảng tối thiểu là 2 và là số nguyên!");
        return;
    }
    let numberArray = [];
    for (let i = 1; i <= lengthArray; i++) {
        let num;
        do {
            num = prompt(`Nhập số thứ ${i}: `);
            if (num === null || !num.trim()) {
                alert("Phần tử không được để rỗng!");
            }
            if (isNaN(Number(num))) {
                alert("Phần tử phải là số!");
            }
        } while (num === null || !num.trim() || isNaN(Number(num)));
        numberArray.push(Number(num));
    }
    document.getElementById("result").textContent = checkForArraySymmetry(numberArray) ? `[${numberArray.join(", ")}] là mảng đối xứng!` : `[${numberArray.join(", ")}] không phải là mảng đối xứng!`;
}
