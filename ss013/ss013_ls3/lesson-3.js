const NUMBER_OF_STARTS = 5;
function bottomLeft() {
    let result = "";
    for (let i = 1; i <= NUMBER_OF_STARTS; i++) {
        for (let j = 1; j <= i; j++){
            result += "*";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
function bottomRight() {
    let result = "";
    for (let i = 1; i <= NUMBER_OF_STARTS; i++) {
        for (let j = 1; j <= NUMBER_OF_STARTS - i; j++){
            result += "&nbsp";
        }
        for (let k = 1; k <= i; k++){
            result += "*";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
function topLeft() {
    let result = "";
    for (let i = NUMBER_OF_STARTS; i >= 1; i--) {
        for (let j = 1; j <= i; j++){
            result += "*";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
function topRight() {
    let result = "";
    for (let i = NUMBER_OF_STARTS; i >= 1; i--) {
        for (let j = 1; j <= NUMBER_OF_STARTS - i; j++){
            result += "&nbsp";
        }
        for (let k = 1; k <= i; k++){
            result += "*";
        }
        result += "<br>";
    }
    document.getElementById("result").innerHTML = result;
}
