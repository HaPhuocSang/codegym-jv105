function convertCelsius() {
    let celsius = parseFloat(document.getElementById("Celsius").value);  
    if (isNaN(celsius)) {
        document.getElementById("result").innerHTML = "Enter the degree Celsius (°C).";
        return;
    }
    let fahrenheit = celsius * 9 / 5 + 32;
    let result = `${celsius}°C is equal to ${fahrenheit}°F`;
    document.getElementById("result").innerHTML = result;
}
