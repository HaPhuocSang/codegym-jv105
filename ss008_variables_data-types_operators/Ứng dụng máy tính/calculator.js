let result;
let name = {
    Addition: showAdditionResults,
    Subtraction: showSubtractionResults,
    Multiplication: showMultiplicationResults,
    Division: showDivisionResults
};
for (let key in name) {
    document.getElementById("btn" + key).addEventListener("click", name[key]);
}

function getInput() {
    let first_number = parseFloat(document.getElementById("first_number").value);
    let second_number = parseFloat(document.getElementById("second_number").value)
    return {first_number, second_number}
}

function showAdditionResults() {
    result = getInput().first_number + getInput().second_number;
    document.getElementById("result").innerHTML = result;
}

function showSubtractionResults() {
    result = getInput().first_number - getInput().second_number;
    document.getElementById("result").innerHTML = result;
}

function showMultiplicationResults() {
    result = getInput().first_number * getInput().second_number;
    document.getElementById("result").innerHTML = result;
}

function showDivisionResults() {
    result = getInput().first_number / getInput().second_number;
    document.getElementById("result").innerHTML = result;
}
