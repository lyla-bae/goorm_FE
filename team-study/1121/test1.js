class Students {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  sayHi() {
    console.log(`안녕 나는 ${this.name}이야`);
  }
}
const students1 = new Students("Kim", 20);
students1.sayHi();
