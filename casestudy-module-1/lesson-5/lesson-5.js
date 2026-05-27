const lengthLimit = 4;
function findMaxNumber(n) {
    if (n.length !== lengthLimit) {
        return -1;
    }
    let max = -Infinity;
    for (let i = 0; i < n.length; i++) {
        let temp = n.slice(0, i) + n.slice(i + 1);
        if (Number(temp) > max) {
            max = Number(temp);
        }
    }
    return max;
}

function showResult() {
    let numberInteger = (document.getElementById("numberInteger").value).trim();
    if (!numberInteger.length) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    if (!Number.isInteger(Number(numberInteger))) {
        alert("Giá trị nhập vào phải là số nguyên!");
        return;
    }
    document.getElementById("result").textContent = findMaxNumber(numberInteger).toString();
}
