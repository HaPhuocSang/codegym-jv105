function currency_conversion() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from_currency = document.getElementById("from_currency").value;
    let to_currency = document.getElementById("to_currency").value;
    let result;
    if (!isNaN(amount)) {
        if (from_currency === to_currency) {
            result = amount;
        } else {
            if (from_currency === "VND" && to_currency === "USD") {
                result = amount / 26000;
            } else {
                result = amount * 26000;
            }
        }
    } else {
        result = 0;
    }
    document.getElementById("result").innerHTML = result + " " + to_currency;
}