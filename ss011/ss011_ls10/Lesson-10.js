function electricityPricing() {
    let result;
    let price;
    const b1b2 = 50;
    const b3b4b5 = 100;
    const b6 = 400;
    const lv1 = 1806;
    const lv2 = 1866;
    const lv3 = 2167;
    const lv4 = 2729;
    const lv5 = 3050;
    const lv6 = 3151;
    let kWh = parseFloat(document.getElementById('kWh').value);
    if (isNaN(kWh)) {
        document.getElementById("result").innerHTML = "Input kWh.";
        return;
    }
    if (kWh < 0) {
        document.getElementById("result").innerHTML = "kWh cannot be less than zero.";
        return;
    }
    if (kWh <= b1b2) {
        price = kWh * lv1;
    } else if (kWh <= b1b2 * 2) {
        price = b1b2 * lv1 + (kWh - b1b2) * lv2;
    } else if (kWh <= b3b4b5 * 2) {
        price = b1b2 * lv1 + b1b2 * lv2 + (kWh - b3b4b5) * lv3;
    } else if (kWh <= b3b4b5 * 3) {
        price = b1b2 * lv1 + b1b2 * lv2 + b3b4b5 * lv3 + (kWh - b3b4b5 * 2) * lv4;
    } else if (kWh <= b3b4b5 * 4) {
        price = b1b2 * lv1 + b1b2 * lv2 + b3b4b5 * lv3 + b3b4b5 * lv4 + (kWh - b3b4b5 * 3) * lv5;
    } else {
        price = b1b2 * lv1 + b1b2 * lv2 + b3b4b5 * lv3 + b3b4b5 * lv4 + b3b4b5 * lv5 + (kWh - b6) * lv6;
    }
    result = `The electricity bill is: ${price}VND.`;
    document.getElementById("result").innerHTML = result;
}
