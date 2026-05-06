let selectedHeartShape = document.getElementById("btnHeartShape");
selectedHeartShape.addEventListener("click", showHeartShape)
const HEART_WIDTH = 17;
const FIRST_THREE_FLOORS = 4;
const REMAINING_FLOOR_SPACE = 9;

function showHeartShape() {
    let result = "";
    let spaceOfFirstThreeFloors = 3;
    let spaceBetweenFirstThreeFloors = [7, 8, 9, 10, 11];
    for (let i = 1; i <= FIRST_THREE_FLOORS; i++) {
        for (let j = 1; j <= HEART_WIDTH; j++) {
            if (j <= spaceOfFirstThreeFloors || spaceBetweenFirstThreeFloors.includes(j) || j >= HEART_WIDTH - spaceOfFirstThreeFloors + 1) {
                result += "&nbsp;";
            } else {
                result += "*";
            }
        }
        result += "<br>";
        spaceOfFirstThreeFloors--;
        spaceBetweenFirstThreeFloors.shift();
        spaceBetweenFirstThreeFloors.pop();
    }
    let spaceOfRemainingFloors = 0;
    for (let i = 1; i <= REMAINING_FLOOR_SPACE; i++) {
        for (let j = 1; j <= HEART_WIDTH; j++) {
            if (j <= spaceOfRemainingFloors || j > HEART_WIDTH - spaceOfRemainingFloors) {
                result += "&nbsp;";
            } else {
                result += "*";
            }
        }
        spaceOfRemainingFloors++;
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}

