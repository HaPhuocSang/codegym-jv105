const LENGTH_OF_RECTANGLES = 21;
const WIDTH_OF_RECTANGLES = 7;
const EMPTY_ROW = [2, 3, 4, 5, 6];
const LEFT_BORDER = 1;
const RIGHT_BORDER = LENGTH_OF_RECTANGLES;
let selectedRectangle = document.getElementById("btnRectangle");
selectedRectangle.addEventListener("click", showRectangle);

function showRectangle() {
    let result = "";
    for (let i = 1; i <= WIDTH_OF_RECTANGLES; i++) {
        for (let j = 1; j <= LENGTH_OF_RECTANGLES; j++) {
            if (EMPTY_ROW.includes(i) && j > LEFT_BORDER && j < RIGHT_BORDER) {
                result += "&nbsp;";
            } else {
                result += "*";
            }
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
