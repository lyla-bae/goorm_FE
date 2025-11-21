// 문제1
// // User 클래스를 만들고, name과 age를 프로퍼티로 가지게 해주세요.
// // 그리고 introduce() 메서드를 만들어
// // "안녕하세요, 저는 ${name}이고, ${age}살입니다." 를 출력하게 해주세요.

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   introduce() {
//     console.log(`안녕하세요, 저는 ${this.name}이고, ${this.age}살입니다.`);
//   }
// }

// // 예시 출력
// const user = new User("mandoo", 2);
// user.introduce();
// // "안녕하세요, 저는 mandoo이고, 2살입니다."

// 문제2
// 부모 클래스 Employee는 name과 salary를 가집니다.
// 이를 상속받는 Manager 클래스는 department를 추가하고,
// getInfo() 메서드로 "홍길동 (인사팀) - 연봉 5000만원" 형식으로 출력하도록 하세요.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  getInfo() {
    console.log(`${this.name} (${this.department}) - 연봉 ${this.salary}만원`);
  }
}

const manager = new Manager("홍길동", 5000, "인사팀");
manager.getInfo(); // 홍길동 (인사팀) - 연봉 5000만원
