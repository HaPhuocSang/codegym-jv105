let selectedFibonacci = document.getElementById("btnFibonacci");
selectedFibonacci.addEventListener("click", displayFibonacci);
const LAST_NUMBER = 20;
function displayFibonacci(){
    let disFibonacci = "";
    let currentFibonacci = 0;
    let nextFibonacci = 1;
    let sum;
    for (let i = 1; i <= LAST_NUMBER; i++) {
        disFibonacci += currentFibonacci + " ";
        sum = currentFibonacci + nextFibonacci;
        currentFibonacci =nextFibonacci;
        nextFibonacci = sum;
    }
    document.getElementById("result").textContent = disFibonacci;
}
