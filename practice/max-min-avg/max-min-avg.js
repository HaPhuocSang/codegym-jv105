function maxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        avg += arr[i];
    }
    avg = avg / arr.length;
    return [max, min, avg];
}

let arr = [1, 5, 10, -2];
alert(`3 phần tử có các giá trị : lớn nhất, nhỏ nhất, giá trị trung bình của mảng là: ${maxMinAvg(arr)}`);
