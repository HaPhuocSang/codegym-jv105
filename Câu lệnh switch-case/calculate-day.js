let result;
let selectedCalculateDays = document.getElementById("calculateDays");
selectedCalculateDays.addEventListener("click", calculateDay);

function calculateDay() {
    let month = parseFloat(document.getElementById("month").value);
    const monthDays31 = [1,3,5,7,8,10,12];
    const monthDays30 = [4,6,9,11];
    if (!isNaN(month)) {
        switch (month) {
            case monthDays31.includes(month):
                result = "31 days";
                break;
            case monthDays30.includes(month):
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
