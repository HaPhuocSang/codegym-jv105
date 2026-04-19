function currencyConversion() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("from_currency").value;
    let toCurrency = document.getElementById("to_currency").value;
    let result;
    if (!isNaN(amount)) {
        if (fromCurrency === toCurrency) {
            result = amount;
        } else {
            if (fromCurrency === "VND") {
                result = amount / 26000;
            } else {
                result = amount * 26000;
            }
        }
    } else {
        result = 0;
    }
    document.getElementById("result").innerHTML = result + " " + toCurrency;
}
