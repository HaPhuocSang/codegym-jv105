function insertAStamp() {
    let element = document.getElementById("elements").value;
    if (!element.length) {
        alert("Nhập chuỗi!");
        return;
    }
    let result = element[0];
    for (let i = 1; i < element.length; i++) {
        if (!(element[i-1] % 2) && !(element[i] % 2)) {
            result += "-";
        }
        result += element[i];
    }
    document.getElementById("result").textContent = result;
}
