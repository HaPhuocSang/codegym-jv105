function calculateBankInterest() {
    let principal = parseFloat(document.getElementById("initialAmount").value);
    let months = parseFloat(document.getElementById("numberMonths").value);
    let monthlyRate = parseFloat(document.getElementById("monthlyInterest").value) / 100;
    if (isNaN(principal) || isNaN(months) || isNaN(monthlyRate)) {
        alert("Nhập giá trị!");
        return;
    }
    if (principal < 0 || monthlyRate < 0 || months < 0) {
        alert("Giá trị nhập vào không hợp lệ");
        return;
    }
    let totalAmount = principal;
    for (let i = 1; i <= months; i++) {
        totalAmount += totalAmount * monthlyRate;
    }
    document.getElementById("result").textContent = `Tổng số tiền phải trả là ${totalAmount}.`;
}
