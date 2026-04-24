function quadraticEquation() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let thirdNumber = parseFloat(document.getElementById("thirdNumber").value);
    if (isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)) {
        document.getElementById("result").innerHTML = "Please enter a number.";
        return;
    }
    if (firstNumber === 0) {
        document.getElementById("result").innerHTML = "This is not a quadratic equation.";
        return;
    }
    let delta = secondNumber * secondNumber - 4 * firstNumber * thirdNumber;
    let result;
    if (delta < 0) {
        result = "The equation has no solution.";
    } else if (delta === 0) {
        let x = -secondNumber / (2 * firstNumber);
        result = `The solution of the equation is ${x}.`;
    } else {
        let x1 = (-secondNumber + Math.sqrt(delta)) / (2 * firstNumber);
        let x2 = (-secondNumber - Math.sqrt(delta)) / (2 * firstNumber);
        result = `The first and second solutions to the equation are ${x1} and ${x2}.`;
    }
    document.getElementById("result").innerHTML = result;
}
