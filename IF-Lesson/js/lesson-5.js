let selectedAcademicRanking = document.getElementById("btnAcademicRanking");
selectedAcademicRanking.addEventListener("click", showAcademicRanking);

function showAcademicRanking() {
    let score1 = parseFloat(document.getElementById("test-score").value);
    let score2 = parseFloat(document.getElementById("midterm-exam-scores").value);
    let score3 = parseFloat(document.getElementById("final-exam-scores").value);
    let result;
    if (!isNaN(score1) && !isNaN(score2) && !isNaN(score3)) {
        if (score1 >= 0 && score1 <= 10 && score2 >= 0 && score2 <= 10 && score3 >= 0 && score3 <= 10) {
            let aver = (score1 + score2 * 2 + score3 * 3) / 6;
            if (aver >= 8) {
                result = "Excellent.";
            } else if (aver >= 6.5) {
                result = "Good.";
            } else if (aver >= 5) {
                result = "Average.";
            } else {
                result = "Poor.";
            }
        } else {
            result = "Score from 1 to 10.";
        }
    } else {
        result = "Input score.";
    }
    document.getElementById("result").innerHTML = result;
}
