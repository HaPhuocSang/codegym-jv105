function convertMeters() {
    let meters = parseInt(document.getElementById("meters").value);
    const meterToFeet = 3.2808;
    if (isNaN(meters)) {
        document.getElementById("result").innerHTML = "Enter the number of meters (m).";
        return;
    }
    let feet = meters * meterToFeet;
    document.getElementById("result").innerHTML = `${meters}m is equal to ${feet}ft`;
}
