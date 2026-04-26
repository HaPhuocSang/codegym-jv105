let selectedLoop = document.getElementById('btnLoop');
selectedLoop.addEventListener('click', displayLoop);

function displayLoop() {
    let disLoop = "";
    for (let i = 1; i < 100; i++) {
        disLoop += i + " ";
        if (i === 99){
            alert("Đã hoàn thành!");
        }
    }
    document.getElementById("result").innerHTML = disLoop;
}

