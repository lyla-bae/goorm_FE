import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar/index";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [memos, setMemos] = useState([
    {
      title: "memo 1",
      content: "memo 1 content",
      createAt: 1743920753833, // 시간 값 (생성 시간) new Date().getTime()
      updateAt: 1743920753833, // 시간 값 (수정 시간)
    },
    {
      title: "memo 2",
      content: "memo 2 content",
      createAt: 1743920753833, // 시간 값 (생성 시간) new Date().getTime()
      updateAt: 1743920753833, // 시간 값 (수정 시간)
    },
  ]);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);

  const handleMemoChange = (newMemo) => {
    const newMemos = [...memos];
    newMemos[selectedMemoIndex] = newMemo;
    setMemos(newMemos);
  };

  const handleAddMemo = () => {
    const now = new Date().getTime();
    const newMemo = {
      title: "Untitled",
      content: "",
      createAt: now,
      updateAt: now,
    };
    setMemos([...memos, newMemo]);
    // 여기서 memos state가 업데이트하기 전이니 memos.length를 사용하는거죠
    setSelectedMemoIndex(memos.length);
  };

  const handleDeleteMemo = (deleteMemoIndex) => {
    const newMemo = memos.filter((memo, index) => index !== deleteMemoIndex);
    setMemos(newMemo);

    // 삭제한 메모가 현재 선택된 메모라면, 선택된 메모 인덱스를 0으로 설정
    if (deleteMemoIndex === selectedMemoIndex) {
      setSelectedMemoIndex(0);
    } else if (deleteMemoIndex < selectedMemoIndex) {
      // 삭제한 메모가 현재 선택된 메모보다 앞에 있다면, 선택된 메모 인덱스를 1 감소
      setSelectedMemoIndex(selectedMemoIndex - 1);
    }
  };

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onAddMemo={handleAddMemo}
        onMemoDeleteClick={handleDeleteMemo}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  );
}
