function checkAge() {
    let age = parseFloat(document.getElementById('age').value);
    let result;
    if (isNaN(age)) {
        document.getElementById("result").innerHTML = "Please enter your age.";
        return;
    }
    if (!Number.isInteger(age)) {
        document.getElementById("result").innerHTML = "Please enter an integer.";
        return;
    }
    result = age > 0 && age < 120 ? `Your age is ${age}.` : "This is not a person's age.";
    document.getElementById("result").innerHTML = result;
}
