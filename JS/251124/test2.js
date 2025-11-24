const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 75 },
  { name: "Charlie", score: 90 },
];

// 1. 모든 학생의 점수를 5점씩 올려서 updatedScores라는 새로운 배열에 담아주세요.
const updatedScores = students.map((student) => {
  return {
    ...student,
    score: student.score + 5,
  };
});

console.log(updatedScores); // 점수가 5점씩 오른 새 배열
/*
[
    { name: "Alice", score: 85 },
    { name: "Bob", score: 80 },
    { name: "Charlie", score: 95 }
    ]
    */

// 2. updatedScores를 활용해 모든 학생의 평균 점수를 계산해서 averageScore 변수에 담아주세요.
const averageScore =
  updatedScores.reduce((sum, arr) => sum + arr.score, 0) / updatedScores.length;

// 평균 점수는 반올림 해주세요.
console.log(Math.round(averageScore)); // 87
