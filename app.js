class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class student extends person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}

let student1 = new student("John", 20, "A");
console.log(student1.name); // John
console.log(student1.age); // 20
console.log(student1.grade); // A
student1.eat(); // John is eating
student1.sleep(); // John is sleeping
student1.study(); // John is studying