const underW = 18.5;
const norM = 25;
const overW = 30;
let selectedCalculate = document.getElementById("btnCalculateBody");
selectedCalculate.addEventListener("click", calculateBody);
function calculateBody(){
    let result;
    let BMI;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    BMI = weight / (height * height);
    if (BMI < underW) {
        result = "Underweight";
    }
    else if (BMI < norM) {
        result = "Normal";
    }
    else if (BMI < overW) {
        result = "Overweight";
    }
    else {
        result = "Obese";
    }
    document.getElementById("result").innerHTML = result;
}
