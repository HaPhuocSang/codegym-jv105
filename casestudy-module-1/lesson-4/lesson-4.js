function findTheCommonDivisor(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function find(x) {
    let arr = x.split("/");
    if (arr.length !== 2) {
        return "Không phải là phân số!";
    }
    let numerator = Number(arr[0]);
    let denominator = Number(arr[1]);

    if (isNaN(numerator) || isNaN(denominator) || !denominator) {
        return "Không phải là phân số";
    }
    if (!numerator) {
        return "0";
    }
    let commonAgreement = findTheCommonDivisor(numerator,denominator);
    numerator /= commonAgreement;
    denominator /= commonAgreement;
    return `${numerator}/${denominator}`;
}

function showResult() {
    let fractionValue = document.getElementById("fractionValue").value;
    if (!fractionValue) {
        alert("Vui lòng nhập giá trị hợp lệ! dạng: (a/b)!");
        return;
    }
    document.getElementById("result").textContent = find(fractionValue);
}
