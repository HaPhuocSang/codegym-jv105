let selectedAcademicRanking = document.getElementById("btnAcademicRanking");
selectedAcademicRanking.addEventListener("click", showAcademicRanking);
const exl = 8;
const good = 6.5;
const ave = 5;
function showAcademicRanking() {
    let score1 = parseFloat(document.getElementById("test-score").value);
    let score2 = parseFloat(document.getElementById("midterm-exam-scores").value);
    let score3 = parseFloat(document.getElementById("final-exam-scores").value);
    let result;
    if (isNaN(score1) || isNaN(score2) || isNaN(score3)) {
        result = "Input score.";
        document.getElementById("result").innerHTML = result;
        return;
    }
    if (score1 < 0 || score1 > 10 || score2 < 0 || score2 > 10 || score3 < 0 || score3 > 10) {
        result = "Score from 1 to 10.";
        document.getElementById("result").innerHTML = result;
        return;
    }
    let aver = (score1 + score2 * 2 + score3 * 3) / 6;
    if (aver >= exl) {
        result = "Excellent.";
    } else if (aver >= good) {
        result = "Good.";
    } else if (aver >= ave) {
        result = "Average.";
    } else {
        result = "Poor.";
    }
    document.getElementById("result").innerHTML = result;
}

