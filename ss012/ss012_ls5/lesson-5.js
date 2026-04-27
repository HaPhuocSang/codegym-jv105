let selectedBtnSumFibonacci = document.getElementById("btnSumFibonacci");
selectedBtnSumFibonacci.addEventListener("click", displaySumFibonacci);

function displaySumFibonacci() {
    let currentFibonacci = 0;
    let nextFibonacci = 1;
    let displaySum = 0;
    for (let i = 0; i < 20; i++) {
        displaySum += currentFibonacci;
        let sumFibonacci = currentFibonacci + nextFibonacci;
        currentFibonacci = nextFibonacci;
        nextFibonacci = sumFibonacci;
    }
    document.getElementById("result").innerHTML = displaySum.toString();
}
