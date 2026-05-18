function Temperature(celsius) {
    this.celsius = celsius;
    this.minCelsius();
}

Temperature.prototype.minCelsius = function () {
    if (this.celsius < -273) {
        throw new Error("Nhiệt độ nhỏ nhất là -273°C!");
    }
}

Temperature.prototype.switchToFahrenheit = function () {
    return this.celsius * 1.8 + 32;
}
Temperature.prototype.switchToKelvin = function () {
    return this.celsius + 273.15;
}

function showResult() {
    let celsius = Number(document.getElementById("celsiusValue").value);
    if (isNaN(celsius)) {
        alert("Giá trị đầu vào không hợp lệ!");
        return;
    }
    try {
        let temperature = new Temperature(celsius);
        document.getElementById("resultFirst").textContent = `Chuyển °C sang °F là ${temperature.switchToFahrenheit()}°F.`;
        document.getElementById("resultSecond").textContent = `Chuyển °C sang °K là ${temperature.switchToKelvin()}°K.`;
    } catch (error) {
        alert(error.message);
    }
}
