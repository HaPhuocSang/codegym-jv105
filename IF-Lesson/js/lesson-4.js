let selectedMaxNumber = document.getElementById("maxNumber");
selectedMaxNumber.addEventListener("click", showMaxNumber);

function showMaxNumber() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let thirdNumber = parseFloat(document.getElementById("thirdNumber").value);
    let result;
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        result = "Input first number,second number and third number.";
        document.getElementById("result").innerHTML = result;
        return;
    }
    let maxNumber = firstNumber;
    if (secondNumber > maxNumber){
        maxNumber = secondNumber;
    }
    if (thirdNumber > maxNumber){
        maxNumber = thirdNumber;
    }
    result = "Largest number is " + maxNumber;
    document.getElementById("result").innerHTML = result;
}
