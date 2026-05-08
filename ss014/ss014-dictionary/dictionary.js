const ENGLISH_WORDS = ["hello", "book", "computer", "apple", "school"];
const VIETNAMESE_WORDS = ["xin chào", "quyển sách", "máy tính", "quả táo", "trường học"];

function showVietnameseWord() {
    let englishWord = document.getElementById("englishWord").value;
    if (englishWord.length === 0) {
        alert("Bạn chưa nhập từ tiếng anh!");
        return;
    }
    englishWord = englishWord.toLowerCase();
    let result;
    if (ENGLISH_WORDS.indexOf(englishWord) !== -1) {
        result = VIETNAMESE_WORDS[ENGLISH_WORDS.indexOf(englishWord)];
    } else {
        result = "Không tìm thấy!";
    }
    document.getElementById("result").textContent = result;
}
