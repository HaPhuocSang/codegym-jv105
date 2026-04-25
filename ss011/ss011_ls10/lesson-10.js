function electricityPricing() {
    let result;
    let price;
    const TIER_1_2_LIMIT = 50;
    const TIER_3_4_5_LIMIT = 100;
    const TIER_6_LIMIT = 400;
    const LV1 = 1806;
    const LV2 = 1866;
    const LV3 = 2167;
    const LV4 = 2729;
    const LV5 = 3050;
    const LV6 = 3151;
    let kWh = parseFloat(document.getElementById('kWh').value);
    if (isNaN(kWh)) {
        document.getElementById("result").innerHTML = "Input kWh.";
        return;
    }
    if (kWh < 0) {
        document.getElementById("result").innerHTML = "kWh cannot be less than zero.";
        return;
    }
    if (kWh <= TIER_1_2_LIMIT) {
        price = kWh * LV1;
    } else if (kWh <= TIER_1_2_LIMIT * 2) {
        price = TIER_1_2_LIMIT * LV1 + (kWh - TIER_1_2_LIMIT) * LV2;
    } else if (kWh <= TIER_3_4_5_LIMIT * 2) {
        price = TIER_1_2_LIMIT * LV1 + TIER_1_2_LIMIT * LV2 + (kWh - TIER_3_4_5_LIMIT) * LV3;
    } else if (kWh <= TIER_3_4_5_LIMIT * 3) {
        price = TIER_1_2_LIMIT * LV1 + TIER_1_2_LIMIT * LV2 + TIER_3_4_5_LIMIT * LV3 + (kWh - TIER_3_4_5_LIMIT * 2) * LV4;
    } else if (kWh <= TIER_3_4_5_LIMIT * 4) {
        price = TIER_1_2_LIMIT * LV1 + TIER_1_2_LIMIT * LV2 + TIER_3_4_5_LIMIT * LV3 + TIER_3_4_5_LIMIT * LV4 + (kWh - TIER_3_4_5_LIMIT * 3) * LV5;
    } else {
        price = TIER_1_2_LIMIT * LV1 + TIER_1_2_LIMIT * LV2 + TIER_3_4_5_LIMIT * LV3 + TIER_3_4_5_LIMIT * LV4 + TIER_3_4_5_LIMIT * LV5 + (kWh - TIER_6_LIMIT) * LV6;
    }
    result = `The electricity bill is: ${price}VND.`;
    document.getElementById("result").innerHTML = result;
}
