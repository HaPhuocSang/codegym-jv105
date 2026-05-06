let selectedFactorial = document.getElementById("btnFactorial");
selectedFactorial.addEventListener("click", displayFactorial);

function displayFactorial() {
    let numFactorial = parseFloat(document.getElementById("positiveInteger").value);
    if (numFactorial < 0 || isNaN(numFactorial) || !Number.isInteger(numFactorial)) {
        alert("Giá trị nhập vào không phù hợp!");
        return;
    }
    let result = 1;
    if (numFactorial > 1) {
        for (let i = 2; i <= numFactorial; i++) {
            result *= i;
        }
    }
    document.getElementById("result").textContent = `${numFactorial}! = ${result}`;
}

