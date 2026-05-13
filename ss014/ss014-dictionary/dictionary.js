const ENGLISH_WORDS = ["hello", "book", "computer", "apple", "school"];
const VIETNAMESE_WORDS = ["xin chào", "quyển sách", "máy tính", "quả táo", "trường học"];

function showVietnameseWord() {
    let englishWord = document.getElementById("englishWord").value;
    if (!englishWord.length) {
        alert("Bạn chưa nhập từ tiếng anh!");
        return;
    }
    englishWord = englishWord.toLowerCase();
    document.getElementById("result").textContent = ENGLISH_WORDS.indexOf(englishWord) !== -1 ? VIETNAMESE_WORDS[ENGLISH_WORDS.indexOf(englishWord)] :"Không tìm thấy!";
}
