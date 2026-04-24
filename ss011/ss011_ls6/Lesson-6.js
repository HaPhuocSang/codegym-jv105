function solveLinearEquations() {
    let solutionEquation;
    let result;
    let aNumber = parseFloat(document.getElementById("aNumber").value);
    let bNumber = parseFloat(document.getElementById("bNumber").value);
    if (isNaN(aNumber) || isNaN(bNumber)) {
        document.getElementById("result").innerHTML = "Input a,b.";
        return;
    }
    if (aNumber === 0){
        if (bNumber === 0){
            result = "This equation has infinitely many solutions.";
        }
        else {
            result = "This equation has no solution.";
        }
    }
    else {
        solutionEquation = -bNumber / aNumber;
        result = `x = ${solutionEquation}`;
    }
    document.getElementById("result").innerHTML = result;
}
