let selected = document.getElementById("btnPrimeNumber");
selected.addEventListener("click", displayPrimeNumber);

function displayPrimeNumber() {
    let count = 0;
    let i = 2;
    let primeNumbers = "";
    let numbers = parseFloat(document.getElementById("primeNumber").value);
    while (count < numbers) {
         let isPrimeNumber = true;
         for (let j = 2; j < i; j++) {
             if (i % j === 0) {
                 isPrimeNumber = false;
                 break;
             }
         }
         if (isPrimeNumber) {
             primeNumbers += i + " ";
             count++;
         }
         i++;
    }
    document.getElementById("result").innerHTML = primeNumbers;
}
