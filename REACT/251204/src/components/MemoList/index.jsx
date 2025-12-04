import MemoItem from "../MemoItem";

export default function MemoList({
  memos,
  selectedMemoIndex,
  setSelectedMemoIndex,
  onMemoDeleteClick,
}) {
  return (
    <div>
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          onMemoItemClick={() => setSelectedMemoIndex(index)}
          isSelected={selectedMemoIndex === index}
          onMemoDeleteClick={(e) => {
            onMemoDeleteClick(index);
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          {memo.title}
        </MemoItem>
      ))}
    </div>
  );
}
