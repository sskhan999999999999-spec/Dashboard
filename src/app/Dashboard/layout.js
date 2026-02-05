


import Navbar from "../components/Navbar";
import SideBar from "../components/Sidebar";

export default function PageLayout({ children }) {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Navbar at the top */}
      <div className="shadow-sm z-10">
        <Navbar />
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1">
        {/* Sidebar fixed width */}
          <SideBar/>
        {/* Main content fills remaining space */}
        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
