// // const hello = fetch("https://codingapple1.github.io/hello.txt")
// //   .then((res) => res.json())
// //   .then((json) => console.log(json));

// fetch("https://codingapple1.github.io/js/more1.json")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

fetch("https://codingapple1.github.io/js/more1.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((item, i) => {
      console.log(item.price);
    });
  });
