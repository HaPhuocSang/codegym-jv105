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

function addStudent() {
    let id;
    do {
        id = (prompt("Nhập mã HV:")).trim();
        if (!checkId(id)) {
            alert("Mã phải dạng HV-XXXX(X là số): ");
        }
        if (studentManager.students.find(student => student.id === id)) {
            alert("Mã học viên đã tồn tại");
        }
    } while (!checkId(id) || studentManager.students.find(student => student.id === id));
    let name;
    do {
        name = (prompt("Nhập tên:")).trim();
        if (!name.length) {
            alert("Tên không được để trống!");
        }
        if (name.length > 50) {
            alert("Tên tối đa 50 ký tự");
        }
    } while (name.length > 50 || !name.length);
    let className;
    do {
        className = (prompt("Nhập lớp:")).trim();
        if (!className.length) {
            alert("Tên lớp không được để trống!");
        }
    } while (!className.length);
    let email;
    do {
        email = prompt("Nhập email:");
        if (!email.length) {
            alert("Email không được để trống!");
        }
    } while (!email.length);
    let birthday;
    do {
        birthday = prompt("Nhập ngày sinh dd/mm/yyyy:");
        if (!checkBirthday(birthday)) {
            alert("Sai định dạng ngày");
        }
    } while (!checkBirthday(birthday));
    let module;
    do {
        module = Number(prompt("Nhập module:"));
        if (!Number.isInteger(module) || module < 1 || module > 6) {
            alert("Module từ 1 -> 6");
        }
    } while (!Number.isInteger(module) || module < 1 || module > 6);
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
    let newName;
    do {
        newName = (prompt("Nhập tên mới:")).trim();
        if (!newName.length) {
            alert("Tên không được để trống!");
        }
        if (newName.length > 50) {
            alert("Tên tối đa 50 ký tự");
        }
    } while (newName.length > 50 || !newName.length);
    let newClassName;
    do {
        newClassName = (prompt("Nhập lớp mới:")).trim();
        if (!newClassName.length) {
            alert("Tên lớp không được để trống!");
        }
    } while (!newClassName.length);
    let newEmail;
    do {
        newEmail = prompt("Nhập email mới:");
        if (!newEmail.length) {
            alert("Email không được để trống!");
        }
    } while (!newEmail.length);
    let newBirthday;
    do {
        newBirthday = prompt("Nhập ngày sinh dd/mm/yyyy mới:");
        if (!checkBirthday(newBirthday)) {
            alert("Sai định dạng ngày");
        }
    } while (!checkBirthday(newBirthday));
    let newModule;
    do {
        newModule = Number(prompt("Nhập module mới:"));
        if (!Number.isInteger(newModule) || newModule < 1 || newModule > 6) {
            alert("Module từ 1 -> 6");
        }
    } while (!Number.isInteger(newModule) || newModule < 1 || newModule > 6);
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
