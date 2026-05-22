function swap(arr) {
    if (arr.length < 2) {
        alert("Mảng có độ dài tối thiểu là 2!");
        return;
    }
    let first = 0;
    let last = arr.length - 1;
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
    return alert(`Mảng sau khi đổi phần tử đầu tiên và cuối cùng là: ${arr}`);
}

let arr = [1, 5, 10, -2];
swap(arr);
