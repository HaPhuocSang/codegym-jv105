function getSquare(x) {
    return Math.pow(x, 2);
}
function showResult() {
    let numberToSquare = parseFloat(document.getElementById('numberToSquare').value);
    if (isNaN(numberToSquare)) {
        alert("Nhập giá trị!");
        return;
    }
    document.getElementById("result").textContent = getSquare(numberToSquare).toString();
}