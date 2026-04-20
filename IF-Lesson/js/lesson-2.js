let selectedCheckGraduate = document.getElementById("checkGraduate");
selectedCheckGraduate.addEventListener("click", showCheckGraduate);
function showCheckGraduate(){
    let age = parseFloat(document.getElementById("age").value);
    let graduateList = document.getElementsByName("graduated");
    let graduateValue;
    for (let i = 0; i < graduateList.length; i++) {
        if (graduateList[i].checked){
            graduateValue = graduateList[i].value;
            break;
        }
    }
    let result;
    if (!isNaN(age)){
        if (age >= 18 && graduateValue === "Graduated"){
            result = "Eligible to enter 10th grade";
        }
        else {
            result = "Not eligible to enter 10th grade.";
        }
    }
    else {
        result = "Input age";
    }
    document.getElementById("result").innerHTML = result;
}
