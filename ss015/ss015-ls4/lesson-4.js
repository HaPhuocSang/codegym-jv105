function countCharacters() {
    let txtValue = document.getElementById("textValue").value;
    if (!txtValue.length) {
        alert("Bạn chưa nhập ký tự!");
        return;
    }
    txtValue = txtValue.trim().replace(/\s+/g,"");
    let result = txtValue.split("");
    let txt = `Số lượng ký tự trong chuỗi là ${result.length}`;
    if (!result.length) {
        txt = "Không có ký tự nào trong chuỗi bạn vừa nhập!";
    }
    document.getElementById("result").textContent = txt;
}
