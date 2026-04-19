let perimeter;

function perimeterCircle() {
    let radius = parseFloat(document.getElementById('radius').value);
    perimeter = radius * 2 * 3.14;
    document.getElementById('notification').innerHTML = perimeter;
}