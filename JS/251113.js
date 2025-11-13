// // 90 ~ 100 : A
// // 80 ~ 89: B
// // 70 ~ 79: C
// // 60 ~ 69: D
// // 60 미만: F

// function getGrade(score) {
//   if (score >= 90) {
//     return 'A';
//   } else if (score >= 80) {
//     return 'B';
//   } else if (score >= 70) {
//     return 'C';
//   } else if (score >= 60) {
//     return 'D';
//   } else {
//     return 'F';
//   }
// }

// function getGrade(score) {
//   switch (true) {
//     case score >= 90:
//       return 'A';
//       //braek는 retun넣으면 어짜피 종료되기때문에 넣지않았다.
//     case score >= 80:
//       return 'B';
//     case score >= 70:
//       return 'C';
//     case score >= 60:
//       return 'D';
//     default:
//       return 'F';
//   }
// }

function getGrade(score) {
  return score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
}

const result1 = getGrade(85);
const result2 = getGrade(65);

console.log(result1); // 출력 결과: 'B'
console.log(result2); // 출력 결과: 'D'

// let cat = {name: 'gimchi', dislike: 'hospital'}

// // 이 부분에 코드를 작성하세요.
// cat.name = 'mandoo';
// delete cat.dislike;
// cat.age = 2;
// cat.like = 'tuna';

// // 출력 결과
// console.log(cat.name) // mandoo
// console.log(cat) // {name: 'mandoo', age: 2, like: 'tuna'}
