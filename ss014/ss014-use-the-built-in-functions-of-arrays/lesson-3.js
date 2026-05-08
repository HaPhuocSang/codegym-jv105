function isUpperCase(str) {
    return str === str.toUpperCase() && str !== str.toLowerCase();
}

function formatConversion() {
    let valueString = document.getElementById('valueString').value;
    if(valueString.length === 0) {
        alert("Giá trị nhập vào không hợp lệ!")
        return;
    }
    let result = "";
    for (let i = 0; i < valueString.length; i++) {
        if (isUpperCase(valueString[i])) {
            result += valueString[i].toLowerCase();
        } else {
            result += valueString[i].toUpperCase();
        }
    }
    document.getElementById("resultFirst").textContent = `Chuỗi trước khi chuyển đổi: ${valueString}`;
    document.getElementById("resultLast").textContent = `Chuỗi sau khi chuyển đổi: ${result}`;
}
