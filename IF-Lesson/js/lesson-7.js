let selectedTelephoneCharges = document.getElementById("btnTelephoneCharges");
selectedTelephoneCharges.addEventListener("click", showTelephoneCharges);

function showTelephoneCharges() {
    let result;
    let monthlySubscriptionFee = parseFloat(document.getElementById("monthly-subscription-fee").value);
    let localCall = parseFloat(document.getElementById("local-call").value);
    let mobileCall = parseFloat(document.getElementById("mobile-call").value);
    if (!isNaN(monthlySubscriptionFee) && !isNaN(localCall) && !isNaN(mobileCall)) {
        if (monthlySubscriptionFee >= 0 && localCall >= 0 && mobileCall >= 0) {
            let totalAmount = monthlySubscriptionFee + localCall * 200 + mobileCall * 1000;
            result = "Total amount to be paid: " + totalAmount;
        } else {
            result = "Monthly subscription fees, local calls, and mobile calls are greater than or equal to 0."
        }
    } else {
        result = "Input monthly subscription fee, local call and mobile call.";
    }
    document.getElementById("result").innerHTML = result;
}
