const MIN_TEMPERATURE = 20;
const MAX_TEMPERATURE = 100;
let currentTemperature;
do {
    currentTemperature = parseFloat(prompt("Nhập nhiệt độ hiện tại: "));
    if (isNaN(currentTemperature)) {
        alert("Vui lòng nhập số hợp lệ!");
    }
    if (currentTemperature < MIN_TEMPERATURE) {
        alert("Yêu cầu người dùng tăng nhiệt độ.");
    }
    if (currentTemperature > MAX_TEMPERATURE) {
        alert("yêu cầu người dùng giảm nhiệt độ.");
    }
} while (currentTemperature < 20 || currentTemperature > 100 || isNaN(currentTemperature));
