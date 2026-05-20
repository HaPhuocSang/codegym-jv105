function findAvg(arr) {
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        avg += arr[i];
    }
    return avg / arr.length;
}

let arr = [1, 3, 5, 7, 20];
alert(`Giá trị trung bình trong mảng là: ${findAvg(arr)}`);
