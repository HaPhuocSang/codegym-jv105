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
        return "Đèn đã được bật!";
    }

    turnOff() {
        this.status = false;
        return "Đèn đã được tắt!"
    }
}

class SwitchButton {
    constructor() {
        this.status = false;
        this.lamp = [];
    }

    connectToLamp(lamp) {
        if (!this.lamp.includes(lamp.name)) {
            this.lamp.push(lamp.name);
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
        return this.lamp[0].turnOn();
    }

    switchOff() {
        if (!this.checkLamp()) {
            return "Đèn chưa được kết nối";
        }
        this.status = false;
        return this.lamp[0].turnOff();
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
