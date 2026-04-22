let selectedCheckGraduate = document.getElementById("checkGraduate");
selectedCheckGraduate.addEventListener("click", showCheckGraduate);

function showCheckGraduate() {
    let age = parseFloat(document.getElementById("age").value);
    const selectedGraduate = document.querySelector(
        'input[name="graduated"]:checked'
    );
    let graduateValue= selectedGraduate.value;
    let result;
    if (!isNaN(age)) {
        if (age >= 15 && graduateValue === "Graduated") {
            result = "Eligible to enter 10th grade";
        } else {
            result = "Not eligible to enter 10th grade.";
        }
    } else {
        result = "Input age";
    }
    document.getElementById("result").innerHTML = result;
}
