let selectedMaxNumber = document.getElementById("maxNumber");
selectedMaxNumber.addEventListener("click", showMaxNumber);

function showMaxNumber() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let thirdNumber = parseFloat(document.getElementById("thirdNumber").value);
    let result;
    if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
        if (firstNumber > secondNumber) {
            if (firstNumber > thirdNumber) {
                result = "Largest number is " + firstNumber;
            }
            else {
                result = "Largest number is " + thirdNumber;
            }
        }
        else {
            if (secondNumber > thirdNumber) {
                result = "Largest number is " + secondNumber;
            }
            else {
                result = "Largest number is " + thirdNumber;
            }
        }
    } else {
        result = "Input first number,second number and third number.";
    }
    document.getElementById("result").innerHTML = result;
}
