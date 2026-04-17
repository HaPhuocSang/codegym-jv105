let average;
let total;

function average_total() {
    let physics = parseInt(document.getElementById("physics").value);
    let chemistry = parseInt(document.getElementById("chemistry").value);
    let biology = parseInt(document.getElementById("biology").value);
    average = (physics + chemistry + biology) / 3;
    total = physics + chemistry + biology;
    document.getElementById("total").innerHTML = total;
    document.getElementById("average").innerHTML = average;
}