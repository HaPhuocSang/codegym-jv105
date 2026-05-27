class Student {
    constructor(id, name, className, email, birthday, module) {
        this.id = id;
        this.name = name;
        this.className = className;
        this.email = email;
        this.birthday = birthday;
        this.module = module;
    }

    setStudent(student) {
        this.id = student.id;
        this.name = student.name;
        this.className = student.className;
        this.email = student.email;
        this.birthday = student.birthday;
        this.module = student.module;
    }
}

class StudentManager {
    constructor() {
        this.students = [];
    }

    add(student) {
        this.students.push(student);
    }

    edit(index, newStudent) {
        this.students[index].setStudent(newStudent);
    }

    delete(index) {
        this.students.splice(index, 1);
    }

    display() {
        let tbody = document.querySelector("#studentList");
        tbody.innerHTML = this.students.map((student) => `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td> 
                <td>${student.className}</td>
                <td>${student.email}</td>
                <td>${student.birthday}</td>
                <td>${student.module}</td>
            </tr>
        `).join("");
    }
}

const studentManager = new StudentManager();
studentManager.add(new Student("HV-0001", "Nguyễn Văn A", "C1022G1", "nguyenvana@gmail.com", "01/01/2004", 1));
studentManager.add(new Student("HV-0002", "Nguyễn Văn B", "C1122G1", "nguyenvanb@gmail.com", "02/02/2004", 1));
studentManager.add(new Student("HV-0003", "Nguyễn Thị C", "C1222G1", "nguyenthic@gmail.com", "03/03/2004", 1));
studentManager.display();

function checkId(id) {
    let regex = /^HV-\d{4}$/;
    return regex.test(id);
}

function checkBirthday(date) {
    let regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(date)) {
        return false;
    }
    let [, day, month, year] = date.match(regex);
    day = Number(day);
    month = Number(month);
    year = Number(year);
    let birthday = new Date(year, month - 1, day);
    return (
        birthday.getDate() === day &&
        birthday.getMonth() === month - 1 &&
        birthday.getFullYear() === year
    );
}

function inputValidate(message, validateFn) {
    let value;
    do {
        value = prompt(message);
        if (value === null) {
            return null;
        }
        value = value.trim();

        if (!validateFn(value)) {
            alert("Giá trị không hợp lệ!");
        }

    } while (!validateFn(value));
    return value;
}

function validateStudentId(id) {
    return validateId(id) && validateUniqueId(id);
}

function validateId(id) {
    return checkId(id);
}

function validateUniqueId(id) {
    return !studentManager.students.some(s => s.id === id);
}

function validateName(name) {
    return name.length > 0 && name.length <= 50;
}

function validateClass(className) {
    return className.length > 0;
}

function validateEmail(email) {
    return email.length > 0;
}

function validateBirthday(date) {
    return checkBirthday(date);
}

function validateModule(module) {
    return Number.isInteger(module) && module >= 1 && module <= 6;
}

function addStudent() {
    const id = inputValidate("Nhập mã HV:", validateStudentId);
    if (id === null) {
        return;
    }
    const name = inputValidate("Nhập tên:", validateName);
    if (name === null) {
        return;
    }
    const className = inputValidate("Nhập tên lớp học:", validateClass);
    if (className === null) {
        return;
    }
    const email = inputValidate("Nhập email:", validateEmail);
    if (email === null) {
        return;
    }
    const birthday = inputValidate("Nhập ngày sinh dd/mm/yyyy:", validateBirthday);
    if (birthday === null) {
        return;
    }
    let module = inputValidate("Nhập module (1-6):", (v) => validateModule(Number(v)));
    if (module === null) {
        return;
    }
    let student = new Student(id, name, className, email, birthday, module);
    studentManager.add(student);
    studentManager.display();
}

function editStudent() {
    let id = prompt("Nhập mã học viên cần sửa:");

    let index = studentManager.students.findIndex(student => student.id === id);
    if (index === -1) {
        alert("Mã học viên không tồn tại");
        return;
    }
    const newName = inputValidate("Nhập tên mới:", validateName);
    if (newName === null) {
        return;
    }
    let newClassName = inputValidate("Nhập tên lớp học:", validateClass);
    if (newClassName === null) {
        return;
    }
    let newEmail = inputValidate("Nhập email mới:", validateEmail);
    if (newEmail === null) {
        return;
    }
    let newBirthday = inputValidate("Nhập ngày sinh dd/mm/yyyy:", validateBirthday);
    if (newBirthday === null) {
        return;
    }
    let newModule = inputValidate("Nhập module (1-6):", (v) => validateModule(Number(v)));
    if (newModule === null) {
        return;
    }
    let student = new Student(id, newName, newClassName, newEmail, newBirthday, newModule);
    studentManager.edit(index, student);
    studentManager.display();
}

function deleteStudent() {
    let id = prompt("Nhập mã cần xóa:");
    let indexStudent = studentManager.students.findIndex(student => student.id === id);
    if (indexStudent === -1) {
        alert("Mã học viên không tồn tại");
        return;
    }
    let confirmDelete = confirm(
        "Bạn có muốn xóa?"
    );
    if (confirmDelete) {
        studentManager.delete(indexStudent);
    }
    studentManager.display();
}
