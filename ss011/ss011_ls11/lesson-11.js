function calculateIncomeTax() {
    let result
    let tax;
    let income = parseFloat(document.getElementById('income').value);
    const TIER_1_LIMIT = 10000000;
    const TIER_2_LIMIT = 30000000;
    const TIER_3_LIMIT = 50000000;
    const TIER_4_LIMIT = 100000000;
    const LV1 = 5 / 100;
    const LV2 = 10 / 100;
    const LV3 = 15 / 100;
    const LV4 = 25 / 100;
    const LV5 = 35 / 100;
    if (isNaN(income) || income < 0) {
        document.getElementById("result").innerHTML = "Enter income - Income cannot be less than 0";
        return;
    }
    if (income <= TIER_1_LIMIT) {
        tax = income * LV1;
    } else if (income <= TIER_2_LIMIT) {
        tax = TIER_1_LIMIT * LV1 + (income - TIER_1_LIMIT) * LV2;
    } else if (income <= TIER_3_LIMIT) {
        tax = TIER_1_LIMIT * LV1 + (TIER_2_LIMIT - TIER_1_LIMIT) * LV2 + (income - TIER_2_LIMIT) * LV3;
    } else if (income <= TIER_4_LIMIT) {
        tax = TIER_1_LIMIT * LV1 + (TIER_2_LIMIT - TIER_1_LIMIT) * LV2 + (TIER_3_LIMIT - TIER_2_LIMIT) * LV3 + (income - TIER_3_LIMIT) * LV4;
    } else {
        tax = TIER_1_LIMIT * LV1 + (TIER_2_LIMIT - TIER_1_LIMIT) * LV2 + (TIER_3_LIMIT - TIER_2_LIMIT) * LV3 + (TIER_4_LIMIT - TIER_3_LIMIT) * LV4 + (income - TIER_4_LIMIT) * LV5;
    }
    document.getElementById("result").innerHTML = `The tax payable is ${tax}VND.`;
}
