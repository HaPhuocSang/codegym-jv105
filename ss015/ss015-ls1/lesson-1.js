const LIST_NUMBER = [];
const TOTAL_ROWS = 5;
const TOTAL_COLUMNS = 4;
let selectedBtnShow2DArray = document.getElementById("btnShow2DArray");
selectedBtnShow2DArray.addEventListener("click", show2DArray);

function show2DArray() {
    LIST_NUMBER.length = 0;
    for (let i = 0; i < TOTAL_ROWS; i++) {
        LIST_NUMBER[i] = [];
        for (let j = 0; j < TOTAL_COLUMNS; j++) {
            LIST_NUMBER[i][j] = Math.floor(Math.random() * 100);
        }
    }
    let result = "";
    for (let i = 0; i < LIST_NUMBER.length; i++) {
        result += `row ${i}`;
        for (let j = 0; j < LIST_NUMBER[i].length; j++) {
            result += " " + LIST_NUMBER[i][j];
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
