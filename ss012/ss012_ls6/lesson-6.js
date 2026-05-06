let selectedSumNaturalNumber = document.getElementById("btnSumNaturalNumbers");
selectedSumNaturalNumber.addEventListener("click", displaySumNaturalNumbers);
const LAST_NUMBER = 30;

function displaySumNaturalNumbers() {
    let sumDivisibleBySeven = 0;
    let count = 0;
    let i = 0;
    while (count < LAST_NUMBER) {
        if (i % 7 === 0 && i !== 0) {
            sumDivisibleBySeven += i;
            count++;
        }
        i++;
    }
    document.getElementById("result").textContent = sumDivisibleBySeven.toString();
}
