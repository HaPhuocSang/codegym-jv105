let textDisplay = "";
const operation1 = "+-x/";
const operation2 = "+x/";
const operation3 = ["++", "+x", "+/", "-+", "-x", "-/", "x+", "xx", "x/", "/+", "/x", "//"];
document.getElementById("viewDisplay").value = textDisplay;

function inputNumberAndCalculations(numCal) {
    textDisplay += numCal;
    document.getElementById("viewDisplay").value = textDisplay;
}

function performCalculations() {
    let textEnd = textDisplay[textDisplay.length - 1];
    let textStart = textDisplay[0];
    if (textDisplay.includes("--")) {
        if (operation1.includes(textDisplay[0])) {
            return;
        } else {
            textDisplay = textDisplay.replace(/--/g, "+");
        }
    }
    if (textDisplay === "" || operation1.includes(textEnd) || operation2.includes(textStart)) {
        return;
    }
    for (let i = 0; i < operation3.length; i++) {
        if (textDisplay.includes(operation3[i])) {
            return;
        }
    }
    if (textDisplay.includes("x")) {
        textDisplay = textDisplay.replace(/x/g, "*");
    }

    textDisplay = eval(textDisplay).toString();
    document.getElementById("viewDisplay").value = textDisplay;

}

function deleteText() {
    textDisplay = "";
    document.getElementById("viewDisplay").value = textDisplay;
}
