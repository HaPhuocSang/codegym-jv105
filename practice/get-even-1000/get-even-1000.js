function sumEvenNumbers() {
    let sum = 0;
    for (let i = 0; i <= 1000; i += 2) {
        if (!(i % 2)) {
            sum += i;
        }
    }
    return sum;
}

alert(`Tổng tất cả các số chẵn từ 1 đến 1000: ${sumEvenNumbers()}`);

