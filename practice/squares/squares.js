function squareVal(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.pow(arr[i], 2);
    }
    return arr;
}

let arr = [1,5,10, -2];
alert(`Thay thế mỗi phần tử trong mảng bằng một phần tử có giá trị bằng bình phương của giá trị ban đầu: ${squareVal(arr)}`);
