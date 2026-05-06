let selectedBtnSumFibonacci = document.getElementById("btnSumFibonacci");
selectedBtnSumFibonacci.addEventListener("click", displaySumFibonacci)
const LAST_NUMBER = 20;

function displaySumFibonacci() {
    let currentFibonacci = 0;
    let nextFibonacci = 1;
    let displaySum = 0;
    for (let i = 0; i < LAST_NUMBER; i++) {
        displaySum += currentFibonacci;
        let sumFibonacci = currentFibonacci + nextFibonacci;
        currentFibonacci = nextFibonacci;
        nextFibonacci = sumFibonacci;
    }
    document.getElementById("result").textContent = displaySum.toString();
}
