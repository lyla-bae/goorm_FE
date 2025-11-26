const cookie1 = new Promise((resolve) => {
  setTimeout(() => resolve("쿠키 A 완성! 🍪"), 2000);
});

const cookie2 = new Promise((resolve) => {
  setTimeout(() => resolve("쿠키 B 완성! 🍪"), 1000);
});

cookie1.then(console.log);
cookie2.then(console.log);
