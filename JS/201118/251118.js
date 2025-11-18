// function unique(arr) {
//   /* 제출 답안 */
//   new Set(arr);
//   return Array.from(new Set(arr));
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(values)); // 출력 결과로 `Hare, Krishna, :-O` 만 출력되어야 합니다.

// // 문제2
// const array1 = [1, 2, 3, 4, 5];

// // 아래 출력 결과처럼 나오도록 코드를 작성하세요.
// let summOdd = array1.reduce((summ, current) => {
//   if (current % 2 !== 0) return summ + current;
//   else return summ;
// }, 0);

// console.log(summOdd); // 9

// 문제3
// 1. 메뉴 주문 받기
// - foods 메뉴를 prompt 를 활용하여 1개 입력 받습니다.
//     - foods 에 있는 메뉴여야 drink 를 선택할 수 있습니다.
//     - foods 에 없다면 “그런 메뉴 없습니다.” 를 띄워주세요.
// - drinks 메뉴를 1개 입력 받습니다.
//     - drinks 에 있는 메뉴라면 “(선택한메뉴)와/과 (선택한음료)를 준비해드리겠습니다” 를 띄우세요
//     - drinks 에 없다면 “그런 음료 없습니다.” 를 띄워주세요.

// const foods = ["비빔밥", "칼국수", "라면", "쌀국수"];
// const drinks = ["제로콜라", "일반콜라", "맥주"];

// // 주문은 Foods -> Drinks 순서로 받습니다.

// let selectFood = prompt("음식 메뉴를 선택하세요: 비빔밥, 칼국수, 라면, 쌀국수");
// if (foods.includes(selectFood)) {
//   let selectDrink = prompt("음료 메뉴를 선택하세요: 제로콜라, 일반콜라, 맥주");
//   if (drinks.includes(selectDrink)) {
//     alert(`${selectFood}와/과 ${selectDrink}를 준비해드리겠습니다.`);
//   } else {
//     alert("그런 음료 없습니다.");
//   }
// } else {
//   alert("그런 메뉴 없습니다.");
// }

// 문제4
// 주어진 배열에서 짝수만 골라 새로운 배열을 반환하는 함수를 작성하세요.
function evenNumber(arr) {
  // 이곳에 코드를 작성해 주세요.
  return arr.filter((num) => num % 2 === 0);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

evenNumber(arr1); // [2, 4, 6, 8, 10]
