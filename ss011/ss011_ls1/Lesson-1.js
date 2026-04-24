function convertCelsius(){
    let celsius = parseFloat(document.getElementById("Celsius").value);
    let fahrenheit;
    let result;
    if(isNaN(celsius)){
        document.getElementById("result").innerHTML = "Enter the degree Celsius (°C).";
        return;
    }
    fahrenheit = celsius * 9/5 + 32;
    result = `${celsius}°C is equal to ${fahrenheit}°F`;
    document.getElementById("result").innerHTML = result;
}