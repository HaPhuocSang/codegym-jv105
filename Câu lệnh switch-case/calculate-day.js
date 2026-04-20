let result;
let selectedCalculateDays = document.getElementById("calculateDays");
selectedCalculateDays.addEventListener("click", calculateDay);

function calculateDay() {
    let month = parseFloat(document.getElementById("month").value);
    if (!isNaN(month)) {
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                result = "31 days";
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                result = "30 days";
                break;
            case 2:
                result = "28 days or 29 days";
                break;
            default:
                result = "Not this month";
        }
    } else {
        result = "Enter month";
    }
    document.getElementById("result").innerHTML = result;
}
