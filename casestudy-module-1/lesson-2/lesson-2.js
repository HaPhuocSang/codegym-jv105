function checkNumber(num) {
    return !isNaN(num) && num > 0
}
function checkTriangle(a,b,c) {
    if (a + b <= c || a + c <= b || c + b <= a) {
        return "Không phải là tam giác";
    }
    let triangle = [a,b,c];
    triangle.sort((a, b) => b - a);
    return Math.pow(triangle[0], 2) === Math.pow(triangle[1], 2) + Math.pow(triangle[2], 2) ? "Là tam giác vuông!" : "Là tam giác thường!";
}

function showResult() {
    let firstTriangleSide = Number(document.getElementById("firstTriangleSide").value);
    let secondTriangleSide = Number(document.getElementById("secondTriangleSide").value);
    let thirdTriangleSide = Number(document.getElementById("thirdTriangleSide").value);
    if (!checkNumber(firstTriangleSide) || !checkNumber(secondTriangleSide) || !checkNumber(thirdTriangleSide) || !checkNumber(thirdTriangleSide)) {
        alert("Cạnh tam giác không được là số âm và không được để trống!");
        return;
    }
    document.getElementById("result").textContent = checkTriangle(firstTriangleSide, secondTriangleSide, thirdTriangleSide);
}
