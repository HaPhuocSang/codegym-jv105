let characterList = [];

function pushArray(string) {
    characterList = string.split(',');
    return characterList;
}

function convertAStringToAnArray() {
    let character;
    do {
        character = prompt("Nhập chuỗi: ");
        if (!character.trim().length) {
            alert("Bạn chưa nhập chuỗi!");
        }
    } while (!character.trim().length);
    pushArray(character);
    document.getElementById("resultFirst").textContent = `Mảng có giá trị là: ${characterList.join(", ")}`;
}

function countString(array, char) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === char) {
            count++;
        }
    }
    if (!count) {
        count = -1;
    }
    return count;
}

function showResult() {
    if (!characterList.length) {
        alert("Bạn chưa khởi tạo mảng!");
        return;
    }
    let char;
    do {
        char = prompt("Nhập ký tự muốn đếm: ");
        if (!char.trim().length) {
            alert("Bạn chưa nhập ký tự!");
        }
    } while (!char.trim().length);
    document.getElementById("resultSecond").textContent = countString(characterList, char) > -1 ? `Có ${countString(characterList, char)} ký tự ${char} trong mảng!` : `Không có ký tự ${char} trong mảng!`;
}
