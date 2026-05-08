function insertAStamp() {
    let element = document.getElementById("elements").value;
    if (isNaN(element)) {
        alert("Nhập chuỗi!");
        return;
    }
    let result = element[0];
    for (let i = 1; i < element.length; i++) {
        if (element[i-1] % 2 === 0 && element[i] % 2 === 0) {
            result += "-";
        }
        result += element[i];
    }
    document.getElementById("result").textContent = result;
}