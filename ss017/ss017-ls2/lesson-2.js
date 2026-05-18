function calculateTheAreaOfACircle(radius) {
    return radius * radius * Math.PI;
}

function calculateTheCircumferenceOfACircle(radius) {
    return 2 * radius * Math.PI;
}

function showResults() {
    let numberRadius = parseFloat(document.getElementById("numberRadius").value);
    if (isNaN(numberRadius) || numberRadius <= 0) {
        alert("Giá trị nhập vào không hợp lệ!");
        return;
    }
    document.getElementById("resultFirst").textContent = `Diện tích hình tròn là: ${calculateTheAreaOfACircle(numberRadius).toFixed(2)}`;
    document.getElementById("resultSecond").textContent = `Chu vi hình tròn là: ${calculateTheCircumferenceOfACircle(numberRadius).toFixed(2)}`;
}
