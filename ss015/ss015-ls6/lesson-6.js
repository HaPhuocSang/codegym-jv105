function replaceCharacters() {
    let txtValue = document.getElementById("textValue").value;
    txtValue =txtValue.trim();
    if (!txtValue.length) {
        alert("Bạn chưa nhập chuỗi!");
        return;
    }
    let txt;
    if (txtValue.indexOf("-") === -1) {
        txt = "Không có dấu - trong chuỗi!";
    } else {
        txtValue = txtValue.replace(/-/g,"_");
        txt = `Chuỗi sau khi chuyển đỗi là ${txtValue}`;
    }
    document.getElementById("result").textContent = txt;
}
