// 아래 board 객체에 게시글을 추가, 삭제, 조회하는 메서드를 구현하여 게시판 시스템을 만들어주세요.

const board = {
  posts: [],

  // 여기에 addPost, removePost, showPosts 메서드를 추가하세요.
  addPost(content) {
    this.posts.push(content);
    console.log(`게시글 추가: ${content}`);
  },
  removePost(index) {
    if (index < 1 || index > this.posts.length) {
      console.log("유효하지 않은 게시글 번호입니다.");
      return;
    }
    const removedPost = this.posts.splice(index - 1, 1);
    console.log(`게시글 삭제: ${removedPost}`);
  },
  showPosts() {
    this.posts.forEach((post, idx) => {
      console.log(`${idx + 1}. ${post}`);
    });
  },
};

// 실행 예시
board.addPost("오늘의 점심은 김치찌개!");
board.addPost("자바스크립트 공부 중 🖥️");

board.showPosts();
// 출력:
// 📌 현재 게시글 목록:
// 1. 오늘의 점심은 김치찌개!
// 2. 자바스크립트 공부 중 🖥️

board.removePost(1);
// 출력:
// 게시글 삭제: 오늘의 점심은 김치찌개!

board.showPosts();
// 출력:
// 📌 현재 게시글 목록:
// 1. 자바스크립트 공부 중 🖥️
