function noNeg(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}
let arr = [1,5,10, -2];

alert(`Mảng sau khi thay thế các phần từ có giá trị âm bằng 0 là: ${noNeg(arr)}`);
