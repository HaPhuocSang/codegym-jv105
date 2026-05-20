function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let arr = [-5,2,5,12];
alert(`Số lớn nhất trong mảng là: ${findMax(arr)}`);