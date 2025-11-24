// const pet = {
//   name: "Coco",
//   introduce: function () {
//     const sayName = () => {
//       console.log(this.name);
//     };
//     sayName();
//   },
// };

// pet.introduce(); // 결과는?

const user = {
  name: "Alice",
  sayHi: function () {
    setTimeout(function () {
      //   console.log(`안녕! 나는 ${this.name}야.`);
      console.log(this);
    }, 1000);
  },
};

user.sayHi(); // 결과는?
// setTimeout 내부의 함수에서 this는 전역 객체 window를 가리키므로 undefined가 출력됩니다.
// 이를 해결하려면 화살표 함수를 사용하거나, this를 변수에 저장하는 방법이 있습니다.
// 수정된 코드 예시:
// const user = {
//   name: "Alice",
//   sayHi: function () {
//     setTimeout(() => {
//       console.log(`안녕! 나는 ${this.name}야.`);
//     }, 1000);
//   }
// };

// user.sayHi(); // 이제 "안녕! 나는 Alice야."가 출력됩니다.
