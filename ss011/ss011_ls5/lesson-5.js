function calculateAreaOfaRightTriangle() {
    let baseLength = parseFloat(document.getElementById("baseLength").value);
    let sideHeight = parseFloat(document.getElementById("sideHeight").value);
    if (isNaN(baseLength) || isNaN(sideHeight)) {
        document.getElementById("result").innerHTML = "Enter the height and base length.";
        return;
    }
    if (baseLength <= 0 || sideHeight <= 0) {
        document.getElementById("result").innerHTML = "The height and the length of the base cannot be less than zero.";
        return;
    }
    let areaOfaRightTriangle = (baseLength * sideHeight) / 2;
    document.getElementById("result").innerHTML = `The area of the right triangle is ${areaOfaRightTriangle}.`;
}
