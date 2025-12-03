// // 문제1
// import { useRef, useEffect } from "react";

// export default function AutoFocusInput() {
//   // TODO: useRef로 input 엘리먼트를 참조하세요.
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // TODO: 컴포넌트가 처음 렌더링될 때 input에 포커스 주세요.
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <h2>자동 포커스 Input</h2>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="여기에 자동 포커스가 와야 합니다"
//       />
//     </div>
//   );
// }

// // 문제2
// import { useState, useRef, useEffect } from "react";

// export default function RenderCount() {
//   const [count, setCount] = useState(0);
//   // TODO: 이전 count를 저장할 useRef 변수를 만드세요.
//   const prevCount = useRef(null);

//   const handleClick = () => {
//     setCount((prev) => prev + 1);
//     // TODO: 클릭할 때마다 이전 count를 ref에 저장하세요.
//   };

//   // TODO: 렌더링 때마다 이전 값과 현재 값을 출력하세요.
//   useEffect(() => {
//     prevCount.current = count;
//   });

//   return (
//     <div>
//       <h2>이전 값 기억하기</h2>
//       <p>현재 값: {count}</p>
//       <p>이전 값: {prevCount.current}</p>
//       <button onClick={handleClick}>+1</button>
//     </div>
//   );
// }

// // 문제3
// import { useRef, useState } from "react";

// export default function Timer() {
//   const [time, setTime] = useState(0);
//   // TODO: interval ID를 저장할 useRef를 만드세요.
//   const [now, setNow] = useState(0);
//   const intervalId = useRef(null);

//   const startTimer = () => {
//     // TODO: 이미 실행 중이면 중복 실행되지 않게 조건 추가
//     if (intervalId.current !== null) return;

//     // setInterval을 실행하고 interval ID를 ref에 저장
//     setTime(Date.now());
//     setNow(Date.now());

//     intervalId.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   };

//   const stopTimer = () => {
//     // TODO: ref에 저장된 interval ID로 clearInterval 실행
//     clearInterval(intervalId.current);
//     intervalId.current = null;
//   };

//   // 경과 시간을 초 단위로 계산
//   const elapsedTime = ((now - time) / 1000).toFixed(2);

//   return (
//     <div>
//       <h2>타이머 제어하기</h2>
//       <p>⏰ {elapsedTime}초</p>
//       <button onClick={startTimer}>시작</button>
//       <button onClick={stopTimer}>정지</button>
//     </div>
//   );
// }

// // 문제4
// import { useEffect, useState } from "react";

// export default function EffectWithoutDeps() {
//   const [count, setCount] = useState(0);

//   // 1️⃣ 의존성 배열 없음
//   useEffect(() => {
//     console.log("매 렌더링마다 실행!");
//   });

//   // 2️⃣ 빈 배열
//   useEffect(() => {
//     console.log("처음 1회만 실행!");
//   }, []);

//   // 3️⃣ 특정 값(count)이 바뀔 때
//   useEffect(() => {
//     console.log(`count 값이 ${count}로 바뀔 때만 실행!`);
//   }, [count]);

//   return (
//     <div>
//       <h2>useEffect 기본 실행 시점</h2>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//     </div>
//   );
// }

// // 문제5
// import { useState, useEffect } from "react";

// export default function InfiniteLoopExample() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     setNum(num + 1);
//   }, []); //의존성배열 []을 붙여 한번만 렌더링

//   return (
//     <div>
//       <h2>버그 찾기</h2>
//       <p>{num}</p>
//     </div>
//   );
// }

// 문제6
import { useEffect, useState } from "react";

export default function TimerExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // TODO: 타이머가 중복 실행되지 않도록 해주세요
    return () => clearInterval(timer); //Strict Mode때문에 2번 실행되서 클린업함수 돌리면됨
  }, []);

  return (
    <div>
      <h2>타이머 중복 실행 문제 해결하기</h2>
      <p>⏰ {count}초 경과</p>
    </div>
  );
}
