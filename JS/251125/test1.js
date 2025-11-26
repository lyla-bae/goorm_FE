// console.log("Start!");

// setTimeout(() => {
//   console.log("Timeout!");
// }, 0);

// Promise.resolve("Promise!").then((res) => console.log(res));

// console.log("End!");

function fetchData(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`결과 ${id}`), 1000 - id * 200);
  });
}

fetchData(1).then(console.log);
fetchData(2).then(console.log);
fetchData(3).then(console.log);
