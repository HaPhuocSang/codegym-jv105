let selectedFibonacci = document.getElementById("btnFibonacci");
selectedFibonacci.addEventListener("click", displayFibonacci);
function displayFibonacci(){
    let disFibonacci = "";
    let currentFibonacci = 0;
    let nextFibonacci = 1;
    let sum;
    for (let i = 1; i <= 20; i++) {
        disFibonacci += currentFibonacci + " ";
        sum = currentFibonacci + nextFibonacci;
        currentFibonacci =nextFibonacci;
        nextFibonacci = sum;
    }
    document.getElementById("result").innerHTML = disFibonacci;
}
