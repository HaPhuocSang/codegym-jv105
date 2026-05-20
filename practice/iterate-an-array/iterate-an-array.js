function iterArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [-5, 2, 5, 12];
alert(`Tổng của tất cả các giá trị trong một mảng là: ${iterArr(arr)}`);
