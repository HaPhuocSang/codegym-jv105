function squareVal(arr) {
    return arr.map((product) => Math.pow(product, 2));
}

let arr = [1,5,10, -2];
alert(`Thay thế mỗi phần tử trong mảng bằng một phần tử có giá trị bằng bình phương của giá trị ban đầu: ${squareVal(arr)}`);
