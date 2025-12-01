import { useState } from "react";
import "./App.css";

// App.jsx

export default function App() {
  //최종 넘버
  const [number, setNumber] = useState(0);

  // 커스텀 넘버
  const [increaseNumber, setIncreaseNumber] = useState(0);

  function inputVal(e) {
    const value = e.target.value;
    const numValue = Number(value);

    // 빈 문자열이 아니고, NaN이 아닐 때만 설정
    if (value.trim() !== "" && !isNaN(numValue)) {
      setIncreaseNumber(numValue);
    }
  }
  return (
    <main>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
        }}
      >
        +1
      </button>
      <br />
      <input type="text" placeholder="숫자만 적으세요" onChange={inputVal} />
      <br />
      <button
        onClick={() => {
          setNumber((i) => i + increaseNumber);
        }}
      >
        + {increaseNumber}
      </button>
    </main>
  );
}
