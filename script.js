class Student {
    constructor(name, rollNumber, grade) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.grade = grade;
    }
}

class StudentManagementSystem {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        this.displayStudents();
    }

    removeStudent(rollNumber) {
        this.students = this.students.filter(student => student.rollNumber !== rollNumber);
        this.displayStudents();
    }

    searchStudent(rollNumber) {
        return this.students.find(student => student.rollNumber === rollNumber);
    }

    displayStudents() {
        const studentList = document.getElementById('studentList');
        studentList.innerHTML = '';
        this.students.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `Name: ${student.name}, Roll Number: ${student.rollNumber}, Grade: ${student.grade}`;
            studentList.appendChild(li);
        });
    }
}

const sms = new StudentManagementSystem();

document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const rollNumber = document.getElementById('rollNumber').value;
    const grade = document.getElementById('grade').value;

    if (name && rollNumber && grade) {
        const student = new Student(name, rollNumber, grade);
        sms.addStudent(student);
        document.getElementById('studentForm').reset();
    } else {
        alert('All fields are required!');
    }
});

document.getElementById('searchButton').addEventListener('click', function() {
    const rollNumber = document.getElementById('searchInput').value;
    const result = sms.searchStudent(rollNumber);

    const searchResult = document.getElementById('searchResult');
    searchResult.innerHTML = '';

    if (result) {
        searchResult.textContent = `Name: ${result.name}, Roll Number: ${result.rollNumber}, Grade: ${result.grade}`;
    } else {
        searchResult.textContent = 'Student not found';
    }
});
