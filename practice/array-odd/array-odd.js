function oddNumbers() {
    let arr = [];
    for (let i = 1; i <= 50; i += 2) {
        arr.push(i);
    }
    return arr;
}

alert(`Mảng gồm các phần từ là các số lẻ từ 1 đến 50 là: ${oddNumbers()}`);
