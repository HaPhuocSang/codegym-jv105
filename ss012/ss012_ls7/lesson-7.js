let displayNumberSequence = "";
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        displayNumberSequence += "FizzBuzz" + " ";
    } else if (i % 3 === 0) {
        displayNumberSequence += "Fizz" + " ";
    } else if (i % 5 === 0) {
        displayNumberSequence += "Buzz" + " ";
    } else {
        displayNumberSequence += i + " ";
    }
}
document.getElementById("result").innerHTML = displayNumberSequence;