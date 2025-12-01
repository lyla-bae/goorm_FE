// App.jsx
import "./app.css";
import Mandoo from "./Mandoo";

// 아래 todos 리스트를 만두 이미지 아래에 뿌려주세요
const mandooTodoLists = {
  todos: ["간식 먹기", "화분 돌 다 꺼내기", "공유기 위에서 자기"],
};

//map함수로 리스트뿌리기
const list = mandooTodoLists.todos.map((todo, i) => {
  return <li key={i}>{todo}</li>;
});

export default function App() {
  return (
    <main style={{ padding: "20px" }}>
      <h3>Mandoo Todo</h3>
      <Mandoo width={"100px"} />
      <ul>{list}</ul>
    </main>
  );
}
