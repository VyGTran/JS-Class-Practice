// Exercise 1
console.groupCollapsed('Exercise 1');

    function globalFun() {
    console.log(this);
    }
    const objThis = {
    firstName: 'Vy',
    lastName: 'Tran',
    fullName: function() {
        console.log(this);
    }
    }
    const objArrowFun = {
    arrFun: () => {
        console.log(this)
    }
    }

    globalFun();
    objThis.fullName();
    objArrowFun.arrFun();
console.groupEnd();

// Exercise 2 and 3
console.groupCollapsed('Exercise 2 and 3');
    class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${this.name} says: ${phrase}`);
    }
    // exercise 4 method
    static(text) {
        console.log(`${text}`);
    }
    // exercise 5 getters and setters
    get getterAge() {
        return `${this.age}`
    }
    set newAge(newAge2) {
        if (this.age > 0) {
            console.log(newAge2);
        } else {
            console.log('Age cannot be negative');
        }
    }
    }
    const Vy = new Person("Vy",18);
    Vy.greet('What up');

    const Ian = new Person("Ian",17);
    Ian.greet('Sup');

    console.log(Vy);
    console.log(Ian);
console.groupEnd();

// Exercise 4
console.groupCollapsed("Exercise 4")
const classGreeting = new Person(NaN);
classGreeting.static("This is a Person class")
console.groupEnd()

// Exercise 5
console.groupCollapsed('Exercise 5');
    const newAgeLog = new Person();
    newAgeLog.newAge = -1;
console.groupEnd();
// Exercise 7
console.groupCollapsed("Exercise 7")
class Student {
    constructor (name) {
        this.name = name;
        this.grades = [];
    }
    addGrade(grade) {
        this.grades.push(grade);
    }
    computeAverage() {
        if (this.grades.length === 0) {
            return 0;
        } else {
            const total = this.grades.reduce((sum, grade) => sum + grade, 0);
            return total / this.grades.length;
        }
    }
}
const studentTotal = new Student("Vy");
studentTotal.addGrade(100);
studentTotal.addGrade(94);
studentTotal.addGrade(85);
studentTotal.addGrade(92);

const averageGrade = studentTotal.computeAverage();
console.log(`${studentTotal.name}'s average grade is: ${averageGrade}`);
console.groupEnd();