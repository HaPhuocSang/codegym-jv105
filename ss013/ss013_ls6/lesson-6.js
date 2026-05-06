let selectedHeartShape = document.getElementById("btnHeartShape");
selectedHeartShape.addEventListener("click", showHeartShape)
const HEART_WIDTH = 17;
const FIRST_FOUR_FLOORS = 4;
const REMAINING_FLOOR_SPACE = 9;

function showHeartShape() {
    let result = "";
    let spaceOfFirstFourFloors = 3;
    let spaceBetweenFirstFourFloors = [7, 8, 9, 10, 11];
    for (let i = 1; i <= FIRST_FOUR_FLOORS; i++) {
        for (let j = 1; j <= HEART_WIDTH; j++) {
            if (j <= spaceOfFirstFourFloors || spaceBetweenFirstFourFloors.includes(j) || j >= HEART_WIDTH - spaceOfFirstFourFloors + 1) {
                result += "&nbsp;";
            } else {
                result += "*";
            }
        }
        result += "<br>";
        spaceOfFirstFourFloors--;
        spaceBetweenFirstFourFloors.shift();
        spaceBetweenFirstFourFloors.pop();
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

