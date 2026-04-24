function calculateIncomeTax() {
    let result
    let tax;
    let income = parseFloat(document.getElementById('income').value);
    const n1 = 10000000;
    const n2 = 30000000;
    const n3 = 50000000;
    const n4 = 100000000;
    const lv1 = 5/100;
    const lv2 = 10/100;
    const lv3 = 15/100;
    const lv4 = 25/100;
    const lv5 = 35/100;
    if (isNaN(income) || income < 0) {
        document.getElementById("result").innerHTML = "Enter income - Income cannot be less than 0";
        return;
    }
    if (income <= n1){
        tax = income * lv1;
    }
    else if (income <= n2){
        tax = n1 * lv1 + (income - n1) * lv2;
    }
    else if (income <= n3){
        tax = n1 * lv1 + (n2 - n1) * lv2 + (income - n2) * lv3;
    }
    else if (income <= n4){
        tax = n1 * lv1 + (n2 - n1) * lv2 + (n3 -n2) * lv3 + (income - n3) * lv4;
    }
    else {
        tax = n1 * lv1 + (n2 - n1) * lv2 + (n3 -n2) * lv3 + (n4 -n3) * lv4 + (income - n4) * lv5;
    }
    result = `The tax payable is ${tax}VND.`;
    document.getElementById("result").innerHTML = result;
}
