function switchToMeters(number) {
    return number * 0.305;
}

function switchToFeet(number) {
    return number * 3.279;
}

function convertBetweenFeetAndMeters() {
    let numberFeet = parseFloat(document.getElementById("numberFeet").value);
    let numberMeters = parseFloat(document.getElementById("numberMeters").value);
    let resultFirst;
    let resultSecond;
    resultFirst = `${switchToMeters(numberFeet).toFixed(3)}m`;
    resultSecond = `${switchToFeet(numberMeters).toFixed(3)}ft`;
    if (isNaN(numberFeet)) {
        resultFirst = "";
    }
    if (isNaN(numberMeters)) {
        resultSecond = "";
    }
    document.getElementById("resultFirst").textContent = resultFirst.toString();
    document.getElementById("resultSecond").textContent = resultSecond.toString();
}
