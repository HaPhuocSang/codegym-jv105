function convertMeters() {
    let meters = parseInt(document.getElementById("meters").value);
    let feet;
    let result;
    if (isNaN(meters)) {
        document.getElementById("result").innerHTML = "Enter the number of meters (m).";
        return;
    }
    feet = meters * 3.2808;
    result = `${meters}m is equal to ${feet}ft`;
    document.getElementById("result").innerHTML = result;
}
