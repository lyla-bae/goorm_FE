// 문제1
// let myFish = ["angel", "clown", "drum", "sturgeon"];

// // 여기에 1번 코드를 입력하세요.
// let newMyFish = myFish.splice(1, 2, "trumpet", "guitar");

// // 새로 추가된 배열을 콘솔에 출력하세요. 출력 : ['angel', 'trumpet', 'guitar', 'sturgeon']
// console.log(myFish);

// // 제거된 요소를 콘솔에 출력하세요. 출력 : ['clown', 'drum']
// console.log(newMyFish);

// // 문제2
// let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// // 여기에 1번 코드를 적어주세요.

// let citrus = fruits.slice(1, 3);

// // 콘솔에 출력하면 예상 결과 : [’Orange’, ‘Lemon’]
// console.log(citrus);

// 문제3
const items = ["item1", "item2", "item3"];
const copyItems = [];

// 전
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }

// 여기에 1번 코드를 작성해주세요.
items.forEach(function (item) {
  copyItems.push(item);
});

// 콘솔에 출력하면 예상 결과 : [‘item1’, ‘item2’, ‘item3’]
console.log(copyItems);
