function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkInteger(number) {
    return number.trim() && Number.isInteger(Number(number));
}

function showResult() {
    let minNumber = document.getElementById("minValue").value;
    let maxNumber = document.getElementById("maxValue").value;
    if (!checkInteger(minNumber) || !checkInteger(maxNumber)) {
        alert("Giá trị nhập vào phải là số nguyên!");
        return;
    }
    if (Number(minNumber) > Number(maxNumber)) {
        alert("Giá trị của min không được lớn hơn max!");
        return;
    }
    document.getElementById("result").textContent = random(Number(minNumber), Number(maxNumber)).toString();
}
