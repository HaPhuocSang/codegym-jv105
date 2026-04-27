let selectedSumNaturalNumber = document.getElementById("btnSumNaturalNumbers");
selectedSumNaturalNumber.addEventListener("click", displaySumNaturalNumbers);

function displaySumNaturalNumbers() {
    let sumDivisibleBySeven = 0;
    let count = 0;
    let i = 0;
    while (count < 30) {
        if (i % 7 === 0 && i !== 0) {
            sumDivisibleBySeven += i;
            count++;
        }
        i++;
    }
    document.getElementById("result").innerHTML = sumDivisibleBySeven.toString();
}
