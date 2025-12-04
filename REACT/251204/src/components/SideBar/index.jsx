import MemoList from "../MemoList";
import SideBarFooter from "../SideBarFooter";
import SideBarHeader from "../SideBarHeader";
import "./index.css";

export default function SideBar({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onAddMemo,
  onMemoDeleteClick,
}) {
  return (
    <div className="SideBar">
      <SideBarHeader />
      <MemoList
        memos={memos}
        selectedMemoIndex={selectedMemoIndex}
        setSelectedMemoIndex={setSelectedMemoIndex}
        onMemoDeleteClick={onMemoDeleteClick}
      />
      <SideBarFooter onAddMemo={onAddMemo} />
    </div>
  );
}
