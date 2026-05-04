let selectedFibonacci = document.getElementById("btnFibonacci");
selectedFibonacci.addEventListener("click", displayFibonacci);

function displayFibonacci() {
    let numberFibonacciDisplay = parseFloat(document.getElementById("numberFibonacci").value);
    if (numberFibonacciDisplay < 1) {
        alert("Không thể nhỏ hơn 1!")
        return;
    }
    let fibonacciDisplay = "";
    let currentFibonacci = 0;
    let nextFibonacci = 1;
    for (let i = 0; i < numberFibonacciDisplay; i++) {
        fibonacciDisplay += currentFibonacci + " ";
        let sum = currentFibonacci + nextFibonacci;
        currentFibonacci = nextFibonacci;
        nextFibonacci = sum;
    }
    document.getElementById("result").innerHTML = fibonacciDisplay;
}
