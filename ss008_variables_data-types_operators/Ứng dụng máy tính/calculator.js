let result;
let selectedAddition = document.getElementById("btnAddition");
let selectedSubtraction = document.getElementById("btnSubtraction");
let selectedMultiplication = document.getElementById("btnMultiplication");
let selectedDivision = document.getElementById("btnDivision");
selectedAddition.addEventListener("click", showAdditionResults);
selectedSubtraction.addEventListener("click", showSubtractionResults);
selectedMultiplication.addEventListener("click", showMultiplicationResults);
selectedDivision.addEventListener("click", showDivisionResults);

function showAdditionResults() {
    let first_number = parseFloat(document.getElementById("first_number").value);
    let second_number = parseFloat(document.getElementById("second_number").value);
    result = first_number + second_number;
    document.getElementById("result").innerHTML = result;
}

function showSubtractionResults() {
    let first_number = parseFloat(document.getElementById("first_number").value);
    let second_number = parseFloat(document.getElementById("second_number").value);
    result = first_number - second_number;
    document.getElementById("result").innerHTML = result;
}

function showMultiplicationResults() {
    let first_number = parseFloat(document.getElementById("first_number").value);
    let second_number = parseFloat(document.getElementById("second_number").value);
    result = first_number * second_number;
    document.getElementById("result").innerHTML = result;
}

function showDivisionResults() {
    let first_number = parseFloat(document.getElementById("first_number").value);
    let second_number = parseFloat(document.getElementById("second_number").value);
    result = first_number / second_number;
    document.getElementById("result").innerHTML = result;
}
