class ElectricLamp {
    constructor(name) {
        this.name = name;
        this.status = false;
    }

    getStatus() {
        return this.status ? "Đèn đang bật!" : "Đèn đang tắt!";
    }

    turnOn() {
        this.status = true;
        return `${this.name}: Đèn đã được bật!`;
    }

    turnOff() {
        this.status = false;
        return `${this.name}: Đèn đã được tắt!`;
    }
}

class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = [];
    }

    connectToLamp(lamp) {
        if (!this.lamp.includes(lamp)) {
            this.lamp.push(lamp);
            return "Đã kết nối!";
        }
        return `${lamp.name} đã được kết nối với công tắc!`;
    }

    getStatus() {
        return this.status ? "Công tắc đang bật!" : "Công tắc đang tắt!";
    }

    checkLamp() {
        return this.lamp.length;
    }

    switchOn() {
        if (!this.checkLamp()) {
            return "Đèn chưa được kết nối";
        }
        this.status = true;
        let result = [];
        for (let i = 0; i < this.lamp.length; i++) {
            result.push(this.lamp[i].turnOn());
        }
        return result.join("\n");
    }

    switchOff() {
        if (!this.checkLamp()) {
            return "Đèn chưa được kết nối";
        }
        this.status = false;
        let result = [];
        for (let i = 0; i < this.lamp.length; i++) {
            result.push(this.lamp[i].turnOff());
        }
        return result.join("\n");
    }
}

function showResult() {
    let lamp = new ElectricLamp("lightOne");
    let switchButton = new SwitchButton();
    let output = document.getElementById("result");
    output.style.whiteSpace = "pre-line";
    output.textContent = "";
    output.textContent += `${lamp.getStatus()}\n`;
    output.textContent += `${switchButton.getStatus()}\n`;
    output.textContent += `${switchButton.switchOn()}\n`;
    output.textContent += `${switchButton.connectToLamp(lamp)}\n`;
    output.textContent += `${switchButton.switchOn()}\n`;
    output.textContent += `${switchButton.switchOff()}`;
}
