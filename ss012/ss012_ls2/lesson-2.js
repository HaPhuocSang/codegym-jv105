let currentTemperature;
do {
    currentTemperature = parseFloat(prompt("Nhập nhiệt độ hiện tại: "));
    if (isNaN(currentTemperature)) {
        alert("Vui lòng nhập số hợp lệ!");
    }
    if (currentTemperature < 20) {
        alert("Yêu cầu người dùng tăng nhiệt độ.");
    }
    if (currentTemperature > 100) {
        alert("yêu cầu người dùng giảm nhiệt độ.");
    }
} while (currentTemperature < 20 || currentTemperature > 100 || isNaN(currentTemperature));
