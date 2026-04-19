let area;
let perimeter;
let selectedArea = document.getElementById("btnArea");
let selectedPerimeter = document.getElementById("btnPerimeter");
selectedArea.addEventListener("click", showMessageArea);
selectedPerimeter.addEventListener("click", showMessagePerimeter);

function getInput(){
    let width = parseInt(document.getElementById("width").value);
    let length = parseInt(document.getElementById("length").value);
    return {width,length};
}

function showMessageArea() {
    area = getInput().width * getInput().length;
    document.getElementById("area").innerHTML = area;
}

function showMessagePerimeter() {
    perimeter = (getInput().width + getInput().length) * 2;
    document.getElementById("perimeter").innerHTML = perimeter;
}