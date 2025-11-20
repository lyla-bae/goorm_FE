// ㅁ문제1
// 1. 인자로 전달된 숫자들을 모두 받아 평균을 구하는 함수를 작성하세요.
// 단, 인자가 하나도 없을 경우 "값이 없습니다"를 출력해야 합니다.

// // 예시 입력
average(10, 20, 30, 40);
average();

function average(...numbers) {
  if (numbers.length === 0) {
    return console.log("값이 없습니다");
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0); //누적값
  const avg = sum / numbers.length; //평균값
  console.log(avg);
}

// // 예시 출력
// // 25
// // "값이 없습니다"

// ----------------------
// 문제2
// 1. 두 개의 객체를 받아 **user 기본 정보**와 **추가 정보**를 합쳐 새로운 객체를 만들어 반환하세요.
// 단, 중복되는 키가 있을 경우 두 번째 객체의 값이 우선합니다.

// 예시 입력
// const base = { id: 1, name: "Lisa", age: 23 };
// const extra = { age: 24, country: "Korea" };

// mergeUser(base, extra);

// function mergeUser(user, info) {
//   const merged = { ...user, ...info };
//   console.log(merged);
// }

// 예시 출력
// { id: 1, name: "Lisa", age: 24, country: "Korea" }

// ----------------------

// 문제3
// 아래 배열에서 가장 큰 값을 구하세요. 만약, 빈 배열일 경우 null을 반환해야합니다.

// 예시 입력
// const scores = [85, 92, 88, 100, 76];
// maxValue(scores);

// // 예시 출력
// // 100

// function maxValue(arr) {
//   if (arr.length === 0) {
//     return console.log(null);
//   }
//   console.log(Math.max(...scores));
// }
