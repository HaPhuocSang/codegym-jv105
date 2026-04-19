let fahrenheit;

function celsiusFahrenheit() {
    let celsius = parseInt(document.getElementById("Celsius").value);
    fahrenheit = celsius / 5 * 9 + 32;
    document.getElementById("Fahrenheit").innerHTML = fahrenheit;
}