function calculateArea() {
    let lengthSide = parseFloat(document.getElementById("side").value);
    if (isNaN(lengthSide) || lengthSide <= 0) {
        document.getElementById("result").innerHTML = "Enter side length / Side length greater than 0";
        return;
    }
    let areSquares = lengthSide * lengthSide;
    document.getElementById("result").innerHTML = `The area of the square is ${areSquares}`;
}
