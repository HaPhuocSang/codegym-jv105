function calculateArea() {
    let lengthSide = parseFloat(document.getElementById("side").value);
    let result;
    let areSquares;
    if (isNaN(lengthSide) || lengthSide <= 0) {
        document.getElementById("result").innerHTML = "Enter side length / Side length greater than 0";
        return;
    }
    areSquares = lengthSide * lengthSide;
    result = `The area of the square is ${areSquares}`;
    document.getElementById("result").innerHTML = result;
}
