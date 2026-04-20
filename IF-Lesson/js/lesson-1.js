let selectedDivisible = document.getElementById("btnDivisible");
selectedDivisible.addEventListener("click", showDivisible);

function showDivisible() {
    let result;
    let a = parseFloat(document.getElementById("numberA").value);
    let b = parseFloat(document.getElementById("numberB").value);
    if (!isNaN(a) && !isNaN(b)) {
        if (a % b === 0) {
            result = a + " is divisible by " + b;
        } else {
            result = a + " is not divisible by " + b;
        }
    } else {
        result = "Input a, b";
    }
    document.getElementById("result").innerHTML = result;
}
