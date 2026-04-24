function areaOfaRectangle() {
    let lengthSide = parseFloat(document.getElementById("sideLength").value);
    let widthSide = parseFloat(document.getElementById("sideWidth").value);
    let areaRectangle;
    let result;
    if (isNaN(lengthSide) || isNaN(widthSide)) {
        document.getElementById("result").innerHTML = "Enter the length and width of the rectangle.";
        return;
    }
    if (lengthSide <= 0 || widthSide <= 0) {
        document.getElementById("result").innerHTML = "The side length must not be less than or equal to zero.";
        return;
    }
    areaRectangle = lengthSide * widthSide;
    result = `The area of the rectangle is ${areaRectangle}.`;
    document.getElementById("result").innerHTML = result;
}
