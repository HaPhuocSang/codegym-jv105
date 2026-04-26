let selectedDivisibleByFive = document.getElementById("btnDivisibleByFive");
selectedDivisibleByFive.addEventListener("click", displayDivisibleByFive);

function displayDivisibleByFive() {
    let count = 0;
    let currentFibonacci = 0;
    let nextFibonacci = 1;
    let sum;
    while (count < 1) {
        if (currentFibonacci % 5 === 0 && currentFibonacci !== 0) {
            count++;
            break;
        }
        sum = currentFibonacci + nextFibonacci;
        currentFibonacci = nextFibonacci;
        nextFibonacci = sum;
    }
    document.getElementById("result").innerHTML = currentFibonacci.toString();
}
