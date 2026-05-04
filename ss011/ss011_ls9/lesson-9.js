function checkIfThree() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let result;
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("result").innerHTML = "Please enter a number.";
        return;
    }
    if (a <= 0 || b <= 0 || c <= 0) {
        document.getElementById("result").innerHTML = "Real numbers greater than 0.";
        return;
    }
    if (a + b > c && b + c > a && c + a > b) {
        result = "These are the three sides of the triangle.";
    } else {
        result = "These are not the three sides of a triangle."
    }
    document.getElementById("result").innerHTML = result;
}
