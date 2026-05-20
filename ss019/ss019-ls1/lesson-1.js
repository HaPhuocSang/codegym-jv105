class Apple {
    constructor() {
        this.weight = 10;
    }

    getWeight() {
        return this.weight;
    }

    isEmpty() {
        return !this.weight;
    }

    decrease() {
        if (!this.isEmpty()) {
            this.weight--;
        } else {
            alert("Táo đã hết!");
        }
    }
}

class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender ? "Nam" : "Nữ";
        this.weight = Number(weight);
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    say(string) {
        return `${this.name}: ${string}`;
    }

    checkApple(apple) {
        return apple.isEmpty() ? "Táo đã hết!" : "Táo vẫn còn!";
    }

    eatApple(apple, human) {
        if (!apple.isEmpty()) {
            this.weight++;
            apple.decrease();
            return `${this.name}: đã ăn táo! ${human.name} hãy ăn đi!`;
        } else {
            return `${this.name}: Táo đã ăn hết! Chúng ta hãy rời đi!`
        }
    }

    setGender(gender) {
        this.gender = gender;
    }

    isMale() {
        return this.gender;
    }
}

function checkNumber(number) {
    return number.trim() && Number.isInteger(Number(number)) && Number(number) > 0;
}

function showResult() {
    let adamWeight = document.getElementById("adamWeight").value;
    let evaWeight = document.getElementById("evaWeight").value
    let output = document.getElementById("result");
    if (!checkNumber(adamWeight) || !checkNumber(evaWeight)) {
        output.textContent = "Cân nặng là số nguyên dương!";
        return;
    }
    let apple = new Apple();
    let adam = new Human("Adam", true, adamWeight);
    let eva = new Human("Eva", false, evaWeight);
    output.textContent = "";
    output.style.whiteSpace = "pre-line";
    while (!apple.isEmpty()) {
        output.textContent += `${adam.eatApple(apple, eva)}\n`;
        output.textContent += `${eva.eatApple(apple, adam)}\n`;
    }
    output.textContent += `Trọng lượng của táo bây giờ: ${apple.getWeight()}\n`;
    output.textContent += `Trọng lượng của Adam bây giờ: ${adam.getWeight()}\n`;
    output.textContent += `Trọng lượng của Eva bây giờ: ${eva.getWeight()}`;
}
