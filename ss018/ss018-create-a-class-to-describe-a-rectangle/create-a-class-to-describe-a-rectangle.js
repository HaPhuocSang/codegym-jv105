function Rectangle(width, length) {
    this.width = width;
    this.length = length;
}

Rectangle.prototype.getPerimeter = function () {
    return (this.width + this.length) * 2;
};

Rectangle.prototype.getArea = function () {
    return this.width * this.length;
}

Rectangle.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.width, this.length);
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, this.length, this.width);
}

function checkPositiveInteger(number) {
    let result = false;
    if (number > 0 && Number.isInteger(number)) {
        result = true;
    }
    return result;
}

function showResult() {
    let lengthOfRectangle = Number(document.getElementById("lengthOfRectangle").value);
    let widthOfRectangle = Number(document.getElementById("widthOfRectangle").value);
    const canvasRectangle = document.getElementById("myCanvas");
    const context = canvasRectangle.getContext("2d");
    if (!checkPositiveInteger(lengthOfRectangle) || !checkPositiveInteger(widthOfRectangle)) {
        alert("Giá trị nhập vào không hợp lệ")
        return;
    }
    context.clearRect(0, 0, canvasRectangle.width, canvasRectangle.height);
    let rectangle = new Rectangle(widthOfRectangle, lengthOfRectangle);
    document.getElementById("resultFirst").textContent = `Chu vi hình chữ nhật là ${rectangle.getPerimeter()}`;
    document.getElementById("resultSecond").textContent = `Diện tích hình chữ nhật là ${rectangle.getArea()}`;
    rectangle.draw(context);
}
