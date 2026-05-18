function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    return firstNum + secondNum;
}

let result = 0;
alert(`result trước khi gọi hàm: ${result}`);
result = addNumbers();
alert(`result sau khi gọi hàm: ${result}`);
