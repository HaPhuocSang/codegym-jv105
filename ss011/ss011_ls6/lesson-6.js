function solveLinearEquations() {
    let aNumber = parseFloat(document.getElementById("aNumber").value);
    let bNumber = parseFloat(document.getElementById("bNumber").value);
    if (isNaN(aNumber) || isNaN(bNumber)) {
        document.getElementById("result").innerHTML = "Input a,b.";
        return;
    }
    let result;
    if (aNumber === 0){
        result = bNumber === 0 ? "This equation has infinitely many solutions." : "This equation has no solution.";
    }
    else {
        let solutionEquation = -bNumber / aNumber;
        result = `x = ${solutionEquation}`;
    }
    document.getElementById("result").innerHTML = result;
}
