let selectedCalculate = document.getElementById("btnCalculateBody");
selectedCalculate.addEventListener("click", calculateBody);
function calculateBody(){
    let result;
    let BMI;
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    BMI = weight / (height * height);
    if (BMI < 18.5) {
        result = "Underweight";
    }
    else if (BMI < 25) {
        result = "Normal";
    }
    else if (BMI < 30) {
        result = "Overweight";
    }
    else {
        result = "Obese";
    }
    document.getElementById("result").innerHTML = result;
}
