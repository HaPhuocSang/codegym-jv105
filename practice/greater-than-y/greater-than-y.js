function greaterY(arr, Y) {
    let count = "";
    for (let i = 0; i < arr.length; i++) {
        if (Y > arr[i]) {
            count += arr[i];
        }
    }
    return count;
}

let Y = 3;
let arr = [2, 3, 5, 7];
alert(`Phần tử có giá trị nhỏ hơn giá trị của biến Y là: ${greaterY(arr, Y)}`);
