import "./index.css";

export default function SideBarHeader({ toggleSidebar, isSidebarOpen }) {
  return (
    <div className="SideBarHeader">
      {isSidebarOpen && "메모장 "}
      <button onClick={toggleSidebar} className="btn-toggle">
        {isSidebarOpen ? ">>" : "<<"}
      </button>
    </div>
  );
}
