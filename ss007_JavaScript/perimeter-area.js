let area;
let perimeter;
let selectedArea = document.getElementById("btnArea");
let selectedPerimeter = document.getElementById("btnPerimeter");
selectedArea.addEventListener("click", showMessageArea);
selectedPerimeter.addEventListener("click", showMessagePerimeter);
function showMessageArea() {
    let width = parseInt(document.getElementById("width").value);
    let length = parseInt(document.getElementById("length").value);
    area = width * length;
    document.getElementById("area").innerHTML = area;
}

function showMessagePerimeter() {
    let width = parseInt(document.getElementById("width").value);
    let length = parseInt(document.getElementById("length").value);
    perimeter = (width + length) * 2;
    document.getElementById("perimeter").innerHTML = perimeter;
}