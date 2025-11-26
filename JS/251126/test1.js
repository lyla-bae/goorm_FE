function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const users = {
        1: { name: "Alice", age: 25 },
        2: { name: "Bob", age: 30 },
        3: { name: "Charlie", age: 35 },
      };

      // 이곳에 코드를 작성하세요.
      if (users[userId]) {
        resolve(users[userId]);
      } else {
        reject("❌ 유효하지 않은 사용자 ID입니다.");
      }
    }, 2000);
  });
}

// 실행 코드
fetchUserData(1)
  .then((user) => console.log("✅ 사용자 정보:", user))
  .catch((error) => console.error(error));
// 출력 결과 : ✅ 사용자 정보: {name: 'Alice', age: 25}

fetchUserData(0)
  .then((user) => console.log("✅ 사용자 정보:", user))
  .catch((error) => console.error(error));
// ❌ 유효하지 않은 사용자 ID입니다.
