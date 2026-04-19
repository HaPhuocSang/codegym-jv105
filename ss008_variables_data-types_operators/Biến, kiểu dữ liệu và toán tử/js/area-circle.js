let area;

function areaCircle() {
    let radius = parseFloat(document.getElementById('radius').value);
    area = radius * radius * 3.14;
    document.getElementById('notification').innerHTML = area;
}
