let selectedTelephoneCharges = document.getElementById("btnTelephoneCharges");
selectedTelephoneCharges.addEventListener("click", showTelephoneCharges);
const domesticCurrency = 200;
const internalCirculationStatic = 1000;

function showTelephoneCharges() {
    let result;
    let monthlySubscriptionFee = parseFloat(document.getElementById("monthly-subscription-fee").value);
    let localCall = parseFloat(document.getElementById("local-call").value);
    let mobileCall = parseFloat(document.getElementById("mobile-call").value);
    if (isNaN(monthlySubscriptionFee) || isNaN(localCall) || isNaN(mobileCall)) {
        result = "Input monthly subscription fee, local call and mobile call.";
        document.getElementById("result").innerHTML = result;
        return;
    }
    if (monthlySubscriptionFee < 0 || localCall < 0 || mobileCall < 0) {
        result = "Monthly subscription fees, local calls, and mobile calls are greater than or equal to 0."
        document.getElementById("result").innerHTML = result;
        return;
    }
    let totalAmount = monthlySubscriptionFee + localCall * domesticCurrency + mobileCall * internalCirculationStatic;
    result = "Total amount to be paid: " + totalAmount;
    document.getElementById("result").innerHTML = result;
}
