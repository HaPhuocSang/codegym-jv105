function checkNumber(txt) {
    return !isNaN(Number(txt));
}

function showResult() {
    let txt = document.getElementById("txtValue").value;
    document.getElementById("result").textContent = checkNumber(txt) ? "Là ký tự số!" : "Không phải ký tự số";
}
