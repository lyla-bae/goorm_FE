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
  isSidebarOpen,
  toggleSidebar,
}) {
  return (
    <div className={`SideBar ${isSidebarOpen ? "open" : "closed"}`}>
      <SideBarHeader toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
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
