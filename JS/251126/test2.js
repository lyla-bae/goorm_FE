// // 1. 아래 Promise chaining 방식을 async, await로 작성하세요

// // fetch("https://jsonplaceholder.typicode.com/posts/1")
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     console.log(data);
// //   });

// async function test1() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//   console.log(data);
// }
// test1();

// 2.  아래 Promise chaining 방식을 async, await로 작성하세요

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

async function test2() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  console.log(data);
}
