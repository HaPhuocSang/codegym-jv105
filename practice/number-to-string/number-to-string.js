function numToStr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}

let arr = [-1, -3, 2];
alert(`Mảng sau khi thay thế: ${JSON.stringify(numToStr(arr))}`);
