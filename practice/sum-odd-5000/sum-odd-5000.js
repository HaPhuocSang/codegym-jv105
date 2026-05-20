function sumOddFiveThousand() {
    let sum = 0;
    for (let i = 1; i <= 5000; i++) {
        if (i % 2) {
            sum += i;
        }
    }
    return sum;
}

alert(`Tổng của tất cả các số lẻ từ 1 đến 5000 là: ${sumOddFiveThousand()}`);

