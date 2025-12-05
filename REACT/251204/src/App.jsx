import MemoContainer from "./components/MemoContainer";
import SideBar from "./components/SideBar/index";
import "./App.css";
import { useCallback, useState } from "react";
import { localStorageSetItem } from "./lib/storage";

function initMemosGetItem() {
  return JSON.parse(localStorage.getItem("memos")) || [];
}

export default function App() {
  const [memos, setMemos] = useState(initMemosGetItem);
  const [selectedMemoIndex, setSelectedMemoIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleMemoChange = useCallback(
    (newMemo) => {
      setMemos((prevMemos) => {
        const newMemos = [...prevMemos];
        newMemos[selectedMemoIndex] = newMemo;
        localStorageSetItem("memos", newMemos);
        return newMemos;
      });
    },
    [selectedMemoIndex]
  );

  // 얜 굳이 바꿀 필요 없음
  const handleAddMemo = useCallback(() => {
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

    localStorageSetItem("memos", [...memos, newMemo]);
  }, [memos]);

  const handleDeleteMemo = useCallback(
    (deleteMemoIndex) => {
      setMemos((prevMemos) => {
        const newMemos = [...prevMemos];
        newMemos.splice(deleteMemoIndex, 1);
        localStorageSetItem("memos", newMemos);
        return newMemos;
      });

      // 삭제한 메모가 현재 선택된 메모라면, 선택된 메모 인덱스를 0으로 설정
      if (deleteMemoIndex === selectedMemoIndex) {
        setSelectedMemoIndex(0);
      } else if (deleteMemoIndex < selectedMemoIndex) {
        // 삭제한 메모가 현재 선택된 메모보다 앞에 있다면, 선택된 메모 인덱스를 1 감소
        setSelectedMemoIndex(selectedMemoIndex - 1);
      }
    },
    [selectedMemoIndex]
  );

  return (
    <div className="App">
      <SideBar
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onAddMemo={handleAddMemo}
        onMemoDeleteClick={handleDeleteMemo}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <MemoContainer
        memo={memos[selectedMemoIndex]}
        onMemoChange={handleMemoChange}
      />
    </div>
  );
}
