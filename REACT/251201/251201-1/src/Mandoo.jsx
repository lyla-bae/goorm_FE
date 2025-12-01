// Mandoo.jsx

import MandooImg from "./assets/mandoo.png";
export default function Mandoo({ width }) {
  return (
    // 만두 이미지 출력 컴포넌트
    // 만두 이미지 width 값을 props 로 받아와주세요
    // 요구사항에서 받아온 width 값은 100 입니다
    <>
      <img src={MandooImg} alt={MandooImg} style={{ width: `${width}` }} />
    </>
  );
}
