let textDisplay = "";
const operation1 = "+-*/";
const operation2 = "+*/";
const operation3 = ["++","+*","+/","-+","-*","-/","*+","**","*/","/+","/*","//"];
document.getElementById("viewDisplay").value = textDisplay;

function inputNumberAndCalculations(numCal) {
    textDisplay += numCal;
    document.getElementById("viewDisplay").value = textDisplay;
}

function performCalculations() {
    let textEnd = textDisplay[textDisplay.length - 1];
    let textStart = textDisplay[0];
    if (textDisplay === "" || operation1.includes(textEnd) || operation2.includes(textStart)) {
        return;
    }
    for (let i = 0; i < operation3.length; i++) {
        if (textDisplay.includes(operation3[i])){
            return;
        }
    }
    textDisplay = eval(textDisplay).toString(); 
    document.getElementById("viewDisplay").value = textDisplay;

}

function deleteText(){
    textDisplay = "";
    document.getElementById("viewDisplay").value = textDisplay;
}