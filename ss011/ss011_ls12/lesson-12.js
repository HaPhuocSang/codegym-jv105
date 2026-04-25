function calculateBankInterest() {
    let P = parseFloat(document.getElementById("initialAmount").value);
    let n = parseFloat(document.getElementById("numberMonths").value);
    let r = parseFloat(document.getElementById("monthlyInterest").value) / 100;
    if (isNaN(P) || isNaN(n) || isNaN(r)) {
        document.getElementById("result").innerHTML = "Please enter a number";
        return;
    }
    if (P < 0 || r < 0 || n < 0) {
        document.getElementById("result").innerHTML = "That number must not be less than zero.";
        return;
    }
    let A = P * Math.pow(1 + r, n);
    document.getElementById("result").innerHTML = `The total amount to be paid is ${A}.`;
}
