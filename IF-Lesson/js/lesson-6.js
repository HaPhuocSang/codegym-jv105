let selectedCommissionPercentage = document.getElementById("btnCommissionPercentage");
selectedCommissionPercentage.addEventListener("click", showCommissionPercentage);
function showCommissionPercentage(){
    let result;
    let commissionPercentage = parseFloat(document.getElementById("commission-percentage").value);
    let totalRevenue = parseFloat(document.getElementById("total-revenue").value);
    if (!isNaN(commissionPercentage) && !isNaN(totalRevenue)) {
        if (commissionPercentage >=0) {
            let money;
            money = totalRevenue * commissionPercentage / 100;
            result = "The percentage of commission received is " + money;
        }
        else {
            result = "The commission percentage must not be less than 0."
        }
    }
    else {
        result = "Input total revenue and commission percentage."
    }
    document.getElementById("result").innerHTML = result;
}
