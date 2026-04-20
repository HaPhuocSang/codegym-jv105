let selectedCheckInteger = document.getElementById("checkInter");
selectedCheckInteger.addEventListener("click", showCheckInteger);
function showCheckInteger(){
    let results;
    let numberIr = parseFloat(document.getElementById("numberInter").value);
    if (!isNaN(numberIr)){
        if(Number.isInteger(numberIr)){
            if(numberIr > 0){
                results = numberIr + " is a positive integer.";
            }
            else {
                results = numberIr + " is a negative integer.";
            }
        }
        else{
            results = numberIr + " is not an integer.";
        }
    }
    else {
        results = "Input number.";
    }
    document.getElementById("result").innerHTML = results;
}